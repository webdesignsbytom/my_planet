import xml.etree.ElementTree as ET

def parse_svg(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    
    country_data = []

    for country in root.findall('{http://www.w3.org/2000/svg}g'):
        country_id = country.attrib.get('id', 'UnknownCountry')
        country_info = {
            'id': country_id,
            'countryName': country_id,
            'posterImageUrl': 'NetherlandsPoster',  # Placeholder
            'visited': False,  # Default value
            'defaultColor': 'CountryColoursArray[1]',  # Placeholder
            'pinX': None,  # Placeholder for pin coordinates
            'pinY': None,  # Placeholder for pin coordinates
            'countryMonuments': [],  # Placeholder for monument data
            'countryBorderPaths': []
        }

        for path in country.findall('{http://www.w3.org/2000/svg}path'):
            path_id = path.attrib.get('id', 'UnknownPath')
            path_d = path.attrib.get('d', '')

            border_path = {
                'className': 'countryOutline',
                'd': path_d,
                'id': path_id
            }

            country_info['countryBorderPaths'].append(border_path)

        country_data.append(country_info)
    
    return country_data

def write_to_jsx(countries, output_file):
    with open(output_file, 'w') as f:
        f.write('const countriesData = [\n')
        for country in countries:
            f.write('  {\n')
            f.write(f"    id: '{country['id']}',\n")
            f.write(f"    countryName: '{country['countryName']}',\n")
            f.write(f"    posterImageUrl: {country['posterImageUrl']},\n")
            f.write(f"    visited: {str(country['visited']).lower()},\n")
            f.write(f"    defaultColor: {country['defaultColor']},\n")
            f.write(f"    pinX: {country['pinX']},\n")
            f.write(f"    pinY: {country['pinY']},\n")
            f.write('    countryMonuments: [\n')
            for monument in country['countryMonuments']:
                f.write('      {\n')
                f.write(f"        monumentName: '{monument['monumentName']}',\n")
                f.write(f"        monumentPosition: '{monument['monumentPosition']}',\n")
                f.write('      },\n')
            f.write('    ],\n')
            f.write('    countryBorderPaths: [\n')
            for path in country['countryBorderPaths']:
                f.write('      {\n')
                f.write(f"        className: '{path['className']}',\n")
                f.write(f"        d: '{path['d']}',\n")
                f.write(f"        id: '{path['id']}',\n")
                f.write('      },\n')
            f.write('    ],\n')
            f.write('  },\n')
        f.write('];\n\n')
        f.write('export default countriesData;\n')

def main():
    svg_file_path = r'C:\Users\Tom\Documents\code\javascript\my_planet\client\src\assets\images\maps\worldMap.svg'
    jsx_file_path = r'C:\Users\Tom\Documents\code\javascript\my_planet\client\src\assets\countriesData.jsx'

    countries = parse_svg(svg_file_path)
    write_to_jsx(countries, jsx_file_path)

if __name__ == '__main__':
    main()

// Images
import OldMapBackground from '../../assets/images/backgrounds/aged_map_background_ships_compasses.png';
import JupiterBackground from '../../assets/images/backgrounds/jupiter_bands_style_map_background.png';
import GalaxyBackground from '../../assets/images/backgrounds/galaxy_style_hubble_deep_field_background_map.png';
import DetailedMapBackground from '../../assets/images/backgrounds/detailed_map_option_world_map.png';
import RegularMapBackground from '../../assets/images/backgrounds/regular_world_map_of_countries.png';
// Data
import { CountriesDataArray } from '../data/CountriesData';
import { DetailedCountryMarkers } from '../data/DetailedCountryData';

export const DisplaySettingsArray = [
  {
    id: 0,
    name: 'animated',
    title: 'Animated',
    backgroundImage: null,
    styleSettings: {
      backgroundColour: 'bg-white',
      altBackgroundColour: 'bg-blue-500',
      buttonColour: 'bg-white',
      mainTextColour: 'text-black',
      altTextColour: 'text-white',
      borderColour: 'border-black',
    },
  },
  {
    id: 1,
    name: 'old_map',
    title: 'Old Map',
    backgroundImage: OldMapBackground,
    styleSettings: {
      backgroundColour: 'bg-[#dcbc90]',
      altBackgroundColour: 'bg-red-500',
      buttonColour: 'bg-[#dcbc90]',
      mainTextColour: 'text-black',
      altTextColour: 'text-white',
      borderColour: 'border-black',
    },
  },
  {
    id: 2,
    name: 'jupiter_clouds',
    title: 'Jupiter Clouds',
    backgroundImage: JupiterBackground,
    styleSettings: {
      backgroundColour: 'bg-[#dcbc90]',
      altBackgroundColour: 'bg-white',
      buttonColour: 'bg-[#dcbc90]',
      mainTextColour: 'text-black',
      altTextColour: 'text-white',
      borderColour: 'border-black',
    },
  },
  {
    id: 3,
    name: 'galaxy',
    title: 'Galaxy',
    backgroundImage: GalaxyBackground,
    styleSettings: {
      backgroundColour: 'bg-black',
      altBackgroundColour: 'bg-white',
      buttonColour: 'bg-[#dcbc90]',
      mainTextColour: 'text-white',
      altTextColour: 'text-black',
      borderColour: 'border-white',
    },
  },
];

export const MapTypeSettingsArray = [
  {
    id: 0,
    name: 'regular',
    title: 'Regular',
    mapData: CountriesDataArray,
    backgroundImage: RegularMapBackground,
  },
  {
    id: 1,
    name: 'detailed',
    title: 'Detailed',
    mapData: DetailedCountryMarkers,
    backgroundImage: DetailedMapBackground,
  },
];

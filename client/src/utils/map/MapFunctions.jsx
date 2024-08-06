export const createLongAndLatLines = (includeText) => {
  const lines = [];
  const svgWidth = 2000;
  const svgHeight = 1000;

  // Major lines for latitude
  const latitudes = [
    { label: '90°N', y: 0 },
    { label: '60°N', y: (svgHeight / 180) * 30 },
    { label: '30°N', y: (svgHeight / 180) * 60 },
    { label: 'Equator (0°)', y: svgHeight / 2 },
    { label: '30°S', y: (svgHeight / 180) * 120 },
    { label: '60°S', y: (svgHeight / 180) * 150 },
    { label: '90°S', y: svgHeight },
  ];

  // Major lines for longitude
  const longitudes = [
    { label: '180°W', x: 0 },
    { label: '165°W', x: (svgWidth / 360) * 15 },
    { label: '150°W', x: (svgWidth / 360) * 30 },
    { label: '135°W', x: (svgWidth / 360) * 45 },
    { label: '120°W', x: (svgWidth / 360) * 60 },
    { label: '105°W', x: (svgWidth / 360) * 75 },
    { label: '90°W', x: (svgWidth / 360) * 90 },
    { label: '75°W', x: (svgWidth / 360) * 105 },
    { label: '60°W', x: (svgWidth / 360) * 120 },
    { label: '45°W', x: (svgWidth / 360) * 135 },
    { label: '30°W', x: (svgWidth / 360) * 150 },
    { label: '15°W', x: (svgWidth / 360) * 165 },
    { label: 'Prime Meridian (0°)', x: svgWidth / 2 },
    { label: '15°E', x: (svgWidth / 360) * 195 },
    { label: '30°E', x: (svgWidth / 360) * 210 },
    { label: '45°E', x: (svgWidth / 360) * 225 },
    { label: '60°E', x: (svgWidth / 360) * 240 },
    { label: '75°E', x: (svgWidth / 360) * 255 },
    { label: '90°E', x: (svgWidth / 360) * 270 },
    { label: '105°E', x: (svgWidth / 360) * 285 },
    { label: '120°E', x: (svgWidth / 360) * 300 },
    { label: '135°E', x: (svgWidth / 360) * 315 },
    { label: '150°E', x: (svgWidth / 360) * 330 },
    { label: '165°E', x: (svgWidth / 360) * 345 },
    { label: '180°E', x: svgWidth },
  ];

  // Draw latitude lines
  latitudes.forEach((lat, index) => {
    lines.push(
      <line
        key={`lat-${index}`}
        x1='0'
        y1={lat.y}
        x2={svgWidth}
        y2={lat.y}
        stroke='lightgray'
        strokeWidth='1'
      />
    );
    if (includeText) {
      lines.push(
        <text
          key={`lat-label-${index}`}
          x={svgWidth - 50}
          y={lat.y + 5}
          fill='black'
          fontSize='12'
        >
          {lat.label}
        </text>
      );
    }
  });

  // Draw longitude lines
  longitudes.forEach((lon, index) => {
    lines.push(
      <line
        key={`lon-${index}`}
        x1={lon.x}
        y1='0'
        x2={lon.x}
        y2={svgHeight}
        stroke='lightgray'
        strokeWidth='1'
      />
    );
    if (includeText) {
      lines.push(
        <text
          key={`lon-label-${index}`}
          x={lon.x}
          y={svgHeight - 10}
          fill='black'
          fontSize='12'
        >
          {lon.label}
        </text>
      );
    }
  });

  return lines;
};

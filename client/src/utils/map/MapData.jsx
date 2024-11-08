// Images
import OldMapBackground from '../../assets/images/backgrounds/aged_map_background_ships_compasses.png'
import JupiterBackground from '../../assets/images/backgrounds/jupiter_bands_style_map_background.png'
import GalaxyBackground from '../../assets/images/backgrounds/galaxy_style_hubble_deep_field_background_map.png'
import { CountriesDataArray } from '../data/CountriesData';

export const DisplaySettingsArray = [
  {
    name: 'animated',
    title: 'Animated',
    backgroundImage: null,
    styleSettings: {
      backgroundColour: 'bg-white',
      altBackgroundColour: 'bg-blue-500',
      buttonColour: 'bg-white',
      mainTextColour: 'text-black',
      altTextColour: 'text-white',
      borderColour: 'border-black'
    }
  },
  {
    name: 'old_map',
    title: 'Old Map',
    backgroundImage: OldMapBackground,
    styleSettings: {
      backgroundColour: 'bg-[#dcbc90]',
      altBackgroundColour: 'bg-red-500',
      buttonColour: 'bg-[#dcbc90]',
      mainTextColour: 'text-black',
      altTextColour: 'text-white',
      borderColour: 'border-black'
    }
  },
  {
    name: 'jupiter_clouds',
    title: 'Jupiter Clouds',
    backgroundImage: JupiterBackground,
    styleSettings: {
      backgroundColour: 'bg-[#dcbc90]',
      altBackgroundColour: 'bg-white',
      buttonColour: 'bg-[#dcbc90]',
      mainTextColour: 'text-black',
      altTextColour: 'text-white',
      borderColour: 'border-black'
    }
  },
  {
    name: 'galaxy',
    title: 'Galaxy',
    backgroundImage: GalaxyBackground,
    styleSettings: {
      backgroundColour: 'bg-black',
      altBackgroundColour: 'bg-white',
      buttonColour: 'bg-[#dcbc90]',
      mainTextColour: 'text-white',
      altTextColour: 'text-black',
      borderColour: 'border-white'
    }
  },
];

export const MapTypeSettingsArray = [
  {
    name: 'regular',
    title: 'Regular',
    mapData: CountriesDataArray,
  },
  {
    name: 'detailed',
    title: 'Detailed',
    mapData: CountriesDataArray,
  },
];

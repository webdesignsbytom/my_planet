// Images
import OldMapBackground from '../../assets/images/backgrounds/aged_map_background_ships_compasses.png'
import JupiterBackground from '../../assets/images/backgrounds/jupiter_bands_style_map_background.png'
import GalaxyBackground from '../../assets/images/backgrounds/galaxy_style_hubble_deep_field_background_map.png'

export const DisplaySettingsArray = [
  {
    name: 'animated',
    title: 'Animated',
    backgroundImage: null,
    styleSettings: {
      backgroundColour: 'bg-white',
      altBackgroundColour: 'bg-blue-500',
      buttonColour: 'bg-white'
    }
  },
  {
    name: 'old_map',
    title: 'Old Map',
    backgroundImage: OldMapBackground,
    styleSettings: {
      backgroundColour: 'bg-[#dcbc90]',
      altBackgroundColour: 'bg-red-500',
      buttonColour: 'bg-[#dcbc90]'
    }
  },
  {
    name: 'jupiter_clouds',
    title: 'Jupiter Clouds',
    backgroundImage: JupiterBackground,
    styleSettings: {
      backgroundColour: 'bg-[#dcbc90]',
      altBackgroundColour: 'bg-white',
      buttonColour: 'bg-[#dcbc90]'
    }
  },
  {
    name: 'galaxy',
    title: 'Galaxy',
    backgroundImage: GalaxyBackground,
    styleSettings: {
      backgroundColour: 'bg-blue-500',
      altBackgroundColour: 'bg-white',
      buttonColour: 'bg-[#dcbc90]'
    }
  },
];

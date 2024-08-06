import React, { useContext } from 'react';
// Context
import { MapContext } from '../../context/MapContext';

function HelpSettingsContainer() {
  const { mapPageSettings, toggleHelpSettingsContainer } =
    useContext(MapContext);
  return <section>help</section>;
}

export default HelpSettingsContainer;

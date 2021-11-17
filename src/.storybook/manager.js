import { addons } from '@storybook/addons';

addons.setConfig({
  enableShortcuts: true,
  initialActive: 'sidebar',
  isFullscreen: false,
  isToolshown: true,
  panelPosition: 'bottom',
  selectedPanel: undefined,
  showNav: true,
  showPanel: true,
  theme: undefined,
  sidebar: {
    collapsedRoots: ['other'],
    showRoots: false
  },
  toolbar: {
    copy: { hidden: false },
    eject: { hidden: false },
    fullscreen: { hidden: false },
    title: { hidden: false },
    zoom: { hidden: false }
  }
});

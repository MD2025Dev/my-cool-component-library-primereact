import type { Preview } from "@storybook/react";
import '../src/global.css';
// import '../'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

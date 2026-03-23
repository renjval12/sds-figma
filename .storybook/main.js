export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)", "../src/**/*.story.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};

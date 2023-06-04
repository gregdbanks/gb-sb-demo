# Getting Started with StoryBook

To install:

```js
npx sb init
```

First delete the whole stories dirctory, then you'll want to create a new file in the stories directory.
Let's call it FunButton.stories.js. The code might look something like this:

```js
import React from "react";
import FunButton from "./FunButton";

// This default export determines where your story goes in the story list
// The title corresponds to the path you'll see in the Storybook UI (eg: "FunButton")
// The component is a reference to the component for which we're writing stories
export default {
  title: "FunButton",
  component: FunButton,
};

// Template is a function that returns a FunButton component with a set of props
// This template will be reused across stories to maintain consistency
const Template = (args) => <FunButton {...args} />;

// Default is a standard FunButton
export const Default = Template.bind({});
// args are the "arguments" (props) that get passed to the FunButton in the Default story
Default.args = {
  children: "Button Text",
  size: "medium",
  variation: "default",
  theme: "light",
};

// SmallOutlined is a small, outlined FunButton
export const SmallOutlined = Template.bind({});
// Different args (props) are passed in to show a different variant of the FunButton
SmallOutlined.args = {
  children: "Button Text",
  size: "small",
  variation: "outline",
  theme: "light",
};

// LargeGhost is a large FunButton with the "ghost" variation
export const LargeGhost = Template.bind({});
// Again, different args show a different variant
LargeGhost.args = {
  children: "Button Text",
  size: "large",
  variation: "ghost",
  theme: "light",
};
```

To add on Documentation for your component run,

```js
npm install --save-dev @storybook/addon-docs
```

update your storybook main.js,

```js
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
```

Update your FunButton.stories.js to include a parameters section in your default export. This section will include the documentation for your component. You write this in markdown:

```js
import React from "react";
import FunButton from "../FunButton";

export default {
  title: "FunButton",
  component: FunButton,
  parameters: {
    docs: {
      description: {
        component: `
          This is a fun button component. 

          It has several properties:
          
          - **size:** Determines the size of the button. Can be 'small', 'medium', or 'large'.
          - **variation:** Determines the variation of the button. Can be 'default', 'outline', or 'ghost'.
          - **theme:** Determines the theme of the button. Can be 'light', 'dark', or 'colorful'.
        `,
      },
    },
  },
};

// ... rest of the file ...
```

# Getting Started with StoryBook

To install:

```js
npx sb init
```

You'll want to create a new file in the stories directory. Let's call it FunButton.stories.js. The code might look something like this:

```js
import React from "react";
import { FunButton } from "../FunButton";

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

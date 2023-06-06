import React from "react";
import FunButton from "./FunButton";

export default {
    title: "FunButton",
    component: FunButton,
    tags: ['autodocs'],
};

const Template = (args) => <FunButton {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: "Button Text",
    size: "medium",
    variation: "default",
    theme: "light",
};

export const Outline = Template.bind({});

Outline.args = {
    children: "Button Text",
    size: "small",
    variation: "outline",
    theme: "light",
};

export const LargeGhost = Template.bind({});

LargeGhost.args = {
    children: "Button Text",
    size: "large",
    variation: "ghost",
    theme: "light",
};
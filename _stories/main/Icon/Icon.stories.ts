import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import type { Meta } from "@storybook/web-components";

import argTypes from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { UI5StoryArgs } from "../../../types.js";
import type Icon from "@ui5/webcomponents/dist/Icon.js";
import IconDesign from "@ui5/webcomponents/dist/types/IconDesign.js";

export default {
	title: "Main/Icon",
	component: "Icon",
	argTypes,
} as Meta<Icon>;

const Template: UI5StoryArgs<Icon, StoryArgsSlots> = (args) =>
	html`<ui5-icon
	design="${ifDefined(args.design)}"
	mode="${ifDefined(args.mode)}"
	name="${ifDefined(args.name)}"
	accessible-name="${ifDefined(args.accessibleName)}"
	?show-tooltip="${ifDefined(args.showTooltip)}"
	style="${ifDefined(args.style)}"
></ui5-icon>`;

export const Basic = Template.bind({});
Basic.args = {
	name: "activities",
};

export const Customized = Template.bind({});
Customized.args = {
	name: "tnt/antenna",
	style: "width: 3rem; height: 3rem; font-size: 1.5rem; color: crimson; background-color: #fafafa",
};

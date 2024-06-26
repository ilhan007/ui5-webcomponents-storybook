export default {
	"size": {
		"control": "select",
		"options": [
			"S",
			"M",
			"L"
		]
	},
	"textPlacement": {
		"control": "select",
		"options": [
			"Top",
			"Bottom"
		]
	},
	"default": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<Node>"
			}
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "0.12.0",
    "tagName": "ui5-busy-indicator"
};
export type StoryArgsSlots = {
	default: string;
}
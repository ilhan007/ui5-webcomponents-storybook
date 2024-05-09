export default {
	"design": {
		"control": "select",
		"options": [
			"Information",
			"Positive",
			"Negative",
			"Warning",
			"ColorSet1",
			"ColorSet2"
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
	},
	"icon": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<IIcon>"
			}
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "0.9.0",
    "tagName": "ui5-message-strip"
};
export type StoryArgsSlots = {
	default: string;
	icon: string;
}
export default {
	"default": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<HTMLElement>"
			}
		}
	},
	"header": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<CardHeader>"
			}
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "tagName": "ui5-card"
};
export type StoryArgsSlots = {
	default: string;
	header: string;
}
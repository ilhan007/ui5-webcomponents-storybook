export default {
	"design": {
		"control": "select",
		"options": [
			"Header",
			"Subheader",
			"Footer",
			"FloatingFooter"
		]
	},
	"startContent": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<HTMLElement>"
			}
		}
	},
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
	"endContent": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<HTMLElement>"
			}
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.0.0-rc.11",
    "tagName": "ui5-bar"
};
export type StoryArgsSlots = {
	startContent: string;
	default: string;
	endContent: string;
}
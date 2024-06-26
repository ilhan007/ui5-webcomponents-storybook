export default {
	"backgroundDesign": {
		"control": "select",
		"options": [
			"List",
			"Solid",
			"Transparent"
		]
	},
	"header": {
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
				"summary": "Array<Node>"
			}
		}
	},
	"footer": {
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
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.12",
    "tagName": "ui5-page"
};
export type StoryArgsSlots = {
	header: string;
	default: string;
	footer: string;
}
export default {
	"additionalTextState": {
		"control": "select",
		"options": [
			"None",
			"Positive",
			"Critical",
			"Negative",
			"Information"
		]
	},
	"type": {
		"control": "select",
		"options": [
			"Inactive",
			"Active",
			"Detail",
			"Navigation"
		]
	},
	"highlight": {
		"control": "select",
		"options": [
			"None",
			"Success",
			"Warning",
			"Error",
			"Information"
		]
	},
	"content": {
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
				"summary": "Array<TreeItemBase>"
			}
		}
	},
	"deleteButton": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<IButton>"
			}
		}
	},
	"toggle": {
		"description": "Call this method to manually switch the `expanded` state of a tree item.",
		"table": {
			"category": "methods"
		},
		"UI5CustomData": {
			"returnValue": {
				"type": {
					"text": "void"
				}
			}
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "since": "1.9.2",
    "tagName": "ui5-tree-item-custom",
    "showDefaultStoryOnly": true
};
export type StoryArgsSlots = {
	content: string;
	default: string;
	deleteButton: string;
}
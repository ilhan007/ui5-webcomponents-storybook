export default {
	"default": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<SideNavigationItemBase>"
			}
		}
	},
	"fixedItems": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<SideNavigationItemBase>"
			}
		}
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
	"selection-change": {
		"description": "Fired when the selection has changed via user interaction",
		"control": {
			"type": false
		},
		"table": {
			"category": "events"
		},
		"UI5CustomData": {
			"parameters": [
				{
					"type": {
						"text": "SideNavigationSelectableItemBase",
						"references": [
							{
								"name": "SideNavigationSelectableItemBase",
								"package": "@ui5/webcomponents-fiori",
								"module": "dist/SideNavigationSelectableItemBase.js"
							}
						]
					},
					"name": "item",
					"_ui5privacy": "public",
					"description": "the clicked item."
				}
			]
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.8",
    "tagName": "ui5-side-navigation"
};
export type StoryArgsSlots = {
	default: string;
	fixedItems: string;
	header: string;
}
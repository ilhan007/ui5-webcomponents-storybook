export default {
	"type": {
		"control": "select",
		"options": [
			"Inactive",
			"Active"
		]
	},
	"default": {
		"control": {
			"type": "text"
		},
		"table": {
			"type": {
				"summary": "Array<TableCell>"
			}
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents",
    "tagName": "ui5-table-row",
    "showDefaultStoryOnly": true
};
export type StoryArgsSlots = {
	default: string;
}
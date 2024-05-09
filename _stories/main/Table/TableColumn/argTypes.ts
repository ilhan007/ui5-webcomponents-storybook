export default {
	"popinDisplay": {
		"control": "select",
		"options": [
			"Block",
			"Inline"
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
    "tagName": "ui5-table-column",
    "showDefaultStoryOnly": true
};
export type StoryArgsSlots = {
	default: string;
}
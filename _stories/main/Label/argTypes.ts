export default {
	"wrappingType": {
		"control": "select",
		"options": [
			"None",
			"Normal"
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
    "tagName": "ui5-label"
};
export type StoryArgsSlots = {
	default: string;
}
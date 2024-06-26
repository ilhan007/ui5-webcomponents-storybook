export default {
	"scan-success": {
		"description": "Fires when the scan is completed successfuuly.",
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
						"text": "string"
					},
					"name": "text",
					"_ui5privacy": "public",
					"description": "the scan result as string"
				},
				{
					"type": {
						"text": "Object"
					},
					"name": "rawBytes",
					"_ui5privacy": "public",
					"description": "the scan result as a Uint8Array"
				}
			]
		}
	},
	"scan-error": {
		"description": "Fires when the scan fails with error.",
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
						"text": "string"
					},
					"name": "message",
					"_ui5privacy": "public",
					"description": "the error message"
				}
			]
		}
	}
};
export const componentInfo = {
    "package": "@ui5/webcomponents-fiori",
    "since": "1.0.0-rc.15",
    "tagName": "ui5-barcode-scanner-dialog"
};
export type StoryArgsSlots = {
	
}
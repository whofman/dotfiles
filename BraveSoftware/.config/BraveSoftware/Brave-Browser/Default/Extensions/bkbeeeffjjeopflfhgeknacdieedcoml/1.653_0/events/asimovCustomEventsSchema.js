awa._registerSchemas([{
    name: "Microsoft.Extensions.BrowserProtection.DeleteData",
    "Microsoft.Extensions.BrowserProtection.DeleteData": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "instanceID",
                type: "string"
            }, {
                name: "sessionID",
                type: "string"
            }]
        }
    }
}, {
    name: "Microsoft.Extensions.BrowserProtection.Lifecycle",
    "Microsoft.Extensions.BrowserProtection.Lifecycle": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "offsetMins",
                type: "int32"
            }, {
                req: !0,
                name: "instanceID",
                type: "string"
            }, {
                name: "sessionID",
                type: "string"
            }, {
                name: "isExtensionEnabled",
                type: "string"
            }, {
                req: !0,
                name: "stageID",
                type: "int32"
            }]
        }
    }
}, {
    name: "Microsoft.Extensions.BrowserProtection.Nav",
    "Microsoft.Extensions.BrowserProtection.Nav": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "instanceID",
                type: "string"
            }, {
                name: "sessionID",
                type: "string"
            }, {
                req: !0,
                name: "uri",
                type: "string"
            }, {
                req: !0,
                name: "isMainFrame",
                type: "string"
            }, {
                req: !0,
                name: "result",
                type: "string"
            }, {
                req: !0,
                name: "origin",
                type: "string"
            }, {
                req: !0,
                name: "loadTime",
                type: "int32"
            }]
        }
    }
}, {
    name: "Microsoft.Extensions.BrowserProtection.PopupInteraction",
    "Microsoft.Extensions.BrowserProtection.PopupInteraction": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "instanceID",
                type: "string"
            }, {
                name: "sessionID",
                type: "string"
            }, {
                req: !0,
                name: "type",
                type: "string"
            }, {
                name: "isExtensionEnabled",
                type: "bool"
            }]
        }
    }
}, {
    name: "Microsoft.Extensions.BrowserProtection.WarningInteraction",
    "Microsoft.Extensions.BrowserProtection.WarningInteraction": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "instanceID",
                type: "string"
            }, {
                name: "sessionID",
                type: "string"
            }, {
                req: !0,
                name: "type",
                type: "string"
            }, {
                req: !0,
                name: "uri",
                type: "string"
            }]
        }
    }},
	{
    name: "Microsoft.Extensions.BrowserProtection.BingSearch",
    "Microsoft.Extensions.BrowserProtection.BingSearch": {
        part: "C",
        def: {
            fields: [{
                req: !0,
                name: "ver",
                type: "string"
            }, {
                req: !0,
                name: "instanceID",
                type: "string"
            }, {
                name: "sessionID",
                type: "string"
            }, {
                req: !0,
                name: "type",
                type: "string"
            },{
                name: "PC",
                type: "string"
            }, {
                req: !0,
                name: "uri",
                type: "string"
            }]
        }
    }
	}

])
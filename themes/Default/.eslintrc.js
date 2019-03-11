module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "script"
    },
    "env": {
        "browser": true,
        "jquery": true
    },
    "rules": {
        "linebreak-style": "off" // Git handles this
    },
    "globals": { // Include all common.js functions and xhrThemeLoader
        "getBasePath": "true",
        "uuid": "true",
        "sleep": "true",
        "getJson": "true",
        "getJsonAsync": "true",
        "getMenu": "true",
        "getMenuAsync": "true",
        "getSettings": "true",
        "getSettingsAsync": "true",
        "getData": "true",
        "getDataAsync": "true",
        "loadFrame": "true",
        "loadEntry": "true",
        "clearFrame": "true",
        "safeRedirect": "true",
        "cacheTheme": "true",
        "cacheCategory": "true",
        "cacheEntry": "true",
        "cacheAll": "true",
        "setStorage": "true",
        "getStorage": "true",
        "deleteStorage": "true",
        "deleteCookie": "true",
        "setCookie": "true",
        "getCookie": "true",
        "setAutoload": "true",
        "clearAutoload": "true",
        "autoloadCookie": "true",
        "imageToBackground": "true",
        "checkUAMatch": "true"
    }
};

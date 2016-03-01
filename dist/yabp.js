/// <reference path="./d.ts/node.d.ts" />
/// <reference path="node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', './components/yabp.component'], function(exports_1) {
    "use strict";
    var browser_1, yabp_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (yabp_component_1_1) {
                yabp_component_1 = yabp_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(yabp_component_1.Yabp);
        }
    }
});

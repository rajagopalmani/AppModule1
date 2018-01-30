"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hello_component_1 = require("./hello/hello.component");
var appRoutes = [
    { path: '', component: hello_component_1.HelloComponent, pathMatch: 'full' }
];
var AppModule1 = /** @class */ (function () {
    function AppModule1() {
    }
    AppModule1.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        hello_component_1.HelloComponent
                    ],
                    imports: [
                        router_1.RouterModule.forChild(appRoutes),
                        platform_browser_1.BrowserModule
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    AppModule1.ctorParameters = function () { return []; };
    return AppModule1;
}());
exports.AppModule1 = AppModule1;
//# sourceMappingURL=exported.module.js.map
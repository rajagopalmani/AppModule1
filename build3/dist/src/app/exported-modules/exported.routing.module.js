import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
var appRoutes = [
    { path: 'hello', component: HelloComponent }
];
var RoutingModule1 = /** @class */ (function () {
    function RoutingModule1() {
    }
    RoutingModule1.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild(appRoutes),
                    ],
                    exports: [
                        RouterModule
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    RoutingModule1.ctorParameters = function () { return []; };
    return RoutingModule1;
}());
export { RoutingModule1 };
//# sourceMappingURL=exported.routing.module.js.map
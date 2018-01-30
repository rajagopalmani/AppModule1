import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
var appRoutes = [
    { path: '', component: HelloComponent, pathMatch: 'full' }
];
var AppModule1 = /** @class */ (function () {
    function AppModule1() {
    }
    AppModule1.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HelloComponent
                    ],
                    imports: [
                        RouterModule.forChild(appRoutes),
                        BrowserModule
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    AppModule1.ctorParameters = function () { return []; };
    return AppModule1;
}());
export { AppModule1 };
//# sourceMappingURL=exported.module.js.map
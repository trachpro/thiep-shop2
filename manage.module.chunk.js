webpackJsonp(["manage.module"],{

/***/ "../../../../../src/app/pages/manage/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/manage/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manage works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/manage/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageComponent = (function () {
    function ManageComponent() {
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    ManageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-manage',
            template: __webpack_require__("../../../../../src/app/pages/manage/manage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/manage/manage.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], ManageComponent);
    return ManageComponent;
}());
//# sourceMappingURL=/home/tupm/Desktop/thiep-shop2/src/manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/manage/manage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageModule", function() { return ManageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manage_component__ = __webpack_require__("../../../../../src/app/pages/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router_src_router_module__ = __webpack_require__("../../../router/src/router_module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageModule = (function () {
    function ManageModule() {
    }
    ManageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router_src_router_module__["b" /* RouterModule */].forChild([{ path: "", component: __WEBPACK_IMPORTED_MODULE_0__manage_component__["a" /* ManageComponent */] }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__manage_component__["a" /* ManageComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ManageModule);
    return ManageModule;
}());
//# sourceMappingURL=/home/tupm/Desktop/thiep-shop2/src/manage.module.js.map

/***/ })

});
//# sourceMappingURL=manage.module.chunk.js.map
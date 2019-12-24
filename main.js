(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\" header mat-elevation-z6\">\n    <mat-toolbar-row>\n        <span class=\"logo align-middle\">\n            <a [routerLink]=\"['/main']\">\n                <img src=\"assets/img/logo.png\" alt=\"jsdaddy\" class=\"logo\"></a>\n        </span>\n    </mat-toolbar-row>\n    <mat-toolbar-row>\n        <span>\n            <a mat-button [routerLink]=\"['/mask-component']\">Ngx-mask</a>\n        </span>\n    </mat-toolbar-row>\n    <mat-toolbar-row>\n        <span>\n            <a mat-button target=\"_blank\" href=\"https://jsdaddy.github.io/ngx-copypaste/\"> Ngx-copypaste </a>\n        </span>\n    </mat-toolbar-row>\n    <mat-toolbar-row>\n        <span>\n            <a mat-button  class=\"loader\" target=\"_blank\" href=\"https://jsdaddy.github.io/ngx-loader-indicator/\"> Ngx-loader-indicator </a>\n        </span>\n    </mat-toolbar-row>\n    <mat-toolbar-row>\n        <span>\n            <a mat-button  class=\"git\" target=\"_blank\" href=\"https://github.com/JsDaddy/ngx-mask\"> GitHub </a>\n        </span>\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/doc/mask-component/mask.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/doc/mask-component/mask.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"mask-wrap\">\n\n  <mat-drawer-container class=\"mat-elevation-z6\">\n    <mat-drawer-content>\n      <mat-accordion>\n        <mat-expansion-panel *ngFor=\"let list of lists\" [expanded]=\"list.id == 1\">\n          <mat-expansion-panel-header (click)=\"switchDoc(list.id)\">\n            <mat-panel-title [ngStyle]=\"{'color': list.id === chosenList ? '#ffcc00' : 'black'}\">{{list.header}}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list *ngFor=\"let item of list.text\">\n            <button mat-button [ngStyle]=\"{'color': item.id === chosenItem ? '#ffcc00' : 'black'}\" class=\"date\"\n              id=\"{{item.id}}\" (click)=\"handleClick(item.id, item.scrollTo)\" [routerLink]\n              fragment=\"{{item.scrollTo}}\">{{item.content}}</button>\n          </mat-nav-list>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </mat-drawer-content>\n\n  </mat-drawer-container>\n\n  <app-options [choose]=\"chosenItem\" [docs]=\"inputVal.docs\" [examples]=\"inputVal.examples\"></app-options>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/doc/options/options.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/doc/options/options.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\n  <div class=\"doc-container\">\n    <div class=\"doc\" *ngFor=\"let tile of docs\">\n      <mat-card id=\"{{ tile.anchor }}\">\n        <mat-card-header>\n          <mat-card-title\n            [ngStyle]=\"{\n              color: checkChoose(choose, tile.id) ? '#ffcc00' : 'black'\n            }\"\n            >{{ tile.header }}\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <p>{{ tile.text }}</p>\n          <p>Usage</p>\n          <pre><code [highlight]=\"tile.code\"></code></pre>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n\n  <div class=\"examples-container\">\n    <div class=\"examples-wrapper\">\n      <div class=\"example\" *ngFor=\"let ex of examples\">\n        <mat-card>\n          <mat-card-content *ngIf=\"!ex._pipe; else pipeView\">\n            <div class=\"input-wrap\">\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"{{ ex._placeholder }}\"\n                  prefix=\"{{ ex._prefix }}\"\n                  suffix=\"{{ ex._suffix }}\"\n                  [dropSpecialCharacters]=\"ex._dropSpecialCharacters || ''\"\n                  mask=\"{{ ex._mask || '' }}\"\n                  thousandSeparator=\"{{ex._thousandSeparator||' '}}\"\n                  [formControl]=\"ex.control.form\"\n                  [(ngModel)]=\"ex.control.model\"\n                  [validation]=\"ex._validation || null\"\n                  [showMaskTyped]=\"ex._showMaskTyped || null\"\n                  [clearIfNotMatch]=\"ex._clearIfNotMatch || null\"\n                  [hiddenInput]=\"ex._hiddenInput\"\n                />\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!ex._validation; else validView\">\n              <div class=\"model-wrap\">\n                <div class=\"values\">\n                  <p>\n                    FormControl:\n                    {{\n                      ex.control.form.value ? ex.control.form.value : \"Empty\"\n                    }}\n                  </p>\n                  <p>\n                    NgModel: {{ ex.control.model ? ex.control.model : \"Empty\" }}\n                  </p>\n                </div>\n                <mat-hint>Mask: {{ ex._mask }}</mat-hint>\n              </div>\n            </div>\n            <ng-template #validView>\n              <div class=\"model-wrap\">\n                <div class=\"values\">\n                  <p>FormControl: {{ ex.control.form.errors | json }}</p>\n                </div>\n                <mat-hint>Mask: {{ ex._mask }}</mat-hint>\n              </div>\n            </ng-template>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #pipeView>\n  <mat-card-content>\n    <p>{{ phone | mask: \"(000) 000-0000\" }}</p>\n    <p>Mask: (000) 000-0000</p>\n    <p>Value: 123456789</p>\n  </mat-card-content>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/get-started-page/get-started-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/get-started-page/get-started-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"install\">\n    <div class=\"instal-wrapper\">\n        <p class=\".mat-subheading-1\">For existing apps, follow these steps to begin using Angular Mask Plugin.</p>\n        <div class=\"\" *ngFor=\"let quick of quickStart\">\n            <h2 class=\"mat-h1\">{{quick.header}}</h2>\n            <p class=\".mat-subheading-1\">{{quick.text}}</p>\n            <div *ngIf=\"quick.code\">\n                <pre><code [highlight]=\"quick.code\"></code></pre>\n            </div>\n        </div>\n        <div class=\"tables\"> \n            <div class=\"table-wrapper\">\n            \n            <!-- <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z6\">\n                <ng-container matColumnDef=\"mask\" sticky>\n                    <th mat-header-cell *matHeaderCellDef>mask</th>\n                    <td mat-cell *matCellDef=\"let element\"\n                        [style.background-color]=\"element.position % 2 == 0 ? 'whitesmoke':'white'\">\n                        {{element.mask}}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"example\" stickyEnd>\n                    <th mat-header-cell *matHeaderCellDef>example</th>\n                    <td mat-cell *matCellDef=\"let element\"\n                        [style.background-color]=\"element.position % 2 == 0 ? 'whitesmoke':'white'\">{{element.example}}\n                    </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table> -->\n\n            <table mat-table [dataSource]=\"dataCode\" class=\"mat-elevation-z6\">\n               \n                <ng-container matColumnDef=\"code\" sticky>\n                    <th mat-header-cell *matHeaderCellDef>code</th>\n                    <td mat-cell *matCellDef=\"let element\"\n                        [style.background-color]=\"element.position % 2 == 0 ? 'whitesmoke':'white'\">\n                        {{element.mask}}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"meaning\" stickyEnd>\n                    <th mat-header-cell *matHeaderCellDef>meaning</th>\n                    <td mat-cell *matCellDef=\"let element\"\n                        [style.background-color]=\"element.position % 2 == 0 ? 'whitesmoke':'white'\">{{element.example}}\n                    </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayCol\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayCol;\"></tr>\n            </table>\n        </div>\n</div>   </div>\n<div class=\"button-wrapper\">\n        <a mat-raised-button [routerLink]=\"['/mask-component']\" class=\"next\">\n            \n            Next<mat-icon svgIcon=\"chevron-right-solid\"></mat-icon>  </a>\n </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main-page/main-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main-page/main-page.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n  <div class=\"main-wrapper\">\n    <h1 class=\"mat-display-1\">Angular Mask Plugin</h1>\n    <p class=\"mat-subheading-1\">Angular Plugin to make masks on form fields and html elements.</p>\n    <a mat-raised-button [routerLink]=\"['/getting-start']\" class=\"get-started\"> Get Started </a>\n  </div>\n\n  <div class=\"meet-wrap\">\n    <div class=\"artcl-wrap-head\">\n      <div class=\"text-wrap\">\n        <p class=\"mat-display-1\">Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          dicta quos!</p>\n      </div>\n    </div>\n    <mat-card>\n      <mat-card-content>\n        <div class=\"artcl-wrap-separ\">\n          <div class=\"text-wrap\">\n            <p class=\"mat-display-1\">Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              dicta quos!</p>\n          </div>\n          <div class=\"img-wrap\">\n            <img src=\"assets/img/separator.png\">\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card class=\"secure-wrap\">\n      <mat-card-content>\n        <div class=\"artcl-wrap-secure\">\n          <div class=\"img-wrap\">\n            <img src=\"assets/img/secure-input.png\">\n          </div>\n          <div class=\"text-wrap\">\n            <p class=\"mat-display-1\">Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              dicta quos!</p>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngx-mask-page';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: row;\n  background-color: whitesmoke;\n}\n\nmat-toolbar-row {\n  justify-content: flex-start;\n  width: 5%;\n  padding: 0 56px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.logo {\n  width: 75px;\n  height: 35px;\n}\n\n.git {\n  margin-left: 70px;\n}\n\n.loader {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25neC1tYXNrLXBhZ2Uvbmd4LW1hc2stcGFnZS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNJLGFBQUE7RUFDRCxtQkFBQTtFQUNBLDRCQUFBO0FDQ0g7O0FEQ0E7RUFDSSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDRyxxQkFBQTtFQUNBLFlBQUE7QUNHSDs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksaUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbnBvc2l0aW9uOiBmaXhlZDtcbnotaW5kZXg6IDI7XG50b3A6IDA7XG5sZWZ0OiAwO1xucmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxubWF0LXRvb2xiYXItcm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDUlO1xuICAgIHBhZGRpbmc6IDAgNTZweDtcbn1cbmF7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICAgY29sb3I6IGJsYWNrO1xufVxuLmxvZ297XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiAzNXB4OyBcbn1cbi5naXQge1xuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuLmxvYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59IiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxubWF0LXRvb2xiYXItcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNSU7XG4gIHBhZGRpbmc6IDAgNTZweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5naXQge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLmxvYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/doc/mask-component/mask.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/doc/mask-component/mask.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mask-wrap {\n  display: flex;\n}\n\nmat-expansion-panel {\n  width: 350px;\n}\n\nmat-drawer-container {\n  margin-top: 65px;\n  height: 100%;\n  min-width: 350px;\n}\n\nmat-drawer-container .mat-drawer-content {\n  position: fixed;\n}\n\nbutton {\n  width: 340px;\n}\n\n.date {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25neC1tYXNrLXBhZ2Uvbmd4LW1hc2stcGFnZS9zcmMvYXBwL21haW4vZG9jL21hc2stY29tcG9uZW50L21hc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZG9jL21hc2stY29tcG9uZW50L21hc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREFJO0VBQ0ksZUFBQTtBQ0VSOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREdBO0VBQ0ksaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21haW4vZG9jL21hc2stY29tcG9uZW50L21hc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzay13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIHdpZHRoOiAzNTBweFxufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICAubWF0LWRyYXdlci1jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIH1cbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogMzQwcHhcblxufVxuXG4uZGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnRcbn1cbiIsIi5tYXNrLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDY1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cbm1hdC1kcmF3ZXItY29udGFpbmVyIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAzNDBweDtcbn1cblxuLmRhdGUge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/doc/mask-component/mask.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/doc/mask-component/mask.component.ts ***!
  \***********************************************************/
/*! exports provided: MaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskComponent", function() { return MaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_content_optional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/content/optional */ "./src/assets/content/optional.ts");
/* harmony import */ var src_assets_content_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/content/lists */ "./src/assets/content/lists.ts");
/* harmony import */ var src_assets_content_separators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/content/separators */ "./src/assets/content/separators.ts");
/* harmony import */ var src_assets_content_commonCases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/content/commonCases */ "./src/assets/content/commonCases.ts");
/* harmony import */ var src_assets_content_other__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/content/other */ "./src/assets/content/other.ts");







var MaskComponent = /** @class */ (function () {
    function MaskComponent() {
    }
    MaskComponent.prototype.switchDoc = function (idList) {
        switch (idList) {
            case '1':
                this.inputVal.docs = src_assets_content_commonCases__WEBPACK_IMPORTED_MODULE_5__["ComDocs"];
                this.inputVal.examples = src_assets_content_commonCases__WEBPACK_IMPORTED_MODULE_5__["ComExamples"];
                break;
            case '2':
                this.inputVal.docs = src_assets_content_optional__WEBPACK_IMPORTED_MODULE_2__["OptDocs"];
                this.inputVal.examples = src_assets_content_optional__WEBPACK_IMPORTED_MODULE_2__["OptExamples"];
                break;
            case '3':
                this.inputVal.docs = src_assets_content_separators__WEBPACK_IMPORTED_MODULE_4__["SepDocs"];
                this.inputVal.examples = src_assets_content_separators__WEBPACK_IMPORTED_MODULE_4__["SepExamples"];
                break;
            case '4':
                this.inputVal.docs = src_assets_content_other__WEBPACK_IMPORTED_MODULE_6__["OthDocs"];
                this.inputVal.examples = src_assets_content_other__WEBPACK_IMPORTED_MODULE_6__["OthExamples"];
                break;
            default:
                break;
        }
        this.chosenList = idList;
    };
    MaskComponent.prototype.handleClick = function (idItem, scrollTo) {
        this.chosenItem = idItem;
        setTimeout(function () {
            // tslint:disable-next-line:no-any
            var anchor = document.getElementById(scrollTo);
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        });
    };
    MaskComponent.prototype.ngOnInit = function () {
        this.inputVal = {
            docs: src_assets_content_commonCases__WEBPACK_IMPORTED_MODULE_5__["ComDocs"],
            examples: src_assets_content_commonCases__WEBPACK_IMPORTED_MODULE_5__["ComExamples"]
        };
        this.chosenItem = '1';
        this.chosenList = '1';
        this.lists = src_assets_content_lists__WEBPACK_IMPORTED_MODULE_3__["lists"];
    };
    MaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mask',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mask.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/doc/mask-component/mask.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mask.component.scss */ "./src/app/main/doc/mask-component/mask.component.scss")).default]
        })
    ], MaskComponent);
    return MaskComponent;
}());



/***/ }),

/***/ "./src/app/main/doc/options/options.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/main/doc/options/options.component.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin-top: 65px;\n  display: flex;\n  flex-direction: row;\n  background: #f5f5f5;\n}\n.content .examples-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 1200px;\n}\n.content .examples-container .examples-wrapper {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 1800px;\n}\n.content .examples-container .examples-wrapper .example {\n  padding: 20px;\n}\n.content .examples-container .examples-wrapper .example .mat-card {\n  max-width: 350px;\n  height: 170px;\n  display: flex;\n  flex-direction: column;\n}\n.content .examples-container .examples-wrapper .example .mat-card .model-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.content .examples-container .examples-wrapper .example .mat-card .model-wrap .values {\n  display: flex;\n  flex-direction: column;\n}\n.content .doc-container {\n  display: flex;\n  flex-direction: column;\n}\n.content .doc-container .doc {\n  padding: 20px;\n}\n.content .doc-container .doc .mat-card {\n  height: 170px;\n  max-width: 620px;\n}\nmat-card {\n  width: 700px;\n}\n@media (max-width: 620px) {\n  .examples-container {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25neC1tYXNrLXBhZ2Uvbmd4LW1hc2stcGFnZS9zcmMvYXBwL21haW4vZG9jL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbWFpbi9kb2Mvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxlQUFBO0VBQ0EsYUFBQTtBQ0RaO0FERVk7RUFDSSxhQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0V4QjtBRER3QjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0c1QjtBREZJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDSVI7QURIUTtFQUNLLGFBQUE7QUNLYjtBREphO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDTWpCO0FESEE7RUFDSSxZQUFBO0FDTUo7QURKQTtFQUNHO0lBQ0csd0JBQUE7RUNPSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kb2Mvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRcbiAgICBtYXJnaW4tdG9wOiA2NXB4XG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1XG4gICAgLy8gd2lkdGg6IDE1MDBweFxuICAgIC5leGFtcGxlcy1jb250YWluZXJcbiAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiA0MHB4XG4gICAgICAgIC5leGFtcGxlcy13cmFwcGVyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXRcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcFxuICAgICAgICAgICAgd2lkdGg6IDE4MDBweFxuICAgICAgICAgICAgLmV4YW1wbGVcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4XG4gICAgICAgICAgICAgICAgLm1hdC1jYXJkXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHhcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgLm1vZGVsLXdyYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAuZG9jLWNvbnRhaW5lclxuICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAgICAgLmRvY1xuICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHhcbiAgICAgICAgICAgICAubWF0LWNhcmRcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweFxuICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYyMHB4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxubWF0LWNhcmRcbiAgICB3aWR0aDogNzAwcHhcblxuQG1lZGlhIChtYXgtd2lkdGg6IDYyMHB4KVxuICAgLmV4YW1wbGVzLWNvbnRhaW5lclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50XG4iLCIuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG4uY29udGVudCAuZXhhbXBsZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG4uY29udGVudCAuZXhhbXBsZXMtY29udGFpbmVyIC5leGFtcGxlcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTgwMHB4O1xufVxuLmNvbnRlbnQgLmV4YW1wbGVzLWNvbnRhaW5lciAuZXhhbXBsZXMtd3JhcHBlciAuZXhhbXBsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY29udGVudCAuZXhhbXBsZXMtY29udGFpbmVyIC5leGFtcGxlcy13cmFwcGVyIC5leGFtcGxlIC5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGVudCAuZXhhbXBsZXMtY29udGFpbmVyIC5leGFtcGxlcy13cmFwcGVyIC5leGFtcGxlIC5tYXQtY2FyZCAubW9kZWwtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLmNvbnRlbnQgLmV4YW1wbGVzLWNvbnRhaW5lciAuZXhhbXBsZXMtd3JhcHBlciAuZXhhbXBsZSAubWF0LWNhcmQgLm1vZGVsLXdyYXAgLnZhbHVlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGVudCAuZG9jLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGVudCAuZG9jLWNvbnRhaW5lciAuZG9jIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250ZW50IC5kb2MtY29udGFpbmVyIC5kb2MgLm1hdC1jYXJkIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgbWF4LXdpZHRoOiA2MjBweDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogNzAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xuICAuZXhhbXBsZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/doc/options/options.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/doc/options/options.component.ts ***!
  \*******************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsComponent = /** @class */ (function () {
    function OptionsComponent() {
        this.phone = '123456789';
        this.customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]') } };
    }
    OptionsComponent.prototype.checkChoose = function (input, curr) {
        return input === curr ? true : false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('docs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OptionsComponent.prototype, "docs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('examples'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OptionsComponent.prototype, "examples", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('choose'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OptionsComponent.prototype, "choose", void 0);
    OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/doc/options/options.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./options.component.sass */ "./src/app/main/doc/options/options.component.sass")).default]
        })
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/main/get-started-page/get-started-page.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/get-started-page/get-started-page.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".install {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.instal-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: justify;\n}\n\ntable {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-left: 10px;\n}\n\n.mat-header-cell {\n  color: black;\n  font-size: 15px;\n}\n\n.mat-column-example {\n  padding-left: 30px;\n}\n\n.mat-column-meaning {\n  padding-left: 25px;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n  padding-right: 28px;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n\n.tables {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.pattern {\n  margin-bottom: 20px;\n}\n\n.button-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.next {\n  margin-bottom: 30px;\n}\n\n.table-wrapper {\n  flex-direction: row;\n}\n\nmat-icon {\n  width: 15px;\n  height: 15px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25neC1tYXNrLXBhZ2Uvbmd4LW1hc2stcGFnZS9zcmMvYXBwL21haW4vZ2V0LXN0YXJ0ZWQtcGFnZS9nZXQtc3RhcnRlZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2dldC1zdGFydGVkLXBhZ2UvZ2V0LXN0YXJ0ZWQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkU7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEU7RUFDRSw4QkFBQTtBQ1FKOztBRExFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNRTjs7QURORTtFQUNJLG1CQUFBO0FDU047O0FEUEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1VKOztBRFJFO0VBRUksbUJBQUE7QUNVTjs7QURSRTtFQUNJLG1CQUFBO0FDV047O0FEVEU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWU4iLCJmaWxlIjoic3JjL2FwcC9tYWluL2dldC1zdGFydGVkLXBhZ2UvZ2V0LXN0YXJ0ZWQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0YWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbi5pbnN0YWwtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYXQtY29sdW1uLWV4YW1wbGUge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5tYXQtY29sdW1uLW1lYW5pbmcge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbiAgLm1hdC10YWJsZS1zdGlja3k6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgfVxuICAubWF0LXRhYmxlLXN0aWNreTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIH1cblxuICAudGFibGVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnBhdHRlcm4ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuYnV0dG9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubmV4dCB7XG4gICAgLy8gd2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICAudGFibGUtd3JhcHBlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIG1hdC1pY29uIHtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfSIsIi5pbnN0YWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5pbnN0YWwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubWF0LWNvbHVtbi1leGFtcGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4ubWF0LWNvbHVtbi1tZWFuaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4ubWF0LXRhYmxlLXN0aWNreTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG59XG5cbi5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi50YWJsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhdHRlcm4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5leHQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbm1hdC1pY29uIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/get-started-page/get-started-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/get-started-page/get-started-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: GetStartedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPageComponent", function() { return GetStartedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




// const ELEMENT_DATA: TableElement[] = [
//   {
//     position: 1,
//     mask: '9999-99-99',
//     example: '2017-04-15',
//   },
//   {
//     position: 2,
//     mask: '0*.00',
//     example: '2017.22',
//   },
//   {
//     position: 3,
//     mask: '000.000.000-99',
//     example: '048.457.987-98',
//   },
//   {
//     position: 4,
//     mask: 'AAAA',
//     example: '0F6g',
//   },
//   {
//     position: 5,
//     mask: 'SSSS',
//     example: 'asDF',
//   }
// ];
var codePattern = [
    {
        position: 1,
        mask: '0',
        example: 'digits (like 0 to 9 numbers)',
    },
    {
        position: 2,
        mask: '9',
        example: 'digits (like 0 to 9 numbers), but optional',
    },
    {
        position: 3,
        mask: 'A',
        example: 'letters (uppercase or lowercase) and digits',
    },
    {
        position: 4,
        mask: 'S',
        example: 'only letters (uppercase or lowercase)',
    }
];
var GetStartedPageComponent = /** @class */ (function () {
    function GetStartedPageComponent(_iconRegistry, _sanitizer) {
        this._iconRegistry = _iconRegistry;
        this._sanitizer = _sanitizer;
        this.displayedColumns = ['mask', 'example'];
        //  public dataSource: TableElement[] = ELEMENT_DATA;
        this.dataCode = codePattern;
        this.displayCol = ['code', 'meaning'];
        // tslint:disable-next-line:no-any
        this.quickStart = [
            {
                header: 'Installing',
                code: "npm install --save ngx-mask"
            },
            {
                header: 'Quickstart',
                text: 'Import ngx-mask module in Angular app.',
                code: "import {NgxMaskModule} from 'ngx-mask'\n\n        (...)\n        @NgModule({\n          (...)\n          imports: [\n            NgxMaskModule.forRoot(options)\n          ]\n          (...)\n        })"
            },
            {
                text: 'Then, just define masks in inputs.'
            },
            {
                header: 'Usage',
                code: "<input type='text' mask='{here comes your mask}' >"
            },
            {
                text: 'Also you can use mask pipe'
            },
            {
                header: 'Usage',
                code: "<span>{{phone | mask: '(000) 000-0000'}}</span>"
            },
            {
                header: 'Default patterns'
            },
        ];
    }
    GetStartedPageComponent.prototype.ngOnInit = function () {
        this._iconRegistry.addSvgIcon('chevron-right-solid', this._sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/chevron-right-solid.svg'));
    };
    GetStartedPageComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    GetStartedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-started-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-started-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/get-started-page/get-started-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-started-page.component.scss */ "./src/app/main/get-started-page/get-started-page.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], GetStartedPageComponent);
    return GetStartedPageComponent;
}());



/***/ }),

/***/ "./src/app/main/main-page/main-page.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/main-page/main-page.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-size: cover;\n  height: 350px;\n}\n\n.main-wrapper {\n  text-align: center;\n}\n\nh1 {\n  font-size: 55px;\n  color: #ffcb02;\n}\n\n.mat-display-1 {\n  margin-top: 100px;\n}\n\n.get-started {\n  margin-top: 50px;\n}\n\n.meet-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  background: #f5f5f5;\n}\n\n.meet-wrap .artcl-wrap-head {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 500px;\n  text-align: center;\n}\n\n.meet-wrap .artcl-wrap-head .text-wrap p {\n  font-size: 18px;\n}\n\n.meet-wrap .artcl-wrap-separ {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 600px;\n  height: 180px;\n}\n\n.meet-wrap .artcl-wrap-separ .img-wrap {\n  height: 120px;\n  width: 200px;\n}\n\n.meet-wrap .artcl-wrap-separ .text-wrap {\n  width: 300px;\n  text-align: center;\n}\n\n.meet-wrap .artcl-wrap-separ .text-wrap p {\n  font-size: 18px;\n}\n\n.meet-wrap mat-card.secure-wrap {\n  margin-top: 30px;\n}\n\n.meet-wrap .artcl-wrap-secure {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 600px;\n  height: 240px;\n}\n\n.meet-wrap .artcl-wrap-secure .img-wrap {\n  height: 120px;\n  width: 200px;\n}\n\n.meet-wrap .artcl-wrap-secure .text-wrap {\n  width: 300px;\n  text-align: center;\n}\n\n.meet-wrap .artcl-wrap-secure .text-wrap p {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL25neC1tYXNrLXBhZ2Uvbmd4LW1hc2stcGFnZS9zcmMvYXBwL21haW4vbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FERkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDS0o7O0FESkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTVI7O0FESlk7RUFDSSxlQUFBO0FDTWhCOztBREZJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSVI7O0FESFE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0taOztBREhRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDS1o7O0FESlk7RUFDSSxlQUFBO0FDTWhCOztBRERJO0VBQ0ksZ0JBQUE7QUNHUjs7QURESTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0dSOztBREZRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNJWjs7QURGUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0laOztBREhZO0VBQ0ksZUFBQTtBQ0toQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMzUwcHg7XG59XG4ubWFpbi13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LDIwMywyKTtcbn1cbi5tYXQtZGlzcGxheS0xIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbi5nZXQtc3RhcnRlZCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm1lZXQtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAuYXJ0Y2wtd3JhcC1oZWFkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLnRleHQtd3JhcCB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXJ0Y2wtd3JhcC1zZXBhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAuaW1nLXdyYXAge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC13cmFwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWNhcmQuc2VjdXJlLXdyYXAge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4XG4gICAgfVxuICAgIC5hcnRjbC13cmFwLXNlY3VyZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgICAgICAuaW1nLXdyYXAge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC13cmFwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDU1cHg7XG4gIGNvbG9yOiAjZmZjYjAyO1xufVxuXG4ubWF0LWRpc3BsYXktMSB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uZ2V0LXN0YXJ0ZWQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubWVldC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuLm1lZXQtd3JhcCAuYXJ0Y2wtd3JhcC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZWV0LXdyYXAgLmFydGNsLXdyYXAtaGVhZCAudGV4dC13cmFwIHAge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWVldC13cmFwIC5hcnRjbC13cmFwLXNlcGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMTgwcHg7XG59XG4ubWVldC13cmFwIC5hcnRjbC13cmFwLXNlcGFyIC5pbWctd3JhcCB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5tZWV0LXdyYXAgLmFydGNsLXdyYXAtc2VwYXIgLnRleHQtd3JhcCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lZXQtd3JhcCAuYXJ0Y2wtd3JhcC1zZXBhciAudGV4dC13cmFwIHAge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWVldC13cmFwIG1hdC1jYXJkLnNlY3VyZS13cmFwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tZWV0LXdyYXAgLmFydGNsLXdyYXAtc2VjdXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMjQwcHg7XG59XG4ubWVldC13cmFwIC5hcnRjbC13cmFwLXNlY3VyZSAuaW1nLXdyYXAge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG4ubWVldC13cmFwIC5hcnRjbC13cmFwLXNlY3VyZSAudGV4dC13cmFwIHtcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWVldC13cmFwIC5hcnRjbC13cmFwLXNlY3VyZSAudGV4dC13cmFwIHAge1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/main-page/main-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/main-page/main-page.component.ts ***!
  \*******************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main-page/main-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main/main-page/main-page.component.scss")).default]
        })
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: hljsLanguages, MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _doc_options_options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doc/options/options.component */ "./src/app/main/doc/options/options.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main/main-page/main-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _doc_mask_component_mask_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doc/mask-component/mask.component */ "./src/app/main/doc/mask-component/mask.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _get_started_page_get_started_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./get-started-page/get-started-page.component */ "./src/app/main/get-started-page/get-started-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_14__);















var routes = [
    { path: 'main', component: _doc_mask_component_mask_component__WEBPACK_IMPORTED_MODULE_8__["MaskComponent"] },
    { path: 'mask-component', component: _doc_mask_component_mask_component__WEBPACK_IMPORTED_MODULE_8__["MaskComponent"] },
    { path: 'getting-start', component: _get_started_page_get_started_page_component__WEBPACK_IMPORTED_MODULE_11__["GetStartedPageComponent"] }
];
// tslint:disable-next-line: no-any
function hljsLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_13___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_14___default.a }
    ];
}
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _get_started_page_get_started_page_component__WEBPACK_IMPORTED_MODULE_11__["GetStartedPageComponent"], _doc_mask_component_mask_component__WEBPACK_IMPORTED_MODULE_8__["MaskComponent"], _doc_options_options_component__WEBPACK_IMPORTED_MODULE_1__["OptionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"].forRoot({
                    languages: hljsLanguages
                }),
                ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");













var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]
            ],
            exports: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/assets/content/commonCases.ts":
/*!*******************************************!*\
  !*** ./src/assets/content/commonCases.ts ***!
  \*******************************************/
/*! exports provided: ComDocs, ComExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComDocs", function() { return ComDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComExamples", function() { return ComExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


// tslint:disable-next-line: no-any
var ComDocs = [
    {
        header: 'Date',
        text: '',
        code: "<input matInput mask=\"00/00/0000\"/>",
        id: '1',
        anchor: 'prefix'
    },
    {
        header: 'Date and hour',
        text: '',
        code: "<input matInput mask=\"00/00/00 00:00:00\" />",
        id: '2',
        anchor: 'date'
    },
    {
        header: 'Hour',
        text: '',
        code: "<input matInput mask=\"00:00:00\" />",
        id: '3',
        anchor: 'hour'
    },
    {
        header: 'Valid 24 hour format',
        text: '',
        code: "<input matInput mask=\"Hh:m0:s0\" />",
        id: '4',
        anchor: 'valid24'
    },
    {
        header: 'Mixed types',
        text: '',
        code: "<input matInput mask=\"AAA 000-S0S\" />",
        id: '5',
        anchor: 'mixed'
    },
    {
        header: 'Valid date and month',
        text: '',
        code: "<input matInput mask=\"d0/M0/0000\" />",
        id: '6',
        anchor: 'validdate'
    }
];
// tslint:disable-next-line: no-any
var ComExamples = [
    {
        _placeholder: 'Date',
        _mask: '00/00/0000',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'Date and Hour',
        _mask: '00/00/00 00:00:00',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'Hour',
        _mask: '00:00:00',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'Valid 24 hour format',
        _mask: 'Hh:m0:s0',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'Mixed Type',
        _mask: 'AAA 000-S0S',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'Valid date and month',
        _mask: 'd0/M0/0000',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
];


/***/ }),

/***/ "./src/assets/content/lists.ts":
/*!*************************************!*\
  !*** ./src/assets/content/lists.ts ***!
  \*************************************/
/*! exports provided: lists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lists", function() { return lists; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// tslint:disable-next-line: no-any
var lists = [
    {
        header: 'Common cases',
        id: '1',
        text: [
            {
                content: 'Date',
                id: '1',
                scrollTo: 'prefix'
            },
            {
                content: 'Date and hour',
                id: '2',
                scrollTo: 'date'
            },
            {
                content: 'Hour',
                id: '3',
                scrollTo: 'hour'
            },
            {
                content: 'Valid 24 hour format',
                id: '4',
                scrollTo: 'valid24'
            },
            {
                content: 'Mixed types',
                id: '5',
                scrollTo: 'mixed'
            },
            {
                content: 'Valid date and month',
                id: '6',
                scrollTo: 'validdate'
            },
        ],
    },
    {
        header: 'Options',
        id: '2',
        text: [
            {
                content: 'Prefix',
                id: '1',
                scrollTo: 'prefix'
            },
            {
                content: 'Suffix',
                id: '2',
                scrollTo: 'suffix'
            },
            {
                content: 'dropSpecialCharacters',
                id: '3',
                scrollTo: 'special-ch'
            },
            {
                content: 'showMaskTyped',
                id: '4',
                scrollTo: 'show-mask'
            },
            {
                content: 'clearIfNotMatch',
                id: '5',
                scrollTo: 'clear'
            },
            {
                content: 'Validation',
                id: '6',
                scrollTo: 'valid'
            },
        ],
    },
    {
        header: 'Separators',
        id: '3',
        text: [
            {
                content: 'Separator',
                id: '1',
                scrollTo: 'sep'
            },
            {
                content: 'Dot separator',
                id: '2',
                scrollTo: 'Dsep'
            },
            {
                content: 'Comma separator',
                id: '3',
                scrollTo: 'comma_sep',
            }
        ],
    },
    {
        header: 'Other',
        id: '4',
        text: [
            {
                content: 'Secure input',
                id: '1'
            },
            {
                content: 'Pipe',
                id: '2'
            },
            {
                content: 'specialCharacters',
                id: '3',
            },
        ],
    },
];


/***/ }),

/***/ "./src/assets/content/optional.ts":
/*!****************************************!*\
  !*** ./src/assets/content/optional.ts ***!
  \****************************************/
/*! exports provided: OptDocs, OptExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptDocs", function() { return OptDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptExamples", function() { return OptExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


// tslint:disable-next-line: no-any
var OptDocs = [
    {
        header: 'Prefix (string)',
        text: 'You can add prefix to you masked value',
        code: "<input type='text' prefix=\"+7 \" mask=\"(000) 000 00 00\" >",
        id: '1',
        anchor: 'prefix'
    },
    {
        header: 'Suffix (string)',
        text: 'You can add suffix to you masked value',
        code: "<input type='text' suffix=\" $\" mask=\"0000\" >",
        id: '2',
        anchor: 'suffix'
    },
    {
        header: 'dropSpecialCharacters (boolean)',
        text: 'You can choose if mask will drop special character in the model, or not, default value true',
        code: "<input type='text' [dropSpecialCharacters]=\"false\" mask=\"000-000.00\" >",
        id: '3',
        anchor: 'special-ch'
    },
    {
        header: 'showMaskTyped (boolean)',
        text: 'You can choose if mask is shown while typing, or not, default value false',
        code: " <input mask=\"(000) 000-0000\" prefix=\"+7\" [showMaskTyped] = \"true\">",
        id: '4',
        anchor: 'show-mask'
    },
    {
        header: 'clearIfNotMatch (boolean)',
        text: 'You can choose clear the input if the input value not match the mask, default value false',
        code: "<input type='text' [clearIfNotMatch]=\"true\" mask=\"000-000.00\" >",
        id: '5',
        anchor: 'clear'
    },
    {
        header: 'FormControl validation',
        text: 'You can validate your formControl, default value is true',
        code: " <input type='text' mask=\"00 00\" [validation]=\"true\">",
        id: '6',
        anchor: 'valid'
    }
];
// tslint:disable-next-line: no-any
var OptExamples = [
    {
        _placeholder: 'prefix',
        _prefix: '+75',
        _mask: '(00) 000 000',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'suffix',
        _suffix: ' $',
        _mask: '0 000',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'dropSpecialCharacters',
        _dropSpecialCharacters: false,
        _mask: '000-000.00',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'showMaskTyped',
        _showMaskTyped: true,
        _mask: '(000) 000-0000',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'clearIfNotMatch',
        _clearIfNotMatch: true,
        _mask: '000-000.00',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'validation',
        _validation: true,
        _mask: '000-000.00',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
];


/***/ }),

/***/ "./src/assets/content/other.ts":
/*!*************************************!*\
  !*** ./src/assets/content/other.ts ***!
  \*************************************/
/*! exports provided: OthDocs, OthExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthDocs", function() { return OthDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthExamples", function() { return OthExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


// tslint:disable-next-line: no-any
var OthDocs = [
    {
        header: 'Secure input',
        text: 'You can hide symbols in input field and get the actual value in formcontrol',
        code: " <input [hiddenInput]=\"true\" mask=\"XXX/X0/0000\">",
        id: '1'
    },
    {
        header: 'Pipe',
        text: 'Also you can use mask pipe',
        code: " <span>{{phone | mask: '(000) 000-0000'}}</span>",
        id: '2'
    },
    {
        header: 'specialCharacters',
        text: '',
        code: " <input type='text' [specialCharacters]=\"[ '[' ,']' , '\\' ]\" mask=\"[00][000]\" >",
        id: '3'
    },
];
// tslint:disable-next-line: no-any
var OthExamples = [
    {
        _placeholder: 'Secure input',
        _hiddenInput: true,
        _mask: 'XXX/X0/0000',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _pipe: '(000) 000-0000',
    },
    {
        _placeholder: 'specialCharacters',
        _specialCharacters: "[ '[' ,']' , '\\' ]",
        _mask: '[00]\[000]',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
];


/***/ }),

/***/ "./src/assets/content/separators.ts":
/*!******************************************!*\
  !*** ./src/assets/content/separators.ts ***!
  \******************************************/
/*! exports provided: SepDocs, SepExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SepDocs", function() { return SepDocs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SepExamples", function() { return SepExamples; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


// tslint:disable-next-line: no-any
var SepDocs = [
    {
        header: 'Thousand separator',
        text: 'You can devide your input by thousands',
        code: "<input type='text' mask=\"separator\">",
        id: '1',
        anchor: 'sep'
    },
    {
        header: 'Dot separator',
        text: 'For separate input with dots',
        code: "<input type='text' mask=\"separator\" thousandSeparator=\".\"/>",
        id: '2',
        anchor: 'Dsep'
    },
    {
        header: 'Dot separator',
        text: "For limiting decimal precision add ',' and the precision you want to limit too on the input. 2 is useful for currency. 0 will prevent decimals completely.",
        code: "<input type='text' mask=\"separator.2\" thousandSeparator=\".\"/>",
        id: '2'
    },
    {
        header: 'Dot separator',
        text: 'without decimal part',
        code: "<input type='text' mask=\"separator.0\" thousandSeparator=\".\"/>",
        id: '2'
    },
    {
        header: 'Comma separator',
        text: "For separate input with commas",
        code: "<input type='text' mask=\"separator\" thousandSeparator=\",\"/>",
        id: '3',
        anchor: 'comma_sep'
    },
    {
        header: 'Comma separator',
        text: "For limiting decimal precision add '.' and the precision you want to limit too on the input. 2 is useful for currency. 0 will prevent decimals completely.",
        code: "<input type='text' mask=\"separator.2\" thousandSeparator=\",\"/>",
        id: '3'
    },
    {
        header: 'Comma separator',
        text: 'without decimal part',
        code: "<input type='text' mask=\"separator.0\" thousandSeparator=\",\"/>",
        id: '3'
    },
];
// tslint:disable-next-line: no-any
var SepExamples = [
    {
        _placeholder: 'Separator',
        _mask: 'separator',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'separator',
        _mask: 'separator',
        _thousandSeparator: '.',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'separator.2',
        _mask: 'separator.2',
        _thousandSeparator: '.',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'separator.0',
        _mask: 'separator.0',
        _thousandSeparator: '.',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'separator',
        _mask: 'separator',
        _thousandSeparator: ',',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'separator.2',
        _clearIfNotMatch: true,
        _mask: 'separator.2',
        _thousandSeparator: ',',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
    {
        _placeholder: 'separator.0',
        _mask: 'separator.0',
        _thousandSeparator: ',',
        control: { form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''), model: '' }
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ngx-mask-page/ngx-mask-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseModule = void 0;
var common_1 = require("@nestjs/common");
var enterprise_service_1 = require("./enterprise.service");
var enterprise_controller_1 = require("./enterprise.controller");
var enterprise_providers_1 = require("./enterprise.providers");
var EnterpriseModule = (function () {
    function EnterpriseModule() {
    }
    EnterpriseModule = __decorate([
        common_1.Module({
            imports: [],
            controllers: [enterprise_controller_1.EnterpriseController],
            providers: __spreadArray(__spreadArray([], enterprise_providers_1.enterpriseProvider), [enterprise_service_1.EnterpriseService])
        })
    ], EnterpriseModule);
    return EnterpriseModule;
}());
exports.EnterpriseModule = EnterpriseModule;
//# sourceMappingURL=enterprise.module.js.map
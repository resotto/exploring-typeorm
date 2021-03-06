"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var a_entity_1 = require("./a.entity");
var CDbModel = /** @class */ (function () {
    function CDbModel() {
    }
    __decorate([
        typeorm_1.ManyToOne(function () { return a_entity_1.ADbModel; }, { primary: true }),
        typeorm_1.JoinColumn({ name: 'a_id' })
    ], CDbModel.prototype, "a");
    __decorate([
        typeorm_1.Column({ type: 'text' })
    ], CDbModel.prototype, "name");
    CDbModel = __decorate([
        typeorm_1.Entity({ schema: 'public', name: 'c' })
    ], CDbModel);
    return CDbModel;
}());
exports.CDbModel = CDbModel;

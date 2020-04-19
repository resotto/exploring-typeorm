"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var b_entity_1 = require("./b.entity");
var ADbModel = /** @class */ (function () {
    function ADbModel() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: 'a_id' })
    ], ADbModel.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'text' })
    ], ADbModel.prototype, "name");
    __decorate([
        typeorm_1.OneToMany(function () { return b_entity_1.BDbModel; }, function (b) { return b.a; })
    ], ADbModel.prototype, "b");
    ADbModel = __decorate([
        typeorm_1.Entity({ schema: 'public', name: 'a' })
    ], ADbModel);
    return ADbModel;
}());
exports.ADbModel = ADbModel;

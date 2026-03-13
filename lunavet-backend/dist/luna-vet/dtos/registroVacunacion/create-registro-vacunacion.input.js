"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegistroVacunacionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateRegistroVacunacionInput = class CreateRegistroVacunacionInput {
    paciente_id;
    vacuna_id;
    fecha_aplicacion;
    proxima_dosis;
};
exports.CreateRegistroVacunacionInput = CreateRegistroVacunacionInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateRegistroVacunacionInput.prototype, "paciente_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateRegistroVacunacionInput.prototype, "vacuna_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateRegistroVacunacionInput.prototype, "fecha_aplicacion", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], CreateRegistroVacunacionInput.prototype, "proxima_dosis", void 0);
exports.CreateRegistroVacunacionInput = CreateRegistroVacunacionInput = __decorate([
    (0, graphql_1.InputType)()
], CreateRegistroVacunacionInput);
//# sourceMappingURL=create-registro-vacunacion.input.js.map
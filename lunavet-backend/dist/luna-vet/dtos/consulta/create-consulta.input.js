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
exports.CreateConsultaInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateConsultaInput = class CreateConsultaInput {
    cita_id;
    peso_actual;
    temperatura;
    frecuencia_cardiaca;
    diagnostico;
    observaciones;
};
exports.CreateConsultaInput = CreateConsultaInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateConsultaInput.prototype, "cita_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], CreateConsultaInput.prototype, "peso_actual", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], CreateConsultaInput.prototype, "temperatura", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateConsultaInput.prototype, "frecuencia_cardiaca", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateConsultaInput.prototype, "diagnostico", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateConsultaInput.prototype, "observaciones", void 0);
exports.CreateConsultaInput = CreateConsultaInput = __decorate([
    (0, graphql_1.InputType)()
], CreateConsultaInput);
//# sourceMappingURL=create-consulta.input.js.map
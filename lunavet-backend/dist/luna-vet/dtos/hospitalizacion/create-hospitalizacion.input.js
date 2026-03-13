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
exports.CreateHospitalizacionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateHospitalizacionInput = class CreateHospitalizacionInput {
    paciente_id;
    empleado_id;
    fecha_ingreso;
    fecha_alta;
    motivo;
    estado;
};
exports.CreateHospitalizacionInput = CreateHospitalizacionInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateHospitalizacionInput.prototype, "paciente_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateHospitalizacionInput.prototype, "empleado_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateHospitalizacionInput.prototype, "fecha_ingreso", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], CreateHospitalizacionInput.prototype, "fecha_alta", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHospitalizacionInput.prototype, "motivo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHospitalizacionInput.prototype, "estado", void 0);
exports.CreateHospitalizacionInput = CreateHospitalizacionInput = __decorate([
    (0, graphql_1.InputType)()
], CreateHospitalizacionInput);
//# sourceMappingURL=create-hospitalizacion.input.js.map
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
exports.CreateEmpleadoInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateEmpleadoInput = class CreateEmpleadoInput {
    usuario_id;
    nombre;
    apellido_paterno;
    apellido_materno;
    telefono;
    email_empleado;
    puesto;
    fecha_contratacion;
};
exports.CreateEmpleadoInput = CreateEmpleadoInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateEmpleadoInput.prototype, "usuario_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "nombre", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "apellido_paterno", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "apellido_materno", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "telefono", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "email_empleado", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEmpleadoInput.prototype, "puesto", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateEmpleadoInput.prototype, "fecha_contratacion", void 0);
exports.CreateEmpleadoInput = CreateEmpleadoInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEmpleadoInput);
//# sourceMappingURL=create-empleado.input.js.map
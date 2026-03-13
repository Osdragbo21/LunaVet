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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const paciente_entity_1 = require("../pacientes/paciente.entity");
const empleado_entity_1 = require("../empleados/empleado.entity");
const consulta_entity_1 = require("../consultas/consulta.entity");
let Cita = class Cita {
    id_cita;
    paciente_id;
    paciente;
    empleado_id;
    empleado;
    fecha_hora;
    motivo;
    estado;
    consulta;
};
exports.Cita = Cita;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cita.prototype, "id_cita", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cita.prototype, "paciente_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => paciente_entity_1.Paciente),
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente),
    (0, typeorm_1.JoinColumn)({ name: 'paciente_id' }),
    __metadata("design:type", paciente_entity_1.Paciente)
], Cita.prototype, "paciente", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cita.prototype, "empleado_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => empleado_entity_1.Empleado),
    (0, typeorm_1.ManyToOne)(() => empleado_entity_1.Empleado),
    (0, typeorm_1.JoinColumn)({ name: 'empleado_id' }),
    __metadata("design:type", empleado_entity_1.Empleado)
], Cita.prototype, "empleado", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Cita.prototype, "fecha_hora", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Cita.prototype, "motivo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cita.prototype, "estado", void 0);
__decorate([
    (0, graphql_1.Field)(() => consulta_entity_1.Consulta, { nullable: true }),
    (0, typeorm_1.OneToOne)(() => consulta_entity_1.Consulta, (consulta) => consulta.cita),
    __metadata("design:type", typeof (_a = typeof consulta_entity_1.Consulta !== "undefined" && consulta_entity_1.Consulta) === "function" ? _a : Object)
], Cita.prototype, "consulta", void 0);
exports.Cita = Cita = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('citas')
], Cita);
//# sourceMappingURL=cita.enttity.js.map
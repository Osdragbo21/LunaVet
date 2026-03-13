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
exports.VeterinarioEspecialidad = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const empleado_entity_1 = require("../empleados/empleado.entity");
let VeterinarioEspecialidad = class VeterinarioEspecialidad {
    id_vet_esp;
    empleado_id;
    empleado;
    especialidad;
};
exports.VeterinarioEspecialidad = VeterinarioEspecialidad;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VeterinarioEspecialidad.prototype, "id_vet_esp", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VeterinarioEspecialidad.prototype, "empleado_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => empleado_entity_1.Empleado),
    (0, typeorm_1.ManyToOne)(() => empleado_entity_1.Empleado, (empleado) => empleado.especialidades),
    (0, typeorm_1.JoinColumn)({ name: 'empleado_id' }),
    __metadata("design:type", empleado_entity_1.Empleado)
], VeterinarioEspecialidad.prototype, "empleado", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VeterinarioEspecialidad.prototype, "especialidad", void 0);
exports.VeterinarioEspecialidad = VeterinarioEspecialidad = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('veterinarios_especialidades')
], VeterinarioEspecialidad);
//# sourceMappingURL=veterinario-especialidad.entity.js.map
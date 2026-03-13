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
exports.Empleado = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios/usuario.entity");
const veterinario_especialidad_entity_1 = require("../veterinarios-especialidades/veterinario-especialidad.entity");
let Empleado = class Empleado {
    id_empleado;
    usuario_id;
    usuario;
    nombre;
    apellido_paterno;
    apellido_materno;
    telefono;
    email_empleado;
    puesto;
    fecha_contratacion;
    especialidades;
};
exports.Empleado = Empleado;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empleado.prototype, "id_empleado", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Empleado.prototype, "usuario_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.OneToOne)(() => usuario_entity_1.Usuario),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Empleado.prototype, "usuario", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "nombre", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "apellido_paterno", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "apellido_materno", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "telefono", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "email_empleado", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Empleado.prototype, "puesto", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Empleado.prototype, "fecha_contratacion", void 0);
__decorate([
    (0, graphql_1.Field)(() => [veterinario_especialidad_entity_1.VeterinarioEspecialidad], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => veterinario_especialidad_entity_1.VeterinarioEspecialidad, (vetEsp) => vetEsp.empleado),
    __metadata("design:type", Array)
], Empleado.prototype, "especialidades", void 0);
exports.Empleado = Empleado = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('empleados')
], Empleado);
//# sourceMappingURL=empleado.entity.js.map
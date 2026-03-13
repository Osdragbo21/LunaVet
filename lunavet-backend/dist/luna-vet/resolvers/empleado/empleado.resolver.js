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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const empleado_entity_1 = require("../../entities/empleados/empleado.entity");
const empleado_service_1 = require("../../services/empleado/empleado.service");
const create_empleado_input_1 = require("../../dtos/empleado/create-empleado.input");
let EmpleadoResolver = class EmpleadoResolver {
    empleadoService;
    constructor(empleadoService) {
        this.empleadoService = empleadoService;
    }
    findAll() {
        return this.empleadoService.findAll();
    }
    createEmpleado(createEmpleadoInput) {
        return this.empleadoService.create(createEmpleadoInput);
    }
};
exports.EmpleadoResolver = EmpleadoResolver;
__decorate([
    (0, graphql_1.Query)(() => [empleado_entity_1.Empleado], { name: 'empleados' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpleadoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => empleado_entity_1.Empleado),
    __param(0, (0, graphql_1.Args)('createEmpleadoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_empleado_input_1.CreateEmpleadoInput]),
    __metadata("design:returntype", void 0)
], EmpleadoResolver.prototype, "createEmpleado", null);
exports.EmpleadoResolver = EmpleadoResolver = __decorate([
    (0, graphql_1.Resolver)(() => empleado_entity_1.Empleado),
    __metadata("design:paramtypes", [empleado_service_1.EmpleadoService])
], EmpleadoResolver);
//# sourceMappingURL=empleado.resolver.js.map
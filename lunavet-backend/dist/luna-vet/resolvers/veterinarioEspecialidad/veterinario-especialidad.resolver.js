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
exports.VeterinarioEspecialidadResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const veterinario_especialidad_entity_1 = require("../../entities/veterinarios-especialidades/veterinario-especialidad.entity");
const veterinario_especialidad_service_1 = require("../../services/veterinarioEspecialidad/veterinario-especialidad.service");
const create_veterinario_especialidad_input_1 = require("../../dtos/veterinarioEspecialidad/create-veterinario-especialidad.input");
let VeterinarioEspecialidadResolver = class VeterinarioEspecialidadResolver {
    vetEspService;
    constructor(vetEspService) {
        this.vetEspService = vetEspService;
    }
    findAll() {
        return this.vetEspService.findAll();
    }
    createVeterinarioEspecialidad(createInput) {
        return this.vetEspService.create(createInput);
    }
};
exports.VeterinarioEspecialidadResolver = VeterinarioEspecialidadResolver;
__decorate([
    (0, graphql_1.Query)(() => [veterinario_especialidad_entity_1.VeterinarioEspecialidad], { name: 'veterinarioEspecialidades' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeterinarioEspecialidadResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => veterinario_especialidad_entity_1.VeterinarioEspecialidad),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_veterinario_especialidad_input_1.CreateVeterinarioEspecialidadInput]),
    __metadata("design:returntype", void 0)
], VeterinarioEspecialidadResolver.prototype, "createVeterinarioEspecialidad", null);
exports.VeterinarioEspecialidadResolver = VeterinarioEspecialidadResolver = __decorate([
    (0, graphql_1.Resolver)(() => veterinario_especialidad_entity_1.VeterinarioEspecialidad),
    __metadata("design:paramtypes", [veterinario_especialidad_service_1.VeterinarioEspecialidadService])
], VeterinarioEspecialidadResolver);
//# sourceMappingURL=veterinario-especialidad.resolver.js.map
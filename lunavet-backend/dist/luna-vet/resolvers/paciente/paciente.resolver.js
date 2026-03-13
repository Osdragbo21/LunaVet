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
exports.PacienteResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const paciente_entity_1 = require("../../entities/pacientes/paciente.entity");
const paciente_service_1 = require("../../services/paciente/paciente.service");
const create_paciente_input_1 = require("../../dtos/paciente/create-paciente.input");
let PacienteResolver = class PacienteResolver {
    pacienteService;
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    findAll() {
        return this.pacienteService.findAll();
    }
    createPaciente(createPacienteInput) {
        return this.pacienteService.create(createPacienteInput);
    }
};
exports.PacienteResolver = PacienteResolver;
__decorate([
    (0, graphql_1.Query)(() => [paciente_entity_1.Paciente], { name: 'pacientes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PacienteResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => paciente_entity_1.Paciente),
    __param(0, (0, graphql_1.Args)('createPacienteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_input_1.CreatePacienteInput]),
    __metadata("design:returntype", void 0)
], PacienteResolver.prototype, "createPaciente", null);
exports.PacienteResolver = PacienteResolver = __decorate([
    (0, graphql_1.Resolver)(() => paciente_entity_1.Paciente),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteResolver);
//# sourceMappingURL=paciente.resolver.js.map
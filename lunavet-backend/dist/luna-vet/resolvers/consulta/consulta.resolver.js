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
exports.ConsultaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const consulta_entity_1 = require("../../entities/consultas/consulta.entity");
const consulta_service_1 = require("../../services/consulta/consulta.service");
const create_consulta_input_1 = require("../../dtos/consulta/create-consulta.input");
let ConsultaResolver = class ConsultaResolver {
    consultaService;
    constructor(consultaService) {
        this.consultaService = consultaService;
    }
    findAll() {
        return this.consultaService.findAll();
    }
    createConsulta(createConsultaInput) {
        return this.consultaService.create(createConsultaInput);
    }
};
exports.ConsultaResolver = ConsultaResolver;
__decorate([
    (0, graphql_1.Query)(() => [consulta_entity_1.Consulta], { name: 'consultas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsultaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => consulta_entity_1.Consulta),
    __param(0, (0, graphql_1.Args)('createConsultaInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consulta_input_1.CreateConsultaInput]),
    __metadata("design:returntype", void 0)
], ConsultaResolver.prototype, "createConsulta", null);
exports.ConsultaResolver = ConsultaResolver = __decorate([
    (0, graphql_1.Resolver)(() => consulta_entity_1.Consulta),
    __metadata("design:paramtypes", [consulta_service_1.ConsultaService])
], ConsultaResolver);
//# sourceMappingURL=consulta.resolver.js.map
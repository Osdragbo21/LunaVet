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
exports.ArchivoConsultaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const archivo_consulta_entity_1 = require("../../entities/archivos-consulta/archivo-consulta.entity");
const archivo_consulta_service_1 = require("../../services/archivoConsulta/archivo-consulta.service");
const create_archivo_consulta_input_1 = require("../../dtos/archivoConsulta/create-archivo-consulta.input");
let ArchivoConsultaResolver = class ArchivoConsultaResolver {
    archivoService;
    constructor(archivoService) {
        this.archivoService = archivoService;
    }
    findAll() {
        return this.archivoService.findAll();
    }
    createArchivoConsulta(createInput) {
        return this.archivoService.create(createInput);
    }
};
exports.ArchivoConsultaResolver = ArchivoConsultaResolver;
__decorate([
    (0, graphql_1.Query)(() => [archivo_consulta_entity_1.ArchivoConsulta], { name: 'archivosConsulta' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArchivoConsultaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => archivo_consulta_entity_1.ArchivoConsulta),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_archivo_consulta_input_1.CreateArchivoConsultaInput]),
    __metadata("design:returntype", void 0)
], ArchivoConsultaResolver.prototype, "createArchivoConsulta", null);
exports.ArchivoConsultaResolver = ArchivoConsultaResolver = __decorate([
    (0, graphql_1.Resolver)(() => archivo_consulta_entity_1.ArchivoConsulta),
    __metadata("design:paramtypes", [archivo_consulta_service_1.ArchivoConsultaService])
], ArchivoConsultaResolver);
//# sourceMappingURL=archivo-consulta.resolver.js.map
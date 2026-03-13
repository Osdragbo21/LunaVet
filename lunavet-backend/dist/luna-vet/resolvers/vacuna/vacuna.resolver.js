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
exports.VacunaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const vacuna_entity_1 = require("../../entities/vacunas/vacuna.entity");
const vacuna_service_1 = require("../../services/vacuna/vacuna.service");
const create_vacuna_input_1 = require("../../dtos/vacuna/create-vacuna.input");
let VacunaResolver = class VacunaResolver {
    vacunaService;
    constructor(vacunaService) {
        this.vacunaService = vacunaService;
    }
    findAll() {
        return this.vacunaService.findAll();
    }
    createVacuna(createInput) {
        return this.vacunaService.create(createInput);
    }
};
exports.VacunaResolver = VacunaResolver;
__decorate([
    (0, graphql_1.Query)(() => [vacuna_entity_1.Vacuna], { name: 'vacunas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VacunaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => vacuna_entity_1.Vacuna),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vacuna_input_1.CreateVacunaInput]),
    __metadata("design:returntype", void 0)
], VacunaResolver.prototype, "createVacuna", null);
exports.VacunaResolver = VacunaResolver = __decorate([
    (0, graphql_1.Resolver)(() => vacuna_entity_1.Vacuna),
    __metadata("design:paramtypes", [vacuna_service_1.VacunaService])
], VacunaResolver);
//# sourceMappingURL=vacuna.resolver.js.map
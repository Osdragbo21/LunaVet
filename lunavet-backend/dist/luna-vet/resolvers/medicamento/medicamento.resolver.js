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
exports.MedicamentoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const medicamento_entity_1 = require("../../entities/medicamentos/medicamento.entity");
const medicamento_service_1 = require("../../services/medicamento/medicamento.service");
const create_medicamento_input_1 = require("../../dtos/medicamento/create-medicamento.input");
let MedicamentoResolver = class MedicamentoResolver {
    medicamentoService;
    constructor(medicamentoService) {
        this.medicamentoService = medicamentoService;
    }
    findAll() {
        return this.medicamentoService.findAll();
    }
    createMedicamento(createInput) {
        return this.medicamentoService.create(createInput);
    }
};
exports.MedicamentoResolver = MedicamentoResolver;
__decorate([
    (0, graphql_1.Query)(() => [medicamento_entity_1.Medicamento], { name: 'medicamentos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicamentoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => medicamento_entity_1.Medicamento),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medicamento_input_1.CreateMedicamentoInput]),
    __metadata("design:returntype", void 0)
], MedicamentoResolver.prototype, "createMedicamento", null);
exports.MedicamentoResolver = MedicamentoResolver = __decorate([
    (0, graphql_1.Resolver)(() => medicamento_entity_1.Medicamento),
    __metadata("design:paramtypes", [medicamento_service_1.MedicamentoService])
], MedicamentoResolver);
//# sourceMappingURL=medicamento.resolver.js.map
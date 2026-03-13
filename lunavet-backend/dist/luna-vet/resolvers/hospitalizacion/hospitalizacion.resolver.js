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
exports.HospitalizacionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const hospitalizacion_entity_1 = require("../../entities/hospitalizaciones/hospitalizacion.entity");
const hospitalizacion_service_1 = require("../../services/hospitalizacion/hospitalizacion.service");
const create_hospitalizacion_input_1 = require("../../dtos/hospitalizacion/create-hospitalizacion.input");
let HospitalizacionResolver = class HospitalizacionResolver {
    hospitalizacionService;
    constructor(hospitalizacionService) {
        this.hospitalizacionService = hospitalizacionService;
    }
    findAll() {
        return this.hospitalizacionService.findAll();
    }
    createHospitalizacion(createInput) {
        return this.hospitalizacionService.create(createInput);
    }
};
exports.HospitalizacionResolver = HospitalizacionResolver;
__decorate([
    (0, graphql_1.Query)(() => [hospitalizacion_entity_1.Hospitalizacion], { name: 'hospitalizaciones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HospitalizacionResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => hospitalizacion_entity_1.Hospitalizacion),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hospitalizacion_input_1.CreateHospitalizacionInput]),
    __metadata("design:returntype", void 0)
], HospitalizacionResolver.prototype, "createHospitalizacion", null);
exports.HospitalizacionResolver = HospitalizacionResolver = __decorate([
    (0, graphql_1.Resolver)(() => hospitalizacion_entity_1.Hospitalizacion),
    __metadata("design:paramtypes", [hospitalizacion_service_1.HospitalizacionService])
], HospitalizacionResolver);
//# sourceMappingURL=hospitalizacion.resolver.js.map
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
exports.DetalleRecetaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const detalle_receta_entity_1 = require("../../entities/detalles-receta/detalle-receta.entity");
const detalle_receta_service_1 = require("../../services/detalleReceta/detalle-receta.service");
const create_detalle_receta_input_1 = require("../../dtos/detalleReceta/create-detalle-receta.input");
let DetalleRecetaResolver = class DetalleRecetaResolver {
    detalleService;
    constructor(detalleService) {
        this.detalleService = detalleService;
    }
    findAll() {
        return this.detalleService.findAll();
    }
    createDetalleReceta(createInput) {
        return this.detalleService.create(createInput);
    }
};
exports.DetalleRecetaResolver = DetalleRecetaResolver;
__decorate([
    (0, graphql_1.Query)(() => [detalle_receta_entity_1.DetalleReceta], { name: 'detallesReceta' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetalleRecetaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => detalle_receta_entity_1.DetalleReceta),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detalle_receta_input_1.CreateDetalleRecetaInput]),
    __metadata("design:returntype", void 0)
], DetalleRecetaResolver.prototype, "createDetalleReceta", null);
exports.DetalleRecetaResolver = DetalleRecetaResolver = __decorate([
    (0, graphql_1.Resolver)(() => detalle_receta_entity_1.DetalleReceta),
    __metadata("design:paramtypes", [detalle_receta_service_1.DetalleRecetaService])
], DetalleRecetaResolver);
//# sourceMappingURL=detalle-receta.resolver.js.map
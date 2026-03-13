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
exports.DetalleVentaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const detalle_venta_entity_1 = require("../../entities/detalles-venta/detalle-venta.entity");
const detalle_venta_service_1 = require("../../services/detalleVenta/detalle-venta.service");
const create_detalle_venta_input_1 = require("../../dtos/detalleVenta/create-detalle-venta.input");
let DetalleVentaResolver = class DetalleVentaResolver {
    srv;
    constructor(srv) {
        this.srv = srv;
    }
    findAll() { return this.srv.findAll(); }
    createDetalleVenta(input) { return this.srv.create(input); }
};
exports.DetalleVentaResolver = DetalleVentaResolver;
__decorate([
    (0, graphql_1.Query)(() => [detalle_venta_entity_1.DetalleVenta], { name: 'detallesVenta' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetalleVentaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => detalle_venta_entity_1.DetalleVenta),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detalle_venta_input_1.CreateDetalleVentaInput]),
    __metadata("design:returntype", void 0)
], DetalleVentaResolver.prototype, "createDetalleVenta", null);
exports.DetalleVentaResolver = DetalleVentaResolver = __decorate([
    (0, graphql_1.Resolver)(() => detalle_venta_entity_1.DetalleVenta),
    __metadata("design:paramtypes", [detalle_venta_service_1.DetalleVentaService])
], DetalleVentaResolver);
//# sourceMappingURL=detalle-venta.resolver.js.map
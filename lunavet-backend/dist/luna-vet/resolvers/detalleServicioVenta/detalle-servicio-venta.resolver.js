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
exports.DetalleServicioVentaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const detalle_servicio_venta_entity_1 = require("../../entities/detalles-servicios-venta/detalle-servicio-venta.entity");
const detalle_servicio_venta_service_1 = require("../../services/detalleServicioVenta/detalle-servicio-venta.service");
const create_detalle_servicio_venta_input_1 = require("../../dtos/detalleServicioVenta/create-detalle-servicio-venta.input");
let DetalleServicioVentaResolver = class DetalleServicioVentaResolver {
    srv;
    constructor(srv) {
        this.srv = srv;
    }
    findAll() { return this.srv.findAll(); }
    createDetalleServicioVenta(input) { return this.srv.create(input); }
};
exports.DetalleServicioVentaResolver = DetalleServicioVentaResolver;
__decorate([
    (0, graphql_1.Query)(() => [detalle_servicio_venta_entity_1.DetalleServicioVenta], { name: 'detallesServicioVenta' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetalleServicioVentaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => detalle_servicio_venta_entity_1.DetalleServicioVenta),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detalle_servicio_venta_input_1.CreateDetalleServicioVentaInput]),
    __metadata("design:returntype", void 0)
], DetalleServicioVentaResolver.prototype, "createDetalleServicioVenta", null);
exports.DetalleServicioVentaResolver = DetalleServicioVentaResolver = __decorate([
    (0, graphql_1.Resolver)(() => detalle_servicio_venta_entity_1.DetalleServicioVenta),
    __metadata("design:paramtypes", [detalle_servicio_venta_service_1.DetalleServicioVentaService])
], DetalleServicioVentaResolver);
//# sourceMappingURL=detalle-servicio-venta.resolver.js.map
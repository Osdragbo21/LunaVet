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
exports.VentaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const venta_entity_1 = require("../../entities/ventas/venta.entity");
const venta_service_1 = require("../../services/venta/venta.service");
const create_venta_input_1 = require("../../dtos/venta/create-venta.input");
let VentaResolver = class VentaResolver {
    srv;
    constructor(srv) {
        this.srv = srv;
    }
    findAll() { return this.srv.findAll(); }
    createVenta(input) { return this.srv.create(input); }
};
exports.VentaResolver = VentaResolver;
__decorate([
    (0, graphql_1.Query)(() => [venta_entity_1.Venta], { name: 'ventas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VentaResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => venta_entity_1.Venta),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_venta_input_1.CreateVentaInput]),
    __metadata("design:returntype", void 0)
], VentaResolver.prototype, "createVenta", null);
exports.VentaResolver = VentaResolver = __decorate([
    (0, graphql_1.Resolver)(() => venta_entity_1.Venta),
    __metadata("design:paramtypes", [venta_service_1.VentaService])
], VentaResolver);
//# sourceMappingURL=venta.resolver.js.map
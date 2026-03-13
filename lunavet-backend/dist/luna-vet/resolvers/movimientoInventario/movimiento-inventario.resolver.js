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
exports.MovimientoInventarioResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const movimiento_inventario_entity_1 = require("../../entities/movimientos-inventario/movimiento-inventario.entity");
const movimiento_inventario_service_1 = require("../../services/movimientoInventario/movimiento-inventario.service");
const create_movimiento_inventario_input_1 = require("../../dtos/movimientoInventario/create-movimiento-inventario.input");
let MovimientoInventarioResolver = class MovimientoInventarioResolver {
    srv;
    constructor(srv) {
        this.srv = srv;
    }
    findAll() { return this.srv.findAll(); }
    createMovimientoInventario(input) { return this.srv.create(input); }
};
exports.MovimientoInventarioResolver = MovimientoInventarioResolver;
__decorate([
    (0, graphql_1.Query)(() => [movimiento_inventario_entity_1.MovimientoInventario], { name: 'movimientosInventario' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovimientoInventarioResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => movimiento_inventario_entity_1.MovimientoInventario),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movimiento_inventario_input_1.CreateMovimientoInventarioInput]),
    __metadata("design:returntype", void 0)
], MovimientoInventarioResolver.prototype, "createMovimientoInventario", null);
exports.MovimientoInventarioResolver = MovimientoInventarioResolver = __decorate([
    (0, graphql_1.Resolver)(() => movimiento_inventario_entity_1.MovimientoInventario),
    __metadata("design:paramtypes", [movimiento_inventario_service_1.MovimientoInventarioService])
], MovimientoInventarioResolver);
//# sourceMappingURL=movimiento-inventario.resolver.js.map
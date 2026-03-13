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
exports.ProductoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const producto_entity_1 = require("../../entities/productos/producto.entity");
const producto_service_1 = require("../../services/producto/producto.service");
const create_producto_input_1 = require("../../dtos/producto/create-producto.input");
let ProductoResolver = class ProductoResolver {
    srv;
    constructor(srv) {
        this.srv = srv;
    }
    findAll() { return this.srv.findAll(); }
    createProducto(input) { return this.srv.create(input); }
};
exports.ProductoResolver = ProductoResolver;
__decorate([
    (0, graphql_1.Query)(() => [producto_entity_1.Producto], { name: 'productos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductoResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => producto_entity_1.Producto),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_input_1.CreateProductoInput]),
    __metadata("design:returntype", void 0)
], ProductoResolver.prototype, "createProducto", null);
exports.ProductoResolver = ProductoResolver = __decorate([
    (0, graphql_1.Resolver)(() => producto_entity_1.Producto),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoResolver);
//# sourceMappingURL=producto.resolver.js.map
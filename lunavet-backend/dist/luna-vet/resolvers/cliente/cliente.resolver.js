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
exports.ClienteResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cliente_entity_1 = require("../../entities/clientes/cliente.entity");
const cliente_service_1 = require("../../services/cliente/cliente.service");
const create_cliente_input_1 = require("../../dtos/cliente/create-cliente.input");
let ClienteResolver = class ClienteResolver {
    clienteService;
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    findAll() {
        return this.clienteService.findAll();
    }
    createCliente(createClienteInput) {
        return this.clienteService.create(createClienteInput);
    }
};
exports.ClienteResolver = ClienteResolver;
__decorate([
    (0, graphql_1.Query)(() => [cliente_entity_1.Cliente], { name: 'clientes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClienteResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => cliente_entity_1.Cliente),
    __param(0, (0, graphql_1.Args)('createClienteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_input_1.CreateClienteInput]),
    __metadata("design:returntype", void 0)
], ClienteResolver.prototype, "createCliente", null);
exports.ClienteResolver = ClienteResolver = __decorate([
    (0, graphql_1.Resolver)(() => cliente_entity_1.Cliente),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteResolver);
//# sourceMappingURL=cliente.resolver.js.map
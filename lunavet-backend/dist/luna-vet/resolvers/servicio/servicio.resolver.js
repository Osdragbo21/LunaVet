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
exports.ServicioResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const servicio_entity_1 = require("../../entities/servicios/servicio.entity");
const servicio_service_1 = require("../../services/servicio/servicio.service");
const create_servicio_input_1 = require("../../dtos/servicio/create-servicio.input");
let ServicioResolver = class ServicioResolver {
    srv;
    constructor(srv) {
        this.srv = srv;
    }
    findAll() { return this.srv.findAll(); }
    createServicio(input) { return this.srv.create(input); }
};
exports.ServicioResolver = ServicioResolver;
__decorate([
    (0, graphql_1.Query)(() => [servicio_entity_1.Servicio], { name: 'servicios' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServicioResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => servicio_entity_1.Servicio),
    __param(0, (0, graphql_1.Args)('createInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicio_input_1.CreateServicioInput]),
    __metadata("design:returntype", void 0)
], ServicioResolver.prototype, "createServicio", null);
exports.ServicioResolver = ServicioResolver = __decorate([
    (0, graphql_1.Resolver)(() => servicio_entity_1.Servicio),
    __metadata("design:paramtypes", [servicio_service_1.ServicioService])
], ServicioResolver);
//# sourceMappingURL=servicio.resolver.js.map
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
exports.UsuarioResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const usuario_entity_1 = require("../../entities/usuarios/usuario.entity");
const usuario_service_1 = require("../../services/usuario/usuario.service");
const create_usuario_input_1 = require("../../dtos/usuario/create-usuario.input");
let UsuarioResolver = class UsuarioResolver {
    usuarioService;
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    findAll() {
        return this.usuarioService.findAll();
    }
    createUsuario(createUsuarioInput) {
        return this.usuarioService.create(createUsuarioInput);
    }
};
exports.UsuarioResolver = UsuarioResolver;
__decorate([
    (0, graphql_1.Query)(() => [usuario_entity_1.Usuario], { name: 'usuarios' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => usuario_entity_1.Usuario),
    __param(0, (0, graphql_1.Args)('createUsuarioInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_input_1.CreateUsuarioInput]),
    __metadata("design:returntype", void 0)
], UsuarioResolver.prototype, "createUsuario", null);
exports.UsuarioResolver = UsuarioResolver = __decorate([
    (0, graphql_1.Resolver)(() => usuario_entity_1.Usuario),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioResolver);
//# sourceMappingURL=usuario.resolver.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateClienteInput = class CreateClienteInput {
    usuario_id;
    nombre_completo;
    telefono_principal;
    direccion;
};
exports.CreateClienteInput = CreateClienteInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateClienteInput.prototype, "usuario_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateClienteInput.prototype, "nombre_completo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateClienteInput.prototype, "telefono_principal", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateClienteInput.prototype, "direccion", void 0);
exports.CreateClienteInput = CreateClienteInput = __decorate([
    (0, graphql_1.InputType)()
], CreateClienteInput);
//# sourceMappingURL=create-cliente.input.js.map
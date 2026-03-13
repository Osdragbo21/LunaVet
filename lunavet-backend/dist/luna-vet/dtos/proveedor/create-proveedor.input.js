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
exports.CreateProveedorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateProveedorInput = class CreateProveedorInput {
    nombre_empresa;
    contacto_nombre;
    telefono;
};
exports.CreateProveedorInput = CreateProveedorInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProveedorInput.prototype, "nombre_empresa", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProveedorInput.prototype, "contacto_nombre", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProveedorInput.prototype, "telefono", void 0);
exports.CreateProveedorInput = CreateProveedorInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProveedorInput);
//# sourceMappingURL=create-proveedor.input.js.map
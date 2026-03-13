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
exports.ArchivoConsulta = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const consulta_entity_1 = require("../consultas/consulta.entity");
let ArchivoConsulta = class ArchivoConsulta {
    id_archivo;
    consulta_id;
    consulta;
    url_archivo;
    tipo_documento;
    fecha_subida;
};
exports.ArchivoConsulta = ArchivoConsulta;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ArchivoConsulta.prototype, "id_archivo", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ArchivoConsulta.prototype, "consulta_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => consulta_entity_1.Consulta),
    (0, typeorm_1.ManyToOne)(() => consulta_entity_1.Consulta, (consulta) => consulta.archivos),
    (0, typeorm_1.JoinColumn)({ name: 'consulta_id' }),
    __metadata("design:type", consulta_entity_1.Consulta)
], ArchivoConsulta.prototype, "consulta", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArchivoConsulta.prototype, "url_archivo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArchivoConsulta.prototype, "tipo_documento", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ArchivoConsulta.prototype, "fecha_subida", void 0);
exports.ArchivoConsulta = ArchivoConsulta = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('archivos_consulta')
], ArchivoConsulta);
//# sourceMappingURL=archivo-consulta.entity.js.map
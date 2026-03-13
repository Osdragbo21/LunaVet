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
exports.DetalleReceta = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const receta_entity_1 = require("../recetas/receta.entity");
const medicamento_entity_1 = require("../medicamentos/medicamento.entity");
let DetalleReceta = class DetalleReceta {
    id_detalle_receta;
    receta_id;
    receta;
    medicamento_id;
    medicamento;
    dosis;
    frecuencia;
    duracion_dias;
};
exports.DetalleReceta = DetalleReceta;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetalleReceta.prototype, "id_detalle_receta", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetalleReceta.prototype, "receta_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => receta_entity_1.Receta),
    (0, typeorm_1.ManyToOne)(() => receta_entity_1.Receta),
    (0, typeorm_1.JoinColumn)({ name: 'receta_id' }),
    __metadata("design:type", receta_entity_1.Receta)
], DetalleReceta.prototype, "receta", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetalleReceta.prototype, "medicamento_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => medicamento_entity_1.Medicamento),
    (0, typeorm_1.ManyToOne)(() => medicamento_entity_1.Medicamento),
    (0, typeorm_1.JoinColumn)({ name: 'medicamento_id' }),
    __metadata("design:type", medicamento_entity_1.Medicamento)
], DetalleReceta.prototype, "medicamento", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetalleReceta.prototype, "dosis", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetalleReceta.prototype, "frecuencia", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetalleReceta.prototype, "duracion_dias", void 0);
exports.DetalleReceta = DetalleReceta = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('detalle_receta')
], DetalleReceta);
//# sourceMappingURL=detalle-receta.entity.js.map
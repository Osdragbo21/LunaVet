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
exports.DetalleServicioVenta = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const venta_entity_1 = require("../ventas/venta.entity");
const servicio_entity_1 = require("../servicios/servicio.entity");
let DetalleServicioVenta = class DetalleServicioVenta {
    id_det_ser;
    venta_id;
    venta;
    servicio_id;
    servicio;
    costo_aplicado;
};
exports.DetalleServicioVenta = DetalleServicioVenta;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetalleServicioVenta.prototype, "id_det_ser", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetalleServicioVenta.prototype, "venta_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => venta_entity_1.Venta),
    (0, typeorm_1.ManyToOne)(() => venta_entity_1.Venta),
    (0, typeorm_1.JoinColumn)({ name: 'venta_id' }),
    __metadata("design:type", venta_entity_1.Venta)
], DetalleServicioVenta.prototype, "venta", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetalleServicioVenta.prototype, "servicio_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => servicio_entity_1.Servicio),
    (0, typeorm_1.ManyToOne)(() => servicio_entity_1.Servicio),
    (0, typeorm_1.JoinColumn)({ name: 'servicio_id' }),
    __metadata("design:type", servicio_entity_1.Servicio)
], DetalleServicioVenta.prototype, "servicio", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], DetalleServicioVenta.prototype, "costo_aplicado", void 0);
exports.DetalleServicioVenta = DetalleServicioVenta = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('detalle_servicios_venta')
], DetalleServicioVenta);
//# sourceMappingURL=detalle-servicio-venta.entity.js.map
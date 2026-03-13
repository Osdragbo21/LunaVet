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
exports.HospitalizacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hospitalizacion_entity_1 = require("../../entities/hospitalizaciones/hospitalizacion.entity");
let HospitalizacionService = class HospitalizacionService {
    hospitalizacionRepository;
    constructor(hospitalizacionRepository) {
        this.hospitalizacionRepository = hospitalizacionRepository;
    }
    findAll() {
        return this.hospitalizacionRepository.find({ relations: ['paciente', 'empleado'] });
    }
    create(createInput) {
        const newRecord = this.hospitalizacionRepository.create(createInput);
        return this.hospitalizacionRepository.save(newRecord);
    }
};
exports.HospitalizacionService = HospitalizacionService;
exports.HospitalizacionService = HospitalizacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hospitalizacion_entity_1.Hospitalizacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HospitalizacionService);
//# sourceMappingURL=hospitalizacion.service.js.map
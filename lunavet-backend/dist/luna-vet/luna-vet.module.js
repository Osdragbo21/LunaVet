"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunaVetModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_entity_1 = require("./entities/roles/rol.entity");
const usuario_entity_1 = require("./entities/usuarios/usuario.entity");
const auditoria_log_entity_1 = require("./entities/auditorias-log/auditoria-log.entity");
const rol_service_1 = require("./services/rol/rol.service");
const usuario_service_1 = require("./services/usuario/usuario.service");
const auditoria_log_service_1 = require("./services/auditoriaLog/auditoria-log.service");
const rol_resolver_1 = require("./resolvers/rol/rol.resolver");
const usuario_resolver_1 = require("./resolvers/usuario/usuario.resolver");
const auditoria_log_resolver_1 = require("./resolvers/auditoriaLog/auditoria-log.resolver");
const empleado_entity_1 = require("./entities/empleados/empleado.entity");
const veterinario_especialidad_entity_1 = require("./entities/veterinarios-especialidades/veterinario-especialidad.entity");
const empleado_service_1 = require("./services/empleado/empleado.service");
const veterinario_especialidad_service_1 = require("./services/veterinarioEspecialidad/veterinario-especialidad.service");
const empleado_resolver_1 = require("./resolvers/empleado/empleado.resolver");
const veterinario_especialidad_resolver_1 = require("./resolvers/veterinarioEspecialidad/veterinario-especialidad.resolver");
const cliente_entity_1 = require("./entities/clientes/cliente.entity");
const paciente_entity_1 = require("./entities/pacientes/paciente.entity");
const cliente_service_1 = require("./services/cliente/cliente.service");
const paciente_service_1 = require("./services/paciente/paciente.service");
const cliente_resolver_1 = require("./resolvers/cliente/cliente.resolver");
const paciente_resolver_1 = require("./resolvers/paciente/paciente.resolver");
const cita_entity_1 = require("./entities/citas/cita.entity");
const consulta_entity_1 = require("./entities/consultas/consulta.entity");
const archivo_consulta_entity_1 = require("./entities/archivos-consulta/archivo-consulta.entity");
const medicamento_entity_1 = require("./entities/medicamentos/medicamento.entity");
const receta_entity_1 = require("./entities/recetas/receta.entity");
const detalle_receta_entity_1 = require("./entities/detalles-receta/detalle-receta.entity");
const vacuna_entity_1 = require("./entities/vacunas/vacuna.entity");
const registro_vacunacion_entity_1 = require("./entities/registros-vacunacion/registro-vacunacion.entity");
const hospitalizacion_entity_1 = require("./entities/hospitalizaciones/hospitalizacion.entity");
const cita_service_1 = require("./services/cita/cita.service");
const consulta_service_1 = require("./services/consulta/consulta.service");
const archivo_consulta_service_1 = require("./services/archivoConsulta/archivo-consulta.service");
const medicamento_service_1 = require("./services/medicamento/medicamento.service");
const receta_service_1 = require("./services/receta/receta.service");
const detalle_receta_service_1 = require("./services/detalleReceta/detalle-receta.service");
const vacuna_service_1 = require("./services/vacuna/vacuna.service");
const registro_vacunacion_service_1 = require("./services/registroVacunacion/registro-vacunacion.service");
const hospitalizacion_service_1 = require("./services/hospitalizacion/hospitalizacion.service");
const cita_resolver_1 = require("./resolvers/cita/cita.resolver");
const consulta_resolver_1 = require("./resolvers/consulta/consulta.resolver");
const archivo_consulta_resolver_1 = require("./resolvers/archivoConsulta/archivo-consulta.resolver");
const medicamento_resolver_1 = require("./resolvers/medicamento/medicamento.resolver");
const receta_resolver_1 = require("./resolvers/receta/receta.resolver");
const detalle_receta_resolver_1 = require("./resolvers/detalleReceta/detalle-receta.resolver");
const vacuna_resolver_1 = require("./resolvers/vacuna/vacuna.resolver");
const registro_vacunacion_resolver_1 = require("./resolvers/registroVacunacion/registro-vacunacion.resolver");
const hospitalizacion_resolver_1 = require("./resolvers/hospitalizacion/hospitalizacion.resolver");
const proveedor_entity_1 = require("./entities/proveedores/proveedor.entity");
const producto_entity_1 = require("./entities/productos/producto.entity");
const movimiento_inventario_entity_1 = require("./entities/movimientos-inventario/movimiento-inventario.entity");
const proveedor_service_1 = require("./services/proveedor/proveedor.service");
const producto_service_1 = require("./services/producto/producto.service");
const movimiento_inventario_service_1 = require("./services/movimientoInventario/movimiento-inventario.service");
const proveedor_resolver_1 = require("./resolvers/proveedor/proveedor.resolver");
const producto_resolver_1 = require("./resolvers/producto/producto.resolver");
const movimiento_inventario_resolver_1 = require("./resolvers/movimientoInventario/movimiento-inventario.resolver");
const venta_entity_1 = require("./entities/ventas/venta.entity");
const detalle_venta_entity_1 = require("./entities/detalles-venta/detalle-venta.entity");
const servicio_entity_1 = require("./entities/servicios/servicio.entity");
const detalle_servicio_venta_entity_1 = require("./entities/detalles-servicios-venta/detalle-servicio-venta.entity");
const venta_service_1 = require("./services/venta/venta.service");
const detalle_venta_service_1 = require("./services/detalleVenta/detalle-venta.service");
const servicio_service_1 = require("./services/servicio/servicio.service");
const detalle_servicio_venta_service_1 = require("./services/detalleServicioVenta/detalle-servicio-venta.service");
const venta_resolver_1 = require("./resolvers/venta/venta.resolver");
const detalle_venta_resolver_1 = require("./resolvers/detalleVenta/detalle-venta.resolver");
const servicio_resolver_1 = require("./resolvers/servicio/servicio.resolver");
const detalle_servicio_venta_resolver_1 = require("./resolvers/detalleServicioVenta/detalle-servicio-venta.resolver");
let LunaVetModule = class LunaVetModule {
};
exports.LunaVetModule = LunaVetModule;
exports.LunaVetModule = LunaVetModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                rol_entity_1.Rol,
                usuario_entity_1.Usuario,
                auditoria_log_entity_1.AuditoriaLog,
                empleado_entity_1.Empleado,
                veterinario_especialidad_entity_1.VeterinarioEspecialidad,
                cliente_entity_1.Cliente,
                paciente_entity_1.Paciente,
                cita_entity_1.Cita,
                consulta_entity_1.Consulta,
                archivo_consulta_entity_1.ArchivoConsulta,
                medicamento_entity_1.Medicamento,
                receta_entity_1.Receta,
                detalle_receta_entity_1.DetalleReceta,
                vacuna_entity_1.Vacuna,
                registro_vacunacion_entity_1.RegistroVacunacion,
                hospitalizacion_entity_1.Hospitalizacion,
                proveedor_entity_1.Proveedor,
                producto_entity_1.Producto,
                movimiento_inventario_entity_1.MovimientoInventario,
                venta_entity_1.Venta,
                detalle_venta_entity_1.DetalleVenta,
                servicio_entity_1.Servicio,
                detalle_servicio_venta_entity_1.DetalleServicioVenta
            ])
        ],
        providers: [
            rol_service_1.RolService, rol_resolver_1.RolResolver,
            usuario_service_1.UsuarioService, usuario_resolver_1.UsuarioResolver,
            auditoria_log_service_1.AuditoriaLogService, auditoria_log_resolver_1.AuditoriaLogResolver,
            empleado_service_1.EmpleadoService, empleado_resolver_1.EmpleadoResolver,
            veterinario_especialidad_service_1.VeterinarioEspecialidadService, veterinario_especialidad_resolver_1.VeterinarioEspecialidadResolver,
            cliente_service_1.ClienteService, cliente_resolver_1.ClienteResolver,
            paciente_service_1.PacienteService, paciente_resolver_1.PacienteResolver,
            cita_service_1.CitaService, cita_resolver_1.CitaResolver,
            consulta_service_1.ConsultaService, consulta_resolver_1.ConsultaResolver,
            archivo_consulta_service_1.ArchivoConsultaService, archivo_consulta_resolver_1.ArchivoConsultaResolver,
            medicamento_service_1.MedicamentoService, medicamento_resolver_1.MedicamentoResolver,
            receta_service_1.RecetaService, receta_resolver_1.RecetaResolver,
            detalle_receta_service_1.DetalleRecetaService, detalle_receta_resolver_1.DetalleRecetaResolver,
            vacuna_service_1.VacunaService, vacuna_resolver_1.VacunaResolver,
            registro_vacunacion_service_1.RegistroVacunacionService, registro_vacunacion_resolver_1.RegistroVacunacionResolver,
            hospitalizacion_service_1.HospitalizacionService, hospitalizacion_resolver_1.HospitalizacionResolver,
            proveedor_service_1.ProveedorService, proveedor_resolver_1.ProveedorResolver,
            producto_service_1.ProductoService, producto_resolver_1.ProductoResolver,
            movimiento_inventario_service_1.MovimientoInventarioService, movimiento_inventario_resolver_1.MovimientoInventarioResolver,
            venta_service_1.VentaService, venta_resolver_1.VentaResolver,
            detalle_venta_service_1.DetalleVentaService, detalle_venta_resolver_1.DetalleVentaResolver,
            servicio_service_1.ServicioService, servicio_resolver_1.ServicioResolver,
            detalle_servicio_venta_service_1.DetalleServicioVentaService, detalle_servicio_venta_resolver_1.DetalleServicioVentaResolver
        ],
    })
], LunaVetModule);
//# sourceMappingURL=luna-vet.module.js.map
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

/*
 * Definición del esquema y modelo de Asignaturas
 * - nombre: String, requerido, min 3, max 50.
 * - descripcion: String, requerido, min 10, max 100.
 * - id_profesor: number, requerido
 * - grado: string, requerido, enum ['primaria', 'secundaria', 'preparatoria'].
 * - periodo_escolar: enum ['2025-2026'], por defecto '2025-2026'.
 * - eliminado: Boolean, por defecto false (soft delete)
 * - activo: Boolean, por defecto true
 * - timestamps: createdAt, updatedAt
 */

const asignaturaSchema = new mongoose.Schema({
    nombre: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/.test(v);
      },
      message: props => `${props.value} no es un nombre válido!`
    },
  }, 
  descripcion: {
    type: String,
    required: true, 
    minlength: 10,
    maxlength: 100,
    trim: true,
    lowercase: true,
  },
  id_profesor: {
    type: String,
    required: true,
    },
    grado: {
      type: String,
      required: true,
      enum: ['primaria', 'secundaria', 'preparatoria'],
    },
    periodo_escolar: {
      type: String,
      enum: ['2025-2026'],
        default: '2025-2026',
    },
    eliminado: {
      type: Boolean,
      default: false,
    },
    activo: {
      type: Boolean,
      default: true,
    },
}, 
{ timestamps: true });

asignaturaSchema.plugin(mongoosePaginate);

export const Asignatura = mongoose.model('Asignatura', asignaturaSchema);
       
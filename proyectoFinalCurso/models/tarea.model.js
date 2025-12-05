import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

/*
 * Definición del esquema y modelo de Tarea
 * - titulo: String, requerido, min 3, max 100.
 * - descripcion: String, requerido, min 10, max 100.
 * - id_profesor: number, requerido, único, positivo.
 * - id_asignatura number, requerido, único, positivo.
 * - archivo_adjunto: String, requerido, URL válida.
 * - fecha_entrega: Date, requerido, no puede ser una fecha pasada.
 * - timestamps: createdAt, updatedAt
 */

const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true,
        lowercase: true,
        validate: {
        validator: function (v) {
        return /^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/.test(v);
        },
        message: props => `${props.value} no es un titulo válido!`
        },
    },
    descripcion: {
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
        message: props => `${props.value} no es un descripcion válida!`
        },
    },
    id_profesor: {
        type: String,
        required: true,
    },
    id_asignatura: {
        type: Number,
        required: true,
    },
    archivo_adjunto: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {   
            return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(v);
            },
            message: props => `${props.value} no es una URL valida!`
        }
    },
    fecha_entrega: {
        type : Date,
        required: true,
        validate: {
            validator: function (v) {
                return v >= new Date();
            },
            message: props => `La fecha de entrega ${props.value} no puede ser una fecha pasada!`
        }
    }
},
{ timestamps: true });


tareaSchema.plugin(mongoosePaginate);

export const Tarea = mongoose.model('Tarea', tareaSchema);
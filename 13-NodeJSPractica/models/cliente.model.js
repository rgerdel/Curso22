import mongoose from "mongoose";    

const clientesSchema = new mongoose.Schema(
  {
    cedula: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 6,
      maxlength: 9,
      validate: {
        validator: v => /^[0-9]+$/.test(v),
        message: props => `${props.value} no es una cedula valida (solo numeros)`
      }
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 100,
      validate: {
        validator: v => /^[a-záéíóúñ ]+$/.test(v),
        message: props => `${props.value} no es un nombre válido (solo letras)`
      }
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 100,
      validate: {
        validator: v => /^[a-záéíóúñ' ]+$/.test(v),
        message: props => `${props.value} no es un apellido válido`
      }
    },
    tipo_cuenta: {
      type: String,
      required: true,
      enum: ['ahorro', 'corriente', 'nomina']
    },
    numero_cuenta: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: v => /^\d{10,20}$/.test(v),
        message: props => `${props.value} no es un número de cuenta válido (10-20 dígitos)`
      }
    },
    saldo: {
      type: Number,
      required: true,
      min: [0, 'El saldo no puede ser negativo']
    },
    eliminado: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const Cliente = mongoose.model('Cliente', clientesSchema);
import { Cliente } from "../models/cliente.model.js";

export const saldoCliente = async (req, res) =>    {
    const { cedula } = req.params; // Obtener el parámetro de consulta 'cedula'
    let filter = { eliminado: false, cedula: cedula }; // Filtro base para excluir usuarios eliminados
    await Cliente.find(filter) // Solo usuarios no eliminados
      .then(clientes => res.json(clientes))
      .catch(err => res.status(400).json({ error: 'Error al obtener cliente' }));
}

export const crearCliente = async (req, res) => {   
    const { cedula, nombre, apellido, tipo_cuenta, numero_cuenta, saldo } = req.body;
    const nuevoCliente = new Cliente({ cedula, nombre, apellido, tipo_cuenta, numero_cuenta, saldo });
    await nuevoCliente.save()
      .then(cliente => res.status(201).json(cliente))
      .catch(err => res.status(400).json({ error: 'Error al crear el cliente', details: err.message }));
}


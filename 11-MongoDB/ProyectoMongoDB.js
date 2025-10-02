//CREACION DE COLECCIONES

db.createCollection("usuarios"),
db.createCollection("productos"),
db.createCollection("pedidos")

//INSERTAR USUARIOS

//USANDO INSERT
db.usuarios.insert({
	nombre: "Rafael Gerdel", 
	email:"rafaelgerdel@gmail.com", 
	pais: "VE", 
	activo: "true", 
	createdAt: new Date(), 
	updatedAt: new Date()} 
)

//USANDO INSERTMANY

db.usuarios.insertMany([
{nombre: "Domenico", email:"domenico@gmail.com", pais: "MX", activo: "true", createdAt: new Date(), updatedAt: new Date()},
{nombre: "Maria Corina", email:"mariacorina@gmail.com", pais: "ES", activo: "true", createdAt: new Date(), updatedAt: new Date()},
{nombre: "Alexandra Perez", email:"aperez@gmail.com", pais: "AR", activo: "true", createdAt: new Date(), updatedAt: new Date()},
{nombre: "Luisa Moreno", email:"lmoreno@gmail.com", pais: "VE", activo: "true", createdAt: new Date(), updatedAt: new Date()},
{nombre: "Virginia Gonzalez", email:"vgonzalez@gmail.com", pais: "USA", activo: "true", createdAt: new Date(), updatedAt: new Date()},
{nombre: "Max Antonio", email:"max@gmail.com", pais: "UR", activo: "true", createdAt: new Date(), updatedAt: new Date()}
])

//INSERTAR PRODUCTOS

db.productos.insertMany([
{nombre: "Televisor LG 50", categoria: "Televisor y Video", precio: 300, stock: 10, tags: ["nuevo"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Laptop HP 15.6", categoria: "Computacion", precio: 600, stock: 8, tags: ["2025"], createdAt: new Date(), updatedAt: new Date ()},
{nombre: "Lavadora", categoria:"Linea Blanca", precio: 750, stock: 15, tags: ["2025", "nuevo"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Samsung Galaxy S25", categoria: "Celulares", precio: 1099, stock: 10, tags: ["2024", "oferta", "outlet"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Xiaomi Redmi 14C", categoria: "Celulares", precio: 274.99, stock: 10, tags: ["2025", "nuevo", "VIP"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Secadora", categoria:"Linea Blanca", precio: 690, stock: 11, tags: ["2023", "remate", "outlet"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Cafetera", categoria:"Artefactos del Hogar", precio: 190, stock: 40, tags: ["2025", "nuevo"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Freidora de Aire", categoria:"Artefactos del Hogar", precio: 269.99, stock: 30, tags: ["2024", "nuevo"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Aire Acondicionado", categoria:"Linea Blanca", precio: 359.99, stock: 25, tags: ["2024", "oferta"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Monitor LCD", categoria:"Computacion", precio: 339.99, stock: 20, tags: ["2024", "2025", "nuevo"], createdAt: new Date(), updatedAt: new Date()},
{nombre: "Cocina", categoria:"Linea Blanca", precio: 2559.99, stock: 5, tags: ["2025", "nuevo"], createdAt: new Date(), updatedAt: new Date()}
])

//INSERTAR PEDIDOS

PEDIDO #1 

db.pedidos.insertOne({
    usuarioId: "68daa40e0c10f24ebe44152e", 
    items: {
        productoId: "68db3817b8ae43d40544152e", 
        cantidad: 1,
        precioUnitario: 300
    },
    estado: "creado",
    total: 300,
    createdAt: new Date(),
    updatedAt: new Date()
})

PEDIDO #2

db.pedidos.insertOne({
  usuarioId: ObjectId("68daa53f0c10f24ebe44152f"),
  items: [
    {
      productoId: ObjectId("68db3817b8ae43d40544152f"),
      cantidad: 1,
      precioUnitario: 600
    },
    {
      productoId: ObjectId("68db3817b8ae43d405441530"),
      cantidad: 1,
      precioUnitario: 750
    }
  ],
  estado: "pagado",
  total: 1350,
  createdAt: new Date(),
  updatedAt: new Date()
});

PEDIDO #3

db.pedidos.insertOne({
  usuarioId: ObjectId("68daa53f0c10f24ebe441530"),
  items: [
    {
      productoId: ObjectId("68db3817b8ae43d40544152f"),
      cantidad: 2,
      precioUnitario: 600
    },
    {
      productoId: ObjectId("68db3817b8ae43d405441533"),
      cantidad: 1,
      precioUnitario: 690
    },
    {
      productoId: ObjectId("68db3817b8ae43d405441535"),
      cantidad: 2,
      precioUnitario: 269.99
    }
  ],
  estado: "enviado",
  total: 2429.98,
  createdAt: new Date(),
  updatedAt: new Date()
});

PEDIDO #4

db.pedidos.insertOne({
  usuarioId: ObjectId("68daa53f0c10f24ebe441531"),
  items: [
    {
      productoId: ObjectId("68db3817b8ae43d405441538"),
      cantidad: 1,
      precioUnitario: 2559.99
    },
    {
      productoId: ObjectId("68db3817b8ae43d405441536"),
      cantidad: 3,
      precioUnitario: 359.99
    }
  ],
  estado: "enviado",
  total: 3639.96,
  createdAt: new Date(),
  updatedAt: new Date()
});

PEDIDO #10

db.pedidos.insertOne({
  usuarioId: ObjectId("68daa53f0c10f24ebe441532"),
  items: [
    {
      productoId: ObjectId("68db3817b8ae43d405441532"),
      cantidad: 1,
      precioUnitario: 274.99
    },

  ],
  estado: "creado",
  total: 274.99,
  createdAt: new Date(),
  updatedAt: new Date()
});


//3) Filtrado de datos, actualización y eliminación

//A) Filtros (solo `find`, sin agregaciones)
    //1. Comparación y rangos
    //Productos con precio entre 10 y 50 (inclusive).
        db.productos.find({ precio: { $gte: 10, $lte: 50 } })     //gte mayor o igual / lte menor o igual
        db.productos.find({ precio: { $gt: 10, $lt: 50 } })     //gte mayor o igual / lte menor o igual
    
    //Productos con stock = 0.
        db.productos.find({stock: 0})
    
    //Usuarios activo = true de un país específico
        db.usuarios.find({activo: "true"})
    
    //2. Arreglos y texto
        //Productos cuyo tags contenga la palabra "oferta" (usa regex).
        db.productos.find({tags: {$regex: /oferta/i}})
            
        //Productos que tengan ambos tags: "nuevo" y "2025" (usa $all).
        db.productos.find({tags: { $all: ["nuevo", "2024"] }})
        
        //Búsqueda de texto por nombre o tags.
        //NO ENTIENDO COMO HACERLO
        
    //3. Lógica y paginación 
    //Usuarios de pais que no sean iguales a { "VE", "AR", "ES" } y activo = true.       
    db.usuarios.find({ pais: { $nin: ["VE", "AR", "ES"] }, activo: "true" }) 
    //$in (en): Selecciona documentos donde el valor del campo ES uno de los valores de la matriz especificada. 
    //$nin (no en): Selecciona documentos donde el valor del campo NO ES ninguno de los valores de la matriz especificada
        
    //Productos donde categoria = "electronica" o precio < 20
    db.productos.find({$or: [{ categoria: "electronica" },{ precio: { $lt: 20 } }]}) 
        
    //Últimos 5 pedidos por createdAt desc.
    db.pedidos.find().sort({ createdAt: -1 }).limit(5) // .sort Ordena -1 forma descendente y 1 forma ascendente
    
//B) Actualizaciones (updateOne/updateMany)
    //1. Incrementos de inventario
        //Aumenta en +5 el stock de todos los productos en una categoría dada ($inc).
        db.productos.updateMany(
          { categoria: "Linea Blanca" },
          {
            $inc: { stock: 5 },
            $set: { updatedAt: new Date() }
          }
        )
                  
    //2. Cambios de estado
        //Cambia estado de un pedido de "creado" a "pagado" 
        db.pedidos.updateOne(
        {_id: ObjectId ("68db3fd9b8ae43d405441539")},
        {$set: {estado: "pagado"}
        })
        
    //3. Datos de usuario  
        // Actualiza nombre o pais de un usuario, y actualizar updatedAt.
        db.usuarios.updateOne(
        {_id: ObjectId ("68daa53f0c10f24ebe441534")},
        {$set: {nombre: "Rodolfo", pais: "UK", updatedAt: new Date()}
        })
        
    //4. Arreglos en productos
        //Agrega un tag sin duplicar.
        db.productos.updateMany(
          { categoria: "Computacion" }, 
          {
            $addToSet: { tags: { $each: ["nuevo"] } },
            $set: { updatedAt: new Date() }
          }
        )
        
        //Elimina un tag específico.
        db.productos.updateOne(
          { _id: ObjectId("68db3817b8ae43d40544152f") },
          {
            $pull: { tags: "nuevo" },  
            $set: { updatedAt: new Date() }
          }
        )
                

//C) Eliminación (deleteOne/deleteMany)   
    //1. Eliminación lógica (soft delete)
        //En usuarios, agrega deletedAt: new Date() y activo: false a un usuario concreto (hazlo con update, no lo borres físicamente).
            //$set se utiliza para agregar un nuevo campo a un documento existente o para actualizar el valor de un campo. 
            //No es para eliminar campos, sino para asignar o modificar su contenido
        db.usuarios.updateOne(
          {_id: ObjectId("68daa40e0c10f24ebe44152e")}, 
          {$set: { deletedAt: new Date(), activo: false}
          })

    //2.Eliminación física (hard delete) 
        //Elimina un producto específico por _id.
        db.productos.deleteOne(
          { _id: ObjectId("68db3817b8ae43d40544152f") }
        )
        
        //Borra todos los pedidos con estado = "cancelado".
          db.pedidos.deleteMany(
            { estado: "cancelado" }
           )
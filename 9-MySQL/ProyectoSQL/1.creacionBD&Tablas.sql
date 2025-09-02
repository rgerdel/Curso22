/*Crea la base de datos e_commerce*/
CREATE DATABASE e_commerce CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci; 

/*Crea la tabla usuarios para almacenar la información de los clientes.*/
CREATE TABLE usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (100) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    edad int NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Crea la tabla productos para almacenar los artículos en venta.*/
CREATE TABLE productos ( 
    id INT PRIMARY KEY AUTO_INCREMENT, 
    nombre VARCHAR(255) NOT NULL, 
    descripcion TEXT NOT NULL, 
    precio DECIMAL(10,2) UNSIGNED NOT NULL, 
    stock INT NOT NULL, 
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
); 

/*Crea la tabla compras para registrar las compras realizadas por los usuarios.*/
CREATE TABLE compras (
	id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    total DECIMAL(10,2) UNSIGNED,
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)   
);

/*Crea la tabla detalle_compras para registrar los productos dentro de cada compra.stock*/
CREATE TABLE detalle_compras (
	id INT PRIMARY KEY AUTO_INCREMENT,
    compra_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT UNSIGNED,
    subtotal DECIMAL(10,2) UNSIGNED,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (compra_id) REFERENCES compras(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
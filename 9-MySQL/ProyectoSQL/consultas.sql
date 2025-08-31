/*Lista todos los usuarios registrados.*/ 
SELECT * FROM usuarios;

/*- Consulta los productos disponibles en stock.*/  
SELECT nombre, stock FROM productos where stock > 0; 


/*- Lista los productos cuyo precio sea mayor a 50.*/ 
SELECT nombre, precio FROM productos where precio > 50;

/*- Encuentra el usuario más joven y el más mayor.*/ 
SELECT nombre, edad FROM usuarios ORDER BY edad ASC LIMIT 1;
SELECT nombre, edad FROM usuarios ORDER BY edad DESC LIMIT 1; 

/*- Actualiza la edad del usuario más mayor, incrementándola en un año.*/ 
UPDATE usuarios SET edad = edad + 1 ORDER BY edad DESC LIMIT 1;  

/*- Consulta todas las compras realizadas, mostrando los datos del usuario que las realizó y el total de la compra.*/
SELECT compras.id, usuarios.nombre, compras.total, compras.fecha_compra
FROM compras
INNER JOIN usuarios ON compras.usuario_id=usuarios.id;

/*- Muestra las compras junto con los productos comprados en cada una. */
SELECT compras.id as idCompra, usuarios.nombre, productos.nombre as producto, detalle_compras.cantidad, detalle_compras.subtotal
FROM compras
INNER JOIN usuarios ON compras.usuario_id=usuarios.id
INNER JOIN detalle_compras ON compras.id=detalle_compras.compra_id
INNER JOIN productos ON detalle_compras.producto_id=productos.id;

/*- Ordena los productos de mayor a menor precio. */
SELECT nombre, precio FROM productos ORDER BY precio DESC;

/*- Consulta la cantidad total de productos comprados por cada usuario.*/
SELECT usuarios.nombre, SUM(detalle_compras.cantidad) as total_productos
FROM usuarios
INNER JOIN compras ON usuarios.id = compras.usuario_id
INNER JOIN detalle_compras ON compras.id = detalle_compras.compra_id
GROUP BY usuarios.id, usuarios.nombre;

/*- Consulta cuál es el producto más vendido.*/ 
SELECT productos.nombre, SUM(detalle_compras.cantidad) as total_vendido
FROM productos
INNER JOIN detalle_compras ON productos.id = detalle_compras.producto_id
GROUP BY productos.id, productos.nombre
ORDER BY total_vendido DESC
LIMIT 1;

/*- Encuentra qué usuario ha gastado más dinero en compras.*/ 
SELECT usuarios.nombre, SUM(compras.total) as total_gastado
FROM usuarios
INNER JOIN compras ON usuarios.id = compras.usuario_id
GROUP BY usuarios.id, usuarios.nombre
ORDER BY total_gastado DESC
LIMIT 1;

/*- Lista los usuarios que han realizado compras ordenados por el total gastado.*/
SELECT usuarios.nombre, SUM(compras.total) as total_gastado
FROM usuarios
INNER JOIN compras ON usuarios.id = compras.usuario_id
GROUP BY usuarios.id, usuarios.nombre
ORDER BY total_gastado DESC;

/*- Muestra el total de ingresos generados por el e-commerce.*/ 
SELECT SUM(total) as ingresos_totales FROM compras;

/*- Consulta los productos que han sido comprados más de una vez.*/  
SELECT productos.nombre, SUM(detalle_compras.cantidad) as total_vendido
FROM productos
INNER JOIN detalle_compras ON productos.id = detalle_compras.producto_id
GROUP BY productos.id, productos.nombre
HAVING total_vendido > 1;

/*- Elimina la compra con el monto total más bajo.*/
DELETE FROM compras 
WHERE id = (
    SELECT id FROM (
        SELECT id FROM compras ORDER BY total ASC LIMIT 1
    ) as subquery
);

/*- Elimina todos los usuarios que nunca hayan realizado una compra.*/ 
DELETE FROM usuarios 
WHERE id NOT IN (SELECT DISTINCT usuario_id FROM compras);

/*- Muestra el nombre del usuario junto con la cantidad total de compras que ha realizado.*/
SELECT usuarios.nombre, COUNT(compras.id) as total_compras
FROM usuarios
LEFT JOIN compras ON usuarios.id = compras.usuario_id
GROUP BY usuarios.id, usuarios.nombre;

/*- Lista los productos junto con la cantidad de veces que han sido comprados.*/ 
SELECT productos.nombre, SUM(detalle_compras.cantidad) as total_vendido
FROM productos
INNER JOIN detalle_compras ON productos.id = detalle_compras.producto_id
GROUP BY productos.id, productos.nombre;

/*- Obtén el producto más caro comprado por cada usuario.*/
SELECT usuarios.nombre, productos.nombre as producto_mas_caro, MAX(productos.precio) as precio
FROM usuarios
INNER JOIN compras ON usuarios.id = compras.usuario_id
INNER JOIN detalle_compras ON compras.id = detalle_compras.compra_id
INNER JOIN productos ON detalle_compras.producto_id = productos.id
GROUP BY usuarios.id, usuarios.nombre;


 
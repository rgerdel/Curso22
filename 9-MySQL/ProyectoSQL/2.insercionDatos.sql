/*Inserta al menos 5 usuarios en la tabla usuarios*/
INSERT INTO `usuarios`(`nombre`, `email`, `edad`) VALUES ('RAFAEL','rafaelgerdel@gmail.com','44')
INSERT INTO `usuarios`(`nombre`, `email`, `edad`) VALUES ('DOMENICO','domenicogerdell@gmail.com','18')
INSERT INTO `usuarios`(`nombre`, `email`, `edad`) VALUES ('MARIA','mariacorina@gmail.com','21')
INSERT INTO `usuarios`(`nombre`, `email`, `edad`) VALUES ('ALEXANDRA','adignazi@gmail.com','40')
INSERT INTO `usuarios`(`nombre`, `email`, `edad`) VALUES ('MAX','maxantonio@gmail.com','25')

    /*o se puede hacer de esta forma tambien*/

INSERT INTO `usuarios`(`nombre`, `email`, `edad`) 
VALUES 
('RAFAEL','rafaelgerdel@gmail.com','44'),
('DOMENICO','domenicogerdell@gmail.com','18'),
('MARIA','mariacorina@gmail.com','21'),
('ALEXANDRA','adignazi@gmail.com','40'),
('MAX','maxantonio@gmail.com','25');

/*Inserta al menos 5 productos en la tabla productos.*/

INSERT INTO `productos`(`nombre`, `descripcion`, `precio`, `stock`) 
VALUES ('TV SMART SONY 55"','Televisor Smart TV Marca Sony de 55"','500','5')

INSERT INTO `productos`(`nombre`, `descripcion`, `precio`, `stock`) 
VALUES ('TV SMART HYUNDAI 32"','Televisor Smart TV Marca Hyundai de 32"','300','15')

INSERT INTO `productos`(`nombre`, `descripcion`, `precio`, `stock`) 
VALUES ('Portatil HP 15,6"','HP Portátil de 15,6 pulgadas, pantalla táctil HD, AMD Ryzen 3 7320U, 8 GB de RAM, SSD de 128 GB, gráficos AMD Radeon, Windows 11 Home en modo S, plata natural','650','20')

INSERT INTO `productos`(`nombre`, `descripcion`, `precio`, `stock`) 
VALUES ('Samsung Galaxy A16 4G LTE','Samsung Galaxy A16 4G LTE, Teléfono Móvil Android, Pantalla 6,7" Super AMOLED, Múltiples Cámaras, Almacenamiento 256GB, Negro (Versión Española), Garantía del Fabricante 3 Años + 1 Año Extra','180','30')

INSERT INTO `productos`(`nombre`, `descripcion`, `precio`, `stock`) 
VALUES ('Samsung Galaxy A36 5G','Samsung Galaxy A36 5G 256GB Teléfono Móvil, 8GB RAM, 50MP Cámara, Blanco, Garantía del Fabricante 3 Años + 1 Año Extra ','350','15')

INSERT INTO `productos`(`nombre`, `descripcion`, `precio`, `stock`) 
VALUES 
('Silla Gaming Ergonómica Reclinable','Silla Gaming Ergonómica Reclinable con Cojín Lumbar y Cervical | Respaldo Alto Acolchado | Altura ajustable | Ruedas Giratorias 360° y Reposabrazos | Ideal Ordenador, Oficina, Videojuego o Escritorio','200','9'),
('Samsung Galaxy Tab S10 FE 128GB','Samsung Galaxy Tab S10 FE 128GB, Tablet Android + S Pen, Galaxy AI, 8GB RAM, Pantalla de 10,9", Batería de Larga Duración, Azul, Garantía del Fabricante 3 Años + 1 Año Extra','600','4'),
('Mesa Gaming PC','Mesa Gaming PC para e-sports con Iluminación LED RGB alimentada por USB, Textura de Fibra de Carbono, Gran Reposavasos, Guiado de Cables y Soporte para Auriculares. Color Negro ','300','3'),
('JBL Tune 510 BT Auriculares inalámbricos','JBL Tune 510 BT Auriculares inalámbricos on-ear con tecnología Bluetooth, ligeros, cómodos y plegables, hasta 40h de batería, Siri y Asistente de Google, con conexión multipunto, negro','80','10')

/*Registra al menos 10 compras en la tabla compras.
  Registra al menos 20 productos en la tabla detalle_compras.*/

/*COMPRA Y DETALLE #1*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (1);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 1, 1, 500);

    UPDATE productos SET stock = stock - 1 WHERE id = 1;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 2, 1, 300);

    UPDATE productos SET stock = stock - 1 WHERE id = 2;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;



/*COMPRA Y DETALLE #2*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (2);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 8, 1, 300);

    UPDATE productos SET stock = stock - 1 WHERE id = 8;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 9, 1, 80);

    UPDATE productos SET stock = stock - 1 WHERE id = 9;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;

/*COMPRA Y DETALLE #3*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (3);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 7, 1, 600);

    UPDATE productos SET stock = stock - 1 WHERE id = 7;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 6, 1, 200);

    UPDATE productos SET stock = stock - 1 WHERE id = 6;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;

/*COMPRA Y DETALLE #4*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (4);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 3, 1, 650);

    UPDATE productos SET stock = stock - 1 WHERE id = 3;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 4, 1, 180);

    UPDATE productos SET stock = stock - 1 WHERE id = 4;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 5, 1, 350);

    UPDATE productos SET stock = stock - 1 WHERE id = 5;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 1, 1, 500);

    UPDATE productos SET stock = stock - 1 WHERE id = 4;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;


/*COMPRA Y DETALLE #5*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (5);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 1, 1, 500);

    UPDATE productos SET stock = stock - 1 WHERE id = 1;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 2, 1, 300);

    UPDATE productos SET stock = stock - 1 WHERE id = 2;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 3, 1, 650);

    UPDATE productos SET stock = stock - 1 WHERE id = 3;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;


/*COMPRA Y DETALLE #6*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (1);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 9, 1, 80);

    UPDATE productos SET stock = stock - 1 WHERE id = 9;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;


/*COMPRA Y DETALLE #7*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (3);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 9, 1, 80);

    UPDATE productos SET stock = stock - 1 WHERE id = 9;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 2, 1, 300);

    UPDATE productos SET stock = stock - 1 WHERE id = 2;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 3, 1, 650);

    UPDATE productos SET stock = stock - 1 WHERE id = 3;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;

/*COMPRA Y DETALLE #8*/

    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (1);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 5, 1, 350);

    UPDATE productos SET stock = stock - 1 WHERE id = 5;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;

/*COMPRA Y DETALLE #9*/

    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (2);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 5, 1, 350);

    UPDATE productos SET stock = stock - 1 WHERE id = 5;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;

/*COMPRA Y DETALLE #10*/
    /*HAGO EL INSERT SE SOLO EL ID DEL USUARIO PORQUE AUN NO TENGO EL TOTAL $ ADQUIRIDOS POR EL USUARIO*/
    INSERT INTO compras(usuario_id) VALUES (5);

    /*ASIGNO UNA VARIABLE AL ULTIMO ID POR GENERAR*/
    SET @id_compra = LAST_INSERT_ID();


    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 7, 1, 600);

    UPDATE productos SET stock = stock - 1 WHERE id = 7;

    INSERT INTO detalle_compras(compra_id, producto_id, cantidad, subtotal)
    VALUES (@id_compra, 6, 1, 200);

    UPDATE productos SET stock = stock - 1 WHERE id = 6;

    /*CALCULO LA SUMA TOTAL DE LOS PRODUCTOS COMPRADOS POR EL USUARIO*/
    UPDATE compras
    SET total = (
        SELECT SUM(subtotal)
        FROM detalle_compras
        WHERE compra_id = @id_compra
    )
    WHERE id = @id_compra;

/*
SELECT  
    usuarios.id,
    usuarios.nombre,
    compras.id as IDCOMPRA,
    detalle_compras.compra_id AS IDCOMPRADETALLE,
    detalle_compras.id as IDDETALLE,
    detalle_compras.producto_id,
    detalle_compras.cantidad,
    detalle_compras.subtotal,
    compras.fecha_compra,
    detalle_compras.fecha_creacion,
    compras.total
FROM compras
INNER JOIN detalle_compras ON compras.id = detalle_compras.compra_id
INNER JOIN usuarios ON compras.usuario_id = usuarios.id;
*/
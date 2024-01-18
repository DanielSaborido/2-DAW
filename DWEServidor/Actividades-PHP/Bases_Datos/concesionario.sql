CREATE DATABASE IF NOT EXISTS concesionario CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE concesionario;

-- Tabla Coche
CREATE TABLE Coche (
    id INT(10) PRIMARY KEY NOT NULL,
    Modelo VARCHAR(100),
    Marca VARCHAR(50),
    Precio INT(20),
    Stock INT(20)
);

-- Tabla Clientes
CREATE TABLE Clientes (
    id INT(10) PRIMARY KEY NOT NULL,
    Nombre VARCHAR(100),
    Ciudad VARCHAR(100)
);

-- Tabla Encargos
CREATE TABLE Encargos (
    id INT(10) PRIMARY KEY NOT NULL,
    cliente_id INT(10),
    coche_id INT(10),
    Cantidad INT(20),
    Gastado FLOAT(50,2),
    Fecha DATE,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
    FOREIGN KEY (coche_id) REFERENCES Coche(id)
);

-- Insertar datos en la tabla Coche
INSERT INTO Coche (id, Modelo, Marca, Precio, Stock)
VALUES (1, 'Modelo1', 'Marca1', 20000, 10),
       (2, 'Modelo2', 'Marca2', 25000, 8);

-- Insertar datos en la tabla Clientes
INSERT INTO Clientes (id, Nombre, Ciudad)
VALUES (1, 'Cliente1', 'Ciudad1'),
       (2, 'Cliente2', 'Ciudad2');

-- Insertar datos en la tabla Encargos
INSERT INTO Encargos (id, cliente_id, coche_id, Cantidad, Gastado, Fecha)
VALUES (1, 1, 1, 2, 40000, CURDATE()),
       (2, 2, 2, 1, 25000, CURDATE());

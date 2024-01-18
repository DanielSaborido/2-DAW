CREATE DATABASE IF NOT EXISTS concesionario
USE concesionario

-- Tabla Coche
CREATE TABLE IF NOT EXISTS coche
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100),
    marca VARCHAR(50),
    precio DECIMAL(12,2),
    stock DECIMAL(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Tabla cliente
CREATE TABLE cliente
(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    ciudad VARCHAR(100),
    gastado DECIMAL(12,2)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Tabla encargo
CREATE TABLE IF NOT EXISTS encargo
(
    id BIGINT AUTO_INCREMENT,
    coche_id BIGINT,
    cliente_id BIGINT,
    cantidad DECIMAL(4),
    fecha date,
    CONSTRAINT fk_encargo_cliente FOREIGN KEY(cliente_id) REFERENCES cliente(id) ON DELETE NO ACTION,
    CONSTRAINT fk_encargo_coche FOREIGN KEY(coche_id) REFERENCES coche(id) ON DELETE NO ACTION,
    CONSTRAINT pk_encargo PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;



-- Insertar datos en la tabla Coche
INSERT INTO Coche (id, Modelo, Marca, Precio, Stock)
VALUES (1, 'Modelo1', 'Marca1', 20000, 10),
       (2, 'Modelo2', 'Marca2', 25000, 8)

-- Insertar datos en la tabla Clientes
INSERT INTO Clientes (id, Nombre, Ciudad)
VALUES (1, 'Cliente1', 'Ciudad1'),
       (2, 'Cliente2', 'Ciudad2')

-- Insertar datos en la tabla Encargos
INSERT INTO Encargos (id, cliente_id, coche_id, Cantidad, Gastado, Fecha)
VALUES (1, 1, 1, 2, 40000, CURDATE()),
       (2, 2, 2, 1, 25000, CURDATE())

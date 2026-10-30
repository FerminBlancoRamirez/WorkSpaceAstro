CREATE TABLE  productos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    precio DECIMAL (10,2) not null
);

insert into productos (nombre, precio) value
("teclado", 20),
("ratos", 15),
("monitor", 250);
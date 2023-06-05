drop database mentejuvenil;
CREATE DATABASE if not exists mentejuvenil;

use mentejuvenil;
drop table if exists usuarios;
CREATE TABLE usuarios(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  contraseña VARCHAR(100) NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE mensajes (
  id INT NOT NULL AUTO_INCREMENT,
  correo VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  sitio_web VARCHAR(100),
  asunto VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT id_nombre FOREIGN KEY (id) REFERENCES usuarios(id),
  PRIMARY KEY (id)
);
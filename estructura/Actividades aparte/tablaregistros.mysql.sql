CREATE DATABASE glosarioProgramacion;

CREATE TABLE usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR (255) NOT NULL,
password VARCHAR (255) NOT NULL,
rango VARCHAR (255) NOT NULL
);

CREATE TABLE PalabrasReservadas (
id INT AUTO_INCREMENT PRIMARY KEY,
palabra VARCHAR (255) NOT NULL,
lenguaje VARCHAR (255) NOT NULL,
significado VARCHAR (255) NOT NULL,
ejemplo VARCHAR (255) NOT NULL
);

CREATE TABLE lenguajes (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR (255) NOT NULL
);
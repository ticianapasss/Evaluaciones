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




INSERT INTO glosarioProgramacion (ìd, palabra, lenguaje, significado, ejemplo)
VALUES ('1', 'print', 'python', 'mostrar en pantalla', '"Este programa mostrara..."' );

INSERT INTO glosarioProgramacion (ìd, palabra, lenguaje, significado, ejemplo)
VALUES ('2', 'if', 'python', 'condicion', '"if "' );

INSERT INTO glosarioProgramacion (ìd, palabra, lenguaje, significado, ejemplo)
VALUES ('3' , 'def', 'python', 'definir', 'def funcion (argumento)' );

INSERT INTO glosarioProgramacion (ìd, palabra, lenguaje, significado, ejemplo)
VALUES ('4', 'input', 'python', 'le pide al usuario ingresar un valor', 'num2 = (input)("Ingrese un valor")' );

INSERT INTO glosarioProgramacion (ìd, palabra, lenguaje, significado, ejemplo)
VALUES ('5', 'while', 'python', 'condicion', 'while True:' );

DELETE FROM glosarioProgramacion WHERE id = 3;
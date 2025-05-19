# Analizador de Metadata - Legajo: 51894 Agustin Araya De Cara #  
El proyecto dado de la contruccion del analizador con ANTLR y JavaScript, donde dada una gramatica EBNF, se pedia que realizara el analisis lexico y sintactico, generar el arbol de analisis sintactico, tabla de lexemas-tokens y la interpretacion del codigo fuente al lenguaje JavaScript mediante Node.js

# Estructura
**Metadata.g4**: Contiene la gramatica convertida a ANTLR

**generated**: Se guardan los archivos generados automaticamente por ANTLR

**index.js**: Contiene las instrucciones esenciales para la correcta ejecucion del programa

**CustomMetadataVisitor**: Permite que se realice el correcto recorrido del arbol 


**input.txt**: Archivo que contiene el texto de entrada a analizar

# Programas Requeridos

**Node.js**

**ANTLR 4**

# Guia para ejecutar el proyecto

## 1. Clonar el repositorio ##

Para ello deberemos abrir VisualStudioCode y poner en el terminal la instruccion "**git clone https://github.com/AgusAraya/51894**"

## 2. Escribir un input ##

Para escribir los inputs hay que tener en cuenta que se debe respetar una serie de reglas 

Es obligatorio que cada línea termine con punto y coma ";".

Los campos que aceptan texto pueden tener letras, números, espacios, guiones, puntos. No acepta acentos ni la ñ

Los numeros deben de ser positivos enteros y no deben de usar puntos o decimales

La hora sigue el sistema de 24 horas, desde las 00:00 hasta las 23:59.

Las etiquetas deben de escribirse entre "[ ]" y sus elementos deben de estar separados por comas y sin espacios entre ellos.

## 3. Generacion del Arbol ##
   
Para poder generar el arbol y los tokens deberemos de apretar "F5" 

## 4. Interpretacion del Codigo Fuente en JavaScript mediante Node.js ##
Para que se realice la interpretacion del codigo fuente en javascript usando Node como interprete se debe abrir la Terminal y colocar la siguiente instruccion "**node index.js**"


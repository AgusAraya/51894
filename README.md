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

Para esta opcion abrimos Visual Studio Code y elegimos la opcion "Clone git repository"

El programa nos pedira una direccion, en la cual la direccion a colocar en VisualStudioCode es:

**https://github.com/AgusAraya/51894.git**

En CMD o PowerShell colocar las siguientes instrucciones

**git clone https://github.com/AgusAraya/51894.git**

**cd 51894**

**code .**

## 2. Escribir un input ##

Para escribir los inputs hay que tener en cuenta que se debe respetar una serie de reglas 

Es obligatorio que cada línea termine con punto y coma ";".

Los campos que aceptan texto pueden tener letras, números, espacios, guiones, puntos. No acepta acentos ni la ñ

Los numeros deben de ser positivos enteros y no deben de usar puntos o decimales

La hora sigue el sistema de 24 horas, desde las 00:00 hasta las 23:59.

Las etiquetas deben de escribirse entre "[ ]" y sus elementos deben de estar separados por comas y sin espacios entre ellos.

En el Analizador hay una carpeta llamada Inputs que contiene 4 archivos txt **Entrada-Valida1.txt** **Entrada-Valida2.txt** **Entrada-No-Valida1.txt** y **Entrada-No-Valida2.txt** . Cuyo contenido tiene 4 inputs distintos para remplazarlos por el input dado por el trabajo practico. Donde 2 son validos y los otros 2 tienen errores.

## 3. Generacion del Arbol ##
   
Para poder generar el arbol y los tokens deberemos de apretar "F5" 

## 4. Interpretacion del Codigo Fuente en JavaScript mediante Node.js ##
Para que se realice la interpretacion del codigo fuente en javascript usando Node como interprete se debe abrir la Terminal y colocar la siguiente instruccion "**node index.js**"


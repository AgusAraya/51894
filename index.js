import antlr4 from "antlr4";
import { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";
import readline from "readline";

// Importar desde la carpeta 'generated'
import MetadataLexer from "./generated/MetadataLexer.js";
import MetadataParser from "./generated/MetadataParser.js";

// Importar visitor personalizado
import CustomMetadataVisitor from "./CustomMetadataVisitor.js";

async function main() {
    let input;

    // Leer desde archivo si existe
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no existe, pedir por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Procesar entrada con ANTLR
    const inputStream = CharStreams.fromString(input);
    const lexer = new MetadataLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MetadataParser(tokenStream);

    // Punto de entrada de tu gramática
    const tree = parser.metadata();

    // Verificar errores de sintaxis
    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } else {
        console.log("\nEntrada válida.");
        const arbol = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${arbol}`);

        // Usar el visitor personalizado
        const visitor = new CustomMetadataVisitor();
        visitor.visit(tree);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();


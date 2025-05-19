import MetadataVisitor from "./generated/MetadataVisitor.js";

export default class CustomMetadataVisitor extends MetadataVisitor {
    constructor() {
        super();
        this.result = {};
    }

    visitMetadata(ctx) {
        for (let campoCtx of ctx.campo()) {
            this.visit(campoCtx);
        }
        console.log("\nResultado final:");
        console.log(JSON.stringify(this.result, null, 2));
        return this.result;
    }

    visitCampo(ctx) {
        const nombre = ctx.nombreCampo().getText();
        const valor = this.visit(ctx.valorCampo());
        this.result[nombre] = valor;
        return null;
    }

    visitValorCampo(ctx) {
        if (ctx.texto()) return this.visit(ctx.texto());
        if (ctx.numero()) return parseInt(ctx.numero().getText());
        if (ctx.fecha()) return ctx.fecha().getText();
        if (ctx.listaTextos()) return this.visit(ctx.listaTextos());
        return null;
    }

    visitTexto(ctx) {
        return ctx.getText();
    }

    visitListaTextos(ctx) {
        return ctx.texto().map(t => t.getText());
    }
}

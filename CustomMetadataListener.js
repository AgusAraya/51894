import { MetadataListener } from "./generated/MetadataListener.js";

export class CustomMetadataListener extends MetadataListener {
    enterMetadata(ctx) {
        console.log("Inicio de metadata");
    }

    exitMetadata(ctx) {
        console.log("Fin de metadata");
    }

    enterCampo(ctx) {
        console.log("→ Entrando a campo:", ctx.getText());
    }

    exitCampo(ctx) {
        console.log("← Saliendo de campo:", ctx.getText());
    }

    enterNombreCampo(ctx) {
        console.log("Campo:", ctx.getText());
    }

    enterValorCampo(ctx) {
        console.log("Valor:", ctx.getText());
    }
}

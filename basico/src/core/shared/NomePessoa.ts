import NomeSimples from "./NomeSimples";

export default class NomePessoa extends NomeSimples {
    constructor(completo: string, min: number = 3, max: number = 120) {
        super(completo, min, max);
        if (completo.split(" ").length < 2) {
            throw new Error("O nome completo deve incluir o sobrenome.");
        }
    }

    get primeiroNome(): string {
        return this.completo.split(" ")[0];
    }

    get ultimoNome(): string {
        return this.completo.split(" ")[this.completo.split(" ").length - 1];
    }

    get nomeDoMeio(): string {
        return this.completo.split(" ")[1];
    }
}

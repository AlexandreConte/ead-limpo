export default class Email {
    constructor(readonly completo: string) {
        if (!completo) {
            throw new Error("O email não pode ser vazio.");
        }
        if (!completo.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z+])?$/i)) {
            throw new Error("O email deve ser válido");
        }
    }

    get usuario(): string {
        return this.completo.split("@")[0];
    }

    get dominio(): string {
        return this.completo.split("@")[1];
    }
}

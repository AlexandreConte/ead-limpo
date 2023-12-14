export default class NomeSimples {
    constructor(readonly completo: string, min: number = 3, max: number = 120) {
        if (min > max) {
            throw new Error("O tamanho mínimo não pode ser maior que o máximo");
        }
        if (!completo) {
            throw new Error("Nome é um campo obrigatório");
        }
        if (completo.length < min || completo.length > max) {
            throw new Error(
                `Nome deve ter entre ${min} caracteres e ${max} caracteres.`
            );
        }
    }
}

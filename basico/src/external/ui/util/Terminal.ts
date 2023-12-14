import { terminal } from "terminal-kit";
import { InputFieldOptions } from "terminal-kit/Terminal";

export default class Terminal {
    static titulo(texto: string) {
        terminal.clear();
        terminal.bold.magenta(`${texto}\n`);
        terminal.bold.magenta("-".repeat(texto.length));
    }

    static async menu(
        titulo: string,
        opcoes: string[]
    ): Promise<[number, string]> {
        Terminal.titulo(titulo);
        const resposta = await terminal.singleColumnMenu(opcoes).promise;
        return [resposta.selectedIndex, resposta.selectedText];
    }

    static async campoRequerido(
        label: string,
        opcoes?: InputFieldOptions
    ): Promise<string> {
        terminal.gray(`\n${label}: `);
        const valor = await terminal.inputField(opcoes).promise;
        if (valor?.trim()) {
            return valor;
        }
        return Terminal.campoRequerido(label, opcoes);
    }

    static async esperarEnter() {
        terminal.white("\nPressione ENTER para continuar...");
        await terminal.inputField({ echo: false }).promise;
    }

    static async sucesso(mensagem: string, novaLinha = true) {
        terminal.green(`${novaLinha ? "\n" : ""}${mensagem}`);
    }

    static async erro(mensagem: string, novaLinha = true) {
        terminal.red(`${novaLinha ? "\n" : ""}${mensagem}`);
    }
}

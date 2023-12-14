import Usuario from "../../../core/usuario/Usuario";
import Terminal from "../util/Terminal";

export default async function registrarUsuario() {
    Terminal.titulo("Registrar Usuário");

    try {
        const nome = await Terminal.campoRequerido("Nome");
        const email = await Terminal.campoRequerido("Email");
        const senha = await Terminal.campoRequerido("Senha", { echo: false });

        const usuario = new Usuario({ nome, email, senha });
        Terminal.sucesso("Usuário registrado com sucesso!");
    } catch (e: any) {
        Terminal.erro(e.message);
    } finally {
        await Terminal.esperarEnter();
    }
}

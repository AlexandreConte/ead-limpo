import Email from "../shared/Email.";
import Entidade, { EntidadeProps } from "../shared/Entidade";
import NomePessoa from "../shared/NomePessoa";

export interface UsuarioProps extends EntidadeProps {
    nome?: string;
    email?: string;
    senha?: string;
}

export default class Usuario extends Entidade<Usuario> {
    readonly nome: NomePessoa;
    readonly email: Email;
    // readonly senha: SenhaHash;

    constructor(props: UsuarioProps) {
        super(props);
        this.nome = new NomePessoa(props.nome!);
        this.email = new Email(props.email!);
        // this.senha = props.senha;
    }
}

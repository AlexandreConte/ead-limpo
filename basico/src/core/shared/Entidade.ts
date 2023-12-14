import Id from "./Id";

export interface EntidadeProps {
    id?: string;
}

export default abstract class Entidade<Tipo> {
    readonly id: Id;
    readonly props: any;

    constructor(props?: any) {
        this.id = new Id(props?.id);
        this.props = { ...props, id: this.id.valor };
    }

    igual(entidade: Entidade<Tipo>): boolean {
        return this.id.valor === entidade.id.valor;
    }

    diferente(entidade: Entidade<Tipo>): boolean {
        return !this.igual(entidade);
    }

    clone(novasProps: any, ...args: any[]): Tipo {
        return new (this.constructor as any)({ ...this.props, ...novasProps });
    }
}

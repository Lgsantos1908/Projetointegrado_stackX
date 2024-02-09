export type menuItens = {
    
    id: string;
    nomeprato: string;
    descricaoprato: string;
    valor: string;
    foto: string;
    
}

export type prato = {
    idprato: string;
    nome: string;
    descricao: string;
    foto: string;
}

export type users = {
    iduser:string;
    user: string;
    password: string;
    name: string;
    email: string;
    endereço: string;
    telefone: string;
}

export type pedido = {
    iduser: string;
    name: string;
    id: string;
    nomeprato: string;
    descricaoprato: string;
    valor: string;
    ValorTot : string;
    quantidade: number;
    status: string
}
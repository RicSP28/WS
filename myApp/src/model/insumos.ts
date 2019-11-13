export class Insumos {
    id: string;
    nome: string;
    descricao: string;
    estoque: string;
    preco: string;
    imagem: string;
    
    setInsumos(obj: any, id:any) {
        this.id = id;
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.estoque = obj.estoque;
        this.preco = obj.preco;
        this.imagem = obj.imagem;
}
}

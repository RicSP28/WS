export class Fornecedores{
    id : string;
    nomedaempresa : string;
    endereco : string;
    telefonedecontato : string;
    
    setFornecedores(obj : any, id : any){
        this.id = id;
        this.nomedaempresa = obj.nomedaempresa;
        this.endereco = obj.endereco;
        this.telefonedecontato = obj.telefonedecontato;
    }
}
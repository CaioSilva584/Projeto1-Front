export default class Curso {
    constructor(id, imagem, descricao, nome,) {
        this.id = id
        this.imagem = imagem
        this.descricao = descricao
        this.nome = nome
    }

    static fromJson(json){
        return new Curso(json.id, json.imagem, json.descricao, json.nome)
    }
}
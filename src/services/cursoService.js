import { Curso } from "../model" // Quando import é feito sem chaves, é importado o "default"

import { natacao, combateIncendio, primeirosSocorros, thanos } from "../assets/img"

const cursos = [
    {
        id: 1,
        imagem: natacao,
        descricao: "Este curso tem como objetivo ensinar pessoas que não possuem aceso à piscinas a nadar.",
        nome: "Curso de natação"
    },
    {
        id: 2,
        imagem: primeirosSocorros,
        descricao: "Este curso tem como objetivo ensinar pessoas que não querem sair da frente de seus computadores a realizarem primeiros socorros sem a nescessidade de aulas práticas.",
        nome: "Curso de primeiros Socorros"
    },
    {
        id: 3,
        imagem: combateIncendio,
        descricao: "Este curso tem como objetivo ensinar pessoas que querem combater incendios mas que têm medo de água fisicamente (não recomendamos o curso de natação aos mesmos).",
        nome: "Curso de combate ao incênido"
    },
    {
        id: 4,
        imagem: thanos,
        descricao: "Este curso tem como objtetivo ensinar sonhadores avançados a serem capazes de lidar com complicações em caso de Thanos em seus sonhos.",
        nome: "Curso de combate ao Thanos"
    },
]

// const [ curso ] = cursos
// const { imagem: img } = curso

class CursoService {
    getCursos() {
        return cursos.map((curso) => Curso.fromJson(curso))
    }

    getCurso(id) {
        return cursos.filter((curso) => curso.id == id ).map((curso) => Curso.fromJson(curso))[0]
    }
}

const service = new CursoService()

export default service
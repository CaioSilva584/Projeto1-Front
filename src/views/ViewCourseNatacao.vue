<script>

import natacao from "../assets/img/natacao.jpg"

</script>

<template>
    <section class="header-wrapper">
        <div>
            <h1>Curso de Natação</h1>
        </div>
    </section>
    <section class="body-wrapper">
        <div>
            <h1>Descrição</h1>
            <h4>Este curso tem por objetivo ensinar pessoas que não possuem acesso a uma psicina a nadar</h4>
            <img :src="natacao">
        </div>
            
    </section>
</template>

<style scoped>
.body-wrapper {
    border-style: solid;
    border-radius: 20px 20px;
    border-color: rgba(84, 84, 84, 0.65);
    margin: 5em;
    padding: 1em auto;
}

.body-wrapper h1{
    padding-left: 3em;
    padding: 2em;
}

.body-wrapper h4{
    padding-left: 3em;
    padding-top: 0;
    padding: 2em;
    margin: 0;

}
</style>
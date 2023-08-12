<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener"><input class="button" value="Oficial Documentation" type="button"></a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener"><input class="button" value="Vite" type="button"></a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"><input class="button" value="VSCode" type="button"></a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener"><input class="button" value="Volar" type="button"></a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener"><input class="button" value="Cypress" type="button"></a> and
    <a href="https://on.cypress.io/component" target="_blank"><input class="button" value="Cypress Component Testing" type="button"></a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener"><input class="button" value="Pinia" type="button"></a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"><input class="button" value="Vue Router" type="button"></a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"><input class="button" value="Vue Test Utils" type="button"></a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"><input class="button" value="Vue Dev Tools" type="button"></a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"><input class="button" value="Awesome Vue" type="button"></a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener"><input class="button" value="Vue Land" type="button"></a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      ><input class="button" value="StackOverflow" type="button"></a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener"><input class="button" value="our mailing list" type="button"></a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"><input class="button" value="@vuejs" type="button"></a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"><input class="button" value="becoming a sponsor" type="button"></a>.
  </WelcomeItem>
</template>

<style scoped>
.button{
  border-width: 0px;
  border-radius: 6px;
  background-color:  rgba(84, 84, 84, 0.48);
  color: rgba(235, 235, 235, 0.64);
}
</style>

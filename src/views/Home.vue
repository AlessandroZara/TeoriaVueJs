<template>
  <div class="home">
    <br>
    <div v-html="html"></div>
    <p>
      {{ msg }}
    </p>
    <img v-bind:src="imgPath" width="300" height="100" />
    <p :style="styleObject">Donec sed odio dui.</p>
    <p :style="[baseStyles, overridingStyles]">Ciaone a tutti</p>
    <button type="button" class="btn" :class="classObject">Danger</button><br />
    <button type="button" :class="['btn', warningClass]">Danger</button>
    <br />
    <hello-world> </hello-world>

    <div>
      <hello-2> </hello-2>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Hello2 from "../components/Hello2.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Hello2,
  },
  data() {
    return {
      classObject: {
        enabled: false,
        "btn-warning": true,
      },
      warningClass: "btn-warning",
      html: `
          <p style="color: black; font-size: 2em;" class="my-class">
            Guida completa ,LATO CODICE, a Vue.js, framework Javascript per la creazione di interfacce utente e single-page applications 
            di nuova generazione. <br>Nato da Evan You, ex sviluppatore di Google, Vue.js si prefigge l'obiettivo di "prendere il meglio" 
            di AngularJS per creare qualcosa di veramente snello ed efficiente nell'ambito delle moderne tecnologie di sviluppo.<br>
            Questo codice è stato scritto seguendo la guida di Mr Web. <br>
            il suo sito è: <a href="https://www.mrw.it/javascript/guida-vue-js/" target=:_blank><u>https://www.mrw.it/javascript/guida-vue-js/</u></a>
          </p>
           `,
      imgPath:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      styleObject: {
        fontSize: "2em",
        fontWeight: 800,
        color: "#332456",
      },
      baseStyles: {
        fontSize: "2em",
        fontWeight: 800,
        color: "rgb(51, 52, 53)",
      },
      overridingStyles: {
        color: "rgb(21, 101, 192)",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[v-cloak] {
  display: none;
}
</style>

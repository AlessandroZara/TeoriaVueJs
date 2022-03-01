<template>
  <div class="home">
    <div v-html="html"></div>
    <p>
      {{ msg }}
    </p>
    <img v-bind:src="imgPath" width="300" height="100" />
    <p :style="styleObject">Donec sed odio dui.</p>
    <p :style="[baseStyles, overridingStyles]">Ti Odio bastardo</p>
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
          <p style="color: mediumturquoise; font-size: 2em;" class="my-class">
            codice html
          </p>
           `,
      imgPath:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      styleObject: {
        fontSize: "2em",
        fontWeight: 800,
        color: "#333435",
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

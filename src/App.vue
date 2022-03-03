<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/page2">Page2</router-link>|
      <router-link to="/v-else">V-Else</router-link>|
       <router-link to="/key">Key</router-link>|
       <router-link to="/v-for">V-For</router-link>|
       <router-link to="/computed">Computed</router-link>|
       <router-link to="/slot">Slot</router-link>|
       <router-link to="/lifecycle-components">LifeCycleComponents</router-link>|
       <router-link to="/componenti-dinamici">Componenti Dinamici</router-link>|
      <router-view />
  </div>
    
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      classObject: {
      enabled: false,
      'btn-warning': true
    },
     warningClass: 'btn-warning',
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
      color: "rgb(51, 52, 53)"
    },
    overridingStyles: {
      color: "rgb(21, 101, 192)"
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
  display: none; /* quando ce caricamento lento del browser congiliato mettere al template questa impostazione per nascondere le cose fino a che non si carica del tutto */
}
</style>

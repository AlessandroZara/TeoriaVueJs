<template>
  <div>
    <h1>Page2</h1>
    <main id="ciao">
      <button @click="toggleP">
        {{ this.show ? "Nascondi" : "Mostra" }} Paragrafo
      </button>

      <p v-if="show">
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      </p>
    </main>

    <section id="root">
      <button @click="togglePe">
        {{ this.show ? "Nascondi" : "Mostra" }} Paragrafo
      </button>
      <div v-if="show2">
        <h1>Vulputate Condimentum Vehicula</h1>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      show: false,
      show2: false,
    };
  },
  methods: {
    toggleP() {
      this.show = !this.show;
    },
     togglePe() {
      this.show2 = !this.show2;
    },
  },
};
</script>

<style></style>

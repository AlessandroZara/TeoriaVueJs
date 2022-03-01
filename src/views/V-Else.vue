<template>
  <div class="else">
    <main id="root">
      <button @click="generateRandomValue">Genera un numero casuale</button>
      <br>
      <br>
      <span>{{randomNumber}}</span>
      <p v-if="randomNumber < 5">
        Il numero generato è:
        <span style="color: crimson"> minore di 5 </span>
      </p>
      <p v-else-if="randomNumber > 5">
        Il numero generato è:
        <span style="color: darkgreen"> maggiore di 5 </span>
      </p>
      <p v-else>
        Il numero generato è:
        <span style="color: goldenrod"> uguale a 5 </span>
      </p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      randomNumber:0
    };
  },
  methods: {
    toggleP() {
      this.show = !this.show;
    },
    togglePe() {
      this.show2 = !this.show2;
    },
    generateRandomValue() {
      this.randomNumber = Math.round(Math.random() * 10);
    },
  },
};
</script>

<style></style>

<template>
  <div class="hello">
    <main id="root">
      <div class="display">
        <span>{{ randomNumber }}</span>
      </div>
      <button v-on:click="randomNumber = Math.round(Math.random() * 5)">
        Random Number
      </button>
      <div class="display">
        <span>{{ randomNumber2 }}</span>
      </div>
      <button @click="generateRandomNumber">Random Number</button>
      <br /><br />
      <div>
        <button @click="id(1)">Pulsante 1</button>
        <button @click="id(2)">Pulsante 2</button>
        <button @click="id(3)">Pulsante 3</button>
      </div>
      <div>
        <input type="text" @input="validate('Name', $event)" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      randomNumber: 0,
      randomNumber2: 0,
    };
  },
  methods: {
    generateRandomNumber() {
      // All'interno dei metodi,
      // Vue fa in modo che
      // 'this' si riferisca all'istanza 'vm'
      // cosicché sia possibile accedere alle proprietà
      // dell'oggetto 'data'
      this.randomNumber2 = Math.round(Math.random() * 5);
    },
    id: function (buttonId) {
      console.info(`Pulsante ${buttonId}`);
    },
    validate(inputName, event) {
      console.log(`Validating input field ${inputName}...`);
      console.log(`Current value: ${event.target.value}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

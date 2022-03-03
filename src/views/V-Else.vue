<template>
  <div class="else">
    <main id="root">
      <h1>Vulputate Condimentum Vehicula</h1>
      <button @click="toggleP">
        {{ this.show ? "Nascondi" : "Mostra" }} Paragrafo
      </button>
      <!-- La direttiva v-show, come "v-if", può essere usata per mostrare o nascondere un elemento (ed eventuali elementi discendenti)
       in base ad un'espressione passata come valore, ma non può essere accompagnata dalle direttive v-else-if e v-else. 
       Rispetto alla direttiva "v-if", "v-show" usa la proprietà CSS display per mostrare o nascondere un elemento.
       Inoltre v-show non può essere applicata sugli elementi di tipo <template>. -->
      <p v-show="show">
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      </p>
      <button @click="generateRandomValue">Genera un numero casuale</button>
      <br />
      <br />
      <span>{{ randomNumber }}</span>
      <!--v-if che aggiunge o rimuove uno o più elementi dal DOM a seconda che 
      l'espressione passata come valore sia equiparabile al valore true o false. -->
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
      <!--È bene porre l'accento su un aspetto importante del funzionamento della direttiva v-if. 
      Quando l'espressione passata a quest'ultima è falsa, l'elemento, su cui è applicata la direttiva, 
      viene rimosso dal DOM e non semplicemente nascosto attraverso qualche regola CSS. 
      Possiamo notare tale comportamento nelle due immagini sottostanti. -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
      randomNumber: 0,
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

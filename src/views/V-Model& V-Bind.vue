<template>
  <!-- Vue v-model è una direttiva che fornisce il data binding bidirezionale tra un input e i dati del modulo o tra due componenti.
  Vue v-model è una direttiva che possiamo usare nel codice del modello. 
  Una direttiva è un token modello che dice a Vue come vogliamo gestire il nostro DOM.
  Nel caso di v-model, dice a Vue che vogliamo creare un data binding bidirezionale tra un valore nel nostro modello 
  e un valore nelle nostre proprietà dei dati. 
  Un caso d'uso comune per l'utilizzo di v-model è quando si progettano moduli e input .
  Possiamo usarlo per fare in modo che i nostri elementi di input DOM siano in grado di modificare i dati nella nostra istanza Vue.
  -->
  <div class="container">
    <div>
      <h1>V-Model</h1>
      <br />
      <br />
      <input type="text" v-model="value" />
      <p>Value: {{ value }}</p>
    </div>
    <br>
    <br>
    <br>
    <!-- Una direttiva che viene comunemente modificata con v-model è la "v-bind" direttiva.
         La differenza tra i due è che v-model fornisce l'associazione dati a due vie e invece v-bind associa i dati solo in una via.
          -->
    <div>
      <div v-bind:style="{ color }">{{color}} text</div>
      <hello v-bind:name="name"></hello> <!-- importato dal componente ComponentProva.vue -->
    </div>
  <!-- la direttiva v-model può essere applicata anche ad altri elementi. 
  Illustriamo allora vari esempi partendo dall'elemento <select> --> 
    <br>
    <br>
    <div class="select">
    <select v-model="selected">
      <option disabled value="">
        Seleziona la libreria/framework preferito
      </option>
      <option>Angular</option>
      <option>React</option>
      <option>Vue</option>
    </select>
    <p>Hai selezionato: {{ selected }}</p>
  </div>
  <!-- Con la direttiva v-model associamo una proprietà di tipo stringa selected ad una delle opzioni disponibili per l'elemento <select>. 
    Se per esempio selezioniamo Vue, data.selected assumerà immediatamente tale valore. -->
  </div>
</template>

<script>
import Hello from '../components/ComponentProva.vue'
export default {
    components: {
        Hello
    },
  data() {
    return {
      value: "Hello World",
      color: 'blue',
      selected: ''
    };
  },
};
</script>

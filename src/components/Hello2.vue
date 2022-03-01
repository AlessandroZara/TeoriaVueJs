<template>
  <div>
<main id="root">
  <form @submit.prevent="validate">

    <!-- selettore -->
    <fieldset>
      <legend>Seleziona quando validare il campo sottostante</legend>
      <input 
        type="radio" 
        id="input-selector" 
        value="input" 
        :checked="event === 'input'" 
        @change="event = 'input'">
      <label for="input-selector">Evento Input</label>
      <input 
        type="radio" 
        id="change-selector" 
        value="change" 
        :checked="event === 'change'" 
        @change="event = 'change'">
      <label for="change-selector">Evento Change</label>
    </fieldset>

    <!-- input di testo da validare -->
    <input type="text" @[event]="validate" placeholder="Inserisci del testo">
    
    <!-- eventuale messaggio di errore -->
    <div class="error">{{ errorMsg }}</div>
    <button type="submit">Invia</button>
  </form>
</main>
  </div>
  <br>
  <div>
 <button @click.prevent.right="onClick">click</button>
  </div>
  <br>
  <br>
  <div>
  <input type="text" @keyup.a.e.i.o.u="onKeyUp">
   <span>Ultima vocale digitata: {{ key }}</span>
  </div>
  <br><br>
  <div class="selettore">
    <input type="text" @keyup.enter.arrow-up="onKeyUp">
   <span>Ultimo tasto premuto: {{ key }}</span>
  </div>
<br><br>
  <div class="selettore2">
    <!-- Ctrl + Click -->
<span v-on:click.ctrl="onClick">Lorem Ipsum</span>

<!-- Alt + a -->
<input v-on:keydown.alt.a="onKeyDown">
<!-- Command+i oppure WindowsKey+i -->
<input type="text" @keydown.meta.i="handler">
<button v-on:click.alt="handler">Click</button>
  </div>
</template>

<script>
export default {
    el: "#root",
    name:"hello",
 data() {
     return{
            event: 'input',
            errorMsg: '',
            key: ''
     }
    
  },
  // definiamo i metodi dell'istanza
  methods: {
     validate(event) {

      const inputValue = event.target.value;
      const pattern = /^[a-zA-Z]+$/;

      if (pattern.test(inputValue) === false) {
        this.errorMsg = 'campo non valido';
      } else {
        this.errorMsg = '';
      }
    },
     onClick(event) {
      // tramite modificatore .right
      // onClick viene invocato solo al click
      // del tasto destro del mouse
      console.log(event.button); // stampa solo 2
    },
    onKeyUp(event) {
      this.key = event.key;
    }
  }
}
</script>

<style>

</style>
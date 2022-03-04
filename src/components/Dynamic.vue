<template>
  <div class="container3">
    <p v-colorize:[selected]="color"> <!-- Per indicare che si tratta di un argomento dinamico, 
                                           dovremo racchiudere quest'ultimo fra parentesi quadre, per esempio:
                                           "v-dir-name:[dynamic-argument]" -->
      Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, 
      vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. 
      Nullam id dolor id nibh ultricies vehicula ut id elit. 
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
    <div>
      <input 
        type="radio" 
        name="background-color" 
        id="background-color" 
        value="background-color" 
        v-model="selected">
      <label for="background-color">Background</label>
      <input 
        type="radio" 
        name="border" 
        id="border" 
        value="border" 
        v-model="selected">
      <label for="border">Border</label>
    </div>
    <p style="color:black">
        Nell'esempio riportato sopra, creiamo una direttiva <strong>"colorize"</strong>  che registriamo localmente 
        ed applichiamo all'unico paragrafo presente nel template del componente. <br>
        Attraverso dei pulsanti di tipo radio modifichiamo la proprietà selected la quale può assumere come valore
       <i>'background-color'</i> o <i>'color'.</i>  <br>
        Quando questa cambia, viene aggiornato il componente e viene passato il nuovo argomento alla direttiva. <br>
        La direttiva sfrutta l'argomento dinamico per definire il colore dello sfondo o del bordo del paragrafo. <br>
        Il colore da usare viene passato come valore della direttiva. <br>
        Visto che il corpo delle funzioni <strong>"bind()"</strong> e <strong>"update()"</strong> è identico, definiamo il comportamento della direttiva attraverso una funzione.
     </p>
  </div>
</template>

<script>
  export default {
    directives: {
      colorize(el, binding) {
        const cssProperty = binding.arg || 'background-color'; //arg: è l'argomento passato alla direttiva. binding: è un oggetto con proprietà
        if (cssProperty === 'border') {
          binding.value = `2px solid ${binding.value}`;
          el.style['background-color'] = '';
        } else if (cssProperty === 'background-color') {
          el.style['border'] = '' 
        }
        el.style[cssProperty] = binding.value;
      }
    },
    data() {
      return {
        color: 'orange',
        selected: 'background-color'
      }
    },
  }
</script>

<style lang="css" scoped>
  p {
    padding: 1rem;
  }
</style>
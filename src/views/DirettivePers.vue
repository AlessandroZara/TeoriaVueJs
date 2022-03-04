<template>
  <div class="container2">
       <br>
      <h1>Direttive personalizzate</h1>
      <p>Funzioni speciali per le direttive (Hooks)
      Per definire il comportamento di una direttiva, Vue mette a disposizione una serie di metodi speciali e opzionali simili 
      ai Lifecycle hooks dei componenti. In questi metodi avremo accesso al valore, all'argomento e ai modificatori passati alla direttiva.
       I metodi in questione sono i seguenti:
       </p>
      <ol>
     <li>bind() viene invocato una sola volta quando la direttiva viene associata all'elemento su cui è stata applicata. Viene solitamente usato per le operazioni di inizializzazione della direttiva.</li> 
      <li>inserted() viene chiamato quando l'elemento su cui è applicata la direttiva viene inserito nel nodo genitore.</li> 
     <li>update() si ripete quando l'elemento viene aggiornato e preferibilmente prima dell'aggiornamento degli elementi discendenti. A voler essere più precisi, il metodo viene invocato ogni volta che viene aggiornato il nodo virtuale (VNode) associato al componente, ovvero la rappresentazione dell'elemento nel Virtual DOM.</li> 
     <li> componentUpdated() viene chiamato dopo che i VNode del componente e di tutti i suoi discendenti sono stati aggiornati.</li> 
     <li> unbind() infine viene invocato quando la direttiva viene dissociata dall'elemento.</li> 
      </ol>    
     
    
      <br>
      <br>
    <div v-directive-name></div>
    <!-- Volendo la direttiva può cambiare comportamento attraverso dei modificatori e ricevere un valore. 
      Vediamo allora qual è la sintassi da usare in ciascuno di questi casi. -->
    <div v-directive-name:arg.modifier1.modifier2="value"></div>
    <!-- Fra doppie virgolette passiamo un valore alla direttiva.
     È bene notare che nella forma riportata sopra value è il nome di una proprietà del componente che usa la direttiva.
     Supponendo che value sia pari a 'ciao', la direttiva riceverà tale stringa come valore.-->
    <!-- Le direttive possono però avere anche un argomento opzionale. 
    La sintassi da utilizzare è V-DIRECTIVE-NAME:ARGUMENT. -->
    <input 
    type="text" 
    placeholder="Inserisci del testo..." 
    v-fat-border="color"
  >
  <br>
  <br>
    <DirettiveComponent> </DirettiveComponent>
    <br>
    <br>
    <Dynamic> </Dynamic>
  </div>
</template>

<script>
import DirettiveComponent from '../components/DirettivePersComponent.vue'
import Dynamic from '../components/Dynamic.vue'
export default {
    name:"DirettivePersonalizzate",
    components:{
        DirettiveComponent,
        Dynamic,
    },
  /* altre opzioni */
  directives: {
    directiveName: {},
      /* oggetto per definire la direttiva */
       fatBorder(el, binding) {
        el.style.border = `4px solid ${binding.value}`; /* "el" rappresenta l'elemento del DOM su cui viene applicata la direttiva. 
                                                         Useremo tale riferimento per apportare le modifiche necessarie direttamente al DOM. */
                                                        /*binding è un oggetto che contiene le seguenti proprietà:
                                                     -  name: rappresenta il nome della direttiva senza il prefisso v-;
                                                     -  value: è il valore (risultato dell'espressione) passato alla direttiva;
                                                     -  oldValue: è presente solo nei metodi update() e componentUpdated(). 
                                                        Rappresenta il precedente valore della direttiva anche se quest'ultimo non ha subito
                                                         variazioni;
                                                     -  expression: è l'espressione assegnata alla direttiva. 
                                                        Nel seguente caso <input v-dir-name="name.toUpperCase()" >, expression è pari 
                                                        alla stringa "name.toUpperCase()";
                                                     -  arg: è l'argomento passato alla direttiva. 
                                                        In <input v-dir-name:my-arg="name.toUpperCase()" >, la proprietà arg è pari alla
                                                        stringa "my-arg";
                                                     -  modifiers: è un oggetto che, se non vuoto, contiene come proprietà il nome dei
                                                        modificatori.
                                                        Per <input v-dir-name.mod1.mod2="name.toUpperCase()" >, 
                                                        i diversi hooks avranno accesso all'oggetto {mod1: true, mod2: true}. */
   }    
  
 },
  data() {
      return {
        color: 'hsl(86, 60%, 50%)' // green
      }
    }
 }

</script>

<style>

</style>
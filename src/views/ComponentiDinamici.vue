<template>
  <div class="container">
      <h1>Componenti Dinamici Vue JS</h1>
    <div 
      class="selector-wrapper" 
      v-for="selector in selectors" 
      :key="selector.id"
    >
      <input 
        type="radio" 
        :id="selector.id" 
        :value="selector.value" 
        v-model="visibleComponent">
      <label :for="selector.id">{{ selector.label }}</label>
    </div>
    <div class="component-wrapper">

     <!-- il tag "keep-alive" serve per MANTENRE LO STATO di un componente che viene sostituito. -->
       <keep-alive> 
      <component :is="visibleComponent"></component>
       </keep-alive>
    </div>
  </div>
</template>

<script>
import Component1 from '../components/ComponentProva.vue';
import Component2 from '../components/Component2.vue';
import Component3 from '../components/Component3.vue';
/* 
 Se osserviamo per un momento il pannello Network degli strumenti per sviluppatori del browser però
 notiamo che vengono inizialmente scaricate tutte le risorse necessarie, compreso il codice
 dei componenti Component2 e Component3 inizialmente non visibili (se lasciassimo gli import dei componenti "Component2" e "Component3")
 Nel caso del nostro esempio sarebbe utile se potessimo rimuovere dal 
 bundle iniziale il codice relativo ai componenti Component2 e Component3.
 */
export default {
  name: 'App',
  components: {
    Component1,
  //Component2,   //(se lasciassimo i nomi dei componenti scritti così vengono scaricati i javascript sempre e comunque )
  //Component3,   //(se lasciassimo i nomi dei componenti scritti così così vengono scaricati i javascript sempre e comunque)
  
  /*In nostro soccorso Vue offre la possibilità di suddividere il file javascript di un'applicazione in più parti e scaricare
  inizialmente solo la porzione di codice necessaria.
  Vue CLI semplifica tale procedura e con l'aiuto di Webpack basterà usare la funzione import() 
  in fase di registrazione dei componenti. 
  */
    Component2,
    Component3
  },
  /* Se ora visualizziamo nuovamente l'applicazione nel browser, notiamo che in questo caso vengono 
  scaricati due nuovi file con estensione .js solo nel momento in cui i componenti Component2 e Component3 
  vengono inseriti nel DOM per la prima volta.*/
  data() {
    return {
      selectors:[
        {id: 'component-1', label: 'Component 1', value: 'Component1'},
        {id: 'component-2', label: 'Component 2', value: 'Component2'},
        {id: 'component-3', label: 'Component 3', value: 'Component3'}
      ],
      visibleComponent: 'Component1'
    }
  },
   mounted() {
      console.log('Contact has been mounted')
    },
  /* Abbiamo creato in questa pagina tre elementi di input di tipo "radio" attraverso la direttiva "v-for". 
  Su ciascuno di questi applichiamo la direttiva "v-model" che li associa alla stessa proprietà "visibleComponent". 
  In questo modo, ogni volta che viene selezionato un diverso elemento di tipo "radio", 
  viene prelevato il valore dell'attributo value che viene poi assegnato alla stessa proprietà ":visibleComponent". 
  Questa può quindi assumere valore 'Component1', 'Component2' o 'Component3'. 
  Non appena "visibleComponent" cambia, viene passato un nuovo valore all'attributo ":is" applicato sull'elemento <component> 
  e di conseguenza nel DOM vengono inseriti gli elementi presenti nel template del componente corrente.
  Per semplicità possiamo visualizzare l'esempio appena creato usando la funzione di Instant Prototyping di Vue CLI.*/
}
</script>

<style scoped>
.selector-wrapper {
  display: inline-block;
  margin-right: 24px;
}

.component-wrapper {
  margin-top: 24px
}
</style>
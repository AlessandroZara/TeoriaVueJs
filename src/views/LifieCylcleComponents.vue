<template>
 <div>
    <MyComponent v-if="show" />
    <button @click="show = !show">Distruggi Componente</button>
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent.vue'

export default {
  components: { MyComponent },
   data() {
    return {
      show: true
    }
  },
 //beforeCreate:{
    /* Viene invocato da Vue durante la fase di creazione di un componente e possono essere utili per effettuare eventuali 
    operazioni di inizializzazione prima che un componente venga aggiunto al DOM.
    viene eseguito immediatamente dopo che un'istanza di tipo Vue è stata inizializzata 
    (i componenti sono essi stessi istanze di Vue). 
    In questo primo metodo non è ancora possibile interagire con nessun membro 
    del componente in quanto la proprietà data (e l'intero sistema di reattività),
    le computed properties, i metodi e i watchers non sono ancora disponibili.
    */
// },
 //created:{
     /* 
     Viene invocato da Vue durante la fase di creazione di un componente e possono essere utili per effettuare eventuali 
    operazioni di inizializzazione prima che un componente venga aggiunto al DOM.
    Nel momento in cui viene invocato il lifecycle hook beforeMount() il template del componente è stato già compilato 
    ma non è stata ancora effettuato il primo rendering. A questo punto la proprietà $el non è ancora definita.
    Questo metodo non viene invocato in caso di rendering lato server.
    */
 //},
 //beforeMount:{
      /*
      Viene chiamati rispettivamente prima e dopo che Vue ha eseguito il rendering iniziale del componente.
      
      
      */
 //}, 
 //mounted:{
      /*
      Viene chiamati rispettivamente prima e dopo che Vue ha eseguito il rendering iniziale del componente.
      Questo metodo viene invocato dopo beforeMount(). A questo punto un componente è stato montato nel DOM. 
      La proprietà $el viene opportunamente settata. 
      Se un componente ha dei figli, non è detto che questi sono anche stati completamente inseriti nel DOM. 
      Per questo motivo, per eseguire delle operazioni sul DOM ed assicurarsi che l'intero albero di elementi sia pronto
      è possibile eseguire delle operazioni all'interno di una funzione callback che passiamo al metodo this.$nextTick(callback). 
      Quest'ultimo posticipa l'esecuzione della funzione callback che sarà invocata quando è stato completato il processo di rendering 
      dell'intera view.
      Anche questo metodo non viene invocato in caso di rendering lato server.
       */
 //},
 //beforeUpdate:{
       /*
        Lui Viene invocato invece chiamato durante il processo di aggiornamento del componente.
        Viene invocato quando vengono modificati dei dati che richiedono l'aggiornamento del DOM. 
        In questo metodo è possibile accedere al DOM nello stato precedente alle modifiche in quanto il DOM non è stato ancora aggiornato. 
       */
 //},
 //updated:{
       /*
        Viene invocato chiamato durante il processo di aggiornamento del componente. 
        viene invocato dopo beforeUpdate().
        A questo punto il DOM è stato aggiornato ed è possibile accedere alle nuove informazioni ed eventualemente eseguire
        delle operazioni sul DOM che si trova in un nuovo stato. 
        È opportuno specificare che non conviene modificare lo stato di un componente in questo metodo ed è consiglitato 
        utilizzare invece le computed properties o i watchers per intervenire in risposta a degli aggiornamenti.
        Come per il metodo mounted(), non è garantito che eventuali componenti figli sono stati completamente aggiornati nel DOM. 
        Per lo stesso motivo specificato sopra è consigliato utilizzare il metodo "this.$nextTick()".

        
        */
 //},
 //beforeUnmount:{
       /*
        Loro Viene invocato nella procedura di distruzione del componente.
        Questo metodo è eseguito immediatamente prima che un'istanza di tipo Vue venga distrutta. 
        L'istanza è ancora funzionante ed è possibile eseguire operazioni di pulizia prima della distruzione definitiva dell'istanza.
        */
 //},
 //unmounted:{
      /*
       Loro Viene invocato  nella procedura di distruzione del componente.
       Quando viene invocato il metodo destroyed(), l'istanza è stata ormai rimossa dal DOM insieme ad eventuali istanze discendenti.
        Tutte le direttive applicate sono state a questo punto dissociate dall'istanza. Abbiamo però ancora accesso 
        alle proprietà dell'oggetto data così come ai metodi e alle computed properties. 
        Si tratta dell'ultimo metodo del ciclo di vita di un'istanza.
        È opportuno notare che, come nel caso di beforeDestroy(), anche questo metodo non viene invocato durante la procedura
        di rendering lato server,
       */
// }

}
</script>

<style>

</style>
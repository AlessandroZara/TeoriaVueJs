<template>
   <div>
    <slot :category="category"></slot> <!--  Scoped Slots, introdotti per consentire ad un componente di scegliere le proprietà accessibili 
                                        dall'esterno attraverso la direttiva v-slot.
                                        Per rendere visibile la proprietà category, utilizziamo la direttiva v-bind 
                                        che applichiamo sull'elemento <slot></slot> 
                                        (nell'esempio abbiamo usato la sintassi abbreviata ':').
                                        Mentre fra doppie virgolette indichiamo la proprietà del componente <Recipe> che vogliamo associare.
                                        In questo caso i due nomi coincidono, 
                                        ma avremmo potuto tranquillamente utilizzare un diverso nome per l'argomento della direttiva v-bind. -->
  
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  data() {
    return {
      category: 'italian'
    }
  }
}
</script>

<style>

</style>
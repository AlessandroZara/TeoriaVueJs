<template>
  <Recipe>
    <template v-slot:default="slotProps">
      <img 
        v-if="slotProps.category === 'italian'" 
        src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202202080400" 
        alt="Made in italy">
    </template>    <!-- CONTINUO DEL FILE "RECIPE.VUE", ACCEDIAMO ALLA PROPRIETA'
                    Nel componente genitore List potremo poi accedere alle proprietà esposte dal figlio attraverso 
                    il valore assegnato alla direttiva v-slot. -->
  </Recipe>
</template>

<script>
import Recipe from './Recipe.vue';

export default {
  name: 'List',
  components: {
    Recipe
  }
}
</script>
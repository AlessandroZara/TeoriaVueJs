<template>
   <div> <h1> My component</h1> </div>  
</template>

<script>
export default {

  data() {
    return {
      name: 'Test'
    }
  },
  computed: {
    upperCaseName() {
      return this.name.toUpperCase();
    } 
  },
  beforeCreate() {
    console.log('data.name è pari a: ', this.name); // undefined
    console.log('computed property upperCaseName è pari a: ', this.upperCaseName); // undefined
    // Non invochiamo foo() perché è ancora 'undefined'
    console.log('il metodo foo: ', this.foo); // undefined
  },
  created() {
    console.group('### created() hook ###');
    console.log('data.name è pari a: ', this.name); // Test
    console.log('computed property upperCaseName è pari a: ', this.upperCaseName); // TEST
    console.log('il metodo foo restituisce: ', this.foo()); // I am foo()
    console.groupEnd();
  },
   mounted() {
    console.group('### mounted() hook ###');
    console.log('this.$el: ', this.$el); // <div>My component</div> 
    console.log('data.name è pari a: ', this.name); // Test
    console.log('computed property upperCaseName è pari a: ', this.upperCaseName); // TEST
    console.log('il metodo foo restituisce: ', this.foo()); // I am foo()
    console.groupEnd();
  },
  updated() {
    this.$nextTick(function () {
    // Qui l'intera view è stata aggiornata
    
  })
},
 beforeUnmount() {  // in vue 2 si chiama beforeDestroyed() ma verrà deprecato anche li tra poco 
    console.log('### beforeUnmount() hook ###'); 
    console.log(this.name); // Test
  },
  unmounted() {  // in vue 2 si chiama destroyed() ma verrà deprecato anche li tra poco. 
    console.log("SMONTO COMPONETE")
    console.log('### unmounted() hook ###');
    console.log(this.upperCaseName); // TEST
  },
  methods: {
    foo() {
      console.log('I am foo');
    }
  }
}
</script>

<style>

</style>
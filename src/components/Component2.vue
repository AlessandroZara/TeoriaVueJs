<template>
  <div>
    <p>Component 2</p>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("About has been mounted");
  },
  activated() {
      // Il metodo viene invocato quando il componente viene attivato ed è quindi visibile
    console.log("About has been activated");
  },
  deactivated() {
     // Il metodo è eseguito quando il componente viene disattivato per cedere posto ad un altro componente.
    console.log("About has been deactivated");
  },
};

</script>

<style>

</style>
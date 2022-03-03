<template>
  <div>
    <input type="text" placeholder="Inserisci il tuo nome...">
  </div>
</template>

<script>
export default {
 name:'',
 props: ['name'],
}
</script>

<style scoped>
input[type="text"] {
  border: 1px solid hsl(213, 87%, 9%);
  border-radius: 4px;
  padding: 8px 12px;
}
</style>
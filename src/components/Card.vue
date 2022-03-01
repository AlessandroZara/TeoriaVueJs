<template>
  <div class="card-container">
    <slot>
         With no content, I am just an empty card 😞!
    </slot>
    
  </div>
  
</template>

<script>

</script>

<style >
.card-container {
  max-width: 480px;
  min-height: 64px;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px hsla(0, 0%, 0%, .14);
  background-color: #fff;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  margin:20px;
}

h2 {
  color: hsl(206, 100%, 21%);
  margin: 0;
}

p {
  color: hsl(206, 15%, 54%);
  margin: .2rem 0 0;
}

img {
  border-radius: 50%;
  margin-right: 1.5rem;
  width: 96px;
  height: 96px;
}
</style>
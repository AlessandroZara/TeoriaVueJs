<template>
  <div class="center">
<!-- Elementi inseriti fra i tag di apertura e chiusura -->
  <!-- del componente Card -->
 
  <div>
  <br>
   <p style="color:black">card1</p>
  <Card>
     
    <img src="http://source.unsplash.com/26vBUtlufFo/96x96" alt="immagine profilo">    <!-- CON componente al suo interno -->
    <div>
      <h2>Giuseppe Verdi</h2>
      <p>Front-end Developer & Web Designer</p>
    </div>
  </Card>                                           
  </div>
  <br>
  <br>
<div>
    <br>
    <p style="color:black">Card2</p>
<Card></Card> <!-- SENZA componente al suo interno -->
</div>
  
  </div>
  <br>
  <br>
  <br>
   <Card>
    <template v-slot:top>
      <h3>Free Plan</h3>
    </template>
    
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>

    <template v-slot:call-to-action>
      <button>Sign Up</button>
    </template>
  </Card>
  <Layout>
    <template v-slot:[componentProperty]>
      <h1>Title</h1>
    </template>
  </Layout>
  <List></List>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue'
export default {
  name: 'App',
  components: {
    Card,
    List,
  }
}
</script>

<style>
.center{
    display: flex;
    justify-content: center;
}
</style>
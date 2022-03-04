<template>
<!--In realtà nella forma più semplice, la direttiva v-for permette di ripetere la stessa struttura di elementi N volte, 
  dove N è un numero intero da noi passato
  La direttiva v-for richiede come espressione la particolare sintassi 'valoreCorrente in valoreMassimo' 
  in cui valoreMassimo può essere un intero o una proprietà definita nell'oggetto data dell'istanza.
    <ul>
    <li v-for="n in valoreMassimo">{{ n }}</li>
    </ul> 
    Partendo dal valore 1 e arrivando fino a valoreMassimo, Vue provvede a ripetere l'elemento 
    (ed eventuali elementi discendenti) su cui è applicata la direttiva v-for.  
  -->
  <div>
    <h1>V-For</h1>
    <ul>
      <li :key="index" v-for="(num, index) in 5">{{ num }}</li>
    </ul>
    <br />
    <br />
    <div id="root2">
      <ul>
        <li :key="index" v-for="(item, index) in shoppingListItems">
          {{ item }}
        </li>
      </ul>
    </div>

    <div id="root3">
      <ul>
        <li :key="index" v-for="(item, index) in shoppingListItems2">
          {{ index }}. {{ item.name }} - {{ item.price }}
        </li>
      </ul>
    </div>
    <br />
    <br />
    <div id="root">
      <button @click="filter">Meno di €2.50</button>
      <ul>
        <li v-for="item3 in shoppingListItems3" :key="item3.id">
          {{ item3.name }} - €{{ item3.price }}
        </li>
      </ul>
    </div>
    <br />
    <br />
    <br />
    <div id="root4">
      <ul>
        <li :key="index2" v-for="(value, key, index2) in list">
          {{ index2 }}. {{ key }}: {{ value }}
        </li>
      </ul>
    </div>
    <br />
    <br />
    <br />
    <div id="root5">
      <button @click="addQuantity">Aggiungi Proprietà</button>
      <ul>
        <li :key="key" v-for="(value2, key) in item5">
          {{ key }} - {{ value2 }}
        </li>
      </ul>
    </div>
    <br>
    <br>
    <div id="root5" >
     <h2>Ciclo for Select</h2> 
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option 
        v-for="option in options" 
        :key="option" 
        :value="option">{{ option }}</option>
    </select>
    <p>Hai selezionato: {{ selected }}</p>
  </div>
  <br>
  <br>
  <br>

    <section>
      <div>
        <p>Spesso si ha la necessità di usare la direttiva <strong> v-for</strong> insieme <strong> v-if</strong>. 
          In questi casi Vue.js raccomanda di NON usare le due direttive sullo stesso nodo. <br>
          Infatti quando sono presenti sullo stesso elemento, <strong> v-for</strong> <u>ha la precedenza</u> su <strong> v-if</strong> 
          e accade che l'espressione passata a v-if venga valutata nuovamente ad ogni iterazione del ciclo. </p>
      </div>
      <div>
        <p>Nel caso si volesse saltare l'esecuzione del ciclo della direttiva v-for in base ad una certa condizione,<br>
           è possibile racchiudere l'elemento su cui è stata applicata v-for con un elemento base avente v-if come attributo. <br>
          Come visto nel precedente paragrafo, possiamo anche usare un elemento wrapper in caso di necessità (vedi codice in VSCode).</p>
      </div>
      <ul v-if="shoppingListItems.length">
        <li :key="index6" v-for="(item, index6) in shoppingListItems">
          {{ item }}
        </li>
      </ul>
      <div v-else>
        <p>Lista della spesa vuota.</p>
        <p>Aggiungi dei prodotti alla lista.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "v-for",
  data() {
    return {
      valoreMassimo: 3,
      shoppingListItems: ["pasta", "pane", "mele"],
      shoppingListItems2: [
        { name: "farina", price: "1.00" },
        { name: "olio", price: "5.50" },
        { name: "sale", price: "0.50" },
      ],
      shoppingListItems3: [
        { id: 1, name: "farina", price: "1.00" },
        { id: 2, name: "olio", price: "5.50" },
        { id: 3, name: "sale", price: "0.50" },
      ],
      list: {
        item1: "pinza",
        item2: "cacciavite",
        item3: "ventosa",
      },
      item5: {
        name: "cacciavite",
        amount: "3.99",
      },
      // ciclo for della select
      selected: '',
      options: [
        'Angular',
        'React',
        'Vue'
      ]
    };
    
  },
  methods: {
    filter() {
      this.shoppingListItems3 = this.shoppingListItems3.filter(
        (value) => parseFloat(value.price) < 2.5
      );
    },
    setList() {
      this.$set(this.shoppingListItems, 0, {
        id: 1,
        name: "pasta",
        price: "1.00",
      }); //  settare il valore di un elemento di un array accedendo tramite l'indice dell'elemento stesso ,codici esempio non fanno nulla
      this.shoppingListItems3[0].name = "pasta"; // Se l'array contiene degli oggetti come elementi, possiamo però andare a modificare direttamente il valore delle proprietà,codici esempio non fanno nulla
    },
    addQuantity() {
      //  this.item5 = Object.assign({}, this.item5, {
      //     quantity: 10,
      //     amount: '2.70'
      //   });
      this.item5 = { ...this.item5, ...{ quantity: 10, amount: "2.70" } }; //Qui con spread operator e sopra con il metodo normale
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>

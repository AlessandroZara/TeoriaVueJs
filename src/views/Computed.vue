<template>
  <div>
    <br />
    <main id="computed">
      <div>Oggetto: {{ item.name }}</div>
      <div>Prezzo: {{ item.price }}</div>
      <div>Quantità: {{ item.quantity }}</div>
      <hr />
      <div>
        Prezzo Totale ({{ vat }} IVA compresa)
        <strong>{{ formattedTotalPrice }}</strong>
      </div>
    </main>
    <br />
    <br />
    <br />
    <main id="root">
      <ul>
        <li :key="index" v-for="(item, index) in items">
          {{ item.name }} - {{ item.price }}
        </li>
        <hr />
        <div>
          totale restituito da computed property:
          <strong>{{ totalPrice }} €</strong>
        </div>
        <div>
          totale restituito dal metodo total(): <strong>{{ total() }} €</strong>
        </div>
      </ul>
      {{ counter }}
      <button @click="counter = counter + 1">incrementa contatore</button>
      <br>
      <br>
      <img src="../assets/Immagine.png" width= "700">
      <br>
      <br>
      <p>Come possiamo notare dalla foto riportata sopra, il metodo total() 
        viene sempre invocato anche quando vengono aggiornate altre informazioni della pagina,
        come avviene per il contatore. Al contrario totalPrice viene ricalcolato solo quando le proprietà da cui dipende 
        subiscono delle modifiche. In particolare quando aggiungiamo un elemento all'array items, 
        solo in quel caso viene ricalcolato totalPrice.</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        image:'../assets/Immagine.png',
      //per vedere le differenze tra methods e computed properties
      counter: 0,
      items: [
        {
          id: 1,
          name: "penna",
          price: 1.65,
        },
        {
          id: 2,
          name: "gomma",
          price: 0.99,
        },
        {
          id: 3,
          name: "matita",
          price: 0.95,
        },
      ],
      item: {
        name: "Matita",
        price: 0.85,
        quantity: 2,
        vat: 0.22,
      },
    };
  },
  methods: {
    //LE DIFFERENZE TRA METHODS E COMPUTED PROPERTIES
    total() {
      console.info("> Method: total()");

      const total = this.items.reduce(
        (total, currentItem) => total + currentItem.price,
        0
      );

      return total;
    },

    // Sono funzioni statiche di solito utilizzate per reagire agli eventi che si verificano nel DOM e che accettano argomenti.
    //Sono incredibilmente utili per collegare funzionalità agli eventi o anche solo per creare piccole parti di logica
    // da riutilizzare. Puoi chiamare un metodo all'interno di un altro metodo, sono molto versatili!
    // I metodi non sanno se i valori utilizzati nella funzione sono cambiati, quindi devono essere eseguiti ogni volta
    // per verificare.
  },
  computed: {
    //LE DIFFERENZE TRA METHODS E COMPUTED PROPERTIES
    totalPrice() {
      console.info("> Computed Property: totalPrice");

      const total = this.items.reduce(
        (total, currentItem) => total + currentItem.price,
        0
      );

      return total;
    },

    // La principale differenza consiste del fatto che le computed properties vengono memorizzate in una cache interna
    // e vengono ricalcolate solo quando almeno una delle proprietà reattive
    //(le proprietà aggiunte in fase di definizione nell'oggetto 'data'), da cui dipendono, subisce una variazione.
    // Ciò significa che se dipendono solo da proprietà non reattive, le computed properties non vengono mai ricalcolate.
    //le proprietà calcolate sanno se i valori utilizzati nella funzione sono cambiati in modo che non debbano essere eseguiti ogni volta per controllare, solo una volta!

    formattedTotalPrice() {
      // come per i metodi, `this` si riferisce all'istanza `vm`
      // Valgono quindi le considerazioni già fatte per i metodi
      // sull'impossibilità di usare le arrow functions.
      const { price, quantity, vat } = this.item;

      const formatter = new Intl.NumberFormat("it-IT", {
        //Intl.NumberFormatun'API per internazionalizzare i numeri come valute e altro ancora. E' un costruttore di oggetti che abilitano la formattazione dei numeri sensibile alla lingua.
        style: "currency", // Per saperne di più il link è: https://docs.w3cub.com/javascript/global_objects/intl/numberformat/format
        currency: "EUR",
        minimumFractionDigits: 2,
      });

      const total = (1 + vat) * price * quantity;

      return formatter.format(total); // .format() serve per formattare una stringa. Il metodo accetta un elenco di variabili e sostituisce i segnaposto con i valori delle variabili
    },
    vat() {
      return `${this.item.vat * 100}%`;
    },

/*Normalmente le computed properties stabiliscono il comportamento delle proprietà solo quando viene richiesto il loro valore.
 Possiamo però indicare quali operazioni devono essere eseguite anche quando viene passato un nuovo valore 
 ad una computed property attraverso set (setter). 
 Tramite i costrutti sintattici get e set indichiamo rispettivamente quale funzione deve essere eseguita se accediamo al valore
 di un proprietà o se modifichiamo il suo valore. */

    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      set: function (value) {
        let names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
        //Se ora passiamo a fullName un nuovo valore, questo verrà suddiviso e verranno automaticamente impostati firstName e lastName.
      },
    },
  },
  /*I watchers sono lo strumento di Vue.js che consente di tener sotto controllo una proprietà dell'oggetto "data()" 
  dell'istanza ed eseguire una funzione quando il valore di quella proprietà cambia. */

   watch: {
    counter(newValue, oldValue) {
      console.log('Aggiornamento counter:');
      console.log('Vecchio valore: ', oldValue);
      console.log('Nuovo valore: ', newValue);
    },
    items() {
      console.log('Modifica array items!');
    }
  }
};

//ESERCIZIO DELLE DIFFERENZE TRA METHODS E COMPUTED: SPIEGAZIONE!!!

// Il metodo total() viene sempre invocato anche quando
// vengono aggiornate altre informazioni della pagina, come avviene per il contatore.
// Al contrario totalPrice() viene ricalcolato solo quando le proprietà da cui dipende subiscono delle modifiche.
// In particolare quando aggiungiamo un elemento all'array items, solo in quel caso viene ricalcolato totalPrice.
</script>

<style></style>

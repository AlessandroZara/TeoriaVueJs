<template>
  <div class="container">
    <h1>I Form In Vue JS</h1>
    <br />
    <!--  Abbiamo visto che per i campi di testo <input type="text"> e <textarea>
     al posto della direttiva v-model potremmo implementare la tecnica di two-way data binding combinando 
     la proprietà value dell'elemento e l'evento input come mostrato nel frammento di codice sottostante.-->
    <div>
      <h2>model Normale</h2>
      <input type="text" @input="value = $event.target.value" :value="value" />
      <p>Value: {{ value }}</p>
    </div>
    <br />
    <br />
    <!--Grazie alla direttiva v-model possiamo infatti semplificare l'esempio precedente nel seguente modo.-->
    <div>
      <h2>model Normale Semplificato</h2>
      <input type="text" v-model="value1" />
      <p>Value: {{ value1 }}</p>
    </div>
    <br />
    <br />
    <!-- ".trim " rimuove automaticamente eventuali spazi bianchi superflui dal valore di un campo di testo.
    Ciò significa che se viene inserito il valore ' ciao ', 
    la proprietà value conterrà soltanto 'ciao' dato che tutti gli spazi in eccesso vengono automaticamente eliminati.
    -->
    <div>
      <h2>model .trim</h2>
      <input type="text" v-model.trim="value2" />
      <p>Value: {{ value2 }}</p>
    </div>
    <br />
    <br />
    <div>
      <h2>model number ma passato come stringa</h2>
      <input type="number" v-model="value3" />
      <p>Value: {{ value3 }}</p>
      <!-- Nonostante abbiamo usato l'attributo type="number", la proprietà value viene comunque convertita in una stringa. -->
    </div>
    <br />
    <br />
    <!-- Al contrario, grazie al modificatore ".number", la proprietà value conterrà sempre dei valori di tipo Number 
       (vale anche per i campi di input con attributo type="text"). -->
    <div>
      <h2>model number ma passato come number</h2>
      <input type="number" v-model.number="value4" />
      <p>Value: {{ value4 }}</p>
    </div>
    <br />
    <br />
    <!-- Checkbox -->
    <div>
      <template :key="option" v-for="option in options">
        <input
          type="checkbox"
          :id="option + '-checkbox'"
          :value="option"
          v-model="checked"
        />
        <label :for="option + '-checkbox'">
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </label>
      </template>
    </div>
    <div>
      Hai selezionato:<br />
      {{ checked }}
    </div>
    <br />
    <br />
    <br />

    <!-- FORM VERO E PROPRIO -->
    <!--
    Per concludere combinaMO quanto illustrato finora e realizzare un semplice form con diversi campi di input.
     -->

    <form @submit.prevent="onSubmit">
        <h1>Form Esempio</h1>
      <div class="mb-3">
        <label for="name">Nome</label>
        <input type="text" v-model.trim="details.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model.trim="details.email" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="age">Et&agrave;</label>
        <input type="number" id="age" v-model.number="details.age" class="form-control"/>
      </div>
      <div class="mb-3">
         <label  class="form-label"><strong>Seleziona JS framework preferito</strong></label>
        <select class="form-select" v-model="details.favoriteJsFramework">
          <option disabled value="">Seleziona JS framework preferito</option>
          <option
            v-for="jsFramework in jsFrameworksList"
            :key="jsFramework"
            :value="jsFramework"
          >
            {{ jsFramework }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <fieldset>
          <legend>Framework CSS conosciuti</legend>
          <template
            :key="cssFramework"
            v-for="cssFramework in cssFrameworksList"
          >
            <input
              type="checkbox"
              :id="cssFramework"
              :value="cssFramework"
              v-model="details.cssFrameworks"
              class="form-check-input" 
            />
            <label class="form-check-label"  :for="cssFramework">{{ cssFramework }}</label>
          </template>
        </fieldset>
      </div>
      
        <fieldset>
            <div class="mb-3">
          <legend>Javascript è il tuo linguaggio preferito?</legend>

          <!-- grazie a v-bind associamo un valore booleano -->
          <!-- a ciascun pulsante di tipo radio -->
          <input
            type="radio"
            id="yes"
            :value="true"
            v-model="details.isJSFavoriteLanguage"
          />
          <label for="yes" class="form-label">S&igrave;</label>
          <input
            type="radio"
            id="no"
            :value="false"
            v-model="details.isJSFavoriteLanguage"
            class="form-check-input"
            name="flexRadioDefault"
          />
          <label class="form-check-label" for="flexRadioDefault1">No</label>
          </div>
          <button type="submit" class="btn btn-primary">Invia</button>
        </fieldset>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: undefined,
      checked: [],
      options: ["angular", "react", "vue"],
      details: {
        name: "",
        email: "",
        age: 0,
        favoriteJsFramework: "",
        cssFrameworks: [],
        isJSFavoriteLanguage: true,
      },
      jsFrameworksList: ["Angular", "React", "Vue"],
      cssFrameworksList: [
        "Bootstrap",
        "Foundation",
        "Pure",
        "Semantic UI",
        "Tailwind",
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log(this.details);
    },
  },
};
</script>

<style></style>

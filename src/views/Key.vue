<template>
  <main id="input">
    <br />
    <button
      @click="selectUserType('privato')"
      :disabled="userType === 'privato'"
    >
      Utenti Privati
    </button>
    <button
      @click="selectUserType('azienda')"
      :disabled="userType === 'azienda'"
    >
      Aziende
    </button>

    <div v-if="userType === 'privato'">
      <br />
      <label>E-mail</label>
      <input key="privato" placeholder="inserisci la tua email" />
    </div>
    <div v-else>
      <br />
      <label>Codice Aziendale</label>
      <input
        key="azienda"
        placeholder="inserisci il tuo codice identificativo"
      />
    </div>
  </main>
    <br>
    <br>
    <br>
  <section id="root">
    <h1>Vulputate Condimentum Vehicula</h1>
    <button @click="toggleP">
      {{ this.show ? "Nascondi" : "Mostra" }} Paragrafo
    </button>
    <p v-show="show">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
      magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo
      luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userType: "privato",
      show: false
    };
  },
  methods: {
    selectUserType(userType) {
      this.userType = userType;
    },
     toggleP() {
      this.show = !this.show;
    }
  },
};
</script>

<style></style>

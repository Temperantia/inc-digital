<template>
  <v-card class="ma-0 pa-0" flat>
    <v-form ref="form" align="start" justify="start">
      <p class="titleForm">Start a project</p>
      <p
        class="subtitleForm"
      >Thanks for your interest in working with us. Please complete the details below and we'll get back to you in one business day.</p>
      <div class="fieldTitle">What should we call you?</div>

      <v-text-field
        id="name"
        v-model="contactName"
        class="fieldTextInput"
        placeholder="Your Name here"
        name="contactName"
        type="text"
        :rules="[rules.required,]"
      ></v-text-field>

      <div class="fieldTitle">What the name of compagny / organization?</div>
      <v-text-field
        id="company"
        v-model="company"
        class="fieldTextInput"
        placeholder="Widgets Inc"
        name="compagny"
        type="text"
        :rules="[rules.required,]"
      ></v-text-field>
      <div class="fieldTitle">How shall we contact you?</div>

      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-text-field
            id="email"
            v-model="email"
            class="fieldTextInput"
            placeholder="Email address"
            name="contactemail"
            type="email"
            :rules="[rules.required,rules.matchEmail]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            id="phoneNumber"
            v-model="phone"
            class="fieldTextInput"
            placeholder="Phone number"
            name="contactphone"
            type="phone"
            :rules="[rules.required,]"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      contactName: null,
      company: null,
      email: null,
      phone: null,
      formHasErrors: false,
      rules: {
        required: (value) => !!value || "Required.",
        matchEmail: (value) =>
          /.+@.+\..+/.test(value) || "E-mail must be valid",
      },
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    form() {
      return {
        contactName: this.contactName,
        company: this.company,
        email: this.email,
        phone: this.phone,
      };
    },
  },
};
</script>
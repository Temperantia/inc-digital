<template>
  <v-card class="ma-0 pa-0" flat>
    <v-form ref="form" align="start" justify="start">
      <p class="titleForm">{{$t('index.contactForm.titleStepContact')}}</p>
      <p class="subtitleForm">{{$t('index.contactForm.descriptionStepContact')}}</p>

      <div class="fieldTitle">{{$t('index.contactForm.fieldName')}}</div>
      <v-text-field
        id="name"
        v-model="contactName"
        class="fieldTextInput"
        placeholder="Your Name here"
        name="contactName"
        type="text"
        :rules="[rules.required,]"
      ></v-text-field>

      <div class="fieldTitle">{{$t('index.contactForm.fieldCompanyName')}}</div>
      <v-text-field
        id="company"
        v-model="company"
        class="fieldTextInput"
        placeholder="Widgets Inc"
        name="compagny"
        type="text"
        :rules="[rules.required,]"
      ></v-text-field>
      <div class="fieldTitle">{{$t('index.contactForm.fieldEmail')}}</div>

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
<template>
  <v-col cols="12">
    <v-card-text>
      <v-form ref="form" align="start" justify="start">
        <label class="fieldTitle">What should we call you?</label>

        <v-text-field
          id="name"
          class="fieldTextInput"
          placeholder="Your Name here"
          v-model="contactName"
          name="contactName"
          type="text"
          :rules="[rules.required,]"
        ></v-text-field>

        <label class="fieldTitle">What the name of compagny / organization?</label>
        <v-text-field
          id="company"
          class="fieldTextInput"
          placeholder="Widgets Inc"
          name="compagny"
          type="text"
          :rules="[rules.required,]"
        ></v-text-field>
        <!--  -->
        <label class="fieldTitle">How shall we contact you?</label>

        <v-row justify="center">
          <v-col cols="6">
            <v-text-field
              id="email"
              class="fieldTextInput"
              placeholder="Email address"
              name="contactemail"
              type="email"
              :rules="[rules.required,rules.matchEmail]"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              id="name"
              class="fieldTextInput"
              placeholder="Phone number"
              name="contactphone"
              type="phone"
              :rules="[rules.required,]"
            ></v-text-field>
            <!--  -->
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      contactName: null,
      compagny: null,
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
  computed: {
    form() {
      return {
        contactName: this.contactName,
        company: this.company,
        email: this.email,
        phone: this.phone,
      };
    },
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>
<template>
  <v-card class="ma-0 pa-0" flat>
    <v-form ref="form" align="start" justify="start">
      <div class="titleForm">Lastly...</div>
      <div class="subtitleForm">Let's wrap this up</div>

      <div class="fieldTitle">What's your ideal timeframe?</div>
      <v-text-field
        id="dateForContact"
        class="fieldTextInput"
        placeholder="Have a date in mind?"
        v-model="dateForContact"
        name="dateForContact"
        type="text"
        :rules="[rules.required,]"
      ></v-text-field>

      <div class="fieldTitle">How did you hear about us?</div>
      <v-text-field
        id="hearAboutUs"
        class="fieldTextInput"
        placeholder="Word of mouth?"
        v-model="hearAboutUs"
        name="hearAboutUs"
        type="text"
        :rules="[rules.required,]"
      ></v-text-field>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dateForContact: null,
      hearAboutUs: null,
      formHasErrors: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },

  methods: {
    validate: function () {
      return this.$refs.form.validate();
    },

    form() {
      return {
        dateForContact: this.dateForContact,
        hearAboutUs: this.hearAboutUs,
      };
    },
  },
};
</script>


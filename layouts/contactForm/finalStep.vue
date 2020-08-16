<template>
  <v-card>
    <v-form ref="form" align="start" justify="start">
      <v-row>
        <v-col cols="12">
          <v-container class="pa-5 ma-0">
            <h2>Lastly...</h2>
            <div>Let's wrap this up.</div>
          </v-container>

          <label class="fieldTitle">What's your ideal timeframe?</label>
          <v-text-field
            id="dateForContact"
            class="fieldTextInput"
            placeholder="Have a date in mind?"
            v-model="dateForContact"
            name="dateForContact"
            type="text"
            :rules="[rules.required,]"
          ></v-text-field>

          <label class="fieldTitle">How did you hear about us?</label>
          <v-text-field
            id="hearAboutUs"
            class="fieldTextInput"
            placeholder="Word of mouth?"
            v-model="hearAboutUs"
            name="hearAboutUs"
            type="text"
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


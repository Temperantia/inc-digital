<template>
  <v-col cols="12">
    <v-card-text>
      <v-form align="start" justify="start">
        <label class="fieldTitle">What should we call you?</label>

        <v-text-field
          id="name"
          class="fieldTextInput"
          placeholder="Your Name here"
          name="contactname"
          type="text"
        ></v-text-field>

        <label class="fieldTitle">What the name of compagny / organization?</label>
        <v-text-field
          id="company"
          class="fieldTextInput"
          placeholder="Widgets Inc"
          name="compagny"
          type="text"
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
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              id="name"
              class="fieldTextInput"
              placeholder="Phone number"
              name="contactphone"
              type="phone"
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
    return {};
  },
};
</script>
<template>
  <v-row align="center" justify="center">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" color="orange">Contact</v-stepper-step>
        <v-stepper-step :complete="e1 > 2" step="2" color="orange">Technology</v-stepper-step>
        <v-stepper-step step="3" color="orange">Budget</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items style="height:550px">
        <v-stepper-content class="stepperContent" step="1">
          <v-container style="height:450px">
            <contactPage ref="contact"></contactPage>
          </v-container>
          <v-btn class="white--text" color="orange" @click="nextPage()">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content class="stepperContent" step="2">
          <v-container style="height:450px">
            <technology ref="technology"></technology>
          </v-container>

          <v-btn class="white--text" color="orange" @click="nextPage()">Continue</v-btn>
          <v-btn text @click="e1 -= 1">Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content class="stepperContent" step="3">
          <v-container style="height:450px">
            <budget></budget>
          </v-container>

          <v-btn color="orange" class="white--text">Submit</v-btn>
          <v-btn text @click="e1 -= 1">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-row>
</template>

<script>
import ContactPage from "~/layouts/contactForm/contact.vue";
import Technology from "~/layouts/contactForm/technology.vue";
import Budget from "~/layouts/contactForm/budget.vue";

export default {
  data() {
    return {
      e1: 1,
    };
  },
  methods: {
    nextPage: function () {
      const maxPage = 3;
      switch (this.e1) {
        case 1:
          if (this.$refs.contact.validate()) {
            this.e1++;
          }
          break;

        case 2:
          if (this.$refs.technology.validate()) {
            this.e1++;
          }
          break;

        case 3:
          if (this.$refs.contact.validate()) {
            this.e1++;
          }
          break;
        default:
          break;
      }
    },
  },
  components: {
    contactPage: ContactPage,
    technology: Technology,
    budget: Budget,
  },
};
</script>

<template>
  <v-stepper class="elevation-0" v-model="e1" width="100">
    <v-row class="d-flex mx-0 my-4" height="2px">
      <v-card
        v-for="n in 4"
        :key="n"
        :color="e1 +1 > n ? 'accent' : 'grey lighten-1'"
        class="d-flex align-left elevation-0 ma-0 mr-1"
        width="70px"
        height="2px"
      ></v-card>
    </v-row>

    <v-stepper-items style="min-height:550px">
      <v-stepper-content step="1" class="ma-0 pa-0">
        <v-container style="min-height:450px" class="ma-0 pa-0">
          <contactPage ref="contact"></contactPage>
        </v-container>
        <v-btn class="white--text" color="accent" @click="nextPage()">
          Next
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2" class="ma-0 pa-0">
        <v-container style="min-height:450px" class="ma-0 pa-0">
          <technology ref="technology" :parentData="contactData"></technology>
        </v-container>

        <v-btn class="white--text" color="accent" @click="nextPage()">
          Next
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn text @click="e1 -= 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3" class="ma-0 pa-0">
        <v-container style="min-height:450px" class="ma-0 pa-0">
          <budget ref="budget"></budget>
        </v-container>

        <v-btn color="accent" class="white--text" @click="nextPage()">
          Next
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn text @click="e1 -= 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4" class="ma-0 pa-0">
        <v-container style="min-height:450px" class="ma-0 pa-0">
          <finalStep ref="finalStep"></finalStep>
        </v-container>

        <v-btn color="accent" class="white--text" @click="submit()">Submit</v-btn>
        <v-btn text @click="e1 -= 1">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>

    <v-overlay :absolute="absolute" :value="overlay">
      <v-col align="center" justify="center" v-if="sending">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
        <v-container>
          <p>Sending</p>
        </v-container>
      </v-col>

      <v-col align="center" justify="center" v-if="!sending && sendingsucceed">
        <v-icon dark right size="64">mdi-checkbox-marked-circle</v-icon>
        <v-container>
          <p>Sent</p>
        </v-container>
      </v-col>

      <v-col align="center" justify="center" v-if="!sending && !sendingsucceed">
        <v-icon dark right size="64">mdi-alert-circle</v-icon>
        <v-container>
          <p>Sending Failed</p>
        </v-container>
      </v-col>
    </v-overlay>
  </v-stepper>
</template>

<script>
import ContactPage from "~/layouts/contactForm/contact.vue";
import Technology from "~/layouts/contactForm/technology.vue";
import Budget from "~/layouts/contactForm/budget.vue";
import FinalStep from "~/layouts/contactForm/finalStep.vue";
import Email from "~/plugins/mailService.js";

export default {
  data() {
    return {
      absolute: true,
      overlay: false,
      sending: false,
      sendingsucceed: Boolean,
      contactData: Object,
      e1: 1,
    };
  },
  methods: {
    nextPage: function () {
      const maxPage = 3;
      switch (this.e1) {
        case 1:
          if (this.$refs.contact.validate()) {
            this.getContactInfo();
            this.e1++;
          }
          break;

        case 2:
          if (this.$refs.technology.validate()) {
            this.e1++;
          }
          break;

        case 3:
          this.e1++;
          break;

        default:
          break;
      }
    },
    submit: async function () {
      if (this.$refs.finalStep.validate()) {
        this.sending = true;
        this.overlay = true;
        await this.sendDataWithMail();
        this.sending = false;
      }
    },
    back: function () {
      this.sending = false;
      this.overlay = false;
    },
    getContactInfo: async function () {
      this.contactData = await this.$refs.contact.form();
    },

    getFormInfo: async function () {
      let data = [];
      data.push(await this.$refs.contact.form());
      data.push(await this.$refs.technology.form());
      data.push(await this.$refs.budget.form());
      data.push(await this.$refs.finalStep.form());
      return data;
    },

    createHTMLforMail: async function () {
      const objArray = await this.getFormInfo();
      let output = "<h2>Un nouveau prospect a renseigné ses informations</h2>";
      for (let objIndex in objArray) {
        let obj = objArray[objIndex];
        for (let property in obj) {
          output += `<p><strong>${property}</strong> : ${obj[property]} </p>`;
        }
      }
      return output;
    },

    sendDataWithMail: async function () {
      const mailList = ["inclusive.corporation@gmail.com"];
      const mailContent = await this.createHTMLforMail();
      const resp = await Email.send({
        SecureToken: "e82ccc8d-7bfd-4d7b-b25f-7be55b7bf343",
        To: mailList,
        From: "inclusive.corporation@gmail.com",
        Subject: "Nouveau prospect Inc Digital",
        Body: mailContent,
      });
      if (resp === "OK") {
        this.sendingsucceed = true;
      } else {
        this.sendingsucceed = false;
      }
    },
  },
  components: {
    contactPage: ContactPage,
    technology: Technology,
    budget: Budget,
    finalStep: FinalStep,
  },
};
</script>

<style>
.titleForm {
  font-size: 30px;
  font-weight: 500;
}
.subtitleForm {
  font-size: 20px;
  padding-bottom: 16px;
}
</style>
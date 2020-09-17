<template>
  <v-layout column justify-center align-center>
    <div
      style="background: url('/Background-mobile.png'); background-repeat: no-repeat; width:100%; background-size: cover; padding-bottom:150px"
    >
      <v-container class="px-4">
        <h2 class="white--text" style="margin-top:100px">{{$t('index.home.whoWeAre')}}</h2>
        <h1 class="white--text">
          <span class="secondary--text">{{$t('index.home.bannerLine1')}}</span>
          {{$t('index.home.bannerLine2')}}
        </h1>
        <blockquote
          class="white--text px-4 my-6"
          style="border-left: 5px solid LightGrey; font-size:24px"
        >{{$t('index.home.incDigitalStory')}}</blockquote>

        <v-row align="center" class="ma-0">
          <v-col>
            <v-tabs v-model="workflowTab" fixed-tabs background-color="transparent" color="white">
              <v-tab
                v-for="(item, index) in categoryItems"
                :key="index"
                class="mx-4 pa-0 white--text"
                style="font-size:16px; font-weight:600;"
              >{{item.title.toUpperCase()}}</v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container style="margin-top:-120px;">
      <v-tabs-items v-model="workflowTab" class="ma-4">
        <v-tab-item v-for="(item, index) in categoryItems" :key="index">
          <v-card tile class="pa-0" style="box-shadow: 10px 10px 50px -20px grey;">
            <v-row class="pa-0 ma-0" align="stretch">
              <v-col
                cols="2"
                class="d-flex justify-center align-center"
                style="background-color: #5fc3c7;"
              >
                <v-img style="margin: 0 20% 0 20%" color="red" :src="`${item.imagePath}`"></v-img>
              </v-col>
              <v-col cols="10">{{item.description}}</v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
    <v-container class="px-4">
      <workflowGroupItem></workflowGroupItem>
      <h1>{{$t('index.workflow.title')}}</h1>
      <v-divider color="primary" style="border-width:1px; width:30%"></v-divider>
      <p
        class="pa-2 pt-5"
        style="font-size:20px; text-align: start; letter-spacing:1px"
      >{{$t('index.workflow.ourStrategy')}}</p>

      <expertise class="pt-8"></expertise>
      <software></software>

      <v-container class="text-center">
        <h1>{{$t('index.technology.title')}}</h1>
        <h3>{{$t('index.technology.description')}}</h3>
        <v-divider class="my-8 primary" width="150px" style="border-width:1px"></v-divider>
        <v-img src="/section-tech2.png"></v-img>

        <h2 class="mt-8">{{$t('index.contactForm.title')}}</h2>
        <h1 class="py-4">{{$t('index.contactForm.subtitle')}}</h1>
        <multiStepForm></multiStepForm>
      </v-container>
    </v-container>
  </v-layout>
</template>



<script>
import MultiStepForm from "~/layouts/contactForm/multiStepForm.vue";
import WorkflowGroupItem from "~/components/workflowGroupItem.vue";
import Expertise from "~/components/expertise.vue";
import Software from "~/components/software.vue";

export default {
  data() {
    return {
      toggle_exclusive: undefined,
      workflowTab: null,
      model: null,

      categoryItems: [
        {
          title: "research",
          imagePath: "/research-icon.svg",
          description:
            "Lorem Ipsum is simply dummy text of the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          title: "planning",
          imagePath: "/planning-icon.png",
          description:
            "Lorem Ipsum is simply dummy text of the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          title: "delivery",
          imagePath: "/delivery-icon.png",
          description:
            "Lorem Ipsum is simply dummy text of the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    };
  },
  components: {
    multiStepForm: MultiStepForm,
    workflowGroupItem: WorkflowGroupItem,
    expertise: Expertise,
  },
  middleware(ctx) {
    ctx.$gtm.push({ event: "nuxtRoute" });
  },
  computed: {
    modelCarrousel() {
      if (this.workflowTab) {
        return this.workflowTab + 1;
      } else return 1;
    },
  },
};
</script>


<style >
@font-face {
  font-family: "Signika";
  src: local("Signika"),
    url(/fonts/Signika/Signika-SemiBold.ttf) format("truetype");
}

h1 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  padding: 6px 0 6px 0;
}

h2 {
  text-transform: uppercase;
  font-size: 21px;
  text-align: left;
  padding: 6px;
  color: rgb(125, 125, 125);
  letter-spacing: 2px;
}

h3 {
  text-align: left;
  padding: 4px 0 4px 0;
  font-size: 20px;
  font-weight: 500;
}

h4 {
  text-align: left;
  padding: 4px 0 4px 0;
  font-size: 28px;
  letter-spacing: 6px;
}

h5 {
  font-size: 20px;
  font-weight: 600;
}
.col.custCol {
  padding: 0;
  flex-grow: 0;
}

.v-btn {
  background-size: cover;
  border: none;
}

.fieldTitle {
  padding: 5px 0px 5px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 18px;
  font-weight: 500;

  color: black;
}

.fieldTextInput {
  margin-top: 0px;
}

.nextbtn {
  padding: 0px;
}

html {
  scroll-behavior: smooth;
}

.v-slide-group__prev {
  display: none !important;
}

.v-slide-group__next {
  display: none !important;
}
</style>

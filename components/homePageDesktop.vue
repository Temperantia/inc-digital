<template>
  <v-layout column justify-center align-center>
    <v-container fluid id="mainContainer" class="pa-0">
      <v-img id="img1" src="/Background1.png"></v-img>
      <v-container id="home">
        <div>
          <h2>{{$t('index.home.whoWeAre')}}</h2>
          <h1>
            <span class="accent--text">{{$t('index.home.bannerLine1')}}</span>
            {{$t('index.home.bannerLine2')}}
          </h1>
          <blockquote
            class="grey--text px-4 my-6"
            style="border-left: 5px solid LightGrey; font-size:24px"
          >{{$t('index.home.incDigitalStory')}}</blockquote>
        </div>
      </v-container>
      <div id="title2">
        <div>
          <v-sheet class="ma-0" color="transparent" elevation="0">
            <v-slide-group v-model="modelCarrousel" class="pa-0" center-active prev-icon next-icon>
              <v-slide-item>
                <div
                  class="ma-4 align-self-center white--text"
                  style="font-size:5vw; font-family: 'Signika', Roboto;"
                >
                  {{categoryItems[2].title.toUpperCase()}}
                  <v-icon color="white">mdi-circle</v-icon>
                </div>
              </v-slide-item>
              <v-slide-item
                v-for="(item, index) in categoryItems"
                :key="index"
                v-slot:default="{ active }"
              >
                <div
                  class="ma-4 align-self-center"
                  :class="active ? 'secondary--text text':'white--text'"
                  style="font-family: 'Signika', Roboto;"
                  :style="active ? 'font-size:8vw': 'font-size:5vw'"
                >
                  {{item.title.toUpperCase()}}
                  <v-icon color="white">mdi-circle</v-icon>
                </div>
              </v-slide-item>

              <v-slide-item>
                <div
                  class="ma-4 align-self-center white--text"
                  style="font-size:5vw; font-family: 'Signika', Roboto;"
                >{{categoryItems[0].title.toUpperCase()}}</div>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>

          <v-row style="width:100%" align="center">
            <v-col cols="12"></v-col>
          </v-row>
        </div>
      </div>

      <div id="tabs" class="pa-4" style="background-color:white;">
        <v-row align="center" class="ma-0">
          <v-col cols="10">
            <v-tabs
              v-model="workflowTab"
              fixed-tabs
              background-color="transparent"
              color="secondary"
            >
              <v-tab
                v-for="(item, index) in categoryItems"
                :key="index"
                class="mx-4 pa-0"
                style="font-size:16px; font-weight:600;"
              >{{item.title.toUpperCase()}}</v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="2" align-self="start" align="center">
            <v-col cols="12" class="pa-0">
              <v-btn
                class="my-2"
                icon
                width="48px"
                height="48px"
                @click="()=>{if(workflowTab!==2){workflowTab++}}"
              >
                <v-img src="/carrouselArrowRight.png"></v-img>
              </v-btn>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-btn class="my-2" icon width="48px" height="48px" @click="workflowTab--">
                <v-img src="/carrouselArrowLeft.png"></v-img>
              </v-btn>
            </v-col>
          </v-col>
        </v-row>

        <v-container>
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

        <workflowGroupItem></workflowGroupItem>
      </div>

      <div id="scroll">
        <v-row align="center" class="pt-6">
          <v-col align="center">
            <span
              class="white--text"
              style="font-size:22px; font-weight:550; border-bottom: 2px solid white"
            >{{$t('index.home.scrollToDiscover')}}</span>
          </v-col>
        </v-row>
      </div>

      <div id="workflow" style="padding:5vw 0px 10px 100px">
        <v-row align="center">
          <v-col cols="12" lg="8" align="center">
            <h1 class="white--text">{{$t('index.workflow.title')}}</h1>
            <v-divider color="white"></v-divider>
            <p
              class="white--text pa-2 pt-5"
              style="font-size:20px; text-align: start; letter-spacing:1px"
            >{{$t('index.workflow.ourStrategy')}}</p>
          </v-col>
        </v-row>
      </div>

      <expertise id="expertise" class="pt-8"></expertise>
      <v-img id="img2" class="ma-4" max-height="900px" contain src="/section-marketingdesign.png"></v-img>
      <v-img id="img3" contain src="/section-software.png"></v-img>
      <software id="software" class="pl-8"></software>
    </v-container>

    <v-container class="text-center mt-10" style="width:76%">
      <h1>{{$t('index.technology.title')}}</h1>
      <h3>{{$t('index.technology.description')}}</h3>
      <v-divider class="my-8 primary" width="150px" style="border-width:1px"></v-divider>
      <v-img src="/section-tech2.png"></v-img>

      <h2 id="contact" style="margin-top:150px">{{$t('index.contactForm.title')}}</h2>
      <h1 class="py-4">{{$t('index.contactForm.subtitle')}}</h1>
      <multiStepForm></multiStepForm>
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
            "The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.",
        },
        {
          title: "planning",
          imagePath: "/planning-icon.png",
          description:
            "The process of deciding how land in a particular area will be used and designing plans for it.",
        },
        {
          title: "delivery",
          imagePath: "/delivery-icon.png",
          description:
            "Delivery or a delivery is the bringing of letters, parcels, or other goods to someone's house or to another place where they want them.",
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
  font-size: 3.5vw;
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
  font-size: 28px;
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

#mainContainer {
  display: grid;
  grid-template-columns: 12vw 28vw 15vw 33vw 12vw;
  grid-template-rows: repeat(14, 100px) auto;
}

#home {
  grid-column: 2 / span 1;
  grid-row: 2 / span 3;
  z-index: 3;
  padding-top: 40px;
}

#tabs {
  grid-column: 2 / span 2;
  grid-row: 10 / span 13;
  z-index: 10;
}

#img1 {
  grid-column: 3 / span 3;
  grid-row: 1 / span 22;
  z-index: 0;
}

#title2 {
  grid-column: 3 / span 3;
  grid-row: 4 / span 1;
  z-index: 3;
}

#scroll {
  grid-column: 4 / span 1;
  grid-row: 9 / span 2;
  z-index: 3;
}

#workflow {
  grid-column: 4 / span 1;
  grid-row: 14 / span 6;
  z-index: 3;
}

#expertise {
  grid-column: 2 / span 2;
  grid-row: 30 / span 6;
  z-index: 5;
}

#img2 {
  grid-column: 4 / span 1;
  grid-row: 30 / span 6;
  z-index: 5;
}

#img3 {
  grid-column: 1 / span 3;
  grid-row: 24 / span 6;
  z-index: 5;
}

#software {
  grid-column: 4 / span 1;
  grid-row: 24 / span 6;
  z-index: 5;
}
</style>

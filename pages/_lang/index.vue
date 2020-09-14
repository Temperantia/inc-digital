<template>
  <v-layout column justify-center align-center>
    <v-img
      class="align-self-end"
      style="position:absolute; top:0px; right:0px;"
      width="65%"
      src="/Background1.png"
      position="right"
    ></v-img>
    <v-row style="width:100%">
      <div
        style="
        width: 35%;
        padding-bottom: 48%;
        box-sizing: border-box;
        position: relative;"
      >
        <div class="px-8" style="position:absolute; padding-top:10vw">
          <h2>We're inc digital</h2>
          <h1>
            <span class="accent--text">WE'RE A NEW KIND</span> OF DIGITAL AGENCY
          </h1>
          <blockquote
            class="grey--text px-4 my-6"
            style="border-left: 5px solid LightGrey; font-size:1.4vw"
          >
            INC Digital is an experience design and product development agency. We bring your ideas inot reality with
            beautiful execution to drive your business solutions.
          </blockquote>
        </div>
      </div>

      <div
        style="
        width: 65%;
        padding-bottom: 48%;
        box-sizing: border-box;
        position: relative;"
      >
        <div style="position:absolute; width:100%; height:100%; padding:25% 0 25% 0">
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
    </v-row>

    <v-row style="width:100%">
      <div style="
        width: 56%;
        box-sizing: border-box;
        position: relative;">
        <div class="pt-8" style="position:absolute; width:100%; height:100%">
          <v-row align="center">
            <v-col cols="9" class="ma-4">
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

              <v-tabs-items v-model="workflowTab" class="ma-4">
                <v-tab-item v-for="(item, index) in categoryItems" :key="index">
                  <v-card tile class="pa-0 elevation-4">
                    <v-row class="pa-0 ma-0" align="stretch">
                      <v-col
                        cols="4"
                        class="d-flex justify-center align-center"
                        style="background-color: #5fc3c7;"
                      >
                        <v-img style="margin: 0 20% 0 20%" color="red" :src="item.imagePath"></v-img>
                      </v-col>
                      <v-col cols="8">{{item.description}}</v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
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

          <workflowGroupItem></workflowGroupItem>
        </div>
      </div>

      <div style="
        width: 44%;
        box-sizing: border-box;
        position: relative;">
        <v-row align="center" class="pt-6">
          <v-col align="center">
            <span
              class="white--text"
              style="font-size:22px; font-weight:550; border-bottom: 2px solid white"
            >SCROLL TO DISCOVER</span>
          </v-col>
        </v-row>

        <v-row style="padding:25vh 40px; 10px; 40px" align="center">
          <v-col cols="8" align="center">
            <h1 class="white--text">WORKFLOW</h1>
            <v-divider color="white"></v-divider>
            <p
              class="white--text pa-2 pt-5"
              style="font-size:20px; text-align: start; letter-spacing:1px"
            >"Sed ut perspiciatis unde omnis isemo enst, qui dolorem ipsum quia dolor sitnsequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          </v-col>
        </v-row>
      </div>
    </v-row>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />

    <expertise style="width:80%"></expertise>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />
    <v-container id="home" width="50" class="text-center">
      <h1 id="expertise">{{$t('index.expertise.title')}}</h1>
      <h3>{{$t('index.expertise.description')}}</h3>
      <v-divider class="my-5 primary" width="150px" style="border-width:1px"></v-divider>

      <v-row justify="center" class="text-left">
        <v-col cols="12" md="6">
          <v-img src="/section-software.png"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="py-3">{{$t('index.expertise.software.title')}}</h3>
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col v-for="(item,i) in softwareItems" :key="i" cols="6" class="py-0">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" height="50px" contain :src="item.imagePath"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t(item.text)}}</h4>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <p>{{$t('index.expertise.software.ourPhilosophy')}}</p>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="text-left">
        <v-col cols="12" md="6" order="2" order-md="1">
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <p>{{$t('index.expertise.marketingAndDesign.ourPhilosophy')}}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" md="6" order="1" order-md="2">
          <v-img src="/section-marketingdesign.png"></v-img>
        </v-col>
      </v-row>
      <h1>{{$t('index.technology.title')}}</h1>
      <h3>{{$t('index.technology.description')}}</h3>
      <v-divider class="my-5 primary" width="150px" style="border-width:1px"></v-divider>
      <v-row>
        <v-col>
          <v-img src="/section-tech.png"></v-img>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="10" xl="6">
          <h1 class="py-4">Get in touch</h1>

          <multiStepForm></multiStepForm>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>



<script>
import MultiStepForm from "~/layouts/contactForm/multiStepForm.vue";
import WorkflowGroupItem from "~/components/workflowGroupItem.vue";
import Expertise from "~/components/expertise.vue";

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
            "Lorem Ipsum is simply dummy text of the printing and trinter tood not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          title: "planning",
          imagePath: "/planning-icon.svg",
          description: "description planning",
        },
        {
          title: "delivery",
          imagePath: "/delivery-icon.png",
          description: "description delivery",
        },
      ],

      softwareItems: [
        {
          text: "index.expertise.software.mobileDevelopment",
          imagePath: "/small-icon-mobile.png",
        },
        {
          text: "index.expertise.software.desktopApplications",
          imagePath: "/small-icon-app.png",
        },
        {
          text: "index.expertise.software.scriptAutomation",
          imagePath: "/small-icon-script.png",
        },
        {
          text: "index.expertise.software.fullStack",
          imagePath: "/small-icon-stack.png",
        },
        {
          text: "index.expertise.software.QATesting",
          imagePath: "/small-icon-QA.png",
        },
        {
          text: "index.expertise.software.websiteDevelopment",
          imagePath: "/small-icon-web.png",
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
  font-size: 1.1vw;
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
</style>

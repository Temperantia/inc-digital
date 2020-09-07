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
          <h4>We are inc digital</h4>
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
          <v-row style="width:100%" align="center">
            <v-col cols="12">
              <h1 class="white--text" style="text-align:center;">Research</h1>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-row>

    <v-row style="width:100%">
      <div
        style="
        width: 56%;
        padding-bottom: 61%;
        box-sizing: border-box;
        position: relative;"
      >
        <div class="pt-16" style="position:absolute; width:100%; height:100%">
          <v-row align="center">
            <v-col cols="8">
              <v-tabs
                v-model="workflowTab"
                fixed-tabs
                background-color="transparent"
                color="secondary"
              >
                <v-tab class="mx-4 pa-0">Research</v-tab>
                <v-tab class="mx-4 pa-0">Planning</v-tab>
                <v-tab class="mx-4 pa-0">delivery</v-tab>
              </v-tabs>

              <v-tabs-items v-model="workflowTab">
                <v-tab-item>
                  <v-card color="basil" flat>
                    <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card color="basil" flat>
                    <v-card-text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card color="basil" flat>
                    <v-card-text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-col>
            <v-col cols="2"></v-col>

            <v-col cols="2" align-self="start">
              <v-btn icon @click="()=>{if(workflowTab!==2){workflowTab++}}">
                <v-img class="ma-3" src="/carrouselArrowRight.png" width="32px"></v-img>
              </v-btn>
              <br />
              <v-btn icon @click="workflowTab--">
                <v-img class="ma-3" src="/carrouselArrowLeft.png" width="32px"></v-img>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>

      <div
        style="
        width: 44%;
        padding-bottom: 61%;
        box-sizing: border-box;
        position: relative;"
      >
        <div class="pt-16" style="position:absolute">
          <h1 class="white--text">Research</h1>
        </div>
      </div>
    </v-row>
    <div>
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
      <br />
      <br />
      <br />
    </div>
    <v-container id="home" width="50" class="text-center">
      <v-row align="center">
        <v-col cols="12" align="center">
          <div class="d-inline-block">
            <h2 class="pa-3 d-inline-block">{{$t('index.home.hello')}}</h2>
            <v-divider class="mb-2" width="60%" color="black"></v-divider>
          </div>

          <h3 class="pa-2 pb-8">{{$t('index.home.whoWeAre')}}</h3>
          <div class="d-inline-block">
            <h2 class="pa-3 d-inline-block">{{$t('index.home.weFocusOn')}}</h2>
            <v-divider width="60%" color="black"></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" align="center">
          <v-img width="250" src="/icon-research.png"></v-img>
          <h4>{{$t('index.home.research')}}</h4>
        </v-col>
        <v-col cols="4" align="center">
          <v-img width="250" src="/icon-planning.png"></v-img>
          <h4>{{$t('index.home.planning')}}</h4>
        </v-col>
        <v-col cols="4" align="center">
          <v-img width="250" src="/icon-delivery.png"></v-img>
          <h4>{{$t('index.home.delivery')}}</h4>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" align="center">
          <div class="d-inline-block">
            <h2 class="pa-3 d-inline-block">{{$t('index.workflow.title')}}</h2>
            <v-divider class="mb-6" width="60%" color="black"></v-divider>
          </div>

          <p class="pa-2">{{$t('index.workflow.ourStrategy')}}</p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="6" sm="4" md="3" align="center">
          <v-img width="100" src="/icon-communicate.png"></v-img>
          <h4 class="mb-3">01. {{$t('index.workflow.communicate.title')}}</h4>
          <p class="pa-2">{{$t('index.workflow.communicate.description')}}</p>
        </v-col>
        <v-col cols="6" sm="4" md="3" align="center">
          <v-img width="100" src="/icon-evaluate.png"></v-img>
          <h4 class="mb-3">02. {{$t('index.workflow.evaluate.title')}}</h4>
          <p class="pa-2">{{$t('index.workflow.evaluate.description')}}</p>
        </v-col>
        <v-col cols="6" sm="4" md="3" align="center">
          <v-img width="100" src="/icon-design.png"></v-img>
          <h4 class="mb-3">03. {{$t('index.workflow.design.title')}}</h4>
          <p class="pa-2">{{$t('index.workflow.design.description')}}</p>
        </v-col>
        <v-col cols="6" sm="4" md="3" align="center">
          <v-img width="100" src="/icon-develop.png"></v-img>
          <h4 class="mb-3">04. {{$t('index.workflow.develop.title')}}</h4>
          <p class="pa-2">{{$t('index.workflow.develop.description')}}</p>
        </v-col>
        <v-col cols="6" sm="4" md="3" align="center">
          <v-img width="100" src="/icon-test.png"></v-img>
          <h4>05. {{$t('index.workflow.test.title')}}</h4>
          <br />
          <p class="pa-2">{{$t('index.workflow.test.description')}}</p>
        </v-col>
        <v-col cols="6" sm="4" md="3" align="center">
          <v-img width="100" src="/icon-release.png"></v-img>
          <h4>06. {{$t('index.workflow.release.title')}}</h4>
          <p class="pa-2">{{$t('index.workflow.release.description')}}</p>
        </v-col>
        <v-col cols="6" sm="4" md="3" align="center">
          <v-img width="100" src="/icon-support.png"></v-img>
          <h4>07. {{$t('index.workflow.support.title')}}</h4>
          <p class="pa-2">{{$t('index.workflow.support.description')}}</p>
        </v-col>
      </v-row>

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
                    <v-img class="mr-5" width="50px" contain :src="item.imagePath"></v-img>
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
          <h3 class="py-3">{{$t('index.expertise.marketingAndDesign.title')}}</h3>
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col v-for="(item,i) in marketingItems" :key="i" cols="6" class="py-0">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" width="50px" contain :src="item.imagePath"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t(item.text)}}</h4>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

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

export default {
  data() {
    return {
      toggle_exclusive: undefined,
      workflowTab: null,
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
      marketingItems: [
        {
          text: "index.expertise.marketingAndDesign.uiUxDesign",
          imagePath: "/small-icon-UI.png",
        },
        {
          text: "index.expertise.marketingAndDesign.illustration",
          imagePath: "/small-icon-illus.png",
        },
        {
          text: "index.expertise.marketingAndDesign.designConsulting",
          imagePath: "/small-icon-consult.png",
        },
        {
          text: "index.expertise.marketingAndDesign.branding",
          imagePath: "/small-icon-brand.png",
        },
        {
          text: "index.expertise.marketingAndDesign.dataAnalysis",
          imagePath: "/small-icon-analysis.png",
        },
        {
          text: "index.expertise.marketingAndDesign.seoSocialCampaigns",
          imagePath: "/small-icon-SEO.png",
        },
        {
          text: "index.expertise.marketingAndDesign.businessPlanning",
          imagePath: "/small-icon-strategy.png",
        },
        {
          text: "index.expertise.marketingAndDesign.advertisementAndContent",
          imagePath: "/small-icon-advert.png",
        },
      ],
    };
  },
  components: {
    multiStepForm: MultiStepForm,
  },
  middleware(ctx) {
    ctx.$gtm.push({ event: "nuxtRoute" });
  },
};
</script>


<style>
h1 {
  font-size: 3.5vw;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  padding: 6px 0 6px 0;
}

todefine {
  text-transform: uppercase;
  font-size: 1.5vw;
  text-align: left;
  padding: 6px;
}

h3 {
  text-align: left;
  padding: 4px 0 4px 0;
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
</style>

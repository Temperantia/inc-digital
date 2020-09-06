<template>
  <v-layout column justify-center align-center>
    <v-img width="100%" src="/header.png">
      <v-col cols="4" offset="8" style="height: 100%;">
        <div
          style="position: absolute; left: 62%; bottom: 10%; font-size: 3vw; color: white; white-space:nowrap;"
        >
          <div class="pl-16">{{$t('index.home.bannerLine1')}}</div>
          <div class="pl-8">{{$t('index.home.bannerLine2')}}</div>
          <div>{{$t('index.home.bannerLine3')}}</div>
        </div>
      </v-col>
    </v-img>
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

      <v-row id="expertise" justify="center">
        <v-col cols="12" align="center">
          <div class="d-inline-block">
            <h2 class="pa-3 d-inline-block">{{$t('index.expertise.title')}}</h2>
            <v-divider class="mb-4" width="60%" color="black"></v-divider>
          </div>

          <p>{{$t('index.expertise.description')}}</p>
        </v-col>
      </v-row>

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
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  padding: 6px 0 6px 0;
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
</style>

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
        <v-col cols="12" md="7">
          <v-img src="/section-software.png"></v-img>
        </v-col>
        <v-col cols="12" md="5">
          <h3 class="py-3">{{$t('index.expertise.software.title')}}</h3>
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" width="50px" contain src="/small-icon-mobile.png"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t('index.expertise.software.mobileDevelopment')}}</h4>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" width="50" src="/small-icon-app.png"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t('index.expertise.software.desktopApplications')}}</h4>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" width="50" src="/small-icon-script.png"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t('index.expertise.software.scriptAutomation')}}</h4>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" width="50" src="/small-icon-stack.png"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t('index.expertise.software.fullStack')}}</h4>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" width="50" src="/small-icon-QA.png"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t('index.expertise.software.QATesting')}}</h4>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <v-img class="mr-5" width="50" src="/small-icon-web.png"></v-img>
                  </v-col>
                  <v-col cols="8" align-self="center">
                    <h4>{{$t('index.expertise.software.websiteDevelopment')}}</h4>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <p>{{$t('index.expertise.software.ourPhilosophy')}}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="text-left">
        <v-col cols="12" md="5" order="2" order-md="1">
          <h3 class="py-3">{{$t('index.expertise.marketingAndDesign.title')}}</h3>
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-UI.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.uiUxDesign')}}</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-illus.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.illustration')}}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-consult.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.designConsulting')}}</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-brand.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.branding')}}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-analysis.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.dataAnalysis')}}</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-SEO.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.seoSocialCampaigns')}}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-strategy.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.businessPlanning')}}</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-advert.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.marketingAndDesign.advertisementAndContent')}}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <p>{{$t('index.expertise.marketingAndDesign.ourPhilosophy')}}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" md="7" order="1" order-md="2">
          <v-img src="/section-marketingdesign.png"></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" align="center">
          <div class="d-inline-block">
            <h2 class="pa-3 d-inline-block">{{$t('index.technology.title')}}</h2>
            <v-divider width="60%" color="black"></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>{{$t('index.technology.description')}}</v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-img src="/section-tech.png"></v-img>
        </v-col>
      </v-row>
      <h1>Get in touch</h1>

      <multiStepForm></multiStepForm>
    </v-container>
  </v-layout>
</template>



<script>
import MultiStepForm from "~/layouts/contactForm/multiStepForm.vue";

export default {
  data() {
    return {
      toggle_exclusive: undefined,
    };
  },
  components: {
    multiStepForm: MultiStepForm,
  },

  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
};
</script>


<style>
.col.custCol {
  padding: 0;
  flex-grow: 0;
}

.v-btn {
  background-size: cover;
  border: none;
}
.v-text-field {
  font-weight: bold;
  padding: 10px;
  margin: 10px;
}

.v-text-field input {
  padding: 25px 0px 25px;
}

.v-text-field--placeholder {
  padding-top: 10px;
}

.v-text-field label {
  font-size: 25px;
}
/* text left has pddining by default */

.fieldTitle {
  padding: 5px 10px 5px 10px;
  margin: 0px 10px 0px 10px;
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

.stepperContent {
  width: 800px;
}
</style>

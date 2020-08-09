<template>
  <v-layout column justify-center align-center>
    <v-img width="100%" src="/header.png">
      <v-col cols="4" offset="8" style="height: 100%;">
        <div style="position: absolute; right: 10%; bottom: 10%; font-size: 3vw; color: white;">
          <div class="pl-10">We help you build</div>
          <div class="pl-5">a new version</div>
          <div>of your business</div>
        </div>
      </v-col>
    </v-img>
    <v-container id="home" width="50" class="text-center">
      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">{{$t('index.home.hello')}}</h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>
      </v-row>
      <v-container class="text-center">
        <h3 class="pa=2">{{$t('index.home.whoWeAre')}}</h3>
      </v-container>

      <br />
      <br />

      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">{{$t('index.home.weFocusOn')}}</h2>
          <v-divider width="20%" color="black"></v-divider>
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

      <br />
      <br />

      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">{{$t('index.workflow.title')}}</h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>
      </v-row>
      <br />
      <v-row>
        <v-col>{{$t('index.workflow.ourStrategy')}}</v-col>
      </v-row>

      <br />

      <v-row>
        <v-col align="center">
          <v-img width="100" src="/icon-communicate.png"></v-img>
          <h4>01. {{$t('index.workflow.communicate.title')}}</h4>
          <br />
          <p>{{$t('index.workflow.communicate.description')}}</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-evaluate.png"></v-img>
          <h4>02. {{$t('index.workflow.evaluate.title')}}</h4>
          <br />
          <p>{{$t('index.workflow.evaluate.description')}}</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-design.png"></v-img>
          <h4>03. {{$t('index.workflow.design.title')}}</h4>
          <br />
          <p>{{$t('index.workflow.design.description')}}</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-develop.png"></v-img>
          <h4>04. {{$t('index.workflow.develop.title')}}</h4>
          <br />
          <p>{{$t('index.workflow.develop.description')}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-img width="100" src="/icon-test.png"></v-img>
          <h4>05. {{$t('index.workflow.test.title')}}</h4>
          <br />
          <p>{{$t('index.workflow.test.description')}}</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-release.png"></v-img>
          <h4>06. {{$t('index.workflow.release.title')}}</h4>
          <p>{{$t('index.workflow.release.description')}}</p>
        </v-col>
        <v-col align="center">
          <v-img width="100" src="/icon-support.png"></v-img>
          <h4>07. {{$t('index.workflow.support.title')}}</h4>
          <p>{{$t('index.workflow.support.description')}}</p>
        </v-col>
      </v-row>
      <v-row id="expertise">
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">{{$t('index.expertise.title')}}</h2>
          <v-divider width="20%" color="black"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>{{$t('index.expertise.description')}}</v-col>
      </v-row>
      <v-row class="text-left">
        <v-col col="7">
          <v-img src="/section-software.png"></v-img>
        </v-col>
        <v-col col="5">
          <h3 class="py-3">{{$t('index.expertise.software.title')}}</h3>
          <v-divider width="10%" color="black"></v-divider>
          <v-container fluid>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-mobile.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.software.mobileDevelopment')}}</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-app.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.software.desktopApplications')}}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-script.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.software.scriptAutomation')}}</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-stack.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.software.fullStack')}}</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-QA.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.software.QATesting')}}</h4>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-img width="50" src="/small-icon-web.png"></v-img>
              </v-col>
              <v-col cols="4" align-self="center">
                <h4>{{$t('index.expertise.software.websiteDevelopment')}}</h4>
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
        <v-col col="5">
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
        <v-col col="7">
          <v-img src="/section-marketingdesign.png"></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4" offset="4" align="center">
          <h2 class="pa-3">{{$t('index.technology.title')}}</h2>
          <v-divider width="20%" color="black"></v-divider>
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
    </v-container>
  </v-layout>
</template>


<script>
</script>
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
      <h1>Get in touch</h1>

      <v-row align="center" justify="center">
        <v-col cols="9">
          <v-card-text>
            <v-form>
              <v-text-field
                placeholder="Your Name here"
                label="What should we call you?"
                name="contactname"
                type="text"
              ></v-text-field>
              <v-text-field
                id="name"
                label="What is the name of your compagny / organization?"
                placeholder="Widgets Inc"
                name="compagny"
                type="text"
              ></v-text-field>
              <!--  -->

              <v-row justify="center">
                <v-col cols="6">
                  <v-text-field
                    placeholder="Email address"
                    label="How shall we contact you?"
                    name="contactemail"
                    type="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    id="name"
                    placeholder="Phone number"
                    name="contactphone"
                    type="phone"
                  ></v-text-field>
                  <!--  -->
                </v-col>
              </v-row>
              <v-card-actions>
                <v-col class="text-left nextbtn">
                  <v-btn color="warning">Next -></v-btn>
                </v-col>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-col>

        <!-- there etape 2-->

        <v-col cols="9">
          <v-card-text>
            <v-form>
              <v-text class="text-left">
                <h2>What can we help you with ?</h2>
              </v-text>
              <div class="container text-left">Nice to meet you, $NAME. Select all that apply.</div>
              <v-card flat class="py-12">
                <v-card-text >
                  <v-row align="center" justify="center">

      <v-col class="custCol" col="2">
        <button  type="button" class="v-btn v-btn--flat v-btn--square theme--light  orange--text product" >
          <v-row>
           <v-img width="110" src="webOrange.png"></v-img>
            <span class="v-btn__content">
               <i aria-hidden="true"</i>
                <v-text class="title" >Web</v-text>
            </span>
          </v-row>
          <v-img width="20"  src="Checkbox.png"></v-img>
        </button>
        </v-col>

    <v-col class="custCol" col="2">
        <button  type="button" class="v-btn v-btn--flat v-btn--square theme--light  orange--text product" >
          <v-row>
           <v-img width="60" src="appOrange.png"></v-img>
            <span class="v-btn__content">
               <i aria-hidden="true"</i>
                <v-text class="title" >App</v-text>
            </span>
          </v-row>
          <v-img width="20"  src="Checkbox.png"></v-img>
        </button>
        </v-col>

    <v-col class="custCol" col="2">
        <button  type="button" class="v-btn v-btn--flat v-btn--square theme--light  orange--text product" >
          <v-row>
           <v-img width="110" src="ecommerceOrange.png"></v-img>
            <span class="v-btn__content">
               <i aria-hidden="true"</i>
                <v-text class="title" >Ecommerce</v-text>
            </span>
          </v-row>
          <v-img width="20"  src="Checkbox.png"></v-img>
        </button>
        </v-col>

    <v-col class="custCol" col="2">
        <button  type="button" class="v-btn v-btn--flat v-btn--square theme--light  orange--text product" >
          <v-row>
           <v-img width="110" src="uiuxOrange.png"></v-img>
            <span class="v-btn__content">
               <i aria-hidden="true"</i>
                <v-text class="title" >UI/UX</v-text>
            </span>
          </v-row>
          <v-img width="20"  src="Checkbox.png"></v-img>
        </button>
        </v-col>

    <v-col class="custCol" col="2">
        <button  type="button" class="v-btn v-btn--flat v-btn--square theme--light  orange--text product" >
          <v-row>
           <v-img width="110" src="otherOrange.png"></v-img>
            <span class="v-btn__content">
               <i aria-hidden="true"</i>
                <v-text class="title" >Other</v-text>
            </span>
          </v-row>
          <v-img width="20"  src="Checkbox.png"></v-img>
        </button>
        </v-col>

                  </v-row>

                </v-card-text>

              </v-card>


              <v-card-actions>
                <v-col class="text-left nextbtn">
                  <v-btn color="warning">Next -></v-btn>
                </v-col>
              </v-card-actions>

            </v-form>

          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>


<script>
export default {
  data() {
    return {
      toggle_exclusive: undefined,
    };
  },

  middleware(ctx) {
    ctx.$gtm.push({ event: "ssr" });
  },
};
</script>

<style>
.v-btn.product {
    padding: 40px 70px 140px 70px;
}

.col.custCol {
  padding: 0;
  flex-grow: 0;

}
.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before:focus {
   opacity: 1;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
 opacity: 0;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined):focus:before {
 opacity: 1;
}
.v-btn {
background-color: transparent;
background-size: cover;
border:none;
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

.nextbtn {
  padding: 12px;
}
</style>

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
            <v-form align="start" justify="start">
              <label class="fieldTitle">What should we call you?</label>

              <v-text-field
                id="name"
                class="fieldTextInput"
                placeholder="Your Name here"
                name="contactname"
                type="text"
              ></v-text-field>

              <label class="fieldTitle">What the name of compagny / organization?</label>
              <v-text-field
                id="company"
                class="fieldTextInput"
                placeholder="Widgets Inc"
                name="compagny"
                type="text"
              ></v-text-field>
              <!--  -->
              <label class="fieldTitle">How shall we contact you?</label>

              <v-row justify="center">
                <v-col cols="6">
                  <v-text-field
                    id="email"
                    class="fieldTextInput"
                    placeholder="Email address"
                    name="contactemail"
                    type="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    id="name"
                    class="fieldTextInput"
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
                <v-item-group>
                  <v-container>
                    <v-row no-gutters>
                      <v-col v-for="item in items" :key="item.index" cols="12" md="2">
                        <v-item v-slot:default="{ active, toggle }">
                          <v-card
                            :color="active ? 'orange' : 'white'"
                            text-color="red"
                            class="d-flex align-center"
                            dark
                            tile
                            outlined
                            height="250"
                            width="200"
                            @click="toggle"
                          >
                            <v-scroll-y-transition>
                              <v-row no-gutters>
                                <v-col
                                  align="center"
                                  justify="center"
                                  class="businessCategory"
                                  no-gutters
                                  v-if="active"
                                >
                                  <v-img width="80" height="80" contain :src="`/${item.srcActive}`"></v-img>
                                  <p class="title" style="color:white" v-text="item.text"></p>
                                  <v-img width="25" src="/Checkbox.png"></v-img>
                                </v-col>

                                <v-col
                                  align="center"
                                  justify="center"
                                  class="businessCategory"
                                  v-else
                                >
                                  <v-img
                                    width="80"
                                    height="80"
                                    contain
                                    :src="`/${item.srcNotActive}`"
                                  ></v-img>
                                  <p class="title" style="color:black" v-text="item.text"></p>
                                  <v-img width="25" src="/Checkbox.png"></v-img>
                                </v-col>
                              </v-row>
                            </v-scroll-y-transition>
                          </v-card>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-item-group>
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


<script>
export default {
  data: () => ({
    items: [
      {
        srcActive: "webWhite.png",
        srcNotActive: "webOrange.png",
        text: "Web",
      },
      {
        srcActive: "appWhite.png",
        srcNotActive: "appOrange.png",
        text: "App",
      },
      {
        srcActive: "ecommerceWhite.png",
        srcNotActive: "ecommerceOrange.png",
        text: "eCommerce",
      },
      {
        srcActive: "uiuxWhite.png",
        srcNotActive: "uiuxOrange.png",
        text: "UI / UX",
      },
      {
        srcActive: "otherWhite.png",
        srcNotActive: "otherOrange.png",
        text: "Other",
      },
    ],
    selected: [],
  }),
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

.businessCategory {
  width: 110px;
}

.businessCategoryImage {
  height: 80px;
  width: 80px;
}

.title {
  padding-top: 15px;
  padding-bottom: 15px;
}

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
</style>

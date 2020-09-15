<template>
  <v-col cols="12" class="ma-0 pa-0">
    <v-card-text class="ma-0 pa-0">
      <v-form>
        <v-container class="text-left">
          <p class="titleForm">What can we help you with ?</p>
          <p
            class="subtitleForm"
          >Nice to meet you, {{parentData.contactName}}. Select all that apply.</p>
        </v-container>

        <v-card flat class="py-12">
          <v-item-group v-model="selected">
            <v-row justify="center" no-gutters>
              <v-col v-for="item in items" :key="item.index" cols="4" md="2">
                <v-item v-slot:default="{ active, toggle }">
                  <v-card
                    :color="active ? 'accent' : 'white'"
                    text-color="red"
                    class="align-center ma-0"
                    dark
                    tile
                    outlined
                    @click="toggle"
                  >
                    <v-scroll-y-transition>
                      <v-row>
                        <v-col align="center" justify="center" v-if="active">
                          <v-container>
                            <v-img
                              width="80"
                              height="80"
                              contain
                              :src="`/contactForm/${item.srcActive}`"
                            ></v-img>
                          </v-container>

                          <p
                            class="font-weight-medium pa-2 ma-0"
                            style="color:white"
                            v-text="item.text"
                          ></p>
                          <v-container>
                            <v-img width="25" src="/contactForm/Checkbox.png"></v-img>
                          </v-container>
                        </v-col>

                        <v-col align="center" justify="center" v-else>
                          <v-container>
                            <v-img
                              width="80"
                              height="80"
                              contain
                              :src="`/contactForm/${item.srcNotActive}`"
                            ></v-img>
                          </v-container>

                          <p
                            class="font-weight-medium pa-2 ma-0"
                            style="color:black"
                            v-text="item.text"
                          ></p>
                          <v-container>
                            <v-img width="25" src="/Checkbox.png"></v-img>
                          </v-container>
                        </v-col>
                      </v-row>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-card>
      </v-form>
    </v-card-text>
  </v-col>
</template>


<script>
export default {
  data: () => ({
    items: [
      {
        srcActive: "webWhite.png",
        srcNotActive: "webColored.png",
        text: "Web",
      },
      {
        srcActive: "appWhite.png",
        srcNotActive: "appColored.png",
        text: "App",
      },
      {
        srcActive: "ecommerceWhite.png",
        srcNotActive: "ecommerceColored.png",
        text: "eCommerce",
      },
      {
        srcActive: "uiuxWhite.png",
        srcNotActive: "uiuxColored.png",
        text: "UI / UX",
      },
      {
        srcActive: "otherWhite.png",
        srcNotActive: "otherColored.png",
        text: "Other",
      },
    ],
    selected: [],
    cardSelected: null,
  }),
  props: {
    parentData: null,
  },
  methods: {
    validate: function () {
      for (let i = 0; i < 5; i++) {
        if (this.selected === i) {
          this.cardSelected = this.items[i].text;
          return true;
        }
      }
      return false;
    },
    form() {
      return {
        technology: this.cardSelected,
      };
    },
  },
};
</script>

<style>
</style>
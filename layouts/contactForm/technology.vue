<template>
  <v-col cols="12">
    <v-card-text>
      <v-form>
        <v-container class="text-left">
          <h2>What can we help you with ?</h2>
        </v-container>
        <div class="container text-left">Nice to meet you, $NAME. Select all that apply.</div>
        <v-card flat class="py-12">
          <v-item-group v-model="selected">
            <v-container>
              <v-row no-gutters justify="center">
                <v-col v-for="item in items" :key="item.index" cols="2.4">
                  <v-item v-slot:default="{ active, toggle }">
                    <v-card
                      :color="active ? 'orange' : 'white'"
                      text-color="red"
                      class="align-center ma-0"
                      dark
                      tile
                      outlined
                      @click="toggle"
                    >
                      <v-scroll-y-transition>
                        <v-row no-gutters>
                          <v-col align="center" justify="center" no-gutters v-if="active">
                            <v-container>
                              <v-img width="80" height="80" contain :src="`/${item.srcActive}`"></v-img>
                            </v-container>

                            <p
                              class="font-weight-medium pa-2 ma-0"
                              style="color:white"
                              v-text="item.text"
                            ></p>
                            <v-container>
                              <v-img width="25" src="/Checkbox.png"></v-img>
                            </v-container>
                          </v-col>

                          <v-col align="center" justify="center" class="businessCategory" v-else>
                            <v-container>
                              <v-img width="80" height="80" contain :src="`/${item.srcNotActive}`"></v-img>
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
            </v-container>
          </v-item-group>
        </v-card>
      </v-form>
    </v-card-text>
  </v-col>
</template>


<script>
export default {
  data: () => ({
    cardSelected: true,
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
  methods: {
    validate: function () {
      for (let i = 0; i < 5; i++) {
        if (this.selected === i) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style>
.businessCategory {
  width: 120px;
}

.businessCategoryImage {
  height: 80px;
  width: 80px;
}
</style>
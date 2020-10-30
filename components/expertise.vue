<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" class="px-0">
        <h4 class="py-3">{{$t('index.expertise.marketingAndDesign.title')}}</h4>
        <v-divider
          class="my-5 primary"
          width="150px"
          style="border-width: 1px"
        ></v-divider>
        <v-row class="ma-0">
          <v-col v-for="(item,i) in marketingItems" :key="i" cols="12" sm="6" class="pa-3">
            <div class="d-flex ma-0">
              <v-img max-width="40px" contain :src="`/marketingItems${item.imagePath}`"></v-img>
              <h5 class="pl-4 align-self-center">{{$t(item.text)}}</h5>
            </div>
          </v-col>
        </v-row>
        <p class="pt-5">{{$t('index.expertise.marketingAndDesign.ourPhilosophy')}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>

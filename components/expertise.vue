<template>
  <v-container fluid style="width:70%">
    <v-row align="center">
      <v-col cols="6">
        <h2>expertise</h2>
        <h1>{{$t('index.expertise.title')}}</h1>
        <h3>{{$t('index.expertise.description')}}</h3>
        <v-divider class="my-5 primary" width="150px" style="border-width:1px"></v-divider>
        <h4 class="py-3">{{$t('index.expertise.marketingAndDesign.title')}}</h4>

        <v-row>
          <v-col v-for="(item,i) in marketingItems" :key="i" cols="6" class="py-0">
            <v-row>
              <v-col cols="4">
                <v-img class="mr-5" width="40px" contain :src="item.imagePath"></v-img>
              </v-col>
              <v-col cols="8" align-self="center">
                <h5>{{$t(item.text)}}</h5>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <p class="pt-5">{{$t('index.expertise.marketingAndDesign.ourPhilosophy')}}</p>
      </v-col>

      <v-col cols="6" class="pl-10">
        <v-img max-height="900px" contain src="/section-marketingdesign.png"></v-img>
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
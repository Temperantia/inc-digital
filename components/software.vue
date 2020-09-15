<template>
  <v-container id="home" class="text-center pa-0" fluid>
    <v-row justify="center" class="text-left" align="center">
      <v-col cols="12" md="6">
        <v-img src="/section-software.png"></v-img>
      </v-col>

      <v-col class="pl-8">
        <h4 class="py-3">{{$t('index.expertise.software.title')}}</h4>
        <v-divider class="my-5 primary" width="150px" style="border-width:1px"></v-divider>

        <div v-for="(item,i) in softwareItems" :key="i" cols="12" class="py-0">
          <div class="d-inline-flex align-center my-4">
            <v-img
              class="mr-6"
              height="40px"
              width="40px"
              contain
              :src="`/softwareItems/${item.imagePath}`"
            ></v-img>
            <h5 width="80%">{{$t(item.text)}}</h5>
          </div>
        </div>
        <p class="pr-6 my-4" style="font-size:18px">{{$t('index.expertise.software.ourPhilosophy')}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
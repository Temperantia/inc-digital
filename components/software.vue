<template>
  <v-container id="home" class="text-center pa-0" fluid>
    <v-row justify="center" class="text-left ma-0" align="center">
      <v-col>
        <h2>{{ $t("index.expertise.sectionTitle") }}</h2>
        <h1>{{ $t("index.expertise.title") }}</h1>
        <h3>{{ $t("index.expertise.description") }}</h3>
        <v-divider
          class="my-5 primary"
          width="150px"
          style="border-width: 1px"
        ></v-divider>
        <h4 class="py-3">{{ $t("index.expertise.software.title") }}</h4>
        <v-divider
          class="my-5 primary"
          width="150px"
          style="border-width: 1px"
        ></v-divider>
        <v-row>
          <v-col
            v-for="(item, i) in softwareItems"
            :key="i"
            cols="12"
            class="py-0"
          >
            <div class="d-inline-flex align-center my-4">
              <v-img
                class="mr-6"
                height="40px"
                width="40px"
                contain
                :src="`/softwareItems/${item.imagePath}`"
              ></v-img>
              <h5 width="80%">{{ $t(item.text) }}</h5>
            </div>
          </v-col>
        </v-row>
        <p class="pr-6 my-4" style="font-size: 18px">
          {{ $t("index.expertise.software.ourPhilosophy") }}
        </p>
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
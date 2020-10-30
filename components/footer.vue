  <template>
  <v-footer class="justify-center">
    <v-col cols="12" sm="8">
      <v-row>
        <v-col cols="6" md="3">
          <div class="grey--text ma-4" style="font-size:18px">{{$t('footer.clientSupport')}}</div>
        </v-col>
        <v-col cols="6" md="3">
          <div class="grey--text ma-4" style="font-size:18px">{{$t('footer.termsAndPrivacy')}}</div>
        </v-col>
        <v-col cols="3" class="hidden-sm-and-down"></v-col>
        <v-col cols="12" md="3" class="d-flex">
          <v-icon
            class="ma-2"
            v-for="(item, i) in socialMediaItems"
            :key="i"
            @click="goto(item.url)"
          >{{item.iconID}}</v-icon>
        </v-col>
      </v-row>

      <v-divider class="my-4" color="black"></v-divider>

      <v-row>
        <v-col cols="12" md="8" align-self="center">
          <span
            class="grey--text"
          >&copy; {{ new Date().getFullYear() }} {{$t('footer.copyright')}} {{$t('footer.useOfThisSite')}}</span>

          <a
            class="grey--text"
            href="https://en.wikipedia.org/wiki/Terms_of_service"
          >{{$t('footer.termsOfUse')}}</a>
        </v-col>
        <v-col cols="12" md="4" style="display: flex; align-items: center;">
          <span class="grey--text">{{$t('footer.descriptionPrefix')}}</span>
          <img class="mx-2" width="100" src="/inclusiveLogotype.png" />
          <span class="grey--text">{{$t('footer.descriptionSuffix')}}</span>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socialMediaItems: [
        { iconID: "mdi-facebook", url: "https://www.facebook.com/IncDigital-109739857556851" },
        { iconID: "mdi-twitter", url: "https://twitter.com/IncDigital2" },
        { iconID: "mdi-linkedin", url: "https://www.linkedin.com/company/inc-digital-inclusive/" },
        { iconID: "mdi-instagram", url: "https://www.instagram.com/inclusive_digital/" },
        { iconID: "mdi-github", url: "https://github.com/Inc-Digital" },
      ],
    };
  },
  methods: {
    goto(url) {
      window.location = url;
    },
  },
};
</script>

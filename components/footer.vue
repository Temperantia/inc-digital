  <template>
  <v-footer>
    <v-container fluid style="width:70%">
      <v-row>
        <div class="grey--text ma-4" style="font-size:18px">{{$t('footer.clientSupport')}}</div>
        <div class="grey--text ma-4" style="font-size:18px">{{$t('footer.termsAndPrivacy')}}</div>
        <v-spacer></v-spacer>
        <v-icon
          class="ma-2"
          v-for="(item, i) in socialMediaItems"
          :key="i"
          @click="goto(item.url)"
        >{{item.iconID}}</v-icon>
      </v-row>

      <v-divider class="my-4" color="black"></v-divider>

      <v-row>
        <v-col cols="8" align-self="center">
          <span
            class="grey--text"
          >&copy; {{ new Date().getFullYear() }} {{$t('footer.copyright')}} {{$t('footer.useOfThisSite')}}</span>

          <a
            class="grey--text"
            href="https://en.wikipedia.org/wiki/Terms_of_service"
          >{{$t('footer.termsOfUse')}}</a>
        </v-col>
        <v-col cols="4" style="display: flex; align-items: center;">
          <span class="grey--text">{{$t('footer.descriptionPrefix')}}</span>
          <img class="mx-2" width="100" src="/inclusiveLogotype.png" />
          <span class="grey--text">{{$t('footer.descriptionSuffix')}}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socialMediaItems: [
        { iconID: "mdi-facebook", url: "https://www.facebook.com/" },
        { iconID: "mdi-twitter", url: "https://twitter.com/" },
        { iconID: "mdi-linkedin", url: "https://www.linkedin.com/" },
        { iconID: "mdi-instagram", url: "https://www.instagram.com/" },
        { iconID: "mdi-github", url: "https://www.github.com/" },
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
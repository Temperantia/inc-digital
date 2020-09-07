<template>
  <v-footer>
    <v-container>
      <v-row></v-row>
      <v-row>
        <v-col>
          <v-divider color="black"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" align-self="center">
          <span class="grey--text">&copy; {{ new Date().getFullYear() }} {{$t('footer.copyright')}} {{$t('footer.useOfThisSite')}}
          <a class= "grey--text" href=https://en.wikipedia.org/wiki/Terms_of_service>{{$t('footer.termsOfUse')}}</a> </span>
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
export default {};
</script>
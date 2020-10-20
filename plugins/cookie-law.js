// plugins/cookie-law.ts
import Vue from 'vue'
import CookieLaw from "vue-cookie-law";

export default () => {
  Vue.component('cookie-law', CookieLaw)
}

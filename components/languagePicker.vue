<template>
  <v-select
    :class="classSelect"
    item-color="accent"
    v-model="langSelected"
    :items="langs"
    hide-details
    single-line
    style="width: 130px"
    @change="changeLang(langSelected)"
  >
    <template v-slot:prepend-inner>
      <v-icon :color="mainColor">mdi-web</v-icon>
    </template>
  </v-select>
</template>

<script>
export default {
  data() {
    return {
      langs: ["English", "Français"],
      langSelected: "English",
    };
  },
  props: {
    mainColor: {
      type: String,
      default: "white",
    },
  },
  computed: {
    classSelect() {
      return `custom mx-4 ${this.mainColor}--text`;
    },
  },
  methods: {
    changeLang: function (lang) {
      switch (lang) {
        case "English":
          this.$router.push("/");
          break;

        case "Français":
          this.$router.push("/fr");
        default:
          break;
      }
    },
  },
};
</script>

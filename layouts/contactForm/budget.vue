<template>
  <v-card flat color="transparent" class="ma-0 pa-0">
    <v-container class="text-left">
      <div class="titleForm">{{$t('index.contactForm.titleStepBudget')}}</div>
      <div class="subtitleForm">{{$t('index.contactForm.descriptionStepBudget')}}</div>
    </v-container>
    <v-card-text>
      <v-row>
        <template>
          <v-container class="pa-4">
            <div
              :class="disabled ? 'grey--text':'black--text'"
            >${{range[0]/1000}}K — ${{range[1]/1000}}K</div>
          </v-container>
        </template>

        <v-col class="px-4">
          <v-range-slider
            id="budgetSlider"
            v-model="range"
            :max="max"
            :min="min"
            :disabled="disabled"
            step="1000"
            hide-details
            color="accent"
            track-color="grey"
            class="align-center"
          >
            <template v-slot:prepend>
              <div>${{min/1000}}K</div>
            </template>
            <template v-slot:append>
              <div>${{max/1000}}K</div>
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="start" class="ma-6">
          <v-btn-toggle>
            <v-btn @click="disabled = !disabled">{{$t('index.contactForm.unknownBudget')}}</v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      min: 5000,
      max: 45000,
      range: [15000, 30000],
      disabled: false,
    };
  },
  methods: {
    form() {
      if (this.disabled) {
        return {
          budget: "budget unknown",
        };
      } else
        return {
          budgetmin: this.range[0],
          budgetmax: this.range[1],
        };
    },
  },
};
</script>

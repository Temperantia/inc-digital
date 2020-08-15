<template>
  <v-card flat color="transparent">
    <v-row>
      <v-col align="start" justify="start">
        <div class="stepTitle">What's your budget?</div>
        <div class="stepDescription">
          A transparent budget will help us ensure expectations are met.
          Not sure? Ballparks are fine.
        </div>
      </v-col>
    </v-row>
    <v-card-text>
      <v-row>
        <template>
          <v-container class="pa-4">
            <div
              :class="disabled ? 'grey--text':'black--text'"
              style="font-size:20px; font-weight:500"
            >${{range[0]/1000}}K - ${{range[1]/1000}}K</div>
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
            track-color="grey"
            class="align-center"
          >
            <template v-slot:prepend>
              <div style="font-size:20px">${{min/1000}}K</div>
            </template>
            <template v-slot:append>
              <div style="font-size:20px">${{max/1000}}K</div>
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="start" class="ma-6">
          <v-btn-toggle>
            <v-btn @click="disabled = !disabled">I don't know my budget</v-btn>
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
};
</script>

<style>
.stepTitle {
  font-size: 1.8em;
  font-weight: 500;
  margin-bottom: 20px;
}

.stepDescription {
  font-size: 1.1em;
}
</style>
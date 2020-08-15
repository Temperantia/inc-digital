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
        <v-col class="px-4">
          <v-container class="pa-4">
            <div style="font-size:24px; color:black;">${{range[0]/1000}}K - ${{range[1]/1000}}K</div>
          </v-container>

          <v-range-slider
            v-model="range"
            :max="max"
            :min="min"
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
<template>
  <v-row justify="center">
    <v-col v-for="(item,i) in workflowItems" :key="i" cols="6" lg="4" align="center">
      <v-img height="100px" width="100px" contain :src="`/workflowItems${item.imagePath}`"></v-img>
      <h5 class="my-2">0{{i+1}}. {{$t(item.title)}}</h5>
      <p class="pa-2 text-justify">{{$t(item.description)}}</p>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      workflowItems: [
        {
          title: "index.workflow.communicate.title",
          imagePath: "/icon-communicate.png",
          description: "index.workflow.communicate.description",
        },
        {
          title: "index.workflow.evaluate.title",
          imagePath: "/icon-evaluate.png",
          description: "index.workflow.evaluate.description",
        },
        {
          title: "index.workflow.design.title",
          imagePath: "/icon-design.png",
          description: "index.workflow.design.description",
        },
        {
          title: "index.workflow.develop.title",
          imagePath: "/icon-develop.png",
          description: "index.workflow.develop.description",
        },
        {
          title: "index.workflow.test.title",
          imagePath: "/icon-test.png",
          description: "index.workflow.test.description",
        },
        {
          title: "index.workflow.release.title",
          imagePath: "/icon-release.png",
          description: "index.workflow.release.description",
        },
        // Only 6 items for symetry
        /*
        {
            title: "index.workflow.support.title",
            imagePath: "/icon-support.png",
            description: "index.workflow.support.description"
        },
        */
      ],
    };
  },
};
</script>
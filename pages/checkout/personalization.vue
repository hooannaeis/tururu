<template>
  <div>
    <ProgressIndicator />
    <PersonalizationData />
  </div>
</template>

<script>
import ProgressIndicator from "@/components/ProgressIndicator.vue";
import PersonalizationData from "@/components/PersonalizationData.vue";

export default {
  components: {
    PersonalizationData,
    ProgressIndicator,
  },
};
</script>

<style>
</style>
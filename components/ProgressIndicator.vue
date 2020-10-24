<template>
  <div>
    <div class="is-h-centered">
      <span
        v-for="(checkoutStep, csIndex) in checkoutSteps"
        :key="checkoutStep"
      >
        <button
          class="btn btn--primary is-mini"
          v-if="isActiveStep(checkoutStep)"
        >
          {{ checkoutStep }}
        </button>
        <nuxt-link
          v-else-if="stepIsValidForEntry(checkoutStep)"
          :to="'/checkout/' + checkoutStep"
        >
          <button class="btn is-mini">
            {{ checkoutStep }}
          </button>
        </nuxt-link>
        <span v-else>
          <button class="btn btn--disabled is-mini">
            {{ checkoutStep }}
          </button>
        </span>
        <span class="txt-is-bright" v-if="csIndex + 1 < checkoutSteps.length">
          >
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkoutSteps: ["personalization", "delivery", "payment", "summary"],
    };
  },
  methods: {
    isActiveStep(stepName) {
      const currentStep = this.$route.path;
      return currentStep.includes(stepName);
    },
    stepIsValidForEntry(stepName) {
      try {
        if (localStorage && localStorage.getItem(stepName)) {
          const stepData = localStorage.getItem(stepName);
          return Boolean(stepData);
        }
        return false;
      } catch (e) {
        console.error(`error validating step entry: ${e}`);
        return false;
      }
    },
  },
};
</script>

<style>
</style>
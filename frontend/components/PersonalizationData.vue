<template>
  <div>
    <span v-if="editable">
      <div class="card__container">
        <h2>want to personalize it?</h2>
        <label for="personalization"
          >write a personal message that you or your friend will get with their
          tururu :)
        </label>
        <textarea
          class="input__field"
          style="width: 100%"
          id="personalization"
          v-model="personalization"
          placeholder="your text"
        ></textarea>
      </div>
      <div class="is-h-centered">
        <nuxt-link to="/checkout/delivery">
          <button class="btn btn--primary">go on</button>
        </nuxt-link>
      </div>
    </span>
    <span v-else-if="personalization">
        your personal message:
      <textarea
        class="input__field"
        style="width: 100%"
        disabled
        id="personalization"
        v-model="personalization"
        placeholder="your text"
      ></textarea>
    </span>
    <span v-else> You didn't enter a personal message. </span>
  </div>
</template>

<script>
export default {
  props: {
    editable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      storageKey: "personalization",
      personalization: undefined,
    };
  },
  mounted() {
    try {
      const histData = localStorage.getItem(this.storageKey);
      if (histData) {
        this[this.storageKey] = histData;
      }
    } catch (e) {
      console.error("error getting data from localstorage", e);
    }
  },
  beforeDestroy() {
    try {
      if (this[this.storageKey] && this[this.storageKey].length > 0) {
        localStorage.setItem(this.storageKey, this[this.storageKey]);
      }
    } catch (e) {
      console.error("error setting data to localstorage", e);
    }
  },
};
</script>

<style>
</style>
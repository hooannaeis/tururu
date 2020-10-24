<template>
  <div>
    <ProgressIndicator />
    <DeliveryData />
  </div>
</template>

<script>
import ProgressIndicator from "@/components/ProgressIndicator.vue";
import DeliveryData from "@/components/DeliveryData.vue";

export default {
  components: {
    DeliveryData,
    ProgressIndicator,
  },
  data() {
    return {
      storageKey: "delivery",
      delivery: {
        firstName: "",
        lastName: "",
        street: "",
        zipCode: "",
        city: "",
        country: "",
      },
      errors: [],
    };
  },
  methods: {
    checkForward: function () {
      for (let [key, value] of Object.entries(this.delivery)) {
        if (!value) {
          this.errors.push(key);
        }
      }
      if (this.errors.length === 0) {
        this.$router.push({ path: "/checkout/payment" });
      }
    },
  },
  mounted() {
    try {
      const histData = JSON.parse(localStorage.getItem(this.storageKey));
      if (histData) {
        this[this.storageKey] = histData;
      }
    } catch (e) {
      console.error("error getting data from localstorage", e);
    }
  },
  beforeDestroy() {
    try {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(this[this.storageKey])
      );
    } catch (e) {
      console.error("error setting data to localstorage", e);
    }
  },
};
</script>

<style>
</style>
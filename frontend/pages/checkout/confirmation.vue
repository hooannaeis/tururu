<template>
  <div>
    <div class="card__container">
      <h2>
        Thank you, {{ delivery.firstName }}, for supporting world peace
      </h2>
    </div>
    <div class="is-h-centered">
      <nuxt-link to="/checkout/personalization">
        <button class="btn btn--primary">get another one</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery: {
        firstName: "",
        lastName: "",
        street: "",
        zipCode: "",
        city: "",
        country: "",
      },
    };
  },
  mounted() {
    try {
      const deliveryData = JSON.parse(localStorage.getItem("delivery"));
      if (deliveryData) {
        this.delivery = deliveryData;
      }
    } catch (e) {
      console.error("error getting data from localstorage", e);
    }
  },
};
</script>

<style>
</style>
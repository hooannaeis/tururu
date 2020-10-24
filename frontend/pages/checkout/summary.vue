<template>
  <div>
    <ProgressIndicator />
    <div class="card__container">
      <h2>shopping list</h2>
      <div class="grid__container--3c">
        <code>1x</code>
        <div>tururu</div>
        <code>10,00 EUR</code>
      </div>
      <div class="grid__container--3c">
        <code>1x</code>
        <div>shipping</div>
        <code>0,00 EUR</code>
      </div>
      <div class="grid__container--3c">
        <code></code>
        <div>total</div>
        <code>10,00 EUR</code>
      </div>
    </div>

    <div class="card__container" style="position: relative">
      <h2>personlization situation</h2>
      <PersonalizationData :editable="false"></PersonalizationData>
      <nuxt-link
        to="/checkout/personalization"
        style="position: absolute; top: 0.5rem; right: 0.5rem"
      >
        <button class="btn">change</button>
      </nuxt-link>
    </div>

    <div class="card__container" style="position: relative">
      <h2>delivery situation</h2>
      <DeliveryData :editable="false"></DeliveryData>
      <nuxt-link
        to="/checkout/delivery"
        style="position: absolute; top: 0.5rem; right: 0.5rem"
      >
        <button class="btn">change</button>
      </nuxt-link>
    </div>

    <div class="card__container" style="position: relative">
      <h2>payment situation</h2>
      <PaymentData :editable="false"></PaymentData>
      <nuxt-link
        to="/checkout/payment"
        style="position: absolute; top: 0.5rem; right: 0.5rem"
      >
        <button class="btn">change</button>
      </nuxt-link>
    </div>

    <button class="btn btn--primary" @click="completeTransaction">order now</button>
  </div>
</template>

<script>
import PaymentData from "@/components/PaymentData.vue";
import PersonalizationData from "@/components/PersonalizationData.vue";
import DeliveryData from "@/components/DeliveryData.vue";
import ProgressIndicator from "@/components/ProgressIndicator.vue";

export default {
  components: {
    ProgressIndicator,
    PaymentData,
    DeliveryData,
    PersonalizationData,
  },
  methods: {
    completeTransaction: function () {
      const transactionId = Math.ceil(Math.random() * 100000);
      console.log("completing order: ", transactionId);
      window.localStorage.setItem("summary", transactionId);

      // // finish tim's wonder button
      try{
        twb.trackSaviour(transactionId);
      } catch(e) {
        console.error(e);
      }

      this.$router.push({ path: "/checkout/confirmation" });
    },
  },
};
</script>

<style>
</style>
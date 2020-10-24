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

    <div class="error" v-if="error">
      {{ error }}
    </div>

    <div class="grid__container--2c">
      <span></span>
      <button
        class="btn"
        :class="[loading ? 'btn--disabled' : 'btn--primary']"
        @click="completeTransaction"
      >
        order now
      </button>
    </div>
  </div>
</template>

<script>
import PaymentData from '@/components/PaymentData.vue';
import PersonalizationData from '@/components/PersonalizationData.vue';
import DeliveryData from '@/components/DeliveryData.vue';
import ProgressIndicator from '@/components/ProgressIndicator.vue';

export default {
  data() {
    return {
      error: null,
      loading: false
    };
  },
  components: {
    ProgressIndicator,
    PaymentData,
    DeliveryData,
    PersonalizationData
  },
  methods: {
    async getTransactionId() {
      const tidUrl =
        'https://peaceful-wiles-7eb948.netlify.app/.netlify/functions/getFriendlyHash';
      const now = new Date().getTime();
      const tid = await this.$axios.$get(`${tidUrl}?inputSeed=${now}`);
      return tid;
    },
    async completeTransaction() {
      this.loading = true;
      let transactionId = 'failed to retrieve transaction ID';
      try {
        transactionId = await this.getTransactionId();
        console.log('completing order: ', transactionId);
        window.localStorage.setItem('summary', transactionId);
        this.$router.push({ path: '/checkout/confirmation' });
      } catch (e) {
        console.error(e);
      }
      this.loading = false;
    }
  }
};
</script>

<style></style>

<template>
  <div>
    <div
      class="card__container"
      :class="
        payment
          ? 'payment-container--' + payment
          : ''
      "
    >
      <h2 v-if="editable">how do you wish to pay?</h2>
      <!-- START: editable payment provider -->
      <div class="grid__container--2c" v-if="editable">
        <div
          v-for="paymentProvider in allPaymentProviders"
          :key="paymentProvider"
        >
          <div
            class="payment-container btn is-dark is-mini"
            :class="'payment-container--' + paymentProvider"
            @click="toggleSelected(paymentProvider)"
          >
            <div
              class="payment-container__image"
              :style="
                'background-image: url(/logos/' + paymentProvider + '.svg)'
              "
            ></div>
          </div>
        </div>
      </div>
      <!-- END: editable payment provider -->

      <!-- START: payment provider for invoice  -->
      <div v-if="selectedPaymentProviderType == 'invoice'">
        <div class="grid__container--2c">
          please transfer the money to:
          <code>
            tururu GmbH<br />
            DE-XXXXXXXXX-30<br />
            BYLDEM1001<br />
          </code>
        </div>
      </div>
      <!-- END: payment provider for invoice  -->
      <!-- START: payment provider for paypal  -->
      <div v-else-if="selectedPaymentProviderType == 'paypal'">
        paypal is not ready as payment yet :(
      </div>
      <!-- END: payment provider for paypal  -->

      <!-- START: fallback before payment provider selection  -->
      <div v-else>select one of the payment provider above to proceed</div>
      <!-- END: fallback before payment provider selection  -->
    </div>
    <div class="grid__container--2c" v-if="editable">
      <nuxt-link to="/checkout/delivery">
        <button class="btn">go back</button>
      </nuxt-link>
      <nuxt-link to="/checkout/summary">
        <button class="btn btn--primary">summarize</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editable: Boolean,
  },
  data() {
    return {
      storageKey: "payment",
      errors: [],
      invoice: ["invoice"],
      creditCardProviders: [],
      payPalProvider: ["paypal"],
      payment: "invoice",
    };
  },
  computed: {
    allPaymentProviders: function () {
      if (this.invoice && this.payPalProvider) {
        return [...this.invoice, ...this.payPalProvider];
      }
    },
    selectedPaymentProviderType: function () {
      if (this.invoice.includes(this.payment)) {
        return "invoice";
      } else if (this.payPalProvider.includes(this.payment)) {
        return "paypal";
      }
    },
  },
  methods: {
    toggleSelected: function (paymentProvider) {
      this.payment = paymentProvider;
    },
    getPaymentType: function (paymentProvider) {
      if (this.payPalProvider.includes(paymentProvider)) {
        return "paypal";
      }
      return "invoice";
    },
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
      localStorage.setItem(this.storageKey, this[this.storageKey]);
    } catch (e) {
      console.error("error setting data to localstorage", e);
    }
  },
};
</script>

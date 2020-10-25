<template>
  <div>
    <div class="card__container">
      <h2>Thank you, {{ delivery.firstName }}, for supporting world peace</h2>
      <h4>
        Your order ID is : <code>{{ transactionId }}</code>
      </h4>
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
      transactionId: null,
      delivery: {
        firstName: '',
        lastName: '',
        street: '',
        zipCode: '',
        city: '',
        country: ''
      }
    };
  },
  mounted() {
    try {
      const deliveryData = JSON.parse(localStorage.getItem('delivery'));

      if (deliveryData) {
        this.delivery = deliveryData;
      }
      
      const transactionId = localStorage.getItem('summary');
      if (transactionId) {
        this.transactionId = transactionId;
      }
    } catch (e) {
      console.error('error getting data from localstorage', e);
    }
  }
};
</script>

<style></style>

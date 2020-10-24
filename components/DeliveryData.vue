<template>
  <div>
    <div class="card__container">
      <span v-if="editable">
        <h2>where do you want us to send it?</h2>
        <p>Put here either your address or the address of whoever you want the tururu to receive.</p>
      </span>
      <div class="txt-is-error" v-if="errors.length">
        please check the fields highlighted in red beore proceeding
      </div>
      <div class="grid__container--2c">
        <label for="firstName">first name</label>
        <input
          class="input__field"
          :class="errors.includes('firstName') ? 'input__field--error' : ''"
          :disabled="!editable"
          type="text"
          id="firstName"
          placeholder="John"
          v-model="delivery.firstName"
        />
      </div>
      <div class="grid__container--2c">
        <label for="lastName">last name</label>
        <input
          :class="errors.includes('lastName') ? 'input__field--error' : ''"
          class="input__field"
          :disabled="!editable"
          type="text"
          id="lastName"
          placeholder="Doe"
          v-model="delivery.lastName"
        />
      </div>
      <div class="grid__container--2c">
        <label for="street">street</label>
        <input
          class="input__field"
          :class="errors.includes('street') ? 'input__field--error' : ''"
          :disabled="!editable"
          type="text"
          id="street"
          placeholder="tururu lane 123"
          v-model="delivery.street"
        />
      </div>
      <div class="grid__container--2c">
        <label for="zipCode">ZIP Code</label>
        <input
          class="input__field"
          :class="errors.includes('zipCode') ? 'input__field--error' : ''"
          :disabled="!editable"
          type="text"
          id="zipCode"
          placeholder="ABC 123"
          v-model="delivery.zipCode"
        />
      </div>
      <div class="grid__container--2c">
        <label for="city">city</label>
        <input
          class="input__field"
          :class="errors.includes('city') ? 'input__field--error' : ''"
          :disabled="!editable"
          type="text"
          id="city"
          placeholder="Honolulu"
          v-model="delivery.city"
        />
      </div>
      <div class="grid__container--2c">
        <label for="country">country</label>
        <input
          class="input__field"
          :class="errors.includes('country') ? 'input__field--error' : ''"
          :disabled="!editable"
          type="text"
          id="country"
          placeholder="Hawaii, USA"
          v-model="delivery.country"
        />
      </div>
    </div>
    <div v-if="editable" class="grid__container--2c">
      <nuxt-link to="/checkout/personalization">
        <button class="btn">go back</button>
      </nuxt-link>
      <button class="btn btn--primary" @click="checkForward">next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editable: { type: Boolean, default: true },
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

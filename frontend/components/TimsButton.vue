<template>
  <div class="tims-button__container">
    <h3>Tim's Buttom</h3>
    <div>
      <input type="checkbox" id="freeReturnCheckbox" />
      <label for="freeReturnCheckbox"
        >I want to give away my right for free shipping. Instead this website
        will donate X EUR to a good cause.</label
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: undefined,
    };
  },
};
</script>

<style lang="scss">
.tims-button {
  &__container {
    position: absolute;
    bottom: 10%;
    right: 10%;
    background: darkgreen;
    max-width: 10rem;
    padding: 0.5rem;
    margin: 2rem;
  }
}
</style>
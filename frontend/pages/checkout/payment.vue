<template>
  <div>
    <ProgressIndicator />
    <PaymentData :editable="true"></PaymentData>
  </div>
</template>

<script>
import PaymentData from '@/components/PaymentData.vue'
import ProgressIndicator from '@/components/ProgressIndicator.vue'

export default {
  components: {
    ProgressIndicator,
    PaymentData,
  }
}
</script>

<style>
</style>
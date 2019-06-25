<template>
  <div class="wrapper">
    <vHead></vHead>
    <router-view/>
    <vFoot></vFoot>
  </div>
</template>

<script>
import vHead from "./components/common/header.vue";
import vFoot from "./components/common/footer.vue";
export default {
  name: 'App',
    components: {
    vHead,
    vFoot
  }
}
</script>

<style>
</style>

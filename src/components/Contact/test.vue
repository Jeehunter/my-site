<template>
  <div class="contact-container">
    <Contact size="300" />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style scoped>

.contact-container{
    height: 400px;
    width: 400px;
}
</style>
<template>
  <div>
    <a :href="blogUrl">
      <div><img :src="imgUrl" /></div>
      <div>{{ summary }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    blogUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
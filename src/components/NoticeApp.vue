<template>
  <p :class="class"><slot /></p>
</template>

<script>
export default {
  name: "NoticeApp",
  props: {
    class: {
      type: String,
    },
  },
};
</script>

<style>
</style>
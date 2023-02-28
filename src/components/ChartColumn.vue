<template>
  <div class="chart__strip ms-2" :style="style"></div>
</template>

<script>
export default {
  name: "ChartColumn",
  props: {
    percent: {
      type: Number,
    },
    style: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.chart {
  &__strip {
    height: 5px;
    width: 20px;
    background-color: #7431f9;
  }
}
</style>
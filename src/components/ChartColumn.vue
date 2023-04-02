<template>
  <div class="chart__strip ms-2 rounded" :style="style"></div>
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
    width: 5px;
    background-color: #7431f9;
  }
}
</style>
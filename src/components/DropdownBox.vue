<template>
  <div class="my-5 dropdown">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h5 class="p-2">{{ currentStateTicker.name + " -  USD" }}</h5>
      <ButtonsApp
        size="md"
        class="bg-transparent border border-0"
        @click="$emit('close')"
        ><img
          class="dropdown__btn-image"
          src="https://img.icons8.com/sf-ultralight/512/close-window.png"
        />
      </ButtonsApp>
    </div>
    <div class="dropdown__box d-flex justify-content-start align-items-end">
      <ChartColumn
        v-for="(percent, index) in calcPercents()"
        :key="index"
        :style="{ height: `${percent}%` }"
      />
    </div>
  </div>
</template>

<script>
import ButtonsApp from "../components/ButtonsApp.vue";
import ChartColumn from "../components/ChartColumn.vue";

export default {
  name: "DropdownBox",
  components: {
    ButtonsApp,
    ChartColumn,
  },
  props: {
    currentStateTicker: {
      type: Object,
    },
    percents: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    calcPercents() {
      if (this.percents.length < 2) {
        return [];
      }
      const min = Math.min(...this.percents); //макс значение процентов в графике
      const max = Math.max(...this.percents); //мин значение процентов в графике
      const result = this.percents.map((value) => 5 + (value / max) * 95);

      return result;
    },
  },
  emits: ["close"],
};
</script>

<style lang="scss" scoped>
.dropdown {
  // Array(100)
  //       .fill()
  //       .map((e, i) => i + 1)
  //  const result = this.percents.map(
  //       (item) => (5 * (item - min) * 95) / (max - min)
  //     );
  //     debugger;
  //     return result;
  &__box {
    border-bottom: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
    height: 250px;
    width: 90%;
  }
  &__btn-image {
    width: 25px;
    height: 25px;
    margin: 2px;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid rgba(114, 46, 248, 0.2);
      border-radius: 2px;
      box-shadow: 0 5px 5px -5px rgba(114, 46, 248, 0.9);
    }
  }
}
</style>
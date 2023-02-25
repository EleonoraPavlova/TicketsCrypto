<template>
  <div
    class="ticket d-flex flex-column justify-content-center"
    :tickers="tickers"
  >
    <InputApp
      class="border border-0 bg-transparent"
      type="text"
      v-model="nameTicker"
      :disabled="true"
    />

    <InputApp
      class="border border-0 bg-transparent"
      type="number"
      v-model="rate"
      :disabled="true"
    />

    <ButtonsApp color="white ticket__btn">
      <img
        class="ticket__image"
        src="https://img.icons8.com/dotty/80/null/trash.png"
        alt="trash"
      />
      <span class="p-1">Delete</span>
    </ButtonsApp>
  </div>
</template>

<script>
import ButtonsApp from "../components/ButtonsApp.vue";
import InputApp from "../components/InputApp.vue";

export default {
  name: "TicketApp",
  components: {
    ButtonsApp,
    InputApp,
  },
  props: {
    tickers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      nameTicker: "",
      rate: "",
    };
  },
};
</script>


<style lang="scss" scoped>
.ticket {
  width: 250px;
  border: 3px solid transparent;
  &__image {
    width: 25px;
    height: 25px;
  }
  &__btn {
    &:hover {
      border: 1px solid rgb(128, 128, 128, 0.2);
      box-shadow: 0 5px 5px -5px rgba(114, 46, 248, 0.9);
    }
  }
}
</style>
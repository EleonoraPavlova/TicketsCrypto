<template>
  <div class="ticket d-flex flex-column justify-content-center">
    <InputApp
      class="border border-0 bg-transparent text-center mb-3"
      type="text"
      v-model="t.name"
      :disabled="true"
    />

    <InputApp
      class="border border-0 bg-transparent text-center mb-3 dt lh-lg"
      type="number"
      v-model="t.price"
      :disabled="true"
    />

    <ButtonsApp color="white ticket__btn" @click="$emit('handleDelete')">
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
    t: {
      type: Object,
    },
  },
  data() {
    return {
      nameTicker: "",
      rate: "",
    };
  },
  emits: ["handleDelete"],
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

// <div class="border border-0 bg-transparent text-dark" type="text">
//   {{ t.name + " USD" }}
// </div>

// <div class="border border-0 bg-transparent text-dark" type="number">
//   {{ t.price }}
// </div>
</style>
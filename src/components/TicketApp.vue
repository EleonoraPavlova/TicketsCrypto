<template>
  <div class="ticket d-flex flex-column justify-content-center">
    <div class="border border-0 bg-transparent text-center mb-3" type="text">
      {{ t.name + " -  USD" }}
    </div>

    <div
      class="border border-0 bg-transparent text-center mb-3 fs-2"
      type="number"
    >
      {{ t.price }}
    </div>

    <ButtonsApp color="white ticket__btn" @click="$emit('handleDelete')">
      <img
        class="ticket__image"
        src="https://img.icons8.com/dotty/80/null/trash.png"
        alt="trash"
      />
      <span class="p-1">Delete</span>
    </ButtonsApp>
    <div>
      <NoticeApp class="text-danger m-0 ticket__updates" v-if="t.noUpdates"
        >No updates</NoticeApp
      >
    </div>
  </div>
</template>

<script>
import ButtonsApp from "../components/ButtonsApp.vue";
import NoticeApp from "../components/NoticeApp.vue";

export default {
  name: "TicketApp",
  components: {
    ButtonsApp,
    NoticeApp,
  },
  props: {
    t: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  emits: ["handleDelete"],
};
</script>


<style lang="scss" scoped>
.ticket {
  cursor: pointer;
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
  &__updates {
    line-height: 1;
  }
}
</style>
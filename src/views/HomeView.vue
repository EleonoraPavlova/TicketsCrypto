<template>
  <div class="home">
    <div>
      <div class="d-flex justify-content-end align-items-center p-2">
        <img
          alt="logo"
          class="home__logo"
          src="https://www.cryptocompare.com/media/35651259/logowbg.png"
        />
      </div>
      <div class="d-flex flex-column justify-content-start mb-4">
        <InputApp class="mb-2" />
        <div class="d-flex justify-content-start align-items-center">
          <ButtonsApp size="md" class="home__btn rounded-pill"
            ><img
              class="home__btn-image"
              src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"
            /><span class="fw-semibold p-2">Add</span>
          </ButtonsApp>
        </div>
      </div>
    </div>
    <div>
      <hr />
      <hr />
    </div>
  </div>
</template>

<script>
import InputApp from "../components/InputApp.vue";
import ButtonsApp from "../components/ButtonsApp.vue";

export default {
  name: "HomeView",
  components: {
    InputApp,
    ButtonsApp,
  },
};
</script>

<style scoped lang="scss">
.home {
  &__logo {
    width: 186px;
    height: 27px;
  }
  &__btn-image {
    width: 24px;
    height: 24px;
  }
  &__btn {
    width: 186px;
    background-color: #7431f9;
    border-color: #7431f9;
    &:hover {
      box-shadow: 0 5px 5px -5px rgba(114, 46, 248, 0.9);
    }
  }
}
</style>

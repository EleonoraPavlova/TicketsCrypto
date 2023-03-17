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
        <div class="d-flex justify-content-start">
          <div class="d-flex flex-column mb-2">
            <InputApp
              type="text"
              id="input"
              name="entry"
              :placeholder="placeholder"
              v-model.trim="ticker"
              @keydown.enter="add"
              class="home__input border border-success border-opacity-50 rounded mb-3"
              :class="{
                error: hasError,
              }"
            >
              <label for="input" class="fw-semibold m-1">Ticket</label>
            </InputApp>
          </div>
        </div>
        <div class="d-flex justify-content-start align-items-center">
          <ButtonsApp size="md" class="home__btn rounded-pill" @click="add"
            ><img
              class="home__btn-image"
              src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"
            /><span class="fw-semibold p-2"> Add </span>
          </ButtonsApp>
        </div>
      </div>
    </div>
    <template v-if="tickers.length">
      <hr class="m-4" />
      <div class="d-flex align-items-center flex-wrap justify-content-center">
        <TicketApp
          v-for="t in tickers"
          :key="t"
          :t="t"
          :class="{
            active: currentStateTicker === t,
          }"
          class="p-5 pb-3 m-4 home__ticket"
          @handleDelete="handleDelete(t)"
          @click.self="select(t)"
        />
      </div>
      <hr class="m-3" />
      <div v-if="currentStateTicker">
        <DropdownBox
          @close="currentStateTicker = null"
          :currentStateTicker="currentStateTicker"
          :percents="percents"
        />
      </div>
    </template>
    <div v-else>
      <h6 class="fw-semibold home__h6">You have not added any tickers yet</h6>
    </div>
  </div>
</template>

<script>
import InputApp from "../components/InputApp.vue";
import ButtonsApp from "../components/ButtonsApp.vue";
import TicketApp from "../components/TicketApp.vue";
import DropdownBox from "../components/DropdownBox.vue";

export default {
  name: "HomeView",
  components: {
    InputApp,
    ButtonsApp,
    TicketApp,
    DropdownBox,
  },
  data() {
    return {
      placeholder: "Example: DOGE",
      ticker: "",
      tickers: [],
      currentStateTicker: null,
      hasError: false,
      percents: [], //график состояния, который меняется
    };
  },
  methods: {
    add() {
      if (this.ticker === null || this.ticker.length <= 2) {
        this.ticker = "";
        this.placeholder = "Enter valid value";
        this.hasError = true;
        return;
      } else {
        this.hasError = false;
      }
      const currentTicker = {
        name: this.ticker.toUpperCase(),
        price: 0,
      };
      this.tickers.push(currentTicker);
      setInterval(async () => {
        const f = await fetch();
        //  `https://min-api.cryptocompare.com/data/price?fsym=${currentTicker.name}&tsyms=USD&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a`
        const data = await f.json();

        //нашли в массиве тикеров конкретный билет и присвоили, т.е обновили данные
        let find = this.tickers.find((el) => el.name === currentTicker.name);
        find.price =
          data.USD > 1 ? data.USD.toFixed(2) : data.USD.toPrecision(2);
        currentTicker.price = data.USD;

        //пушим в массив графиков
        if (this.currentStateTicker?.name === currentTicker.name) {
          this.percents.push(data.USD);
        }
      }, 9000);
      this.ticker = "";
      console.log(this.tickers);
    },
    handleDelete(tickerToRemove) {
      this.tickers = this.tickers.filter((t) => t !== tickerToRemove);
    },
    select(t) {
      this.currentStateTicker = t;
      this.percents = [];
    },

    // onClick(event) {
    //   event.stopPropagation();
    //   console.log(event);
    // },
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__logo {
    width: 186px;
    height: 27px;
  }
  &__btn-image {
    width: 24px;
    height: 24px;
  }
  &__input {
    width: 186px !important;
    &:hover {
      border: 1px solid green;
      opacity: 0.9 !important;
    }
  }
  &__btn {
    width: 186px;
    background-color: #7431f9;
    border-color: #7431f9;
    &:hover {
      box-shadow: 0 5px 5px -5px rgba(114, 46, 248, 0.9);
    }
  }
  &__ticket {
    &:hover {
      border: 3px solid #7431f9;
      border-radius: 10px;
    }
  }
  &__h6 {
    color: #7431f9;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
  }
}
.active {
  border: 3px solid #7431f9;
  border-radius: 10px;
}
</style>

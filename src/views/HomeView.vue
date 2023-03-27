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
      <div class="d-flex flex-column justify-content-start">
        <div class="d-flex justify-content-start">
          <div class="d-flex flex-column mb-2">
            <InputApp
              type="text"
              id="input"
              name="entry"
              :placeholder="placeholder"
              v-model.trim="ticker"
              @keydown.enter="add"
              class="home__input border border-success border-opacity-50 rounded"
              :class="{
                error: hasError,
              }"
            >
              <label for="input" class="fw-semibold m-1">Ticket</label>
            </InputApp>
            <div
              v-if="ticker.length != 0"
              class="mb-3 d-flex justify-content-start align-items-center m-1"
            >
              <div
                v-for="fourCoin in fourCoins"
                :key="fourCoin"
                class="mx-1"
                @click="addLabel(fourCoin)"
              >
                <div
                  class="home__hints bg-secondary bg-gradient p-1 text-white fw-lighter lh-1 font-size-small"
                >
                  {{ fourCoin }}
                </div>
              </div>
            </div>
            <NoticeApp v-if="isAddedTicker" class="text-danger"
              >This ticker has already been added</NoticeApp
            >
          </div>
        </div>
        <div class="d-flex justify-content-start align-items-center">
          <ButtonsApp size="md" class="home__btn rounded-pill" @click="add"
            ><img
              class="home__btn-image"
              src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/FFFEFE/external-add-marketplace-outline-creatype-outline-colourcreatype.png"
            /><span class="fw-semibold p-2 text-white"> Add </span>
          </ButtonsApp>
        </div>
      </div>
    </div>
    <template v-if="tickers.length">
      <div class="d-flex align-items-center justify-content-end">
        <div class="d-flex align-items-center">
          <p class="m-2">Filter:</p>
          <InputApp
            v-model.trim="filter"
            class="home__filter-input rounded"
          ></InputApp>
        </div>
        <div>
          <ButtonsApp
            size="xs"
            class="home__filter-btn fontsizeSmall"
            @click="prevPage"
            :disabled="page === 1"
          >
            Prev
          </ButtonsApp>
          <ButtonsApp
            size="xs"
            class="home__filter-btn fontsizeSmall ml-2"
            @click="nextPage"
            :disabled="
              page * limit > filteredTickers.length ||
              filteredTickers.length === limit
            "
          >
            Next
          </ButtonsApp>
        </div>
      </div>
      <hr class="m-3" />
      <div class="d-flex align-items-center flex-wrap justify-content-center">
        <TicketApp
          v-for="t in splicedTickers"
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
      <NoticeApp class="fw-semibold home__h6" v-if="!filteredTickers.length"
        >Tickers on this filter were not found</NoticeApp
      >
      <hr class="m-3" />
      <div v-if="currentStateTicker">
        <DropdownBox
          @close="currentStateTicker = null"
          :currentStateTicker="currentStateTicker"
          :percents="percents"
        />
      </div>
    </template>
    <div v-else-if="isShow">
      <h6 class="fw-semibold home__h6">You have not added any tickers yet</h6>
    </div>
  </div>
</template>

<script>
import InputApp from "../components/InputApp.vue";
import ButtonsApp from "../components/ButtonsApp.vue";
import TicketApp from "../components/TicketApp.vue";
import DropdownBox from "../components/DropdownBox.vue";
import NoticeApp from "../components/NoticeApp.vue";

export default {
  name: "HomeView",
  components: {
    InputApp,
    ButtonsApp,
    TicketApp,
    DropdownBox,
    NoticeApp,
  },
  data() {
    return {
      placeholder: "Example: DOGE",
      ticker: "",
      tickers: [],
      coin: "",
      coins: [],
      fourCoin: "",
      fourCoins: [], //массив из 4 label(подсказки)
      currentStateTicker: null,
      hasError: false,
      percents: [], //график состояния, который меняется
      isAddedTicker: false,
      isShow: false,
      fetchInterval: null,
      currentTicker: {},
      page: this.$route.query.page || 1, //текущая страница
      limit: 8,
      filter: this.$route.query.filter || "",
    };
  },
  created() {
    this.getCoinList();
    const tickersData = localStorage.getItem("cryptomicon-list");
    if (tickersData != null) {
      this.tickers = JSON.parse(tickersData); //cтрока в объект json
      this.tickers.forEach((item) => {
        this.subscribeToUpdates(item.name);
      });
    }
  },
  methods: {
    add() {
      if (
        this.tickers.find((item) => item.name === this.ticker.toUpperCase())
      ) {
        this.isAddedTicker = true;
        return;
      }
      if (this.ticker === null || this.ticker.length < 1) {
        this.ticker = "";
        this.placeholder = "Enter valid value";
        this.hasError = true;
        debugger;
        return;
      } else {
        this.hasError = false;
      }

      this.currentTicker = {
        name: this.ticker.toUpperCase(),
        price: "-",
      };
      //добавляю тикер в массив тикеров(и обновляю его[...])
      this.tickers = [...this.tickers, this.currentTicker];

      this.filter = "";

      this.subscribeToUpdates(this.currentTicker.name);

      this.ticker = "";
    },
    subscribeToUpdates(tickerName) {
      //обновления ticker после перезагрузки localStorage
      this.fetchInterval = setInterval(async () => {
        const f = await fetch(
          `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a`
        );
        const data = await f.json();

        //нашли в массиве тикеров конкретный билет и присвоили, т.е обновили данные
        let find = this.tickers.find((el) => el.name === tickerName);
        this.currentTicker.price = find.price =
          data.USD > 1 ? data.USD.toFixed(2) : data.USD.toPrecision(2);

        //пушим в массив графиков
        if (this.currentStateTicker?.name === tickerName) {
          this.percents.push(data.USD);
        }
      }, 9000);
    },
    handleDelete(tickerToRemove) {
      this.tickers = this.tickers.filter((t) => t !== tickerToRemove);
      this.currentStateTicker = null;
      this.isShow = true;
      clearInterval(this.fetchInterval);
      localStorage.removeItem("cryptomicon-list");
      localStorage.setItem("cryptomicon-list", JSON.stringify(this.tickers));
    },
    select(t) {
      this.currentStateTicker = t;
    },
    filteredCoins() {
      //удовлетворяют условию поиска тикеров
      let filteredCoins = this.coins.filter((element) => {
        return element.startsWith(this.ticker.toUpperCase());
      });
      //режут постранично
      this.fourCoins = filteredCoins.splice(0, 4);
      return this.fourCoins;
    },
    addLabel(fourCoin) {
      this.ticker = fourCoin;
      this.add();
    },
    async getCoinList() {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/blockchain/list?&api_key=27e0b4ea632ec5912ec5902491a1c30f21df3e642da1c82bae4d773a7969ce8a"
        );
        const data = await response.json();
        this.coin = data.symbol;
        this.coins = Object.values(data.Data).map((item) => item.symbol);
      } catch (e) {
        console.log("there was an error");
      }
    },
    prevPage() {
      this.page = this.page - 1;
      this.$router.push({ query: { filter: this.filter, page: this.page } });
    },
    nextPage() {
      this.page = this.page + 1;
      this.$router.push({ query: { filter: this.filter, page: this.page } });
    },
  },
  watch: {
    "ticker.length"() {
      this.isAddedTicker = false;
      this.filteredCoins();
    },

    currentStateTicker() {
      this.percents = [];
    },

    tickers() {
      // в localStorage нужно только строковый формат записывать, поэтому JSON.stringify
      localStorage.setItem("cryptomicon-list", JSON.stringify(this.tickers)); //создали запись localStorage и потом ее нужно загрузить!обязательно
    },

    filter() {
      //отслеживаю состочние input-filter, чтобы сбрасывать на первую страницу тем самым обновляя значения фильтров массива
      this.page = 1;
      this.currentStateTicker = null;
    },

    splicedTickers() {
      if (this.splicedTickers.length === 0 && this.page > 1) {
        //возвращаемся на предыд страницу на шаг назад, если массив splicedTickers пуст
        this.page -= 1;
      }
    },
  },

  computed: {
    //computed никогда не нужно вызывать и нельзя давать аргумент!!!
    //отслеживает изменение-вычисление массива filteredTickers
    filteredTickers() {
      if (!this.tickers) {
        return [];
      }
      return this.tickers.filter((item) =>
        item.name.startsWith(this.filter.toUpperCase())
      );
    },
    splicedTickers() {
      const start = (this.page - 1) * this.limit;
      const end = this.limit * this.page;
      return [...this.filteredTickers].splice(start, end);
      //[...] деструктуризацией мы создаем новый массив
    },
  },
};
</script>

<style lang="scss">
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
    &:hover {
      border: 1px solid #7431f9 !important;
      opacity: 0.9 !important;
    }
  }
  &__btn {
    width: 186px;
    background-color: #7431f9 !important;
    border-color: #7431f9;
    &:hover {
      box-shadow: 0 5px 8px -4px rgba(114, 46, 248, 0.9) !important;
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
  &__hints {
    cursor: pointer;
    width: 57px;
    border-radius: 3px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  &__filter-btn {
    border: 1px solid #7431f9;
    &:hover {
      background-color: #7431f9;
      color: white;
    }
  }
  &__filter-input {
    border: 1px solid #7431f9 !important;
  }
}
.active {
  border: 3px solid #7431f9;
  border-radius: 10px;
}
.font-size-small {
  font-size: smaller;
}
</style>

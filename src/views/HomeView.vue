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
              @keydown.enter="add(index)"
              class="home__input border border-success border-opacity-50 rounded"
              :class="{
                error: hasError,
              }"
            >
              <label for="input" class="fw-semibold m-1">Ticket</label>
            </InputApp>
            <NoticeApp v-if="isNoNameInCoins" class="color-base"
              >Name of such ticker not found</NoticeApp
            >
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
          v-for="(t, index) in splicedTickers"
          :key="index"
          :t="t"
          :class="{
            active: currentTickerIndex === index,
          }"
          class="p-5 pb-3 m-4 home__ticket"
          @handleDelete="handleDelete(t)"
          @click.self="select(index)"
        />
      </div>
      <NoticeApp class="fw-semibold home__h6" v-if="!filteredTickers.length"
        >Tickers on this filter were not found</NoticeApp
      >
      <hr class="m-3" />
      <div v-if="tickers[currentTickerIndex]">
        <DropdownBox
          @close="currentTickerIndex = null"
          :currentTickerIndex="currentTickerIndex"
          :tickers="tickers"
          :percents="tickers[currentTickerIndex].percents"
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
import { getCoinsList } from "../api";
import { subscribeToTicker, unsubscribeFromTicker } from "../apiWs.js";
import { formatPrice } from "../formatPrice";

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
      hasError: false,
      percents: [], //график состояния, который меняется
      isAddedTicker: false,
      isNoNameInCoins: false,
      isShow: false,
      fetchInterval: null,
      currentTickerIndex: null,
      page: this.$route.query.page || 1, //текущая страница
      limit: 8,
      filter: this.$route.query.filter || "",
    };
  },
  created() {
    this.getCoinList();
    let tickersData = localStorage.getItem("cryptomicon-list");
    tickersData = JSON.parse(tickersData);
    if (tickersData != null) {
      this.tickers = tickersData.map((ticker) => {
        return {
          name: ticker,
          price: "-",
          percents: [],
          noUpdates: false,
        };
      });
      this.tickers.forEach((ticker) => {
        subscribeToTicker(ticker.name, (price) => {
          if (price === "NO_UPDATES") {
            ticker.price = null;
            ticker.noUpdates = true;
            return;
          }
          ticker.price = formatPrice(price);
          ticker.percents.push(price);
          console.log(ticker);
        });
      });
    }
  },
  methods: {
    add() {
      this.ticker = this.ticker.toUpperCase();
      if (this.tickers.find((item) => item.name === this.ticker)) {
        this.isAddedTicker = true;
        return;
      }
      if (this.ticker === null || this.ticker.length < 1) {
        this.ticker = "";
        this.placeholder = "Enter valid value";
        this.hasError = true;
        return;
      } else {
        this.hasError = false;
      }
      if (!this.coins.includes(this.ticker)) {
        this.isNoNameInCoins = true;
        return;
      }

      //добавляю тикер в массив тикеров
      this.tickers.push({
        name: this.ticker,
        price: "-",
        percents: [],
        noUpdates: false,
      });

      this.filter = "";
      this.ticker = "";

      const currentTicker = this.tickers[this.tickers.length - 1];

      subscribeToTicker(currentTicker.name, (price) => {
        if (price === "NO_UPDATES") {
          currentTicker.price = null;
          currentTicker.noUpdates = true;
          return;
        }
        currentTicker.price = formatPrice(price);

        return currentTicker.percents.push(currentTicker.price);
      });

      this.currentTickerIndex = null;
    },
    handleDelete(tickerToRemove) {
      this.tickers = this.tickers.filter((t) => t !== tickerToRemove);
      this.tickers[this.currentTickerIndex] = null;
      this.isShow = true;
      localStorage.removeItem("cryptomicon-list");
      localStorage.setItem(
        "cryptomicon-list",
        JSON.stringify(this.tickers.map((el) => el.name))
      );
      unsubscribeFromTicker(tickerToRemove.name);
    },
    select(index) {
      this.currentTickerIndex = index;
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
    addLabel(name) {
      this.ticker = name;
      this.add();
    },
    async getCoinList() {
      try {
        const dataCoin = await getCoinsList();
        this.coin = dataCoin.symbol;
        this.coins = Object.values(dataCoin.Data).map((item) => item.symbol);
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
    //поддержка price через ws
    priceNotFound(ticker) {
      if (ticker.price === "-") {
        ticker.noUpdates = true;
      } else {
        return ticker.price;
      }
    },
  },
  watch: {
    "ticker.length"() {
      this.isAddedTicker = false;
      this.isNoNameInCoins = false;
      this.filteredCoins();
    },
    currentTickerIndex() {
      this.percents = [];
    },
    "tickers.length"() {
      // в localStorage нужно только строковый формат записывать, поэтому JSON.stringify
      localStorage.setItem(
        "cryptomicon-list",
        JSON.stringify(
          this.tickers.map((el) => {
            return el.name;
          })
        )
      ); //создали запись localStorage и потом ее нужно загрузить!обязательно
    },

    filter() {
      //отслеживаю состочние input-filter, чтобы сбрасывать на первую страницу тем самым обновляя значения фильтров массива
      this.page = 1;
      this.$router.push({ query: { filter: this.filter } });
      this.currentTickerIndex = null;
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
      } else {
        return this.tickers.filter((item) =>
          item.name.startsWith(this.filter.toUpperCase())
        );
      }
    },
    splicedTickers() {
      const start = (this.page - 1) * this.limit;
      const end = this.limit * this.page;
      return [...this.filteredTickers].splice(start, end);
      //[...] деструктуризацией мы создаем новый массив
    },
  },
  // async updateTickers() {
  //   try {
  //     if (!this.tickers.length) {
  //       return;
  //     }
  //     //обновления ticker после перезагрузки localStorage
  //     //беру поле name у каждого тикера
  //     subscribeToTicker(
  //       this.tickers[this.currentTickerIndex].name,
  //       (price) => {
  //         this.tickers[this.currentTickerIndex].price = price;
  //         this.tickers[this.currentTickerIndex].percents.push(
  //           formatPrice(price)
  //         );
  //       }
  //     );
  //     // const dataTicker = await loadTickers(this.tickers.map((el) => el.name));
  //     // this.tickers.forEach((ticker) => {
  //     //   const price = dataTicker[ticker.name.toUpperCase()];
  //     //   ticker.price = formatPrice(price);

  //     //   //пушим в массив графиков
  //     //   if (this.tickers[this.currentTickerIndex]?.name === ticker.name) {
  //     //     this.percents.push(ticker.price);
  //     //   }
  //     //
  //     // });
  //     // //нашли в массиве тикеров конкретный билет и присвоили, т.е обновили данные
  //     // let find = this.tickers.find((el) => el.name === tickerName);
  //     // this.currentTickerIndex.price = find.price =
  //     //   dataTicker.USD > 1
  //     //     ? dataTicker.USD.toFixed(2)
  //     //     : dataTicker.USD.toPrecision(2);
  //   } catch {
  //     console.log("wrong");
  //   }
  // }
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
    &.active {
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

.font-size-small {
  font-size: smaller;
}
</style>

<template>
  <NavBar />
  <main class="listingPage">
    <h2>Buy product</h2>
    <div class="container-fluid">
      <div class="row">
        <!-- Image -->
        <div class="col-sm-3 text-center">
          <img :src="imgUrl" alt class="img-fluid" style="height: 216px" />
          <!-- </div> -->
        </div>
        <div class="col-sm-9">
          <div class="a-row a-spacing-small">
            <!-- Title and Date -->
            <h2 class="a-size-medium">
              {{ name }}
              <span class="a-letter-space"></span>
              <span class="a-letter-space"></span>
              <!-- <span class="a-size-small a-color-secondary">21 Décembre 2019</span> -->
            </h2>
          </div>
          <!-- Author's Name -->
          <div class="a-row a-spacing-small">
            <span class="a-size-small a-color-secondary">
              <a href="#" class="a-link-normal a-text-normal">{{
                description
              }}</a>
            </span>
          </div>
          <!-- Price -->
          <div class="a-row a-spacing-none">
            <a href="#" class="a-link-normal a-text-normal">
              <span class="a-offscreen">${{ price }}</span>
              <span class="a-color-base sx-zero-spacing">
                <span class="sx-price sx-price-large">
                  <sup class="sx-price-currency">${{ price }}</sup>
                  <!-- <sup class="sx-price-whole">{{product.price}}</sup> -->
                  <!-- <sup class="sx-price-fractional">00</sup> -->
                </span>
              </span>
            </a>

            <!-- <span class="a-letter-space"></span>
                        <span class="a-size-base-plus a-color-secondary a-text-strike">$90</span>-->
          </div>
          <div class="valueContainer">
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Quantidade</label>
              <input
                type="number"
                class="a-input-text"
                style="width: 60px"
                v-model="quantidade"
              />
            </div>
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Valor total</label>
              <h1>${{ quantidade * price }}</h1>
            </div>
          </div>
          <div class="a-row a-spacing-small">
            <span style="width: 50%" class="a-button-primary">
              <span class="a-button-inner">
                <span class="a-button-text" @click="onLogin">Comprar</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import useProduct from "@/hooks/useProduct.js";

export default {
  name: "BuyProduct",
  components: {
    NavBar,
  },
  data() {
    return {
      name: "",
      description: "",
      price: 0,
      imgUrl: "",
      idProduct: 0,
      quantidade: 0,
      valorTotal: this.quantidade * this.price,
    };
  },
  async mounted() {
    this.idProduct = location.pathname.split("/")[2];

    const product = await useProduct.getProductById(
      location.pathname.split("/")[2]
    );

    if (product) {
      console.log(product);
      this.name = product.name;
      this.description = product.description;
      this.price = product.price;
      this.imgUrl = product.imgUrl;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar:hover {
  color: #e47911;
}
@media screen and (max-width: 992px) {
  .side {
    display: none;
  }
}
.valueContainer {
  margin-top: 26px;
  display: flex;
  justify-content: center;
  gap: 16px;
}
</style>

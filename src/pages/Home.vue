<template>
  <NavBar />
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <SideBar />
        <!-- Main Content -->

        <div class="col-xl-10 col-lg-9 md-8 col-sm-8 containerProducts">
          <div class="mainResults">
            <ul class="s-result-list">
              <li
                class="s-result-item celwidget"
                v-for="product in products"
                :key="product.id"
              >
                <div>
                  <div class="row">
                    <!-- Image -->
                    <div class="col-sm-3 text-center">
                      <router-link :to="`/buy-product/${product.id}`">
                        <img
                          :src="product.imgUrl"
                          alt
                          class="img-fluid"
                          style="height: 216px"
                        />
                      </router-link>
                      <!-- </div> -->
                    </div>
                    <div class="col-sm-9">
                      <div class="a-row a-spacing-small">
                        <!-- Title and Date -->
                        <router-link
                          :to="`/buy-product/${product.id}`"
                          class="a-link-normal"
                        >
                          <h2 class="a-size-medium">
                            {{ product.name }}
                            <span class="a-letter-space"></span>
                            <span class="a-letter-space"></span>
                            <!-- <span class="a-size-small a-color-secondary">21 Décembre 2019</span> -->
                          </h2>
                        </router-link>
                      </div>
                      <!-- Author's Name -->
                      <div class="a-row a-spacing-small">
                        <span class="a-size-small a-color-secondary">
                          <a href="#" class="a-link-normal a-text-normal">{{
                            product.description
                          }}</a>
                        </span>
                      </div>
                      <!-- Price -->
                      <div class="a-row a-spacing-none">
                        <a href="#" class="a-link-normal a-text-normal">
                          <span class="a-offscreen">${{ product.price }}</span>
                          <span class="a-color-base sx-zero-spacing">
                            <span class="sx-price sx-price-large">
                              <sup class="sx-price-currency"
                                >${{ product.price }}</sup
                              >
                              <!-- <sup class="sx-price-whole">{{product.price}}</sup> -->
                              <!-- <sup class="sx-price-fractional">00</sup> -->
                            </span>
                          </span>
                        </a>

                        <!-- <span class="a-letter-space"></span>
                        <span class="a-size-base-plus a-color-secondary a-text-strike">$90</span>-->
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import useProduct from "@/hooks/useProduct";
import SideBar from "@/components/Sidebar.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    this.products = await useProduct.getAllProducts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  cursor: pointer;
}
.sidebar:hover {
  color: #e47911;
}
.mainResults img {
  width: 250px;
}
@media screen and (max-width: 992px) {
  .side {
    display: none;
  }
}
.containerProducts {
  margin-top: 24px;
}

.a-link-normal {
  text-decoration: none;
}
</style>

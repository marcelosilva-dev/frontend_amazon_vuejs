<template>
  <NavBar />
  <div class="buyProduct">
    <h1>BuyProduct</h1>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "BuyProduct",
  components: {
    NavBar,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
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
</style>

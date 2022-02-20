<template>
  <div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
      <div class="container-fluid desktop-nav">
        <div class="row">
          <!-- Logo -->
          <div class="col-sm-2">
            <div class="logo-area">
              <router-link to="/">
                <img src="../assets/logo.png" alt="logo" class="img-fluid" />
              </router-link>
            </div>
          </div>
          <!-- Search Bar -->
          <div class="col-sm-6 pt-0">
            <SearchComp />
          </div>
          <div class="col-sm-4"></div>
        </div>
        <div class="row">
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
            <div class="nav-global-location">
              <router-link to="/addresses" class="nav-a nav-a-2">
                <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                <div id="glow-ingress-block">
                  <span class="nav-line-1" id="glow-ingress-line1 "
                    >Deliver to</span
                  >
                  <!-- <span class="nav-line-2" id="glow-ingress-line2">
                    {{
                    $auth.$state.user.address.country
                    }}
                  </span>-->
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
            <div class="nav-fill">
              <div class="nav-shop">
                <router-link
                  to="/history"
                  class="nav-a nav-a-2 nav-single-row-link"
                >
                  <span class="nav-line-2">
                    Browsing History
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </router-link>
              </div>
              <div class="nav-xshop-container">
                <div class="nav-xshop">
                  <a href="#" class="nav-a">Today Deals</a>
                  <a href="#" class="nav-a">Help</a>
                  <a href="#" class="nav-a">Registry</a>
                  <a href="#" class="nav-a">Gift cards</a>
                  <a href="#" class="nav-a">Sell</a>
                  <a href="#" class="nav-a">Your amazon.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
            <div class="nav-tools">
              <a
                href="#"
                id="icp-nav-flyout"
                class="nav-a nav-a-2 icp-link-style-2"
              >
                <span class="acp-nav-link-inner">
                  <span class="nav-line-1">
                    <span class="icp-nav-globe-img-2"></span>
                    <span class="icp-nav-language">EN</span>
                  </span>
                  <span class="nav-line-2">
                    &nbsp;
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </span>
              </a>
              <span class="icp-nav-link-border"></span>
              <template v-if="loggedIn">
                <router-link
                  :to="`/profile/${id}`"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Hello,</span>
                  <span class="nav-line-2">{{ name }}</span>
                </router-link>
              </template>
              <template v-else>
                <router-link
                  to="/login"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Hello, Sign in</span>
                  <span class="nav-line-2">
                    Account &amp; Lists
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </router-link>
              </template>
              <router-link
                to="/orders"
                class="nav-a nav-a-2 nav-single-row-link"
              >
                <span class="nav-line-1"></span>
                <span class="nav-line-2">Orders</span>
              </router-link>
              <router-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2">Cart</span>
                <span class="nav-cart-icon nav-sprite"></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import SearchComp from "@/components/Search.vue";
import useLocalStorage from "@/hooks/useLocalStorage";

export default {
  name: "NavBar",
  components: {
    SearchComp,
  },
  async mounted() {
    if (!this.$store.state.loggedIn) {
      const user = await useLocalStorage.getItem("@AmazonVue:store");

      if (user) {
        await this.$store.dispatch("signIn", user);
      }
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    name() {
      return this.$store.state.name;
    },
    id() {
      return this.$store.state.id;
    },
  },
};
</script>

<style>
/***********************
        HEADER
***********************/
header {
  background-color: #232f3e;
  padding-top: 11px;
  padding-bottom: 4px;
}
header .logo-area {
  padding-top: 2px !important;
  padding-left: 12px;
}
header .logo-area img {
  width: 100px;
}
header form input {
  border: none !important;
}

#compute_select {
  display: none;
}

.nav-sprite {
  background-image: url("../assets/globalImg.png");
  background-position: 0 1000px;
  background-repeat: repeat-x;
}
.nav-global-location {
  margin-top: 5px;
}
.nav-global-location .nav-a {
  line-height: 44px;
  height: 44px;
  position: relative;
  float: left;
  top: 1px;
  padding: 0 0 0 12px;
}
.nav-global-location .nav-a:hover {
  border: 1px solid;
  border-radius: 2px;
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
  margin: 0;
  height: 44px;
}
.nav-global-location .nav-a-2 {
  padding-right: 0;
  overflow: hidden;
  top: 1px;
  border: 1px solid transparent;
  display: inline-block;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.nav-global-location #nav-packard-glow-loc-icon {
  position: absolute;
  width: 22px;
  height: 22px;
  background-position: -68px -340px;
  left: 4px;
  top: 13px;
}
.nav-global-location #glow-ingress-block {
  margin-left: 17px;
}
.nav-a-2 .nav-line-1,
.nav-a-2 .nav-line-2 {
  color: #fff;
}
.nav-global-location .nav-a-2 .nav-line-1,
.nav-global-location .nav-a-2 .nav-line-2 {
  float: left;
  clear: both;
  display: inline-block;
  white-space: nowrap;
  padding-right: 11px;
  font-family: arial, sans-serif;
}
.nav-global-location .nav-a-2 .nav-line-1 {
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  font-weight: 400;
  margin-top: 9px;
}
.nav-global-location .nav-a-2 .nav-line-2 {
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  padding-bottom: 5px;
}

.nav-fill .nav-shop {
  padding-right: 7px;
}
.nav-fill .nav-shop {
  padding: 6px 7px 0 0;
  width: auto;
  float: left;
  text-decoration: none;
  margin-top: 2px;
}
.nav-shop .nav-single-row-link {
  margin-top: 14px !important;
}
.nav-shop .nav-a-2 {
  padding-right: 0;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.nav-shop .nav-a {
  position: relative;
  float: left;
  top: 1px;
  border: 1px solid transparent;
}
.nav-shop .nav-a:hover {
  border: 1px solid;
  border-radius: 2px;
  border-color: rgba(255, 255, 255, 0.2);
}
.nav-shop .nav-a-2 .nav-line-2 {
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  padding-bottom: 5px;
}
.nav-shop .nav-a-2 .nav-line-2 {
  float: left;
  clear: both;
  display: inline-block;
  white-space: nowrap;
  padding: 5px 12px 5px 13px;
  font-family: arial, sans-serif;
}
.nav-icon.nav-arrow {
  border-top-color: #a7acb2 !important;
}
.nav-shop .nav-a-2 .nav-line-2 .nav-icon {
  display: inline-block;
  border-style: solid;
  border-width: 4px;
  border-color: transparent;
  border-top: 4px solid #606060;
  border-bottom-width: 0;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  margin: 0 0 2px 5px;
  /*visibility: hidden;*/
}

.nav-xshop-container {
  position: static;
  float: none;
  padding: 2px 0 0 0;
  z-index: 20;
}
.nav-xshop {
  margin-top: 21px;
}
.nav-xshop .nav-a {
  padding: 5px 8px 5px 8px;
  margin: 1px 1px 12px 1px;
  color: #ccc;
  text-decoration: none;
  font-family: arial, sans-serif;
  font-size: 13px;
}
.nav-xshop .nav-a:hover {
  border: 1px solid;
  border-radius: 2px;
  text-decoration: none;
  margin: 0 0px 10px 0;
  border-color: rgba(255, 255, 255, 0.2);
}
@media (max-width: 1215px) {
  .nav-xshop a:nth-child(6) {
    display: none;
  }
}
@media (max-width: 1199px) {
  .nav-xshop a:nth-child(5) {
    display: none;
  }
}
@media (max-width: 1185px) {
  .nav-xshop a:nth-child(4) {
    display: none;
  }
}
@media (max-width: 1068px) {
  .nav-xshop a:nth-child(3) {
    display: none;
  }
}
@media (max-width: 991px) {
  .nav-xshop a:nth-child(2) {
    display: none;
  }
}

.nav-tools {
  float: left;
  padding: 6px 7px 0 29px;
  text-decoration: none;
  margin-top: 0px;
}
.nav-tools .nav-a-2 {
  padding-right: 0;
  overflow: hidden;
  top: 1px;
  margin: 0 1px;
  display: inline-block;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.nav-tools .nav-a {
  position: relative;
  float: left;
  top: 1px;
  padding: 0 0 0 9px;
  line-height: 44px;
  height: 44px;
}
.icp-nav-link-inner {
  padding-right: 13px;
  margin-left: -16px;
  display: inline-block !important;
}
.nav-tools .nav-a-2 .nav-line-1 {
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  font-weight: 400;
  margin-top: 9px;
  color: #ccc;
}
.nav-tools .nav-a-2 .nav-line-1 {
  float: left;
  clear: both;
  display: inline-block;
  white-space: nowrap;
  padding-right: 9px;
  font-family: arial, sans-serif;
}
.icp-nav-globe-img-2 {
  position: relative;
  top: 15px;
  left: 24px;
  background: url("../assets/icons.png");
  background-position: -77px -24px;
  display: inline-block;
  width: 14px;
  height: 14px;
}
.icp-nav-language {
  position: relative;
  top: -3px;
  left: 5px;
}
.account-tooltip .a-text-normal {
  color: #111;
}
.button-signin {
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  background: #f4d078;
  background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  background-color: transparent;
  display: block;
  font-size: 13px;
  height: 29px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
}
.account-tooltip a:hover {
  text-decoration: none !important;
}
.nav-tools .nav-a-2 .nav-line-2 {
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  padding-bottom: 5px;
}
.nav-tools .nav-a-2 .nav-line-2 {
  float: left;
  clear: both;
  display: inline-block;
  white-space: nowrap;
  padding-right: 9px;
  font-family: arial, sans-serif;
}
.icp-nav-link-inner .nav-line-2 {
  position: relative;
  left: -7px;
}
.nav-tools .nav-a-2 .nav-line-2 .nav-icon {
  display: inline-block;
  border-style: solid;
  border-width: 4px;
  border-color: transparent;
  border-top: 4px solid #606060;
  border-bottom-width: 0;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  margin: 0 0 2px 5px;
}
.icp-nav-link-inner .nav-arrow {
  position: relative;
  left: 38px;
}
.icp-nav-link-border {
  border-right: 1px solid #555;
  display: inline-block;
  margin-bottom: -20px;
  width: 1px;
  margin-top: 10px;
  height: 29px;
  float: left;
  margin-right: 1px;
}
.nav-tools .nav-a:hover {
  border: 1px solid;
  border-radius: 2px;
  border-color: rgba(255, 255, 255, 0.2);
  top: 0;
  margin: 0;
  height: 44px;
}

.nav-tools .nav-single-row-link {
  height: 28px;
  margin-top: 16px;
  padding-top: 2px;
}
.nav-tools .nav-single-row-link .nav-line-1 {
  height: 0;
  margin-top: 5px;
}
.nav-tools .nav-single-row-link:hover {
  height: 28px;
  margin-top: 16px;
  padding-top: 2px;
}
.nav-tools .nav-a:last-of-type {
  padding-left: 6px;
}
.nav-tools #nav-cart .nav-line-1,
.nav-tools #nav-cart .nav-line-2 {
  margin-left: 42px;
}
.nav-tools #nav-cart .nav-cart-icon {
  display: block;
  overflow: hidden;
  position: absolute;
  left: 10px;
  top: 11px;
  background-position: -10px -340px;
  width: 38px;
  height: 26px;
}
#nav-ewc-cart-count {
  color: #f08804;
  top: 7px;
}
.nav-tools #nav-cart .nav-cart-0 {
  left: 23px;
  top: 9px;
  font-size: 16px;
  width: 19px;
}
.nav-tools .nav-cart-count {
  color: #e47911;
  font-weight: 700;
  font-family: arial, sans-serif;
  position: absolute;
  line-height: 16px;
  width: 20px;
  text-align: center;
}

.nav-subnav {
  z-index: 1;
  position: relative;
  margin: 0;
  padding: 0 9px 0 15px;
  overflow: hidden;
  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
  border-top: 1px solid rgba(0, 0, 0, 0.17);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  height: 33px;
  background: #fafafa;
}
.nav-subnav .nav-a {
  position: relative;
  float: left;
  text-decoration: none;
  height: 31px;
  line-height: 33px;
  color: #333;
  font-size: 12px;
  padding: 0 11px;
}
.nav-subnav .nav-a:hover {
  color: #e47911;
  border-bottom: 2px solid #f90;
}
.nav-b {
  font-weight: 700;
}

.dekstop-nav {
  display: block;
}
.mobile-nav {
  display: none;
}
@media (max-width: 780px) {
  .dekstop-nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
}

/*
  MOBILE NAV
*/

.nav-mobile .icon-close {
  display: none;
}
.nav-mobile .icon-open i {
  color: #fff !important;
  font-size: 24px !important;
  padding-top: 4px;
}
.nav-mobile .icon-close i {
  color: #fff !important;
  font-size: 24px !important;
  padding-top: 4px;
}
.nav-mobile li {
  width: 100%;
  height: 45px;
  line-height: 46px;
  text-align: center;
  float: left;
}
.nav-mobile li a {
  display: block;
  color: #333;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.nav-mobile .menu-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  display: block;
}
.nav-mobile .menu-button:after {
  opacity: 0;
  top: 45px;
  content: "";
  width: 100vw;
  display: block;
  position: fixed;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  content: "";
  pointer-events: none;
  transition: opacity 0.2s cubic-bezier(0, 0, 0.3, 1);
  transition-delay: 0.1s;
  z-index: 99;
}
.nav-mobile #menu-toggle {
  display: none;
}
.nav-mobile #menu-toggle.active ~ .menu-button .icon-close,
.nav-mobile #menu-toggle:checked ~ .menu-button .icon-close {
  display: block;
}
.nav-mobile #menu-toggle.active ~ .menu-button .icon-open,
.nav-mobile #menu-toggle:checked ~ .menu-button .icon-open {
  display: none;
}
.nav-mobile #menu-toggle.active ~ .menu-button:after,
.nav-mobile #menu-toggle:checked ~ .menu-button:after {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
}
.nav-mobile #menu-toggle.active ~ .menu-sidebar,
.nav-mobile #menu-toggle:checked ~ .menu-sidebar {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
}
.nav-mobile .menu-container {
  width: 65px;
  float: left;
  cursor: pointer;
  position: absolute;
}
.nav-mobile .menu-container .menu-sidebar {
  box-shadow: 5px 0 5px -5px #333;
  display: block;
  width: 65vw;
  bottom: 0;
  background: white;
  color: #333;
  position: fixed;
  transform: translateX(-405px);
  transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
  top: 50px;
  z-index: 99;
  list-style-type: none;
  padding: 0;
  max-width: 400px;
  left: -20px;
}
.nav-mobile .menu-container .menu-sidebar .arrow {
  position: absolute;
  line-height: 50px;
  font-size: 32px;
  color: #555;
  top: 0;
  z-index: 0;
}
.nav-mobile .menu-container .menu-sidebar .arrow.left {
  left: 25px;
}
.nav-mobile .menu-container .menu-sidebar .arrow.right {
  right: 25px;
}
.nav-mobile .menu-container .menu-sidebar li {
  height: 55px;
  line-height: 55px;
  font-size: 16px;
  text-align: left;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 20px;
}
.nav-mobile .menu-container .menu-sidebar li:hover {
  background: #eee;
}
.nav-mobile .menu-container .menu-sidebar li .menu-sub {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0;
  overflow: hidden;
  background: white;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0, 0, 0.3, 1);
  border-left: 1px solid #ccc;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 2;
  max-width: 400px;
}
.nav-mobile .menu-container .menu-sidebar li .menu-sub li {
  overflow: hidden;
}
.nav-mobile .menu-container .menu-sidebar li .menu-sub .menu-sub-title {
  padding-left: 50px;
}
.nav-mobile .menu-container .menu-sidebar li .submenu-label {
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: block;
}
.nav-mobile .menu-container .menu-sidebar li .submenu-toggle {
  display: none;
}
.nav-mobile .menu-container .menu-sidebar li .submenu-toggle.active ~ .menu-sub,
.nav-mobile
  .menu-container
  .menu-sidebar
  li
  .submenu-toggle:checked
  ~ .menu-sub {
  width: 65vw;
  visibility: visible;
  z-index: 1;
  transition: width 0.35s cubic-bezier(0, 0, 0.3, 1);
}
.mobile-nav .text-right a {
  text-decoration: none;
  color: #fff;
  font-size: 24px;
}
.mobile-nav a i {
  color: #fff !important;
  font-size: 24px !important;
  padding-top: 5px;
}
.mobile-nav-icons img {
  position: relative;
}
.mobile-nav-icons .mobile-cart-count {
  position: absolute;
  right: 48px;
  top: 3px;
  font-size: 16px;
  width: 19px;
  color: #e47911;
  font-weight: 700;
  font-family: arial, sans-serif;
  position: absolute;
  line-height: 16px;
  text-align: center;
}
.mobile-nav .mobile-nav-icons a {
  margin-right: 1rem;
}
.mobile-nav .mobile-nav-icons a:last-child {
  margin-right: 0;
}
.mobile-nav .mobile-nav-icons .mobile-cart {
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  margin-left: -5px;
}
.mobile-nav .logo-area img {
  width: 100px !important;
}
@media (max-width: 780px) {
  header {
    padding-bottom: 1rem;
  }
}
</style>

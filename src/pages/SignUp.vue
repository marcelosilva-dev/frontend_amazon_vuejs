<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <router-link to="/">
              <img src="../assets/logo-black.png" alt class />
            </router-link>
            <form class="mt-4">
              <div class="a-box a-spacing-extra-large">
                <div class="a-box-inner">
                  <h1 class="a-spacing-small">Create Account</h1>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table"
                      >Your name</label
                    >
                    <input
                      type="text"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="name"
                    />
                  </div>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="email"
                    />
                  </div>
                  <div class="row a-spacing-base">
                    <label for="ap_costumer_name" class="a-form-table"
                      >Password</label
                    >
                    <input
                      type="password"
                      id="ap_costumer_name"
                      class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                      v-model="password"
                    />
                    <div class="a-alert-container">
                      <div class="a-alert-content">
                        Password should be at least 6 characters
                      </div>
                    </div>
                    <div class="a-row a-spacing-extra-large mb-4">
                      <span class="a-button-primary">
                        <span class="a-button-inner">
                          <span class="a-button-text" @click="onSignup"
                            >Create your Amazon account</span
                          >
                        </span>
                      </span>
                      <div class="a-row a-spacing-top-medium a-size-small">
                        <b>
                          By creating an account, you agree to Amazon's
                          <a href="#">conditions of Use</a> and
                          <a href="#">Privacy Notice</a>
                        </b>
                      </div>
                    </div>
                    <hr />
                    <div class="a-row">
                      <b>
                        Already have an account?
                        <router-link to="/login" class="a-link-emphasis"
                          >Sign in</router-link
                        >
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
  layout: "none",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onLogin() {
      console.log("auth");
    },
  },
};
</script>

<style>
/*****************************************
            REGISTER PAGE
*****************************************/
.registerPage {
  margin-top: 60px;
  margin-bottom: 22px;
  padding: 14px 18px !important;
}
.registerPage img {
  width: 200px;
}
.a-box {
  display: block;
  border-radius: 4px;
  border: 1px #ddd solid;
  background-color: #fff;
}
.a-box .a-box-inner {
  border-radius: 4px;
  position: relative;
  padding: 14px 18px;
}
.a-spacing-small {
  margin-bottom: 10px !important;
}
.a-spacing-medium {
  margin-bottom: 18px !important;
}
.registerPage h1 {
  font-family: "MyWebFont", Arial, sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.2;
  padding-bottom: 4px;
}
.a-spacing-base {
  margin-bottom: 14px !important;
}
label,
legend {
  display: block;
  padding-left: 2px;
  padding-bottom: 0px;
  font-weight: 700;
  font-family: "MyWebFont", Arial, sans-serif;
}
.a-input-text,
input[type="number"],
input[type="tel"],
input[type="password"],
input[type="date"],
input[type="email"] {
  background-color: #fff;
  height: 31px;
  padding: 3px 7px;
  line-height: normal;
  color: #111;
}
.a-input-text,
input[type="text"],
input[type="number"],
input[type="tel"],
input[type="password"],
input[type="search"],
textarea {
  border: 1px solid #a6a6a6;
  border-top-color: #949494;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.07) inset;
  outline: 0;
}
.a-input-text.a-form-focus,
.a-input-text:focus,
input[type="text"].a-form-focus,
input[type="text"]:focus,
input[type="number"].a-form-focus,
input[type="number"]:focus,
input[type="tel"].a-form-focus,
input[type="tel"]:focus,
input[type="password"].a-form-focus,
input[type="password"]:focus,
input[type="search"].a-form-focus,
input[type="search"]:focus,
textarea.a-form-focus,
textarea:focus {
  border-color: #e77600;
  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);
}
input[type="password"]::placeholder {
  font-weight: 700;
  font-size: 13px;
  font-family: "MyWebFont", Arial, sans-serif;
}
.a-alert-container {
  padding-left: 16px;
  color: #2b2b2b;
}
.a-icon-alert {
  height: 13px;
  width: 14px;
  position: absolute;
  left: 2px;
  top: 2px;
  background-position: -166px -130px;
}
.a-alert-content {
  font-family: "MyWebFont", Arial, sans-serif;
  margin-bottom: 0;
  text-align: left;
  font-size: 12px;
  line-height: 15px;
  color: #2b2b2b;
  margin-top: 5px;
  font-weight: 700;
}
.a-button-toggle {
  border-color: #adb1b8 #a2a6ac #8d9096;
  background-color: #fff;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  width: 100%;
}
.a-button-toggle:hover {
  border-color: #a2a6ac #979aa1 #82858a;
}
.a-button-toggle:hover .a-button-inner {
  background-color: #f3f3f3;
  background-image: none;
  background: -webkit-linear-gradient(top, #e7eaf0, #d9dce1);
  background: linear-gradient(to bottom, #e7eaf0, #d9dce1);
}
.a-button-primary {
  width: 100%;
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  font-family: "Amazon Ember", Arial, sans-serif;
}
.a-button-primary:hover {
  border-color: #a88734 #9c7e31 #846a29;
}
.a-button-primary:hover .a-button-inner {
  background: #f1c860;
  background: -webkit-linear-gradient(top, #f5d78e, #eeb933);
  background: linear-gradient(to bottom, #f5d78e, #eeb933);
}
.a-button-primary .a-button-inner {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  display: block;
  position: relative;
  overflow: hidden;
  height: 29px;
  border-radius: 2px;
}
.a-button-primary .a-button-text {
  outline: 0;
  color: #111;
  text-align: center;
  font-size: 13px;
  line-height: 29px;
  display: block;
  font-family: Arial, sans-serif;
  white-space: nowrap;
  background-color: transparent;
  margin: 0;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px 0 11px;
}
@media (min-width: 824px) and (max-width: 980px) {
  .btnFollow .a-btn-text {
    padding: 2px 10px 2px 10px;
  }
  .cr-lighthouse-terms br {
    display: block !important;
  }
  .cr-lighthut {
    width: auto !important;
  }
}
@media (min-width: 767px) and (max-width: 823px) {
  .btnFollow .a-btn-text {
    padding: 2px 8px 2px 8px;
  }
  .cr-lighthouse-terms br {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .btnFollow .a-btn-text {
    padding: 2px 7px 2px 7px;
  }
}
.registerPage a {
  text-decoration: none;
  color: #0066c0;
}
.registerPage a:hover {
  text-decoration: underline;
  cursor: pointer;
  color: #c45500;
}
.a-spacing-top-extra-large {
  margin-top: 26px !important;
}
.a-spacing-top-large {
  margin-top: 22px !important;
}
.a-size-mini {
  font-size: 11px !important;
  line-height: 1.465 !important;
}
.a-text-center {
  text-align: center !important;
}
.auth-footer-seperator {
  display: inline-block;
  width: 20px;
}
.a-icon {
  background-image: url("../assets/icons2.png");
  -webkit-background-size: 400px 900px;
  background-size: 400px 900px;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: top;
}
</style>

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
                  <h1 class="a-spacing-small">Sign In</h1>
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
                          <span class="a-button-text" @click="onLogin"
                            >Continue</span
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
                        Don't have an account?
                        <router-link to="/signup" class="a-link-emphasis"
                          >Register</router-link
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
import useAuth from "@/hooks/useAuth";
import useLocalStorage from "@/hooks/useLocalStorage";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onLogin() {
      const body = {
        email: this.email,
        password: this.password,
      };

      const token = await useAuth.validateCredentialsAndGetToken(body);
      if (token != undefined) {
        const user = await useAuth.validateCredentialsAndGetUserData(
          this.email,
          this.password
        );

        if (user != undefined) {
          user.token = token;
          user.status = true;

          await this.$store.dispatch("signIn", user);

          await useLocalStorage.setItem("@AmazonVue:store", user);

          await this.$router.push({ path: "/" });
        }
      }
    },
  },
};
</script>

<style></style>

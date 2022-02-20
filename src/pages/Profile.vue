<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Profile page</h2>
            <router-link to="/" v-on:click="handleLogout">Logout</router-link>
            <form>
              <!-- Name Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Name</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="name"
                />
              </div>
              <!-- Email Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Email</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="email"
                />
              </div>
              <!-- Password Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Phone</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="phone"
                />
              </div>
              <!-- Button  -->
              <div class="row">
                <div class="a-spacing-top-large">
                  <span class="a-button-register">
                    <span class="a-button-inner">
                      <span
                        class="a-button-text"
                        v-on:click="handleUpdateProfile"
                        >Update profile</span
                      >
                    </span>
                  </span>
                </div>
                <!-- Button  -->
                <div class="a-spacing-top-large">
                  <span class="a-button-delete">
                    <span class="a-button-inner">
                      <span
                        class="a-button-text"
                        v-on:click="handleDeleteProfile"
                        >Delete profile</span
                      >
                    </span>
                  </span>
                </div>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import useUsers from "@/hooks/useUsers.js";

export default {
  name: "ProfilePage",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    async handleUpdateProfile() {
      await useUsers.updateUser({
        id: 3,
        name: this.name,
        email: this.email,
        phone: this.phone,
      });

      this.$router.push({ path: "/" });
    },
    async handleDeleteProfile() {
      await useUsers.deleteUser(3);

      this.$router.push({ path: "/login" });
    },
    async handleLogout() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  margin-top: 60px;
}
.a-button-delete {
  background: red;
  border-color: #a88734 #9c7e31 #846a29;
  color: #fff;
  border-radius: 3px;
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
.a-button-register {
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
  width: 100%;
}
.a-button-register .a-button-inner {
  background: #f4d078;
  background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  display: block;
  position: relative;
  overflow: hidden;
  height: 29px;
  border-radius: 2px;
}
.a-button-register:hover {
  border-color: #a88734 #9c7e31 #846a29;
}
.a-button-register:hover .a-button-inner {
  background: #f1c861;
  background: -webkit-linear-gradient(top, #f5d78e, #eeb933);
  background: linear-gradient(to bottom, #f5d78e, #eeb933);
}
.a-button-register .a-button-text {
  color: #111;
  background-color: transparent;
  border: 0;
  display: block;
  font-size: 13px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  padding: 0 10px 0 11px;
  text-align: center;
  white-space: nowrap;
}
</style>

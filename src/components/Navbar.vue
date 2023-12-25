<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="nav">
    <div class="logo">
      <img src="@/assets/personally-logo.jpg" alt="" />
    </div>
    <div class="list">
      <ul>
        <li><a href="#">Daily Digest</a></li>
        <li><a href="#">Design Tools</a></li>
        <li><a href="#">Tutorials</a></li>
      </ul>
      <div class="subscribe_button"><button>Subscribe</button></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  // position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 4px 70px 0px rgba(30, 40, 52, 0.08);
}
.logo {
  padding-left: 40px;
}
.list {
  display: flex;
  align-items: center;
  padding-right: 25px;

  // justify-content: space-between;
}
.list ul {
  display: flex;
  list-style: none;
}
.list li {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-family: "inter";
  padding: 0 15px;
  color: rgba(29, 41, 57, 1);
}

.list a {
  text-decoration: none;
  color: inherit; /* Inherit the color from the parent */
}
.subscribe_button button {
  background-color: #1d2939;
  border-radius: 10px;
  padding: 12px 14px;
  gap: 10px;
  color: white;
  border: 1px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 14px;
  font-family: "inter";
  cursor: pointer;
}
.subscribe_button {
  margin-left: 110px;
}
</style>

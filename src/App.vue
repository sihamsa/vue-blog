<template>
  <div>
    <NavbarVue />
    <!-- <HomePageVue/> -->

    <router-view />
    <FooterVue />
  </div>
</template>

<script setup>
import NavbarVue from "@/components/Navbar.vue";
import FooterVue from "@/components/FooterVue.vue";
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>

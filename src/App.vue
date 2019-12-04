<template>
  <div id="app">
    <div id="nav">
      <div class="vertical-nav" id="sidebar">
        <div class="py-4 px-3 mb-4">
          <div class="media d-flex align-items-center">
            <b-img :src="require('./assets/LogoLong.jpg')" fluid alt=""/>
          </div>
        </div>

        <ul class="nav flex-column mb-0">
          <li class="nav-item">
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacts">Contacts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/main";
</style>

<script>
  //import Navbar from "views/Navbar";

  export default {
    name: 'app',
    components: {
      //Navbar
    }
  }
</script>

<style lang="scss">
  html {
    font-size: 24px;
  }

  .vertical-nav {
    min-width: 14.6rem;
    width: 14.6rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.4s;
  }

  .page-content {
    width: calc(100% - 14.6rem);
    margin-left: 14.6rem;
    transition: all 0.4s;
  }

  #nav {
  text-align: left;

    a {
      padding-left: 2.4rem;
      font-weight: 400;
      font-size: 1.3rem;
      color: white;
    }

    a:hover {
      font-weight: 600;
      text-decoration: none;
    }

    #sidebar {
      border-right: 1px solid white;
    }
  }

  #nav a.router-link-exact-active {
    color: white;
  }
</style>
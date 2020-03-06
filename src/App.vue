<template>
  <div id="app">
    <div id="nav">
      <div class="vertical-nav" id="sidebar">
        <div class="py-0 px-3 mb-4">
            <router-link to="/">
              <div class="media d-flex align-items-center">
                <b-img :src="require('./assets/LogoLong.jpg')" fluid alt="" />
              </div>
            </router-link>
        </div>

        <ul class="nav flex-column mb-0">
          <li class="nav-item">
            <router-link to="projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="skills">My skills</router-link>
          </li>
          <li class="nav-item">
            <router-link to="contacts">Contact me</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">About</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mobile-menu">
      <transition name="menu" mode="out-in">
        <b-icon-justify-right v-if="!menuActive" @click="menuActive = true" class="h2 mt-2 mr-2 mb-0"/>
        <b-container v-if="menuActive" class="mobile-menu-content">
          <b-row>
            <b-col>
              <b-icon-x @click="menuActive = false" class="h2 mt-2 mb-0 float-right"/>
            </b-col>
          </b-row>
          <b-row id="content-row" align-v="center">
            <b-col>
              <ul class="nav flex-column mb-0">
                <li class="nav-item">
                  <router-link to="/projects" @click.native="menuActive = false">Projects</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/skills" @click.native="menuActive = false">My skills</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contacts" @click.native="menuActive = false">Contact me</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/" @click.native="menuActive = false">About</router-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </transition>
    </div>
    <div>
      <transition name="page" mode="out-in">
        <router-view v-if="!menuActive" class="page-content"/>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    data() {
      return {
        menuActive: false
      }
    },
  }
</script>

<style lang="scss">
  @import 'styles/main.scss';

  // Transitions
  .page-leave-active {
    transition: all ease-out;
    transform: translateY(3rem);
  }

  .page-enter-active {
    transition: all ease-in;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
  }

  .menu-enter-active, .menu-leave-active{
    transition: all 150ms ease-in;
  }

  .menu-enter, .menu-leave-to {
    opacity: 0;
  }
  // ---Transitions---

  .mobile-menu {
    display: block;
    text-align: right;

    .mobile-menu-content {
      text-align: center;

      a {
        color: white;
        font-size: 1.5rem;
        font-weight: 300;
        text-decoration: none;
      }

      a.router-link-exact-active {
        font-weight: 600;
      }

      #content-row{
        text-align: center;
        height: 80vh;
      }
    }
  }

  @media (min-width: $lg) {
    .mobile-menu {
      display: none;
    }
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
    padding: 0;

    a {
      padding-left: 2.4rem;
      font-weight: 400;
      font-size: 1.3rem;
      color: white;
    }

    li {
      margin-bottom: 0.5rem;

      a {
        position:relative;
        text-decoration:none;
        display:inline-block;
      }
      a:after {
        display:block;
        content: '';
        border-bottom: solid 2px white;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin:100% 50%
      }
      a:hover:after {
        transform: scaleX(1);
        transform-origin:0 50%;
      }

      a.router-link-exact-active {
        font-weight: 600;
      }
    }

    #sidebar {
      border-right: 1px solid white;
    }
  }

  #nav a.router-link-exact-active {
    color: white;
  }

  @media (max-width: 1024px) { // Ipad
    #nav {
      display: none;
    }

    .mobile-menu {
      display: block;
    }

    .page-content {
      width: 100%;
      margin-left: 0;
      transition: all 0.4s;
    }
  }

  @media (max-height: 450px) {
    #nav {
      display: none;
    }

    .page-content {
      width: 100%;
      margin-left: 0;
      transition: all 0.4s;
    }
  }
</style>

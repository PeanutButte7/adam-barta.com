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
            <router-link to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills">My skills</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacts">Contact me</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">About</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <transition name="page" mode="out-in">
        <router-view class="page-content"/>
      </transition>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style lang="scss">
 .page-leave-active {
   transition: all 50ms ease-in;
    transform: translateY(3rem);
  }

  .page-enter-active {
    transition: all 50ms ease-in;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
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
    }

    #sidebar {
      border-right: 1px solid white;
    }
  }

  #nav a.router-link-exact-active {
    color: white;
  }

  @media (max-width: 500px) {
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

<template>
  <Navbar />
  <router-view/>
  <Footer />

</template>

<script>
import './assets/css/style.css'
import './assets/js/script'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}

</script>

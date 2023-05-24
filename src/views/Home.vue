<template>
  <Apartamets />
  <Experiences />
  <Review />
  <Blog />
</template>

<script>
import Experiences from '../components/Experiences.vue'
import Apartamets from '../components/Apartments.vue'
import Review from '../components/Review.vue'
import Blog from '../components/Blog.vue'

export default {
  name: 'Home',
  components: {
    Apartamets,
    Experiences,
    Review,
    Blog
  }
}

</script>
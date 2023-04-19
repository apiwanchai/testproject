<template>
  <div class="about">
    <CvPage></CvPage>
  </div>
</template>
<script>
// @ is an alias to /src
import CvPage from '../components/CvPage.vue'

export default {
  name: 'HomeView',
  components: {
    CvPage
  }
}
</script>
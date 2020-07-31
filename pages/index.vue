<template>
  <v-container fluid px-4 py-8>
    <v-row>
      <v-col cols="12">
        <div class="hero text-center">
          <Icon />
          <h1>takoba</h1>
          <p>Software Engineer OR UX Designer.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Icon from '~/components/Icon.vue'

export default {
  components: {
    Icon,
  },
}
</script>
<style>
.hero {
  color: #fff;
  padding: 4rem 0;
  text-align: center;
  background-color: #159957;
  background-image: linear-gradient(120deg,#155799,#159957);
}
</style>

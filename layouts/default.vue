<template>
  <v-app>
    <v-overlay :value="loading" color="#fff" opacity="1" z-index="9999">
      <v-progress-circular
        indeterminate
        color="#159957"
        size="64"
        width="8"
      ></v-progress-circular>
    </v-overlay>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer color="transparent" padless>
      <v-col cols="12" class="text-center">
        &copy; {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.loading = false
  }
}
</script>

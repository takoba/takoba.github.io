<template>
  <v-container fluid px-4 py-8 class="hero__background">
    <v-row>
      <v-col cols="12">
        <div class="hero__content text-center">
          <Icon class="hero__icon" />
          <h1 class="hero__title">takoba</h1>
          <p class="hero__desc">Software Engineer OR UX Designer.</p>
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
<style lang="sass" scoped>
.hero
  &__background
    padding: 4rem 0
    text-align: center
    background-color: #159957
    background-image: linear-gradient(120deg,#155799,#159957)
    width: 100%
  &__content
    color: #fff
  &__icon
    margin: 3rem auto 0
  &__title
    font-size: 3rem
    margin: 1.8rem auto
  &__desc
    font-size: 1.6rem
    max-width: 35rem
    margin: 1.8rem auto
    line-height: 1.3
</style>

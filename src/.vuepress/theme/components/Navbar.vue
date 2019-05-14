<template>
  <header class="navbar" :class="{ 'navbar__home': $page.frontmatter.home, 'navbar--bgTransparent': isThroughHeaderByScroll === false }" v-scroll>
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data () {
    return {
      linksWrapMaxWidth: null,

      isThroughHeaderByScroll: false,
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
  },

  methods: {
    handleScroll() {
      const isThroughHeaderByScroll = ($el) => {
        let $header = document.querySelector('header.hero');
        if (!$header) {
          return false;
        }
        let transitionHeight = (($el) => {
          return $header.offsetTop + $header.offsetHeight - $el.offsetHeight;
        })($el);
        return window.scrollY > transitionHeight;
      };
      this.isThroughHeaderByScroll = isThroughHeaderByScroll(this.$el);
    },
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
  &.navbar__home
    border-bottom 1px solid $borderColorHomeHeader
    background-color #159957
    background-image linear-gradient(120deg, #15628E, #159957)
    animation navbar--fadeIn 0.5s forwards
    -webkit-animation navbar--fadeIn 0.5s forwards
    &.navbar--bgTransparent
      background-color transparent
      background-image none
      animation navbar--fadeOut 0.01s forwards
      -webkit-animation navbar--fadeOut 0.01s forwards
    .site-name
      color $textColorHomeHeader

@-webkit-keyframes navbar--fadeOut
  from
    background-color #159957
    background-image linear-gradient(120deg, #15628E, #159957)
  to
    background-color transparent
    background-image none
@keyframes navbar--fadeOut
  from
    background-color #159957
    background-image linear-gradient(120deg, #15628E, #159957)
  to
    background-color transparent
    background-image none
@-webkit-keyframes navbar--fadeIn
  from
    background-color transparent
    background-image none
  to
    background-color #159957
    background-image linear-gradient(120deg, #15628E, #159957)
@keyframes navbar--fadeIn
  from
    background-color transparent
    background-image none
  to
    background-color #159957
    background-image linear-gradient(120deg, #15628E, #159957)

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>

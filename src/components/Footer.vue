<template>
  <v-app id="inspire">
    <v-card height="56px" flat>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        color="indigo"
        fixed
        dark
        shift
      >
        <v-btn dark href="/">
          <span>Location</span>
          <v-icon>place</v-icon>
        </v-btn>
  
        <v-btn dark href="/about">
          <span>About</span>
          <v-icon>favorite</v-icon>
        </v-btn>

      </v-bottom-nav>
    </v-card>
  </v-app>
</template>
<script>
export default {
 computed: {
    bottomNav () {
      switch (this.$route.path) {
        case '/': return 0
        case '/about': return 1
      }
    }
  }
}
</script>
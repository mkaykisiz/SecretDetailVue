<template>
    <v-hover>
      <v-card
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="mx-auto"
        width="344"
      >
        <v-img
          :aspect-ratio="16/9"
          :src="place.photo"
        ></v-img>
        <v-card-title>
          <div>
            <span class="headline">{{ place.name }}</span>
            <div class="d-flex">
              <v-rating
                :value="place.score"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="ml-2 grey--text text--darken-2">
                <span>{{ place.score }} </span>
                <span> ({{ place.scorer }})</span>
              </div>
            </div>
          </div>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-0">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-hover>
</template>
<style>
</style>
<script>
export default {
  props: ['item'],
  data () {
    return {
      place: this.item
    }
  }
}
</script>

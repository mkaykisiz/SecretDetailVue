<template>
  <div id="placeList">
    <v-app id="placeListApp">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex v-for="place in places" v-bind:key="place" sm4>
            <Card :item=place>
            </Card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<style>
</style>
<script>
import Card from '../components/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      places: [
        {
          name: 'Bodrum Kat Daire:1',
          score: 3,
          scorer: 41,
          photo: 'https://placeimg.com/361/262'
        },
        {
          name: 'Giriş Kat',
          score: 4,
          scorer: 43,
          photo: 'https://placeimg.com/361/263'
        },
        {
          name: 'Daire 3',
          score: 2,
          scorer: 233,
          photo: 'https://placeimg.com/361/264'
        },
        {
          name: 'Ara Kat D:23',
          score: 5,
          scorer: 143,
          photo: 'https://placeimg.com/361/266'
        },
        {
          name: 'Daire 5',
          score: 5,
          scorer: 132,
          photo: 'https://placeimg.com/361/265'
        },
        {
          name: 'Çatı Katı Daire:10',
          score: 3,
          scorer: 344,
          photo: 'https://placeimg.com/361/268'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

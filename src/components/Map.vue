<template>
    <div id="search">
      <v-app id="searchApp" class="searchApp">
        <v-form>
          <v-container>
            <v-layout row wrap>
              <v-flex sm11>
                <v-text-field
                  box
                  :value="fullAddress"
                  label="Location"
                  prepend-inner-icon="place"
                  disabled
                ></v-text-field>
              </v-flex>
              <v-flex sm1>
                <v-btn fab dark small color="indigo"
                @click="search">
                  <v-icon dark>search</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
          <google-map
            :center="center"
            :zoom="18"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
          >
            <google-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @dragend="selectLocation"
            />
          </google-map>
      </v-app>
    </div>
</template>
<style>
  .vue-map-container {
    width: 100% !important;
    height: 500px !important;
    position: relative;
  }
  .searchApp > .application--wrap{
    min-height: auto;
  }
</style>
<script>
const services = require('../services/googleapis')
export default {
  data () {
    return {
      fullAddress: 'Move to location',
      center: {
        lat: 41.00068943014393,
        lng: 28.827870845794678
      },
      coordinates: {
        lat: 41.00068943014393,
        lng: 28.827870845794678
      },
      markers: [{
        position: {
          lat: 41.00068943014393,
          lng: 28.827870845794678
        }
      }]
    }
  },
  methods: {
    search () {
      if (this.fullAddress === 'Move to location') {
        alert('Move to location please')
      } else {
        alert(this.fullAddress)
      }
    },
    selectLocation (location) {
      this.coordinates = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng()
      }
      services.getFullAddressWithLocation(this.coordinates, (err, fullAddress) => {
        if (err) {
          console.log(err)
        }
        this.fullAddress = fullAddress
      })
    }
  }
}
</script>

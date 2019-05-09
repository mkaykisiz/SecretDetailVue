<template>
  <div>
    <Map />
    <PlaceList />
    <Footer />
  </div>
</template>

<script>
  import Map from '../components/Map'
  import PlaceList from '../components/PlaceList'
  import Footer from '../components/Footer'

  export default {
    components: {
      Map, PlaceList, Footer
    }
  }
</script>

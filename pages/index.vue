<template>
  <div>
    <client-only>
      <Map />
    </client-only>
  </div>
</template>

<script>
import Map from '~/components/Map'

export default {
  components: {
    Map,
  },
  data() {
    return {
      feature: null,
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>

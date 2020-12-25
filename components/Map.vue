<template>
  <div class="map-shaper">
    <div id="map" ref="map-container" />
    <div class="uiPanel">
      <h1 class="is-size-sm">아파트 단지 이름 찾기</h1>
      <TextBox class="textbox" @inputchange="inputChange" />
    </div>
    <Selection v-if="renderSelection" :position="pixel" :feature="feature" />
  </div>
</template>
<script>
import L from 'leaflet'
import Tangram from 'tangram'
import TextBox from './Input'
import Selection from '~/components/Selection'

export default {
  components: {
    TextBox,
    Selection,
  },
  data() {
    return {
      feature: null,
      picking: false,
      renderSelection: true,
      pixel: { x: -200, y: -200 },
    }
  },
  // https://github.com/tangrams/explorer/blob/master/main.js
  mounted() {
    const map = L.map('map', {
      minZoom: 9,
    })
    this.tangramLayer = Tangram.leafletLayer({
      scene: {
        import: '/scene.yaml',
      },
      events: {
        click: (selection) => {
          // this.onTangramClick(selection)
        },
      },
      attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> &copy; OSM contributors',
    })
    window.tangramLayer = this.tangramLayer
    map.setView([37.58451, 126.96939], 12)

    this.tangramLayer.addTo(map)

    window.map = this.map = map
    this.initMapEvent()
  },

  methods: {
    initMapEvent() {
      this.map.on('zoomend', (e) => {
        this.renderSelection = false
        this.feature = null
        const zoom = this.map.getZoom()
        // turn off popup when zoom is low: is this really better UX?
        if (zoom < 12) this.renderSelection = false
        else this.renderSelection = true
      })

      this.map.getContainer().addEventListener('click', (event) => {
        if (this.renderSelection) this.picking = !this.picking
      })
      // when map pans, drop the toggle
      this.map.getContainer().addEventListener('drag', (event) => {
        if (this.renderSelection) this.picking = false
      })
      map.getContainer().addEventListener('mousemove', (event) => {
        if (this.picking || !this.renderSelection) return
        this.pixel = { x: event.clientX, y: event.clientY }
        this.tangramLayer.scene.getFeatureAt(this.pixel).then((selection) => {
          if (!selection) {
            this.feature = null
            return
          }
          const feature = selection.feature
          if (!feature || !feature.properties.n) {
            this.feature = null
            return
          }
          this.feature = feature
        })
      })
    },
    inputChange(e) {
      const valuetext = e.value
      this.tangramLayer.scene.config.global.value_text = valuetext
      this.tangramLayer.scene.rebuild().then((e) => console.log('yo'))
    },
    onTangramClick(selection) {
      if (selection.feature) {
        this.feature = selection.feature.properties
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.map-shaper {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
#map {
  width: 100%;
  height: 100%;
  border-right: 2px solid gray;
  position: absolute;
  top: 0;
  left: 0;
}
.uiPanel {
  width: 300px;
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 15px;
  z-index: 1000000;
  background-color: white;
  border: 2px solid gray;
  h1 {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>

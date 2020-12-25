<template>
  <div v-if="feature" class="selection" :style="positionStyle">
    <table>
      <tr>
        <td class="bold">이름</td>
        <td>{{ feature.properties.n }}</td>
      </tr>
      <tr>
        <td class="bold">주소</td>
        <td>{{ feature.properties.j }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    feature: {
      type: Object,
      default: () => ({
        address: '주소주소',
        name: '이름이름',
      }),
    },
    position: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0,
      }),
    },
  },
  computed: {
    positionStyle() {
      return { left: `${this.position.x}px`, top: `${this.position.y}px` }
    },
  },
}
</script>
<style lang="scss" scoped>
.selection {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  position: absolute;
  z-index: 200000;
  font-size: 14px;
  margin: 5px;
  width: 180px;
  .bold {
    font-weight: 600;
    min-width: 30px;
  }
}
</style>

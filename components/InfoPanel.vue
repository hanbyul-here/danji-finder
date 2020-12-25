<template>
  <div v-if="feature">
    <table class="table">
      <tr>
        <td class="pr-md">단지</td>
        <td>
          {{ danjiname }}
        </td>
      </tr>
      <tr class="pr-md">
        <td>주소</td>
        <td>
          {{ juso }}
        </td>
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
        BLD_NM: 'Placehodler',
        DONG_NM: 'Placehodler',
      }),
    },
  },
  computed: {
    juso() {
      return this.feature ? this.feature.juso.split('(')[0] : ''
    },
    danjiname() {
      return this.feature ? this.feature.juso.split('(')[1].split(')')[0] : ''
    },
  },
}
</script>

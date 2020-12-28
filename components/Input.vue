<template>
  <div>
    <div class="sr-only">
      렌더링 엔진의 힘을 크게 비는 프로젝트의 특성상, 이 지도는 스크린 리더에서 활용하기 어렵습니다. 이 지도에 활용한 데이터는
      <a href="https://github.com/hanbyul-here/danji-finder/blob/main/static/">해당 리포 데이터 폴더</a>
      에서 확인할 수 있습니다.
    </div>
    <label for="nameinput">찾는 이름을 입력한 후 엔터키를 누르세요.</label>
    <input ref="nameinput" name="nameinput" class="textinput" type="text" placeholder="리버⏎" @change="inputChange" />
  </div>
</template>
<script>
export default {
  methods: {
    inputChange: function (e) {
      this.$emit('inputchange', { value: e.target.value })
    },
  },
}
</script>
<style lang="scss" scoped>
label {
  font-size: 12px;
  font-weight: 600;
}
input.textinput {
  width: 100%;
  height: 41px;
  background-image: url(data:image/svg+xml,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2020%2020%27%3E%3Ctitle%3Esearch%3C/title%3E%3Ccircle%20fill%3D%27none%27%20stroke%3D%27%23666666%27%20stroke-width%3D%272.2677%27%20stroke-miterlimit%3D%2710%27%20cx%3D%279.99%27%20cy%3D%276.512%27%20r%3D%275.5%27/%3E%3Cline%20fill%3D%27none%27%20stroke%3D%27%23666666%27%20stroke-width%3D%272.2677%27%20stroke-miterlimit%3D%2710%27%20x1%3D%2713.5%27%20y1%3D%2710.637%27%20x2%3D%2716.789%27%20y2%3D%2714.173%27/%3E%3C/svg%3E%0A);
  background-repeat: no-repeat;
  background-size: 19px 19px;
  background-position: 3px 14px;
  padding: 8px 2px 8px 26px;
  border: 1px solid #ccc;
}
</style>

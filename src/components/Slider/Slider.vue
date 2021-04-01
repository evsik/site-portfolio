<template>
  <div class="b-slider">
    <div class="container">
      <Name></Name>
    </div>
  </div>
</template>

<script>
import Name from "./Name";

export default {
  name: "Slider",
  components: {
    Name
  }
}
</script>

<style scoped lang="scss">
.b-slider {
  display: flex;
  justify-content: space-between;
  padding: 30px 0 30px 0;
}
</style>
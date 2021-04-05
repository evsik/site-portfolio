<template>
  <div class="b-skill">
    <i :class="item.img_skills"></i>
    <h4 class="b-skill__name">
      {{ item.name_skills }}
    </h4>
    <div class="b-skill__star">
      {{ item.star_skills }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",

  props: {
    item: {type: Object}
  }
}
</script>

<style scoped lang="scss">

</style>
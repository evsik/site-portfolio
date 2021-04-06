<template>
  <div class="b-skill">
    <i :class="item.class_skills"></i>
    <h4 class="b-skill__name">
      {{ item.name_skills }}
    </h4>
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

.b-skill {

  i {
    font-size: 80px;
    margin-bottom: 20px;
  }

  .b-skill__name {
    font-family: Gilroy, serif;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #828282;
  }
}

</style>
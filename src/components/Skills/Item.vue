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

  .fa-html5 {
    color: #dd4b24;
  }

  .fa-css3-alt {
    color: #3595cf;
  }

  .fa-js {
    color: #f7df1e;
  }

  .fa-vuejs {
    color: #3fb27f;
  }

  .fa-bootstrap {
    color: #533b78;
  }

  .fa-node {
    color: #7fc727;
  }

  .fa-sass {
    color: #c96195;
  }

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
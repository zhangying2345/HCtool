<template>
  <div class="nest-con">
    <draggable class="dragArea" tag="ul" :list="tasks" :group="{ name: 'g1' }">
      <span class="row-lable">段</span>
      <section class="dragItem" v-for="el in tasks" :key="el.name">
        <div class="dragContent">
          <div>{{ el.name }}</div>
          <nested-draggable :tasks="el.tasks" />
        </div>
      </section>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable
  },
  name: 'nested-draggable'
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  border: 1px solid #dddddd;
  width: 100%;
  /* display: flex; */
  box-sizing: border-box;
  padding: 25px 14px 0;
  /* justify-content: space-between; */
  position: relative;
  background-color: #f5f5f5;
}

.row-lable {
  border: 1px solid #dddddd;
  border-radius: 4px 0 4px 0;
  color: #9da0a4;
  content: 'Row';
  font-size: 12px;
  font-weight: bold;
  left: -1px;
  line-height: 2;
  padding: 3px 7px;
  position: absolute;
  top: -1px;
}

.dragItem {
  position: relative;
  flex: 1;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  border-radius: 4px 4px 4px 4px;
  margin: 15px 0;
  padding: 30px 19px 24px;
  position: relative;
  cursor: move;
  margin: 15px 0;
}

.dragContent {
  background-color: #ffffff;
}

.dragItem::after {
  background-color: #f5f5f5;
  border: 1px solid #dddddd;
  border-radius: 4px 0 4px 0;
  color: #9da0a4;
  content: '列';
  font-size: 12px;
  font-weight: bold;
  left: -1px;
  padding: 3px 7px;
  position: absolute;
  top: -1px;
}

.nest-con {
  /* display: flex; */
}
</style>

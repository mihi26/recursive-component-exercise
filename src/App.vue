<script>
import RecursiveComponent from "./components/RecursiveComponent.vue";
import roomData from "./data";

export default {
  name: "App",
  components: {
    RecursiveComponent,
  },
  data() {
    return {
      roomList: roomData,
    };
  },
  methods: {
    handleDeleteItem(id) {
      this.roomList.splice(
        this.roomList.findIndex((room) => room.id === id),
        1
      );
    },
    handleAddToParent(room) {
      this.roomList.push(room);
    },
    onAddChildrenLevel(childrenArray) {
      for (let child of childrenArray) {
        child.level++;
        if (child.children) this.onAddChildrenLevel(child.children);
      }
    },
    handleAddToChildrenFromParent(room) {
      for (let item of this.roomList) {
        if (item.children.length > 0 && item !== room) {
          room.level++;
          if (room.children) {
            this.onAddChildrenLevel(room.children);
          }
          this.roomList.splice(
            this.roomList.findIndex((item) => item.id === room.id),
            1
          );
          item.children.push(room);
          return;
        }
      }
    },
  },
};
</script>

<template>
  <div class="app">
    <div class="container">
      <RecursiveComponent
        v-for="room in roomList"
        :key="room.id"
        :room="room"
        @handleDeleteItem="handleDeleteItem(room.id)"
        @addToParent="handleAddToParent"
        @checkChildrenFromParent="handleAddToChildrenFromParent"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: auto;
  height: auto;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 37px 22px 30px 44px;
  position: relative;

  &::before {
    // content: "";
    // position: absolute;
    // border-right: 2px solid #dcdcdc;
    // width: 10px;
    // top: 18px;
    // bottom: 47px;
    // left: 24px;
  }
}
</style>

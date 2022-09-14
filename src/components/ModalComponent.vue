<template>
  <div class="modal" v-if="toggle">
    <div class="modal-wrapper">
      <div class="modal-header">Thêm mới phòng ban</div>
      <div class="modal-content">
        <label for="roomname" class="label-room-name">Tên phòng ban</label>
        <input
          id="roomname"
          class="input-room-name"
          :class="{ 'error-input': error.status }"
          placeholder="Tên phòng ban..."
          v-model="roomForm.name"
          @input="checkRoomName"
          @blur="checkRoomName"
        />
        <div v-if="error.status" class="error-label">
          {{ error.text }}
        </div>
        <label for="roomcode" class="label-room-code">Mã phòng ban</label>
        <input
          id="roomcode"
          class="input-room-code"
          placeholder="Mã phòng ban (không bắt buộc)"
          v-model="roomForm.code"
        />
      </div>
      <div class="modal-footer">
        <button class="button button-cancel" @click="toggleModal">Hủy</button>
        <button class="button button-save" @click="addRoom">Lưu</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalComponent",
  methods: {
    toggleModal() {
      if (this.error.status) this.error.status = !this.error.status;
      this.$emit("toggleModal");
    },
    addRoom() {
      this.checkRoomName();
      if (!this.error.status) {
        this.$emit("onAddRoom", {
          id: String(this.roomForm.id++),
          name: this.roomForm.name,
          code: this.roomForm.code,
        });
      }
      this.toggleModal();
    },
    checkRoomName() {
      const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (!this.roomForm.name.length) {
        this.error = {
          status: true,
          text: "Không được để trống tên phòng",
        };
      } else if (this.roomForm.name.match(regex)) {
        this.error = {
          status: true,
          text: "Tên phòng không được chứa ký tự đặc biệt",
        };
      } else this.error.status = false;
    },
  },
  props: {
    toggle: {
      type: Boolean,
      required: true,
    },
    parentID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      roomForm: {
        id: this.parentID * 10,
        name: "",
        code: "",
      },
      error: {
        status: false,
        text: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  &-wrapper {
    height: auto;
    width: 500px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    top: 50px;
    left: 50px;
  }

  &-header {
    height: 48px;
    background-color: #48647f;
    color: #ffffff;
    border-radius: 10px 10px 0px 0px;
    border: 1px solid #48647f;
    display: flex;
    align-items: center;
    padding: 11px 12px 11px 29px;
    font-weight: 700;
    font-size: 24px;
    line-height: 14px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    padding: 25px;

    label {
      font-weight: 700;
      font-size: 16px;
      line-height: 14px;
      color: #48647f;
      margin-bottom: 8px;
    }
  }

  &-footer {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    margin-right: 25px;
    margin-bottom: 19px;
  }
}
.input-room-name,
.input-room-code {
  margin-bottom: 15px;
  outline: none;
  height: 40px;
  padding: 10px;
  border: 2px solid #dcdcdc;
  border-radius: 4px;
  font-size: 12px;
}
.button {
  width: 108px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #48647f;
  background-color: #ffffff;
  border: 2px solid #48647f;

  &:hover {
    background-color: #48647f;
    color: #ffffff;
  }
}
.error-input {
  border: 2px solid #ed5d5d;
}
.error-label {
  display: flex;
  justify-content: flex-end;
  color: #ed5d5d;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 10px;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #48647f;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #48647f;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #48647f;
}
</style>

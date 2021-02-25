<template>
    <div id="user">
        <div id="iconBg">
            <img src="../assets/fsociety.png" alt=".." id='fsocietyIcon'>
        </div>
        <div id="userInfo">
            <div id="statusDot" :class="user.status"></div>
            <div id="nick" @click="toogleStatusMenu">{{user.name}}</div>
            <div id="id">id:{{user.id}}</div>
            <div id="desc">{{user.desc}}</div>
        </div>
        <div v-if="showStatusPanel">
            <div id="statusMenu">
                <div v-for="status in possibleStatusList" v-bind:key="status.name">
                    <div class="statusOption" @click="changeStatus(status.name)">
                        <div class="MenuDot" :class="status.name"></div>
                        <div class="statusName">{{status.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ["user"],
  components: {},
  data() {
      return {
          showStatusPanel: false,
          possibleStatusList: [{name: "dostępny"}, {name:"zaraz-wracam"}, {name:"zajęty"}]
      }
  },
  methods: {
      toogleStatusMenu() {
          this.showStatusPanel = !this.showStatusPanel;
      },
      changeStatus(newStatus: string): void {
          this.$emit('statusChange', newStatus);
          this.toogleStatusMenu();
      }
  }
})
</script>

<style scoped>

#iconBg {
    position: absolute;
    border-radius: 100%;
    top: 1.24vh;
    left: 5%;
    width: 6.5vh;
    height: 6.5vh;
    background-color: #ffffffa1;
}

#fsocietyIcon {
    position: absolute;
    left: 10%;
    top: 10%;
    height: 80%;
}

#user {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 15vw;
    height: 9vh;
    background-color: #242222;
    border-right: solid 0.2vw #3B3939;
}

#userInfo {
    text-align: left;
    box-sizing: content-box;
    position: absolute;
    top: 11%;
    left: 34%;
    width: 65%;
    height: 80%;
}

#nick {
    font: 2vh NovaSquare;
    position: absolute;
    width: 9vw;
    top: 0%;
    left: 9%;
    color: rgb(182, 182, 182);
    cursor: pointer;
}

#nick:hover {
    background-color: #353535;
}

#nick:active {
    background-color: #979797;
}

#status {   
    border: none;
}

#id {
    position: absolute;
    top: 36%;
    font: 1.8vh Courier;
    color: rgb(182, 182, 182);
}

#desc {
    position: absolute;
    top: 65%;
    font: 95% NovaFlat;
    border: none;
    color: rgb(182, 182, 182);
    width: 100%;
}

#statusDot {
    position: absolute;
    left: 0%;
    top: 8%;
    border-radius: 100%;
    width: 1.2vh;
    height: 1.2vh;
}

#statusMenu {
    position: relative;
    background-color: #EBEBEB;
    top: 3.5vh;
    left: 4.5vw;
    width: 10vw;
    z-index: 10;
    border-radius: 3px;
}

.MenuDot {
    position: relative;
    left: 0.5vw;
    top: 1vh;
    border-radius: 100%;
    width: 1.8vh;
    height: 1.8vh;  
}

.statusOption {
    box-sizing: border-box;
    position: relative;
    height: 4vh;
    width:10vw;
    cursor: pointer;
}

.statusOption:hover {
    background-color: #dbdbdb96;
}

.statusName {
    position: absolute;
    top: 0.7vh;
    left: 2vw;
    font: 1.7vh NovaSquare;
}

</style>
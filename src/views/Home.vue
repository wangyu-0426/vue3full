<script setup lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from 'vuex' // 引入useStore 方法
import usePiniaStore from '../store/pinia'
const store = useStore()  // 该方法用于返回store 实例
const piniaStore = usePiniaStore()
</script>
<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo">
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="../assets/vue.svg" class="logo vue" alt="Vue logo">
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <p>
        <el-button type="success" @click="store.commit('changeName', 'vuex name updated!')">
            <el-icon style="vertical-align: middle">
                <i-ep-add-location />
            </el-icon>
            <span>{{ store.state.name }}</span>
        </el-button>
    </p>
    <p>
        <el-button type="warning" @click="piniaStore.increment()">
            <el-icon style="vertical-align: middle">
                <i-ep-aim />
            </el-icon>
            <span>{{ piniaStore.doubleCount }}</span>
        </el-button>
    </p>
</template>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

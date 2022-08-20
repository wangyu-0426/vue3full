<script setup lang="ts">
import vitelogo from '/vite.svg'
import vuelogo from '@/assets/vue.svg'
console.log(vitelogo, vuelogo)
const env = import.meta.env
console.log(env)
const some_key = import.meta.env.VITE_SOME_KEY
console.log(some_key) 
</script>
<template>
    <img :src=vitelogo style="height:5em;padding:1em">
    <img :src=vuelogo style="height:5em;padding:1em">
    <h1>about</h1>
    <h2 class="title">vite<span>vue</span></h2>
    <el-icon>
        <i-ep-plus />
    </el-icon>
    <el-icon>
        <Plus />
    </el-icon>
</template>
<style lang="scss" scoped>
$title_color :rgb(0, 255, 213);
$span_color: rgb(0, 128, 255);
$span_padding_left: 1em;

h2.title {
    color: $title_color;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;

    span {
        color: $span_color;
        padding-left: $span_padding_left;
    }
}
</style>
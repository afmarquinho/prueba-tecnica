<script setup>
import { RouterView } from 'vue-router'
import Header from "../src/components/Header.vue";
import Infobar from "../src/components/Infobar.vue";
import { ElRow, ElCol, ElCard } from 'element-plus'


</script>

<template>
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

  <Header/>
  <el-row class="mt-8">
    <el-col :span="8" class="relative" >
      <Infobar/>
    </el-col>
    <el-col :span="16" class="pe-5">
      <RouterView />
    </el-col>
  </el-row>

  
</template>

<style scoped></style>

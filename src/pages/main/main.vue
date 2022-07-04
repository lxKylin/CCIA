<template>
  <div class="common-layout">
    <el-container>
      <el-header
        >Header
        <nav-header></nav-header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>

<template>
  <el-drawer
    v-model="drawer"
    title="调试"
    size="500"
    direction="rtl"
    destroy-on-close
    :before-close="close"
  >
    <div style="width: 100%">
      <ActionVue :workflow="_workflow"></ActionVue>
    </div>
  </el-drawer>
</template>
<script setup lang="ts">
import ActionVue from '@/views/knowledge-workflow/component/action/index.vue'
import { ref } from 'vue'
const drawer = ref<boolean>(false)
const _workflow = ref<any>(null)
const close = () => {
  drawer.value = false
}
const open = (workflow: any) => {
  drawer.value = true
  _workflow.value = workflow
}
defineExpose({ close, open })
</script>
<style lang="scss" scoped></style>

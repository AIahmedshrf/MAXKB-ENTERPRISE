<template>
  <div style="height: 100%; width: 100%">
    <div style="height: calc(100% - 57px); overflow-y: auto; width: 100%">
      <component ref="ActionRef" :is="ak[active]" :workflow="workflow"></component>
    </div>
    <div class="el-drawer__footer">
      <el-button>Cancel</el-button>
      <el-button v-if="base_form_list.length > 0 && active == 'knowledge_base'" @click="up"
        >上一步</el-button
      >
      <el-button v-if="base_form_list.length > 0 && active == 'data_source'" @click="next"
        >下一步</el-button
      >
      <el-button v-if="base_form_list.length > 0 ? active == 'knowledge_base' : true" type="primary"
        >Upload
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import DataSource from '@/views/knowledge-workflow/component/action/DataSource.vue'
import KnowledgeBase from '@/views/knowledge-workflow/component/action/KnowledgeBase.vue'
import { WorkflowType } from '@/enums/application'
const ak = {
  data_source: DataSource,
  knowledge_base: KnowledgeBase,
}
const ActionRef = ref()
const form_data = ref<any>()
const active = ref<'data_source' | 'knowledge_base'>('data_source')
const props = defineProps<{
  workflow: any
}>()
const base_form_list = computed(() => {
  const kBase = props.workflow?.nodes?.find((n: any) => n.type === WorkflowType.KnowledgeBase)
  if (kBase) {
    return kBase.properties.user_input_field_list
  }
  return []
})
const next = () => {
  ActionRef.value.validate().then(() => {
    active.value = 'knowledge_base'
  })
}
const up = () => {
  ActionRef.value.validate().then(() => {
    active.value = 'data_source'
  })
}
</script>
<style lang="scss" scoped></style>

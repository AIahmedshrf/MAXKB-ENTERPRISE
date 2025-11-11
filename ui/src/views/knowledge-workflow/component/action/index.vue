<template>
  <DynamicsForm
    v-loading="loading"
    v-model="form_data"
    :render_data="model_form_field"
    :model="form_data"
    ref="dynamicsFormRef"
    label-position="top"
    require-asterisk-position="right"
  >
    <template #default>
      <el-form-item prop="model_name" :rules="base_form_data_rule.model_name">
        <el-radio-group @change="sourceChange" v-model="base_form_data.data_source">
          <el-radio :value="node.id" size="large" v-for="node in source_node_list">{{
            node.properties.stepName
          }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </template>
  </DynamicsForm>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { WorkflowKind, WorkflowMode, WorkflowType } from '@/enums/application'
import DynamicsForm from '@/components/dynamics-form/index.vue'
import type { FormField } from '@/components/dynamics-form/type'
import type { Dict } from '@/api/type/common'
import type { FormRules } from 'element-plus'
import { loadSharedApi } from '@/utils/dynamics-api/shared-api'
import { useRoute } from 'vue-router'
const route = useRoute()
const apiType = computed(() => {
  if (route.path.includes('resource-management')) {
    return 'systemManage'
  } else {
    return 'workspace'
  }
})
const model_form_field = ref<Array<FormField>>([])
const props = defineProps<{
  workflow: any
}>()
const loading = ref<boolean>(false)
const dynamicsFormRef = ref<InstanceType<typeof DynamicsForm>>()
const base_form_data = ref<{ data_source: string }>({ data_source: '' })
const dynamics_form_data = ref<Dict<any>>({})
const form_data = computed({
  get: () => {
    return { ...dynamics_form_data.value, ...base_form_data.value }
  },
  set: (event: any) => {
    dynamics_form_data.value = event
  },
})
const source_node_list = computed(() => {
  return props.workflow?.nodes?.filter((n: any) => n.properties.kind === WorkflowKind.DataSource)
})
const {
  params: { id, from },
} = route as any
const sourceChange = (node_id: string) => {
  const n = source_node_list.value.find((n: any) => n.id == node_id)
  node_id = n ? ([WorkflowType.DataSourceLocalNode].includes(n.type) ? n.type : node_id) : node_id
  loadSharedApi({ type: 'knowledge', systemType: apiType.value })
    .getKnowledgeWorkflowFormList(id, 'local', node_id)
    .then((ok) => {
      dynamicsFormRef.value?.render(ok.data)
    })
}
const base_form_data_rule = ref<FormRules>({
  data_source: {
    required: true,
    trigger: 'blur',
    message: '数据源必选',
  },
})
</script>
<style lang="scss" scoped></style>

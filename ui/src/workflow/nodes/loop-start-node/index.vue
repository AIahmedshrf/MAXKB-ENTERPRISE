<template>
  <NodeContainer :nodeModel="nodeModel"> </NodeContainer>
</template>
<script setup lang="ts">
import { cloneDeep, set } from 'lodash'
import NodeContainer from '@/workflow/common/NodeContainer.vue'
import { ref, onMounted } from 'vue'
import { t } from '@/locales'
const props = defineProps<{ nodeModel: any }>()
onMounted(() => {})
</script>
<style lang="scss" scoped></style>

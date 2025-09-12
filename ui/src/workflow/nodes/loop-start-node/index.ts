import LoopStartNodeVue from './index.vue'
import { AppNode, AppNodeModel } from '@/workflow/common/app-node'
class LoopStartNode extends AppNode {
  constructor(props: any) {
    super(props, LoopStartNodeVue)
  }
}
export default {
  type: 'loop-start-node',
  model: AppNodeModel,
  view: LoopStartNode,
}

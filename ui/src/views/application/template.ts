import { baseNodes } from '@/workflow/common/data'
import { t } from '@/locales'

// Function to create templates with current language translations
export const getApplicationTemplate = () => ({
  blank: {
    edges: [],
    nodes: baseNodes,
  },
  assistant: {
    nodes: [
      {
        id: 'base-node',
        type: 'base-node',
        x: 120,
        y: 260.30849999999987,
        properties: {
          config: {},
          height: 734.766,
          showNode: true,
          stepName: t('views.applicationWorkflow.nodes.baseNode.label'),
          node_data: {
            desc: '模板',
            name: t('views.application.templates.assistant.name'),
            prologue: t('views.application.templates.assistant.prologue'),
            tts_type: 'BROWSER',
          },
          input_field_list: [],
          user_input_config: {
            title: t('views.applicationWorkflow.userInput'),
          },
          api_input_field_list: [],
          user_input_field_list: [],
        },
      },
      {
        id: 'start-node',
        type: 'start-node',
        x: 120,
        y: 929.6914999999999,
        properties: {
          config: {
            fields: [
              {
                label: t('views.applicationWorkflow.nodes.startNode.question'),
                value: 'question',
              },
            ],
            globalFields: [
              {
                label: t('views.applicationWorkflow.nodes.startNode.currentTime'),
                value: 'time',
              },
              {
                label: t('views.application.form.historyRecord.label'),
                value: 'history_context',
              },
              {
                label: t('chat.chatId'),
                value: 'chat_id',
              },
            ],
          },
          fields: [
            {
              label: '用户问题',
              value: 'question',
            },
          ],
          height: 364,
          showNode: true,
          stepName: t('views.applicationWorkflow.nodes.startNode.label'),
          globalFields: [
            {
              label: '当前时间',
              value: 'time',
            },
          ],
        },
      },
      {
        id: 'fd0324fc-f5e4-4fa6-a2d9-cb251b467605',
        type: 'search-knowledge-node',
        x: 710,
        y: 929.6914999999999,
        properties: {
          config: {
            fields: [
              {
                label: t('views.applicationWorkflow.nodes.searchKnowledgeNode.paragraph_list'),
                value: 'paragraph_list',
              },
              {
                label: t(
                  'views.applicationWorkflow.nodes.searchKnowledgeNode.is_hit_handling_method_list',
                ),
                value: 'is_hit_handling_method_list',
              },
              {
                label: t('views.applicationWorkflow.nodes.searchKnowledgeNode.result'),
                value: 'data',
              },
              {
                label: t('views.applicationWorkflow.nodes.searchKnowledgeNode.directly_return'),
                value: 'directly_return',
              },
            ],
          },
          height: 794,
          showNode: true,
          stepName: t('views.applicationWorkflow.nodes.searchKnowledgeNode.label'),
          condition: 'AND',
          node_data: {
            knowledge_id_list: [],
            knowledge_setting: {
              top_n: 3,
              similarity: 0.6,
              search_mode: 'embedding',
              max_paragraph_char_number: 5000,
            },
            question_reference_address: ['start-node', 'question'],
            all_knowledge_id_list: [],
            knowledge_list: [],
          },
        },
      },
      {
        id: '420a6e4f-44ff-4847-bb81-0923630846b5',
        type: 'condition-node',
        x: 1300,
        y: 929.6914999999999,
        properties: {
          width: 600,
          config: {
            fields: [
              {
                label: t('views.applicationWorkflow.nodes.conditionNode.branch_name'),
                value: 'branch_name',
              },
            ],
          },
          height: 544.148,
          showNode: true,
          stepName: t('views.applicationWorkflow.nodes.conditionNode.label'),
          condition: 'AND',
          node_data: {
            branch: [
              {
                id: '7887',
                type: 'IF',
                condition: 'and',
                conditions: [
                  {
                    field: ['fd0324fc-f5e4-4fa6-a2d9-cb251b467605', 'is_hit_handling_method_list'],
                    value: 1,
                    compare: 'is_not_null',
                  },
                ],
              },
              {
                id: '6847',
                type: 'ELSE IF 1',
                condition: 'and',
                conditions: [
                  {
                    field: ['fd0324fc-f5e4-4fa6-a2d9-cb251b467605', 'paragraph_list'],
                    value: 1,
                    compare: 'is_not_null',
                  },
                ],
              },
              {
                id: '2794',
                type: 'ELSE',
                condition: 'and',
                conditions: [],
              },
            ],
          },
          branch_condition_list: [
            {
              index: 0,
              height: 121.383,
              id: '7887',
            },
            {
              index: 1,
              height: 121.383,
              id: '6847',
            },
            {
              index: 2,
              height: 44,
              id: '2794',
            },
          ],
        },
      },
      {
        id: '36a440a9-5b00-4d82-b13a-8e7819112918',
        type: 'reply-node',
        x: 1890,
        y: 120,
        properties: {
          config: {
            fields: [
              {
                label: t('views.applicationWorkflow.nodes.replyNode.content'),
                value: 'answer',
              },
            ],
          },
          height: 386,
          showNode: true,
          stepName: t('views.applicationWorkflow.nodes.replyNode.label'),
          condition: 'AND',
          node_data: {
            fields: ['fd0324fc-f5e4-4fa6-a2d9-cb251b467605', 'directly_return'],
            content: '',
            is_result: true,
            reply_type: 'referencing',
          },
        },
      },
      {
        id: 'f7c3b4a2-cb80-4e47-b050-7fef0315daaf',
        type: 'ai-chat-node',
        x: 1890,
        y: 929.6914999999999,
        properties: {
          config: {
            fields: [
              {
                label: t('views.applicationWorkflow.nodes.aiChatNode.answer'),
                value: 'answer',
              },
              {
                label: t('views.applicationWorkflow.nodes.aiChatNode.think'),
                value: 'reasoning_content',
              },
            ],
          },
          height: 993.383,
          showNode: true,
          stepName: t('views.applicationWorkflow.nodes.aiChatNode.label'),
          condition: 'AND',
          node_data: {
            prompt: t('views.applicationWorkflow.nodes.aiChatNode.defaultPrompt'),
            system: '',
            model_id: '',
            is_result: true,
            max_tokens: null,
            temperature: null,
            dialogue_type: 'WORKFLOW',
            model_setting: {
              reasoning_content_end: '</think>',
              reasoning_content_start: '<think>',
              reasoning_content_enable: false,
            },
            dialogue_number: 1,
          },
        },
      },
      {
        id: '04dd6c1e-95f9-4757-bb3e-134d503fce54',
        type: 'reply-node',
        x: 1890,
        y: 1798.383,
        properties: {
          config: {
            fields: [
              {
                label: '内容',
                value: 'answer',
              },
            ],
          },
          height: 504,
          showNode: true,
          stepName: t('views.applicationWorkflow.nodes.replyNode.label') + '1',
          condition: 'AND',
          node_data: {
            fields: [],
            content: t('views.applicationWorkflow.nodes.replyNode.noResultContent'),
            is_result: true,
            reply_type: 'content',
          },
        },
      },
    ],
    edges: [
      {
        id: '73f8992c-65ef-409a-a151-378d0927f2aa',
        type: 'app-edge',
        sourceNodeId: 'start-node',
        targetNodeId: 'fd0324fc-f5e4-4fa6-a2d9-cb251b467605',
        startPoint: {
          x: 280,
          y: 929.6914999999999,
        },
        endPoint: {
          x: 550,
          y: 929.6914999999999,
        },
        properties: {},
        pointsList: [
          {
            x: 280,
            y: 929.6914999999999,
          },
          {
            x: 390,
            y: 929.6914999999999,
          },
          {
            x: 440,
            y: 929.6914999999999,
          },
          {
            x: 550,
            y: 929.6914999999999,
          },
        ],
        sourceAnchorId: 'start-node_right',
        targetAnchorId: 'fd0324fc-f5e4-4fa6-a2d9-cb251b467605_left',
      },
      {
        id: '6a8d23d9-5179-424e-80c2-f08d37cdb8d4',
        type: 'app-edge',
        sourceNodeId: 'fd0324fc-f5e4-4fa6-a2d9-cb251b467605',
        targetNodeId: '420a6e4f-44ff-4847-bb81-0923630846b5',
        startPoint: {
          x: 870,
          y: 929.6914999999999,
        },
        endPoint: {
          x: 1010,
          y: 929.6914999999999,
        },
        properties: {},
        pointsList: [
          {
            x: 870,
            y: 929.6914999999999,
          },
          {
            x: 980,
            y: 929.6914999999999,
          },
          {
            x: 900,
            y: 929.6914999999999,
          },
          {
            x: 1010,
            y: 929.6914999999999,
          },
        ],
        sourceAnchorId: 'fd0324fc-f5e4-4fa6-a2d9-cb251b467605_right',
        targetAnchorId: '420a6e4f-44ff-4847-bb81-0923630846b5_left',
      },
      {
        id: '56006748-d9fe-491b-a14b-04fd568cac08',
        type: 'app-edge',
        sourceNodeId: '420a6e4f-44ff-4847-bb81-0923630846b5',
        targetNodeId: '36a440a9-5b00-4d82-b13a-8e7819112918',
        startPoint: {
          x: 1590,
          y: 793.3089999999999,
        },
        endPoint: {
          x: 1730,
          y: 120,
        },
        properties: {},
        pointsList: [
          {
            x: 1590,
            y: 793.3089999999999,
          },
          {
            x: 1700,
            y: 793.3089999999999,
          },
          {
            x: 1620,
            y: 120,
          },
          {
            x: 1730,
            y: 120,
          },
        ],
        sourceAnchorId: '420a6e4f-44ff-4847-bb81-0923630846b5_7887_right',
        targetAnchorId: '36a440a9-5b00-4d82-b13a-8e7819112918_left',
      },
      {
        id: '9bc8721b-07aa-4730-9347-910ed64e26b9',
        type: 'app-edge',
        sourceNodeId: '420a6e4f-44ff-4847-bb81-0923630846b5',
        targetNodeId: 'f7c3b4a2-cb80-4e47-b050-7fef0315daaf',
        startPoint: {
          x: 1590,
          y: 922.6919999999999,
        },
        endPoint: {
          x: 1730,
          y: 929.6914999999999,
        },
        properties: {},
        pointsList: [
          {
            x: 1590,
            y: 922.6919999999999,
          },
          {
            x: 1700,
            y: 922.6919999999999,
          },
          {
            x: 1620,
            y: 929.6914999999999,
          },
          {
            x: 1730,
            y: 929.6914999999999,
          },
        ],
        sourceAnchorId: '420a6e4f-44ff-4847-bb81-0923630846b5_6847_right',
        targetAnchorId: 'f7c3b4a2-cb80-4e47-b050-7fef0315daaf_left',
      },
      {
        id: 'c276a5b6-ec29-4ab9-b911-a0a929ff193f',
        type: 'app-edge',
        sourceNodeId: '420a6e4f-44ff-4847-bb81-0923630846b5',
        targetNodeId: '04dd6c1e-95f9-4757-bb3e-134d503fce54',
        startPoint: {
          x: 1590,
          y: 1013.3834999999998,
        },
        endPoint: {
          x: 1730,
          y: 1798.383,
        },
        properties: {},
        pointsList: [
          {
            x: 1590,
            y: 1013.3834999999998,
          },
          {
            x: 1700,
            y: 1013.3834999999998,
          },
          {
            x: 1620,
            y: 1798.383,
          },
          {
            x: 1730,
            y: 1798.383,
          },
        ],
        sourceAnchorId: '420a6e4f-44ff-4847-bb81-0923630846b5_2794_right',
        targetAnchorId: '04dd6c1e-95f9-4757-bb3e-134d503fce54_left',
      },
    ],
  },
})

// Export for backward compatibility
export const applicationTemplate = getApplicationTemplate()

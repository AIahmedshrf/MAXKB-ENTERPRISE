# coding=utf-8
"""
    @project: MaxKB
    @Author：虎虎
    @file： base_data_source_local_node.py
    @date：2025/11/11 10:30
    @desc:
"""
from application.flow.i_step_node import NodeResult
from application.flow.step_node.data_source_local_node.i_data_source_local_node import IDataSourceLocalNode
from common import forms
from common.forms import BaseForm


class BaseDataSourceLocalNodeForm(BaseForm):
    api_key = forms.PasswordInputField('API Key', required=True)


class BaseDataSourceLocalNode(IDataSourceLocalNode):
    def save_context(self, details, workflow_manage):
        pass

    @staticmethod
    def get_form_class():
        return BaseDataSourceLocalNodeForm

    def execute(self, file_format, max_file_number, file_max_size, **kwargs) -> NodeResult:
        pass

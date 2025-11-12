# coding=utf-8
"""
    @project: MaxKB
    @Author：niu
    @file： base_data_source_web_node.py
    @date：2025/11/12 13:47
    @desc:
"""
from application.flow.i_step_node import NodeResult
from application.flow.step_node.data_source_web_node.i_data_source_web_node import IDataSourceWebNode
from common import forms
from common.forms import BaseForm


class BaseDataSourceWebNodeForm(BaseForm):
    source_url = forms.TextInputField('source url', required=True)
    selector = forms.TextInputField('knowledge selector', required=True)


class BaseDataSourceWebNode(IDataSourceWebNode):
    def save_context(self, details, workflow_manage):
        pass

    @staticmethod
    def get_form_class():
        return BaseDataSourceWebNodeForm

    def execute(self, **kwargs) -> NodeResult:
        pass
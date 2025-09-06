# -*- coding: utf-8 -*-

from rest_framework import serializers

from tools.models import ToolFolder
from apps.common.utils.translation_mixin import FolderTranslationMixin


class ToolFolderTreeSerializer(FolderTranslationMixin, serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model = ToolFolder
        fields = ['id', 'name', 'desc', 'user_id', 'workspace_id', 'parent_id', 'children']

    def get_children(self, obj):
        return ToolFolderTreeSerializer(obj.get_children(), many=True).data


class ToolFolderFlatSerializer(serializers.ModelSerializer):
    """只序列化当前层的文件夹，不包含子节点"""

    class Meta:
        model = ToolFolder
        fields = ['id', 'name', 'desc', 'user_id', 'workspace_id', 'parent_id']

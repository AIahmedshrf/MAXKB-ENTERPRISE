"""
Serializer mixin for translating special database strings
"""
from rest_framework import serializers
from apps.common.utils.i18n_manager import I18nManager


class TranslationMixin(serializers.Serializer):
    """
    Mixin to add translation support for special database strings
    """
    
    def to_representation(self, instance):
        """
        Override to add translation markers for special strings
        """
        data = super().to_representation(instance)
        
        # Get language from request context if available
        request = self.context.get('request')
        language = None
        
        if request:
            # Try to get language from Accept-Language header
            accept_language = request.META.get('HTTP_ACCEPT_LANGUAGE', '')
            if 'pt' in accept_language.lower():
                language = 'pt-BR'
            elif 'en' in accept_language.lower():
                language = 'en-US'
            else:
                language = 'zh-CN'
        
        # Process data for frontend translation markers
        return I18nManager.prepare_for_frontend(data, language)


class FolderTranslationMixin(TranslationMixin):
    """
    Specific mixin for folder serializers that need root directory translation
    """
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        
        # Special handling for root directory
        if hasattr(instance, 'name') and I18nManager.is_root_directory(instance.name):
            # Add translation key for frontend
            data['_translation_key'] = 'common.rootDirectory'
            # Keep the original name for backward compatibility
            # Frontend will use _translation_key if present
        
        return data

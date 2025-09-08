"""
I18n Manager for MaxKB Backend
Centralizes backend translations for special strings stored in database
"""
from typing import Dict, Optional
import logging

logger = logging.getLogger(__name__)


class I18nManager:
    """
    Translation manager for special database strings
    Only handles the root directory name that's stored in DB
    """
    
    # Special strings that need translation
    SPECIAL_STRINGS = {
        '根目录': 'common.rootDirectory',
        'Root': 'common.rootDirectory', 
        'Raiz': 'common.rootDirectory',
        'Diretório Raiz': 'common.rootDirectory'
    }
    
    # Translation mapping for root directory
    ROOT_DIRECTORY_TRANSLATIONS = {
        'zh-CN': '根目录',
        'en-US': 'Root',
        'pt-BR': 'Raiz'
    }
    
    @classmethod
    def get_translation_key(cls, text: str) -> Optional[str]:
        """
        Check if text is a special string that needs translation
        
        Args:
            text: Text to check
            
        Returns:
            Translation key if text is special, None otherwise
        """
        return cls.SPECIAL_STRINGS.get(text)
    
    @classmethod
    def is_root_directory(cls, name: str) -> bool:
        """
        Check if a name is a root directory in any language
        
        Args:
            name: Name to check
            
        Returns:
            True if name matches root directory in any language
        """
        return name in cls.ROOT_DIRECTORY_TRANSLATIONS.values()
    
    @classmethod
    def get_root_directory_name(cls, language: str = 'zh-CN') -> str:
        """
        Get the root directory name for a specific language
        
        Args:
            language: Target language code
            
        Returns:
            Translated root directory name
        """
        return cls.ROOT_DIRECTORY_TRANSLATIONS.get(language, '根目录')
    
    @classmethod
    def translate_if_special(cls, text: str, language: str = 'zh-CN') -> str:
        """
        Translate text if it's a special string, otherwise return as-is
        
        Args:
            text: Text to potentially translate
            language: Target language
            
        Returns:
            Translated text or original text
        """
        if cls.is_root_directory(text):
            return cls.get_root_directory_name(language)
        return text
    
    @classmethod
    def prepare_for_frontend(cls, data: any, language: str = None) -> any:
        """
        Prepare data for frontend by adding translation keys for special strings
        
        Args:
            data: Data to process (dict, list, or any)
            language: Optional language to force translation
            
        Returns:
            Processed data with translation markers
        """
        if isinstance(data, dict):
            # Process dictionary
            if 'name' in data and cls.is_root_directory(data.get('name', '')):
                # Add a translation key marker for frontend
                data['_translation_key'] = 'common.rootDirectory'
                # Keep original for backward compatibility
                if language:
                    data['name'] = cls.get_root_directory_name(language)
            
            # Recursively process nested structures
            for key, value in data.items():
                if isinstance(value, (dict, list)):
                    data[key] = cls.prepare_for_frontend(value, language)
                    
        elif isinstance(data, list):
            # Process list items
            return [cls.prepare_for_frontend(item, language) for item in data]
            
        return data

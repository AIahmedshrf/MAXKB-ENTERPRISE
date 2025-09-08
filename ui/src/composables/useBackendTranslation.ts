/**
 * Composable for handling dynamic translations from backend
 * Automatically translates items with _translation_key property
 */
import { useI18n } from 'vue-i18n'

export function useBackendTranslation() {
  const { t } = useI18n()

  /**
   * Process data from backend and apply translations
   * @param data - Data from backend that may contain _translation_key
   * @returns Processed data with translations applied
   */
  function translateData(data: any): any {
    if (!data) return data

    // Handle arrays
    if (Array.isArray(data)) {
      return data.map(item => translateData(item))
    }

    // Handle objects
    if (typeof data === 'object') {
      const translated = { ...data }
      
      // Check if this object has a translation key
      if (data._translation_key) {
        // Apply translation to name field
        if (data.name) {
          translated.name = t(data._translation_key)
        }
      }

      // Recursively process nested objects
      Object.keys(translated).forEach(key => {
        if (key !== '_translation_key' && typeof translated[key] === 'object') {
          translated[key] = translateData(translated[key])
        }
      })

      return translated
    }

    return data
  }

  /**
   * Check if a string is a root directory in any language
   * @param name - Name to check
   * @returns true if it's a root directory name
   */
  function isRootDirectory(name: string): boolean {
    const rootNames = ['根目录', 'Root', 'Raiz', 'Diretório Raiz']
    return rootNames.includes(name)
  }

  /**
   * Get the translated root directory name
   * @returns Translated root directory name
   */
  function getRootDirectoryName(): string {
    return t('common.rootDirectory')
  }

  return {
    translateData,
    isRootDirectory,
    getRootDirectoryName
  }
}

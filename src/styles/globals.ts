import { useColorScheme } from 'react-native'

export const colors = {
  black: '#000000',
  white: '#ffffff',

  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
  gray950: '#030712'
}

type ColorKey = keyof typeof colors

export const useColor = (): ((lightKey: ColorKey, darkKey?: ColorKey) => string) => {
  const colorScheme = useColorScheme()

  return function (lightKey: ColorKey, darkKey?: ColorKey): string {
    return colorScheme === 'dark'
      ? darkKey ? colors[darkKey] : colors[lightKey]
      : colors[lightKey]
  }
}

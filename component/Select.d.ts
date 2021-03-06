import * as React from 'react'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers'
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    HelpersProps,
    MainColorsProps,
    SizeProps {
  isFocused?: boolean
  isHovered?: boolean
  isLoading?: boolean
  isMultiple?: boolean
}
export declare class Select extends React.Component<SelectProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface AProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isActive?: boolean
}
export declare class A extends React.Component<AProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export declare class Footer extends React.Component<FooterProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

import * as React from 'react'
import { HelpersProps, MainColorsProps } from './modifiers'
interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    MainColorsProps {}
export declare class Notification extends React.Component<NotificationProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}

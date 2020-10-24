import * as React from 'react'
import { HelpersProps, TextColorHelpersProps } from './modifiers'
export interface ButtonsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    TextColorHelpersProps {
  areLarge?: boolean
  areMedium?: boolean
  areSmall?: boolean
}
export declare class Buttons extends React.Component<ButtonsProps> {
  render(): JSX.Element
}

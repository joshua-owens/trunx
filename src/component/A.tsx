import * as classnames from 'classnames'
import * as React from 'react'

import { trunxPropsToClassnamesObject } from './classNames'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface AProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isActive?: boolean
}

export class A extends React.Component<AProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const [
      modifiersProps,
      { children, className, isActive, ...props },
    ] = extractModifiersProps(this.props)

    return (
      <a
        className={classnames(
          className,
          trunxPropsToClassnamesObject({ isActive }),
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
}

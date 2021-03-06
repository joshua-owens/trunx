import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface PanelProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export interface PanelBlockProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isActive?: boolean
}

export interface PanelHeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}

export interface PanelIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}

export interface PanelTabsProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}

class PanelBlock extends React.Component<PanelBlockProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isActive, ...props } = this.props

    return renderElement('a', props, bulmaClassName.panelBlock, { isActive })
  }
}

class PanelHeading extends React.Component<PanelHeadingProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('p', this.props, bulmaClassName.panelHeading)
  }
}

class PanelIcon extends React.Component<PanelIconProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('span', this.props, bulmaClassName.panelIcon)
  }
}

class PanelTabs extends React.Component<PanelTabsProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('p', this.props, bulmaClassName.panelTabs)
  }
}

export class Panel extends React.Component<PanelProps> {
  static Block = PanelBlock
  static Heading = PanelHeading
  static Icon = PanelIcon
  static Tabs = PanelTabs

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('nav', this.props, bulmaClassName.panel)
  }
}

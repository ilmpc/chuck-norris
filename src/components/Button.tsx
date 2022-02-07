import clsx from 'clsx'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

const variants = {
  primary: 'is-primary',
  success: 'is-success',
  warning: 'is-warning',
  error: 'is-error',
} as const

type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  variant?: keyof typeof variants
}

const composeClassName = ({ className, disabled, variant }: Pick<ButtonProps, 'className' | 'disabled' | 'variant'>) =>
  clsx(className, 'nes-btn', disabled && 'is-disabled', variant && variants[variant])

export const Button: React.FC<ButtonProps> = (props) => <button {...props} className={composeClassName(props)} />

export const ButtonLink: React.FC<LinkProps & Pick<ButtonProps, 'variant'>> = (props) => (
  <Link {...props} className={composeClassName(props)} />
)

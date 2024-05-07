import React from 'react'
// import { StyledButton } from './Button.styles'
import * as S from './Button.styles'

export default function Button({ children, type = "button", onClick, variant = "none", disabled = false }) {
  return (
    <S.Button type={type} onClick={onClick} variant={variant} disabled={disabled}>{children}</S.Button>
  )
}
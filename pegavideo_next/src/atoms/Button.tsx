import React from 'react'
import { ButtonElem } from '~/styles/atoms/Button-css'

interface props {
  color: string
  cta: string
  className?: string
  type?: "button" | "submit"
}


const Button: React.FC<props> = (props) => {

  return (
        <ButtonElem type={props.type ?? "button"} color={props.color} className={props.className}>
          {props.cta}
        </ButtonElem>
  )
}
export default Button

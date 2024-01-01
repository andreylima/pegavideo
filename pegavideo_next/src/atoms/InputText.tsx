import React from 'react'
import { InputElem } from '~/styles/atoms/Input-css'
interface props {
  placeholder: string
}


const InputText: React.FC<props> = (props) => {
  
  return (
        <InputElem type='text' placeholder={props.placeholder}/>
  )
}
export default InputText

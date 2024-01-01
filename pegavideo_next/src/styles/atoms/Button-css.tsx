import styled from 'styled-components'

export const ButtonElem = styled.button<{ color?: string }>`
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    color: #ffffff;
    text-align: center;
    border: 0;
    outline: none;
    display: block;
    border-radius: 20px;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.color};
    cursor: pointer;
    &.inactive 
    {
        -webkit-filter: brightness(70%);
    }
    &:hover 
    {
        -webkit-filter: brightness(70%);
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
`

import styled from 'styled-components'

export const HeroDownloadElement = styled.section`
    display: flex;
    justify-content: center;
    .container
    {
        justify-content: center;
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        width: 100%;
    }
    background-color: ${props => props.theme.pegavideoTokens.roxo};
    h2 
    {
        color: ${props => props.theme.pegavideoTokens.amarelo};
        line-height: 120%;
        text-align: left;
        max-width: 700px;
        font-size: 50px;
    }
    .featured-image 
    {
        width: 600px;
    }
    .buttonWrapper 
    {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
        width: 450px;
        button:first-child
        {
            margin-right: 20px;
        }
    }
    .inputGroup 
    {
        display: flex;
        input {
            margin-right: 20px;
        }
    }
`

import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Mono", monospace;
    list-style: none;
  } `

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15em auto;
`

export default EstiloGlobal

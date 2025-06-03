import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: rgba(74, 74, 74, 0.25);
  height: 100vh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #a1a1a1;
  font-weight: bold;

  &:focus {
    border: 1px solid #a1a1a1;
    outline: 2px solid #e90179;
    color: #2c2c2c;
  }
`

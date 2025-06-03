import styled from 'styled-components'

import { Props } from '.'

type PropsAtivo = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsAtivo>`
  padding: 8px;
  color: ${(props) => (props.ativo ? '#e90178' : '#5e5e5e')};
  border: 1px solid ${(props) => (props.ativo ? '#e90178' : '#a1a1a1')};
  border-radius: 8px;
  background-color: #fcfcfc;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 11px;
`

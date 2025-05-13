import styled from 'styled-components'
import { Root } from '../../styles'

export const FormVagas = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Root.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${Root.corPrincipal};
`
export const BotaoVagas = styled.button`
  background-color: ${Root.corPrincipal};
  border: 1px solid ${Root.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Root.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

import styled from 'styled-components'
import { Root } from '../../styles'

export const HeroForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Root.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  > div {
    position: relative;
    color: #eee;
  }

  @media (max-width: 768px) {
  .form {
    height: auto;
    padding: 24px 0;
  }
`
export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    .heroTitle {
      font-size: 32px;
    }
  }
`

import styled from 'styled-components'

export type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  background-color-red;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

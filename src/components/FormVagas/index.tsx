import { FormEvent, useState } from 'react'
import { Props } from './style'
import { Botao, Formulario, Campo } from './style'

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao>Pesquisar</Botao>
    </Formulario>
  )
}
export default FormVagas

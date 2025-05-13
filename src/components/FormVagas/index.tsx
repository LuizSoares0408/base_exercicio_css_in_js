import { FormEvent, SetStateAction, useState } from 'react'
import { FormVagas, BotaoVagas, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagasComponent = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVagas onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <BotaoVagas type="submit">Pesquisar</BotaoVagas>
    </FormVagas>
  )
}
export default FormVagasComponent

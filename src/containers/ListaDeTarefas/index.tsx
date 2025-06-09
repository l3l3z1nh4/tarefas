import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles/index'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = tarefas
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter((tarefa) =>
        tarefa.titulo.toLowerCase().includes(termo.toLowerCase())
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefas.filter(
          (tarefa) => tarefa.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefas.filter((tarefa) => tarefa.status === valor)
      }

      return tarefasFiltradas
    } else {
      return tarefas
    }
  }

  const tarefasFiltradas = filtraTarefas()

  return (
    <MainContainer>
      <Titulo as="p">
        {tarefasFiltradas.length} tarefa(s) marcada(s) como{' '}
        {`"${criterio}${valor !== undefined ? `: ${valor}"` : '"'}`}
      </Titulo>

      <ul>
        {tarefasFiltradas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaDeTarefas

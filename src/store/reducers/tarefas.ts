import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Estudar Redux para entender o gerenciamento de estado',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Estudar TypeScript para melhorar a tipagem do código',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Estudar React para entender a biblioteca de UI',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer

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
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaCadastrada = state.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      if (tarefaJaCadastrada) {
        alert('Tarefa já cadastrada')
      } else {
        state.push(action.payload)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.findIndex(
        (tarefa) => tarefa.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer

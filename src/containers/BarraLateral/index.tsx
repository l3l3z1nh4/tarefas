import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={5} />
        <FiltroCard legenda="concluidas" contador={5} />
        <FiltroCard legenda="urgente" contador={5} />
        <FiltroCard legenda="importante" contador={5} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard ativo legenda="todas" contador={5} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral

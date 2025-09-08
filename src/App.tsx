import './App.scss'
import Header from './hearder'

function App() {
  return (
    <>
      <Header />
      <form action="POST">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome" autoFocus aria-description='Digite seu primeiro nome'/>
        <label htmlFor="monthlyFee">Mensalidade</label>
        <input type="text" inputMode='numeric' id="monthlyFee" placeholder="100,00 - 9000,00" pattern="[0-9]{3,4},[0-9]{2}" required aria-description='Digite o valor da mensalidade, entre 100,00 e 9000,00'/>
        <label htmlFor="timeInYears">Tempo (anos)</label>
        <select name="timeInYears" id="timeInYears">
          <option value="1">1 ano</option>
          <option value="2">2 anos</option>
          <option value="3">3 anos</option>
        </select>
        <input type="submit" value="Calcular" />
      </form>
    </>
  )
}

export default App

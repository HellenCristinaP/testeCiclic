import './App.scss'
import ciclicLogo from './assets/ciclic-logo.png'

function App() {
  return (
    <>
      <header><img src={ciclicLogo} alt="Ciclic Logo" /></header>
      <form action="POST">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome" autoFocus />
        <label htmlFor="monthlyFee">Mensalidade</label>
        <input type="text" inputMode='numeric' id="monthlyFee" placeholder="100,00 - 9000,00" pattern="[0-9]{3,4},[0-9]{2}" required/>
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

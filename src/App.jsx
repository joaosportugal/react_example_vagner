import Header from "./Header"
import Section from "./Section"

function App() {
  return (
    <>
      <Header />

      <Section
        nome="Esportes"
        colorBack="red"
      />

      <Section
        nome="Finanças"
        colorBack="green"
      />
    </>
  )
}

export default App

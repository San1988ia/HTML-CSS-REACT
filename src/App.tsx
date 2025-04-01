import "./App.scss";
import { FadelnSection } from "./components/FadelnSection/FadelnSection";

function App() {
  return (
    <div className="app">
      <FadelnSection className="app__section app__section--hero">
        <h1>Ett demo för test</h1>
        <p>Skrolla ner för att se mer innehåll</p>
      </FadelnSection>

      <FadelnSection
        className="app__section app__section--content"
        threshold={0.4}
        delay={400}
      >
        <h2>Om Oss</h2>
        <p>Här kan du söka olika jobb tjänster</p>
      </FadelnSection>

      <FadelnSection
        className="app__section app__section--features"
        threshold={0.4}
        delay={400}
      >
        <h2>Våra tjänster</h2>
        <div className="features-grid">
          <div className="feature">Arbetssökande heltid</div>
          <div className="feature">Arbetssökande 75%</div>
          <div className="feature">Arbetssökande deltid</div>
          <div className="feature">Arbetssökande 25%</div>
        </div>
      </FadelnSection>

      <FadelnSection
        className="app__section app__section--contact"
        threshold={0.5}
        delay={500}
      >
        <h2>Kontakta oss</h2>
        <form className="contact-form">
          <input type="text" placeholder="Namn" />
          <input type="email" placeholder="E-post" />
          <textarea placeholder="Meddelande"></textarea>
          <button type="submit">Skicka</button>
        </form>
      </FadelnSection>
    </div>
  );
}

export default App;

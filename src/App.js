import "bulma/css/bulma.css"
import ProfileCard from "./components/ProfileCard"
import alexaImgae from "./images/alexa.png"
import cortanaImage from "./images/cortana.png"
import siriImage from "./images/siri.png"

function App() {
  return (
    <>
      <section className="hero is-info mb-6">
        <div className="hero-body">
          <p className="title">The assistants</p>
        </div>
      </section>

      <div className="columns is-centered">
        <div className="column is-3">
          <ProfileCard image={alexaImgae} title="Alexa" handle="@Alexa" description="Alexa is Amazon assistant" />
        </div>
        <div className="column is-3">
          <ProfileCard image={cortanaImage} title="Cortana" handle="@Cortana" description="Cortana is Micorsoft assistant" />
        </div>
        <div className="column is-3">
          <ProfileCard image={siriImage} title="Siri" handle="@Siri" description="Siri is Apple assistant" />
        </div>
      </div>
    </>
  )
}

export default App

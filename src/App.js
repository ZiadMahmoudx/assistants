import ProfileCard from "./components/ProfileCard"
import alexaImgae from "./images/alexa.png"
import cortanaImage from "./images/cortana.png"
import siriImage from "./images/siri.png"

function App() {
  return (
    <>
      <h1>The assistants</h1>
      <ProfileCard image={alexaImgae} title="Alexa" handle="@Alexa" description="Alexa is Amazon assistant" />
      <ProfileCard image={cortanaImage} title="Cortana" handle="@Cortana" description="Cortana is Micorsoft assistant" />
      <ProfileCard image={siriImage} title="Siri" handle="@Siri" description="Siri is Apple assistant" />
    </>
  )
}

export default App

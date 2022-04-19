import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';
import { TextBox } from '../components/TextBox';
import { projects } from '../utils/projectsData';
import { ToggleDarkMode } from '../components/ToggleDarkMode';
const SpeechSDK = require('microsoft-cognitiveservices-speech-sdk');


const Home = ({value}) => {
  console.log(value + '--------------');
  return (
    <>
      <div className="min-h-screen dark:bg-gray-800 dark:text-gray-200">
        <div className="home">
          <div className="flex justify-center mt-8">
            <ToggleDarkMode />
          </div>
          <h1>Nurse Speak</h1>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => {
              const Icon = projectIcons[project.id];
              return <SmallCard key={project.id} Icon={Icon} title={project.name} phrase={project.phrase} onTextToSpeech={textToSpeech}/>;
            })}
          </div>
            <TextBox onTextToSpeech={textToSpeech}/>
          {/* <button onClick={() => textToSpeech()}>test</button> */}
          {/* tailwindの試し書き */}
          {/* <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1> */}
        </div>
      </div>
    </>
  );
}

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(process.env.HOSTNAME +'/api/textToSpeech')
    .then((response) => {
        if (!response.ok) {
            throw new Error();
        }
        response.json().then((value) => {
            console.log(value);
            return {
              props: value
            }
          }
        )
        }, (error) => {
          console.error("error:", error.message);
        });
    return {
      props: {}
    }
}

const textToSpeech = async (phrase) => {
  fetch('/api/textToSpeech')
    .then((response) => {
      if (!response.ok) {
          throw new Error();
      }
      response.json().then((value) => {
        const phraseText = phrase;
        let speechConfig = SpeechSDK.SpeechConfig.fromSubscription(value.key, value.region);
        speechConfig.speechSynthesisLanguage = "ja-JP";
        speechConfig.speechSynthesisVoiceName = "ja-JP-KeitaNeural";

        const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);
        synthesizer.speakTextAsync(
          phraseText,
          function (result) {
              console.log(result);
              synthesizer.close();
          }, function (err) {
              console.log(err);
              synthesizer.close();
          }
      )
      }, (error) => {
        console.error("error:", error.message);
      });
  })
}

import { Resume } from './components/Resume'
import { resumeData } from './data/resumeData'
import './styles/resume.css'

function App() {
  return (
    <>
      <Resume data={resumeData} />
    </>
  )
}

export default App

import WelcomeSection from "./components/sections/welcome/welcome_section"
import AboutMeSection from "./components/sections/about-me/about-me_section"
import SkilsSection from "./components/sections/skils/skils_section"

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <WelcomeSection/>
      <AboutMeSection/>
      <SkilsSection/>
    </div>
  )
}

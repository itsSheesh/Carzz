// ========== components ========== \\
import Carousel from '../Carousel'
import Details from '../Details'
import ModelsNav from '../ModelsNav'

const Landing:React.FC = ():JSX.Element => {
  return (
    <main className="bg-[#684FAE]">
        <div className="text-center">
          <ModelsNav />
          <Carousel />
          <Details />
        </div>
    </main>
  )
}

export default Landing
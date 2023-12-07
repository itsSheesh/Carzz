// ========== components ========== \\
import Carousel from '../Carousel'
import Details from '../Details'
import ModelsNav from '../ModelsNav'

const Landing:React.FC = ():JSX.Element => {
  return (
    <main className="bg-[#684FAE] h-[85%] flex flex-col justify-between">
        <ModelsNav />
        <Carousel />
        <Details />
    </main>
  )
}

export default Landing
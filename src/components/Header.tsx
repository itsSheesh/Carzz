// ========== components ========== \\
import SearchIcon from "./Icons/Search"

const Header:React.FC = ():JSX.Element => {
  return (
    <header className="flex h-[100px] items-center px-20">
        <div className="justify-self-start cursor-pointer font-RubikBubbles text-2xl">Carzz</div>
        <div className="ml-10 cursor-pointer">Menu</div>
        <div className="ml-auto mr-10">lang</div>
        <div className="">
            <SearchIcon/>
        </div>
    </header>
  )
}

export default Header
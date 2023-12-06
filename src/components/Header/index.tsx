
const Header:React.FC = ():JSX.Element => {
  return (
    <header className="flex h-[100px] items-center px-20 justify-between">
        <div className="cursor-pointer font-RubikBubbles text-2xl">Carzz</div>
        <div className="">
          <input
            className="outline-none py-2 px-4 rounded-sm"
            type="text"
            placeholder="Type your brand here..."
          />
        </div>
        <div className="cursor-pointer text-lg font-bold">Brands</div>
    </header>
  )
}

export default Header
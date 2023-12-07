const Header:React.FC = ():JSX.Element => {
  return (
    <header className="flex h-16 items-center px-20 bg-[#5E46A3] gap-12">   
        <div className="cursor-pointer font-RubikBubbles text-2xl text-white">Carzz</div>
        <div className="grow">
          <input
            className="outline-none w-full py-2 px-4 rounded-sm"
            type="text"
            placeholder="Brand name..."
          />
        </div>
        <div className="cursor-pointer text-lg font-bold text-white">Brands</div>
    </header>
  )
}

export default Header
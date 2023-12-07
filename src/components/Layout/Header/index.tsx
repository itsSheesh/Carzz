const Header:React.FC = ():JSX.Element => {
  return (
    <header className="flex flex-col md:flex-row md:h-16 py-4 items-center md:px-20 px-4 bg-[#5E46A3] md:gap-12 gap-2">   
        <div className="cursor-pointer font-RubikBubbles text-2xl text-white order-1">Carzz</div>
        <div className="grow w-full md:order-2 order-4">
          <input
            className="outline-none w-full py-2 px-4 rounded-lg"
            type="text"
            placeholder="Brand name..."
          />
        </div>
        <div className="cursor-pointer text-lg font-bold text-white order-3">Brands</div>
    </header>
  )
}

export default Header
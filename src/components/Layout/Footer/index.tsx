const Footer:React.FC = ():JSX.Element => {
  return (
    <div className="text-center w-full h-[3%] bg-[#ce8dbb] absolute bottom-0 left-1/2 -translate-x-1/2">Created with &hearts; by 
        <a
            className="font-bold"
            href="https://github.com/itsSheesh"
            target="blank"> sheesh </a>
        &
        <a
            className="font-bold"
            href="https://github.com/farshadhosseini"
            target="blank"> farshad</a>
    </div>
    
  )
}

export default Footer
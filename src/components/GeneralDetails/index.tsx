const GDetails:React.FC = ():JSX.Element => {
  return (
    <div className="flex text-white opacity-50 space-x-10">
        <div className="text-center">
            <h1>Horsepower</h1>
            <p>3000</p>        {/*dynamic value*/}
        </div>
        <div className="text-center">
            <h1>Gearbox</h1>
            <p>6-speed</p>   {/*dynamic value*/}
        </div>
        <div className="text-center">
            <h1>Year</h1>
            <p>2023</p>      {/*dynamic value*/}
        </div>
    </div>
  )
}

export default GDetails
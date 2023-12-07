const GDetails:React.FC = ():JSX.Element => {
  return (
    <div className="flex text-white space-x-10">
        <div>
            <h1>Horsepower</h1>
            <p>3000</p>        {/*dynamic value*/}
        </div>
        <div>
            <h1>Gearbox</h1>
            <p>6-speed</p>   {/*dynamic value*/}
        </div>
        <div>
            <h1>Year</h1>
            <p>2023</p>      {/*dynamic value*/}
        </div>
    </div>
  )
}

export default GDetails
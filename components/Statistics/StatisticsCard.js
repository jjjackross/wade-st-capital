const StatisticsCard = (props) => {
    return (
        <div className="flex flex-col justify-center px-4 py-12 md:py-20 w-1/2 md:w-1/4 h-full">
                <p className="text-center text-5xl text-slate-700 font-bold mb-4 lg:mb-6 lg:text-6xl">{ props.statisticValue }</p>
                <p className="text-center text-lg text-slate-700 uppercase font-semibold lg:text-2xl tracking-wider">{ props.statisticName }</p>
        </div>
    )
}

export default StatisticsCard;
import StatisticsCard from './StatisticsCard';

const Statistics = () => {
    return (
        <div className="min-h-fit w-full bg-slate-200">
            <div className="flex flex-wrap justify between h-full">
                <StatisticsCard statisticValue="2" statisticName="NFTs Purchased" />
                <StatisticsCard statisticValue="32%" statisticName="First Year ROI" />
                <StatisticsCard statisticValue="45,000" statisticName="Coins Mined" />
                <StatisticsCard statisticValue="68" statisticName="Happy Clients" />
            </div>
        </div>
    )
}

export default Statistics;
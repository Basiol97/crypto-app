const getChartData = (chartData:number[] | undefined, defaultPeriod:number) => {
    const data = chartData?.slice(0, defaultPeriod).map((item:any) => item[1]);
    return data;
};

export default getChartData;

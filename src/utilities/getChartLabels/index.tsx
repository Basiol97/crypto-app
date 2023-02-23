const getChartLabels = (chartData:number[] | undefined, defaultPeriod:number) => {
    const labels = chartData?.slice(0, defaultPeriod).map((item:any) => {
        const date = new Date(item[0]);
        const day = date.getDate();
        return day;
    });
    return labels;
};

export default getChartLabels; 
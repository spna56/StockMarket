import axios from 'axios'



export const fetchData = () => async (dispatch) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&outputsize=compact&apikey=demo`
    const data = await axios.get(url);
    const dat = data.data

    let stockChartXValues = [];
    let stockChartopenValues = [];
    let stockChartcloseValues = [];
    let stockCharthighValues = [];
    let stockChartlowValues = [];

    for (var key in dat['Time Series (Daily)']) {

        stockChartXValues.push(key);
        stockChartopenValues.push(dat['Time Series (Daily)'][key]['1. open']);
        stockChartcloseValues.push(dat['Time Series (Daily)'][key]['4. close']);
        stockCharthighValues.push(dat['Time Series (Daily)'][key]['2. high']);
        stockChartlowValues.push(dat['Time Series (Daily)'][key]['3. low']);
 }

  dispatch({
        type: 'FETCH_DATA',
        payload: {
            Xvalues: stockChartXValues, openvalues: stockChartopenValues, closevalues: stockChartcloseValues, highvalues: stockCharthighValues,
            lowvalues: stockChartlowValues
        }
    })
}



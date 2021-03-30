import React from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Plot from 'react-plotly.js';

class Stock extends React.Component {


    componentDidMount() {
        this.props.fetchData()


    }



    // fetchStockXvalues = () => {

    //     let stockChartXValuesFunction = [];

    //     let data = this.props.reducer_stock.reducer_stock
    //     //   console.log(data)

    //     for (var key in data['Time Series (Daily)']) {


    //         stockChartXValuesFunction.push(key);




    //     }

    //     //  this.setState({stockChartXValues:stockChartXValuesFunction})
    //     //  console.log(this.state.stockChartXValues)

    //     return stockChartXValuesFunction
    // }

    // fetchStockYvalues = () => {
    //     let stockChartYValuesFunction = [];
    //     let data = this.props.reducer_stock.reducer_stock

    //     for (var key in data['Time Series (Daily)']) {

    //         stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);



    //     }
    //     // this.setState({stockChartYValues:stockChartYValuesFunction})
    //     return stockChartYValuesFunction
    // }

    

    render() {

        const data = this.props.reducer_stock.reducer_stock
        const { Xvalues, openvalues, closevalues, lowvalues, highvalues } = data
        return (
            <div>



                <Plot
                    data={[
                        {
                            x: Xvalues,
                            y: openvalues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'blue' },
                            lines: { color: 'blue' }
                        },
                       
                    ]}
                    layout={{ width: 900, height: 440, title: 'Stock Market' }}
                />

                <Plot data={[{
                    x: Xvalues,
                    close: closevalues,
                    decreasing: { line: { color: 'red' } },
                    high: highvalues,
                    increasing: { line: { color: 'green' } },
                    line: { color: 'rgba(31,119,180,1)' },
                    low: lowvalues,
                    open: openvalues,
                    type: 'candlestick'
                }]}
                    layout={{
                        width: 720,
                        height: 440,
                        title: 'Stock Market',
                        dragmode: 'zoom',
                        showlegend: false,
                        xaxis: {
                            rangeslider: {
                                visible: false
                            }
                        },
                        yaxis: {
                            autorange: true,
                        }
                    }}
                    options={{ displaylogo: 'false' }}>

                </Plot>

            </div>
        )


    }
}

const mapStateToProps = (state) => {


    return { reducer_stock: state.reducer_stock }
}

export default connect(mapStateToProps, { fetchData })(Stock)
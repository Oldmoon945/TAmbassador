let twd_jpy_line = document.getElementById('line-chart');
let usd_twd_line2 = document.getElementById('line-chart-2');
let twd_jpy_data = JSON.parse(document.getElementById('exchangeData').innerHTML);

console.log(twd_jpy_data);

let trace1 = {
    type: "scatter",
    mode: "lines",
    name: "Team A",
    text: [],
    x: [],
    y: []
}
let trace2 = JSON.parse(JSON.stringify(trace1))
trace2.x = []
trace2.y = []

for (let i = 0; i < twd_jpy_data.length; i++) {
    trace1.x[i] = twd_jpy_data[i].date;
    trace1.y[i] = twd_jpy_data[i]['twd-jpy'];
    trace2.x[i] = twd_jpy_data[i].date;
    trace2.y[i] = twd_jpy_data[i]['usd-twd'];
}

console.log("trace1.x: ", trace1.x);
console.log("trace1.y: ", trace1.y);

let data = [];
data.push(trace1);
let data2 = [trace2]

let layout = {
    margin: {
        t: 0
    },
    xaxis: {
        showline: true
    },
    yaxis: {
        showline: true
    },
    annotations:[
        {
            xref: 'paper',
            yref: 'paper',
            x: 0.5,
            y: 0.1,
            text: `JPY Exchange ${trace1.x[0]} ~ ${trace1.x.slice(-1)}`,
            showarrow: false,
            xanchor: 'center',
            yanchor: 'top',
            font: {
                size: 15,
                color: 'gray'
            }
        }
    ]
};
let layout2 = JSON.parse(JSON.stringify(layout))
layout2.annotations[0].text =  `USD Exchange ${trace2.x[0]} ~ ${trace2.x.slice(-1)}`

Plotly.newPlot(twd_jpy_line, data, layout);
Plotly.newPlot(usd_twd_line2, data2, layout2);

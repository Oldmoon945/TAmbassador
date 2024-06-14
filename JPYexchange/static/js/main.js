let twd_jpy_line = document.getElementById('line-chart');
console.log(document.getElementById('exchangeData').innerHTML)
let twd_jpy_data = JSON.parse(document.getElementById('exchangeData').innerHTML);

// console.log(twd_jpy_data);

// let trace1 = {
//     type: "scatter",
//     mode: "lines",
//     name: "Team A",
//     text: [],
//     x: [],
//     y: []
// }

// for (let i = 0; i < twd_jpy_data.length; i++) {
//     trace1.x[i] = twd_jpy_data[i].data;
//     trace1.y[i] = twd_jpy_data[i]['twd-jpy'];
// }

// console.log("trace1.x: ", trace1.x);
// console.log("trace1.y: ", trace1.y);

// let data = [];
// data.push(trace1);

// let layout = {
//     margin: {
//         t: 0
//     },
//     xaxis: {
//         showline: true
//     },
//     yaxis: {
//         showline: true
//     },
//     annotations:[
//         {
//             xref: 'paper',
//             yref: 'paper',
//             x: 0.5,
//             y: 0.1,
//             text: `JPY Exchange ${trace.x[0]} ～ ${trace1.x.slice(-1)}`,
//             showarrow: false,
//             xanchor: 'center',
//             yanchor: 'top',
//             font: {
//                 size: 15,
//                 color: 'gray'
//             }
//         }
//     ]
// };
// Plotly.newPlot(twd_jpy_data, data, layout);

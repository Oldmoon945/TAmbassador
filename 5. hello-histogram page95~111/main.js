// ======== p98 ~ p103 ========
let layout = {
    title: {
        y: 0.05, 
        yanchor: 'bottom',  // 標題垂直對齊底部
    },
};

// 直向
let trace1 = {};
trace1.type = "histogram";
trace1.x = set1; 
let data = [];
data.push(trace1);
layout.title.text = 'p98 ~ p103 (直向)'
Plotly.newPlot('straight', data, layout);

// 橫向
trace1 = {};
trace1.type = "histogram";
trace1.y = set1; 
data = [];
data.push(trace1);
layout.title.text = 'p98 ~ p103 (橫向)'
Plotly.newPlot('horizontal', data, layout);

// ======== p104 ~ p107 ========
let trace2_1 = {};
trace2_1.type = "histogram";
trace2_1.x = set1;
trace2_1.opacity = 0.5;
trace2_1.marker = {
    color: 'green'
};

let trace2_2 = {};
trace2_2.type = "histogram";
trace2_2.x = set2;
trace2_2.opacity = 0.5;
trace2_2.marker = {
    color: 'red'
};

let data2 = [];
data2.push(trace2_1);
data2.push(trace2_2);

let layout2_overlay = {
    barmode: "overlay",
    title : {
        text: 'barmode: "overlay"',
        y: 0.05, 
        yanchor: 'bottom',  // 標題垂直對齊底部
    } 
};
let layout2_stack = {
    barmode: "stack",
    title : {
        text: 'barmode: "stack"',
        y: 0.05, 
        yanchor: 'bottom',  // 標題垂直對齊底部
    }
};
let layout2_group = {
    barmode: "group",
    title : {
        text: 'barmode: "group"',
        y: 0.05, 
        yanchor: 'bottom',  // 標題垂直對齊底部
    }
};

Plotly.newPlot( 'overlay', data2, layout2_overlay);
Plotly.newPlot('stack', data2, layout2_stack);
Plotly.newPlot('group', data2, layout2_group);

// ======== p108 ~ p111 ========
let trace3_1 = {};
trace3_1.type = "histogram";
trace3_1.x = [ 1, 2, 2, 3, 3, 3, 4, 4, 5];
trace3_1.opacity = 0.5;
trace3_1.marker = {
    color: 'green'
};

let trace3_2 = {};
trace3_2.type = "histogram";
trace3_2.x = [ 2, 2];
trace3_2.opacity = 0.5;
trace3_2.marker = {
    color: 'red'
};

let data3 = [];
data3.push(trace3_1);
data3.push(trace3_2);

let layout3 = {
    barmode: "overlay",
    title: {
        text: 'p108 ~ p111',
        y: 0.05, 
        yanchor: 'bottom',  // 標題垂直對齊底部
    }    
};

Plotly.newPlot('myGraph3', data3, layout3 )

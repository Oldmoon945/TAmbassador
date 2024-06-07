// 取得 index.html id 命名為 ‘myGraph’ div區塊, 並將結果放在 myGraph 變數中
let myGraph = document.getElementById('myGraph');

// 新增物件 命名為 ‘trace1’ , 並在中新增參數
// p14 ~ 20
let trace1 = {};
// trace1.mode = "markers"; // 模式 參考 plotly mode 官網 https://plotly.com/javascript/reference/scatter/
trace1.mode = "markers+text" // p36 ~ 38 給點上文字參考 plotly mode 官網 https://plotly.com/javascript/reference/scatter/
trace1.type = "scatter"; // 類型 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
trace1.name = "Team A"; // p29 ~ 35 更改資料標題名稱
trace1.marker =  {size: 30}; // 額外補充：控制字體大小
trace1.x = []; // x 軸數據
trace1.y = []; // y 軸數據
trace1.text = []; // p29 ~ 35 放置文字
trace1.textposition = "bottom center"; // p36 ~ 38 文字放置位置
// p36 ~ 38 修改文字樣式
trace1.textfont = {
    family: "Raleway, sans-serif",
    size: 30
}

// p21 ~ 24
let trace2 = {
    mode: "lines", // 模式 參考 plotly mode 官網 https://plotly.com/javascript/reference/scatter/
    type: "scatter", // 類型 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    name: "Team B", // p29 ~ 35 更改資料標題名稱
    x: [],
    y: [],
    text: [] // p29 ~ 35 放置文字
}

// p25 ~ 28
let trace3 = {
    mode: "lines+markers", // 模式 參考 plotly mode 官網 https://plotly.com/javascript/reference/scatter/
    type: "scatter", // 類型 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    name: "Team C", // p29 ~ 35 更改資料標題名稱
    x: [],
    y: [],
    text: [] // p29 ~ 35 放置文字
}

// 使用迴圈，將 data.js 中的變數資料放到 “trace” 變數中
for (let i = 0 ; i < set1.length ; i ++) {
    // p14 ~ 20
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
    // p21 ~ 24
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];

    // p25 ~ 28
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}

// 新增變數 “data” 並將 “trace” 放到 ”data“ 中
let data = [];
data.push(trace1); // p14 ~ 20
data.push(trace2); // p21 ~ 24
data.push(trace3); // p25 ~ 28

// 設定 圖表樣式，邊界個間距 50
let layout = {
    margin : {
        t: 50,
        r: 50,
        l: 50,
        b: 50
    },
    xaxis: {
        range: [0, 6]
    },
    yaxis: {
        range: [0, 25]
    },
    title: 'Scatter & Line' // p34 給圖表上標題
};

// 將上述的參數分別放至 Plotly 繪圖工具中 (Html區塊, 資料, 圖表樣式)
Plotly.newPlot(myGraph, data, layout);
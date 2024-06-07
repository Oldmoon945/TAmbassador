/* =========== p39 ~ p45 ============ */
// 取得 index.html id 命名為 ‘myGraph’ div區塊, 並將結果放在 myGraph 變數中
let myGraph = document.getElementById('myGraph');

// 新增物件 命名為 ‘trace1’ , 並在中新增參數
let trace1 = {
    type: "bar", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    x: unpack(animals, 'name'),
    y: unpack(animals, 'count'),
}


// 新增變數 “data” 並將 “trace” 放到 ”data“ 中
let data = [];
data.push(trace1);


// 設定 圖表樣式，邊界個間距 50
let layout = {
    margin : {
        t: 50,
        r: 50,
        l: 50,
        b: 50
    },
    title: 'p39 ~ p45'
};

// 將上述的參數分別放至 Plotly 繪圖工具中 (Html區塊, 資料, 圖表樣式)
Plotly.newPlot(myGraph, data, layout);

/* =========== p46 ~ p50 ============ */
let myGraph2 = document.getElementById('myGraph2');

let trace2_1 = {
    type: "bar", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    name: "Taipei Zoo",
    x: unpack(animals_Taipei_Zoo, 'name'),
    y: unpack(animals_Taipei_Zoo, 'count'),
}

let trace2_2 = {
    type: "bar", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    name: "Taoyuan Zoo",
    x: unpack(animals_Taoyuan_Zoo, 'name'),
    y: unpack(animals_Taoyuan_Zoo, 'count'),
}

// 新增變數 “data2” 並將 “trace” 放到 ”data2“ 中
let data2 = [];
data2.push(trace2_1);
data2.push(trace2_2);

let layout2 = {
    margin : 50,
    title: 'p46 ~ p50'
};

Plotly.newPlot(myGraph2, data2, layout2);



/* 資料整理 函式
   使用方式：unpack(資料, 指定取的資料)
*/
function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
}

/* =========== 練習 ============ */
let test = document.getElementById('test');

let trace3_1 = {
    type: "bar", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    name: "Monkey",
    x: ['Taipei_Zoo', 'Taoyuan_Zoo'],
    y:  [animals_Taipei_Zoo[0]['count'], animals_Taoyuan_Zoo[0]['count']],
    text: [animals_Taipei_Zoo[0]['count'], animals_Taoyuan_Zoo[0]['count']],
    // 設定文字樣式
    textfont: {
        color:"White",
        size: 20
    },
    // 設定長條圖柱子顏色
    marker: {
        color: 'teal'  
    }
}

let trace3_2 = {
    type: "bar", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    name: "Tiger",
    x: ['Taipei_Zoo', 'Taoyuan_Zoo'],
    y: [animals_Taipei_Zoo[1]['count'], animals_Taoyuan_Zoo[1]['count']],
    text: [animals_Taipei_Zoo[1]['count'], animals_Taoyuan_Zoo[1]['count']],
    // 設定文字樣式
    textfont: {
        color:"White",
        size: 20
    },
    // 設定長條圖柱子顏色
    marker: {
        color: 'purple'  // 设置每个长条柱的颜色
    }
}

let trace3_3 = {
    type: "bar", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    name: "Lion",
    x: ['Taipei_Zoo', 'Taoyuan_Zoo'],
    y: [animals_Taipei_Zoo[2]['count'], animals_Taoyuan_Zoo[2]['count']],
    text: [animals_Taipei_Zoo[2]['count'], animals_Taoyuan_Zoo[2]['count']],
    // 設定文字樣式
    textfont: {
        color:"White",
        size: 20
    },
    // 設定長條圖柱子顏色
    marker: {
        color: 'orange'  // 设置每个长条柱的颜色
    }
}

// 新增變數 “data2” 並將 “trace” 放到 ”data2“ 中
let data3 = [];
data3.push(trace3_1);
data3.push(trace3_2);
data3.push(trace3_3);

let layout3 = {
    margin : 50,
    barmode: 'stack',
    title: 'p53、p56' 
};

// 將上述的參數分別放至 Plotly 繪圖工具中 (Html區塊, 資料, 圖表樣式)
Plotly.newPlot(test, data3, layout3);
/* 資料整理 函式
   使用方式：unpack(資料, 指定取的資料)
*/
function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
}

/* =========== p59 ~ p65 ============ */
let myGraph = document.getElementById('myGraph');

// 新增物件 命名為 ‘trace1’ , 並在中新增參數
let trace1 = {
    type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    labels: unpack(evaluation_ratio, 'name'),
    values: unpack(evaluation_ratio, 'count'),
}

// 新增變數 “data” 並將 “trace” 放到 ”data“ 中
let data = [];
data.push(trace1);

let layout = {
    margin : 50,
    title: 'p59 ~ p65'
};

Plotly.newPlot(myGraph, data, layout);

/* =========== p66 ~ p75 ============ */
let myGraph2 = document.getElementById('myGraph2');

let trace2_1 = {
    type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    title: "機器學習概論",
    labels: unpack(evaluation_ratio1, 'name'),
    values: unpack(evaluation_ratio1, 'count'),
    hole: 0.5,
    domain: {
        row: 0,
        column: 0
    }
}

let trace2_2 = {
    type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    title: "資料視覺化",
    labels: unpack(evaluation_ratio2, 'name'),
    values: unpack(evaluation_ratio2, 'count'),
    hole: 0.5,
    domain: {
        row: 0,
        column: 1
    }
}

let trace2_3 = {
    type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    title: "人工智慧與永續發展",
    labels: unpack(evaluation_ratio3, 'name'),
    values: unpack(evaluation_ratio3, 'count'),
    hole: 0.5,
    domain: {
        row: 1,
        column: 0
    }
}

let trace2_4 = {
    type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
    title: "python程式設計",
    labels: unpack(evaluation_ratio4, 'name'),
    values: unpack(evaluation_ratio4, 'count'),
    hole: 0.5,
    domain: {
        row: 1,
        column: 1
    }
}

let data2 = [];
data2.push(trace2_1);
data2.push(trace2_2);
data2.push(trace2_3);
data2.push(trace2_4);

let layout2 = {
    margin : 50,
    title: 'p59 ~ p65',
    grid: {
        rows: 2,
        columns: 2
    }
};

Plotly.newPlot(myGraph2, data2, layout2);


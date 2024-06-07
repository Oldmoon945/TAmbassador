/* p39 ~ 45 */
// 取得 index.html id 命名為 ‘myGraph’ div區塊, 並將結果放在 myGraph 變數中
let myGraph = document.getElementById('myGraph');

// 新增物件 命名為 ‘trace1’ , 並在中新增參數
let trace1 = {
    type: "bar", // 模式 參考 plotly mode 官網 https://plotly.com/javascript/reference/scatter/
    x: [],
    y: [],
}

// 使用迴圈，將 data.js 中的變數資料放到 “trace” 變數中
for (let i = 0 ; i < animals.length ; i ++) {
    trace1.x[i] = animals[i]['name'];
    trace1.y[i] = animals[i]['count'];
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
};

// 將上述的參數分別放至 Plotly 繪圖工具中 (Html區塊, 資料, 圖表樣式)
Plotly.newPlot(myGraph, data, layout);
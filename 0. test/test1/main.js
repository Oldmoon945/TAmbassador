// 引入網路 csv 資料
d3.csv("https://raw.githubusercontent.com/ryanchung403/dataset/main/harry_potter.csv").then(
    res => {
        console.log(res);
        drawScatter(res);
    }
);

/* 資料整理 函式
   使用方式：unpack(資料, 指定取的資料)
*/
function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
}

// 畫圖表 函式
function drawScatter(res) {
    // 取得 index.html id 命名為 ‘myGraph’ div區塊, 並將結果放在 myGraph 變數中
    let myGraph = document.getElementById('myGraph');
    // 使用 unpack 函式，取得 release_year 電影年份資料
    const release_year = unpack(res, 'release_year')

    // 線1 - 收益 
    let trace1 = {
        mode: "lines+markers",
        type: "scatter", 
        name: "收益", 
        x: release_year, // 電影年份
        y: unpack(res, 'revenue'), // 電影收益
        text: unpack(res, 'title') // 電影名稱
    }

    // 線1 - 預算
    let trace2 = {
        mode: "lines+markers",
        type: "scatter", 
        name: "預算", 
        x: release_year, // 電影年份
        y: unpack(res, 'budget'), // 電影預算
        text: unpack(res, 'title') // 電影名稱
    }

    let data = [];
    data.push(trace1); 
    data.push(trace2); 

    // 設定 圖表樣式，邊界個間距 50
    let layout = {
        margin : {
            t: 50,
            r: 50,
            l: 50,
            b: 50
        },
        title: '哈利波特電影 收益(revenue) 與 預算(budget)比較' // 圖表標題
    };

    // 將上述的參數分別放至 Plotly 繪圖工具中 (Html區塊, 資料, 圖表樣式)
    Plotly.newPlot(myGraph, data, layout);
}
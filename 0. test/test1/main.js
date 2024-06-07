d3.csv("https://raw.githubusercontent.com/ryanchung403/dataset/main/harry_potter.csv").then(
    res => {
        console.log(res);
        drawScatter(res);
    }
);

function unpack(rows, key) {
    return rows.map(function (row) {
        return row[key];
    });
}

function drawScatter(res) {
    let myGraph = document.getElementById('myGraph');
    const release_year = unpack(res, 'release_year')
    let trace1 = {
        mode: "lines+markers",
        type: "scatter", 
        name: "收益", 
        x: release_year,
        y: unpack(res, 'revenue'),
        text: unpack(res, 'title')
    }

    let trace2 = {
        mode: "lines+markers",
        type: "scatter", 
        name: "預算", 
        x: release_year,
        y: unpack(res, 'budget'),
        text: unpack(res, 'title')
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
        title: '哈利波特電影 收益(revenue) 與 預算(budget)比較'
    };

    // 將上述的參數分別放至 Plotly 繪圖工具中 (Html區塊, 資料, 圖表樣式)
    Plotly.newPlot(myGraph, data, layout);
}
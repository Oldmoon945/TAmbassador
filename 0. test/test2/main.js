// 引入網路 csv 資料
d3.csv("https://raw.githubusercontent.com/ryanchung403/dataset/main/train_data_titanic.csv").then(
    res => {
        drawScatter(res);
    }
);


// 畫圖表 函式
function drawScatter(res) {
    let pie1 = document.getElementById('test_pie1');
    let pie2 = document.getElementById('test_pie2');
    let pie3 = document.getElementById('test_pie3');
    

    // 存活率
    let survived = 0
    let noSurvived = 0
    res.forEach(element => {
        if (element.Survived === "1") survived++
        else noSurvived++
    });

    let trace1 = {
        type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
        labels: [ "Not Survived", "Survived"],
        values: [ noSurvived, survived],
        text: [ noSurvived, survived],
    }

    let data1 = [];
    data1.push(trace1);

    let layout1 = {
        margin : 0,
        title: 'Survived vs Not Survived'
    };

    Plotly.newPlot(pie1, data1, layout1);

    // 性別
    let Male = 0
    let Female = 0
    res.forEach(element => {
        if (element.Sex === "male") Male++
        else if (element.Sex === "female") Female++
    });

    let trace2 = {
        type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
        labels: [ "Male", "Female"],
        values: [ Male, Female],
        text: [ Male, Female],
    }

    let data2 = [];
    data2.push(trace2);

    let layout2 = {
        margin : 0,
        title: 'Male vs Female'
    };

    Plotly.newPlot(pie2, data2, layout2);

    // 登船港口畫圓餅圖
    console.log(res)
    let S = 0
    let C = 0
    let Q = 0
    res.forEach(element => {
        if (element.Embarked === "S") S++
        else if (element.Embarked === "C") C++
        else if (element.Embarked === "Q") Q++
    });

    let trace3 = {
        type: "pie", // 模式 參考 plotly 官網 https://plotly.com/javascript/reference/scatter/
        labels: [ "S", "C", "Q"],
        values: [ S, C, Q],
        text: [ S, C, Q],
    }

    let data3 = [];
    data3.push(trace3);

    let layout3 = {
        margin : 0,
        title: 'Embarked : S/C/Q'
    };

    Plotly.newPlot(pie3, data3, layout3);
}


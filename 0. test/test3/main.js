let myGraph = document.getElementById('myGraph');
d3.csv(dataURL).then(getCSV_Data);

function unpack(rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
};

function getCSV_Data(rows) {
    console.log(rows)
    let trace1 = {};
    trace1.type = "choropleth";
    trace1.locationmode = "country names";
    trace1.locations = unpack(rows, 'Country Name');
    trace1.z = unpack(rows, '2022');
    trace1.text = unpack(rows, 'Country Name');
    // 可以設定顏色
    // trace1.autocolorscale = true // 預設
    trace1.colorscale = [[0,"gray"],[0.5, "green"],[1, "red"]]; 

    let data = [];
    data.push(trace1);
    let layout = {
        title: "2022年各國ＧＤＰ指數",
        geo: {
            projection: {
                type: 'robinson' // 地圖形式，robinson 為圓弧形，參考：https://plotly.com/javascript/reference/layout/geo/#layout-geo-projection
            }
        }
    };
    Plotly.newPlot(myGraph, data, layout)
}
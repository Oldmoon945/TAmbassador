let myGraph = document.getElementById('myGraph');
d3.csv(dataURL).then(getCSV_Data);

function unpack(rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
};

function getCSV_Data(rows) {
    let trace1 = {};
    trace1.type = "choropleth";
    trace1.locationmode = "country names";
    trace1.locations = unpack(rows, 'location');
    trace1.z = unpack(rows, 'alcohol');
    trace1.text = unpack(rows, 'location');
    trace1.autocolorscale = true;

    // 練習：手動新增資料。 "Taiwan, 15"
    trace1.locations.push('Taiwan')
    trace1.z.push(15);
    trace1.text.push('Taiwan');

    let data = [];
    data.push(trace1);
    let layout = {
        title: "Pure alcohol consumption<br>among adults (age 15+) in 2010",
        geo: {
            projection: {
                type: 'robinson'
            }
        }
    };
    Plotly.newPlot(myGraph, data, layout)
}
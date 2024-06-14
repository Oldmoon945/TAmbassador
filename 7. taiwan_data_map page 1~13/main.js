let data_url = "./data/112edu_B_1_4.json";
let geo_url = "./data/taiwan_geo.json";
let test_data_url = "./data/113_5data.xls"

// p12
Promise.all([
    d3.json(data_url), d3.json(geo_url)
]).then(function(data) {
    draw_map(data[0], data[1]);
    // draw_map2(data[0], data[1]);
});

d3.xls


function unpack(rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
}

// p12
function draw_map(school_data, geo_data) {
    console.log(unpack(school_data, "縣市別").sort());
    let all_cities = [];
    for (let i = 0 ; i < geo_data.features.length ; i++) {
        all_cities.push(geo_data.features[i].properties.COUNTYNAME);
    }
    console.log(all_cities.sort());

    console.log(unpack(school_data, "國中"));

    let trace1 = {
        type: "choropleth",
        locationmode: "geojson-id",
        featureidkey: "properties.COUNTYNAME",
        locations: unpack(school_data, "縣市別"),
        geojson: geo_data,
        z: unpack(school_data, "國中"),
        colorscale: [
            [0, 'lightyellow'],
            [1, 'brown']
        ],
        hovertemplate: "%{location}:"+"%{z:,}人<extra></extra>",
        hoverlabel: {
            bgcolor: "white",
            bordercolor: "black",
            font: {
                family: "Arial",
                size: 30,
                color: "black"
            }
        }
    };
    let data = [trace1];
    let layout = {
        title: {
            text: "111學年度各縣市國中生人數",
            font: {
                size: 30,
                color: "black"
            },
            x: 0.46,
            y:0.90,
        },
        geo: {
            center: {
                lon: 120.32,
                lat: 23.84
            },
            fitbounds: "locations",
            projection: {
                type: "mercator"
            },
            resolution: 50,
        },
        margin: {
            l:10,
            r:10,
            t:80,
            b:10,
        }
    };
    Plotly.newPlot("myGraph", data, layout);
}

// p13
function draw_map2(school_data, geo_data) {
    console.log(unpack(school_data, "縣市別").sort());
    let all_cities = [];
    for (let i = 0 ; i < geo_data.features.length ; i++) {
        all_cities.push(geo_data.features[i].properties.COUNTYNAME);
    }
    console.log(all_cities.sort());

    console.log(unpack(school_data, "國中"));

    let trace1 = {
        type: "choropleth",
        locationmode: "geojson-id",
        featureidkey: "properties.COUNTYNAME",
        locations: unpack(school_data, "縣市別"),
        geojson: geo_data,
        z: unpack(school_data, "國中"),
        colorscale: [
            [0, 'lightyellow'],
            [1, 'brown']
        ],
        hovertemplate: "%{location}:"+"%{z:,}人<extra></extra>",
        hoverlabel: {
            bgcolor: "white",
            bordercolor: "black",
            font: {
                family: "Arial",
                size: 30,
                color: "black"
            }
        }
    };
    let data = [trace1];
    let layout = {
        title: {
            text: "111學年度各縣市國中生人數",
            font: {
                size: 30,
                color: "black"
            },
            x: 0.46,
            y:0.90,
        },
        geo: {
            center: {
                lon: 120.32,
                lat: 23.84
            },
            fitbounds: "locations",
            projection: {
                type: "mercator"
            },
            resolution: 50,
        },
        margin: {
            l:10,
            r:10,
            t:80,
            b:10,
        }
    };
    Plotly.newPlot("myGraph2", data, layout);
}

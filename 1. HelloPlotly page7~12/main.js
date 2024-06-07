// 取得 index.html id 命名為 ‘myGraph’ div區塊, 並將結果放在 myGraph 變數中
let myGraph = document.getElementById('myGraph')

// 使用 Plotly 在 id 命名為 ‘myGraph’ div區塊, 新增折線圖, 上面周遭邊界設為 50
Plotly.newPlot(myGraph, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16]
}], {
    margin: 50,
});
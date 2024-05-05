// 获取左侧第一个图表数据
fetch('/get_center2_data')
    .then(response => response.json())
    .then(data => {
        // 将id为center1的数值变为data
        var element = document.getElementById("center2");
        element.textContent = data.total_number_of_graduates;
})
    .catch(error => console.error('Error:', error));
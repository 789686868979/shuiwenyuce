// 获取左侧第一个图表数据
fetch('/get_center1_data')
    .then(response => response.json())
    .then(data => {
        // 将id为center1的数值变为data
        var element = document.getElementById("center1");
        element.textContent = data.total_enrollment;
})
    .catch(error => console.error('Error:', error));
var myChart = echarts.init(document.getElementById("right1"));
// 2. 指定配置项和数据
var option = {
    color: ["#2f89cf"],
    tooltip: {
    trigger: "axis",
    axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }
    },
    // 修改图表的大小
    grid: {
    left: "0%",
    top: "10px",
    right: "0%",
    bottom: "8%",
    containLabel: true
    },
    xAxis: [
    {
        type: "category",
        data: ["湘江", "资水", "沅水", "澧水"],
        axisTick: {
        alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
        color: "rgba(255,255,255,.6) ",
        fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
        show: false
        },
        // x轴旋转
        axisLabel: {
        rotate: 0
        }
    }
    ],
    yAxis: [
    {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
        color: "rgba(255,255,255,.6) ",
        fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
        lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
        }
        },
        // y轴分割线的颜色
        splitLine: {
        lineStyle: {
            color: "rgba(255,255,255,.1)"
        }
        }
    }
    ],
    series: [
    {
        name: "水位",
        type: "bar",
        barWidth: "35%",
        data: [31.74, 33.23, 31.63, 50.68],
        itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
        }
    }
    ]
};
// 3. 把配置项给实例对象
myChart.setOption(option);
// 4. 让图表跟随屏幕自动的去适应
window.addEventListener("resize", function() {
    myChart.resize();
});
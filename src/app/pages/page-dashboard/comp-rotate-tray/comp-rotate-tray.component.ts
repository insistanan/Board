import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-rotate-tray',
  templateUrl: './comp-rotate-tray.component.html',
  styleUrls: ['./comp-rotate-tray.component.scss']
})
export class CompRotateTrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if(this.data) {
      // this.initOption()
      let seriesData: any = [];
      this.data.forEach((item: any, index: any) => {
        seriesData.push({ name: item.name, value: item.value, itemStyle: { color: this.color[index]} })
      });
      this.dataOption.series[0].data = seriesData;
      if(this.chart1) this.chart1.setOption(this.dataOption)
    }
  }

  initOption() {
    const that = this;
    this.dataOption = {
      tooltip: { show: false },
      legend: { show: false },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['40%', '55%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderWidth: 5,
            borderColor: "#20263F"
          },
          labelLine: {
            length: "10%",
            length2: "0",
            maxSurfaceAngle: 80,
            lineStyle: {
              width: 3,
            }
          },
          label: {
            alignTo: 'edge',
            minMargin: 5,
            edgeDistance: 10,
            formatter: "{d|{d}%}\n{b|{b}}",
            rich: {
              b: {
                color: "#FFFFFF",
                fontSize: '0.8rem',
                lineHeight: 24,
                fontFamily: "'Helvetica Neue', Helvetica, sans-serif"
              },
              d: {
                color: "#FFFFFF",
                fontSize: '0.8rem',
                lineHeight: 24,
                fontFamily: "'Helvetica Neue', Helvetica, sans-serif"
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLayout: function (params: any) {
            const isLeft = params.labelRect.x < that.chart1.getWidth() / 2;
            const points = params.labelLinePoints;
            // Update the end point.
            points[2][0] = isLeft
              ? params.labelRect.x
              : params.labelRect.x + params.labelRect.width;
            return {
              labelLinePoints: points
            };
          },
          data: [
            { value: 1, name: '一级门店', itemStyle: { color:  "#58C4EB"} },
            { value: 1, name: '二级门店', itemStyle: { color:  "#38A6FF"} },
            { value: 1, name: '三级门店', itemStyle: { color:  "#F6A122"} },
          ]
        }
      ]
    };
    // this.dataOption.series[0].data[0].value = this.storeLevel1;
    // this.dataOption.series[0].data[1].value = this.storeLevel2;
    // this.dataOption.series[0].data[2].value = this.storeLevel3;
    // if(this.chart) this.chart.setOption(this.dataOption)
  }

  color: any = ["#58C4EB", "#38A6FF", "#F6A122"];

  chart: any;
  chart1: any;
  rotateLeftChart: any;

  // 顺时针旋转图表参数
  rotateRightOption: any = {
    tooltip: { show: false },
    legend: { show: false },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['85%', '95%'],
        avoidLabelOverlap: true,
        silent: true,
        itemStyle: {
          borderWidth: 5,
          borderColor: "#20263F"
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} },
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} },
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} },
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} },
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} },
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} },
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} },
          { value: 1, name: '', itemStyle: { color:  "#2B73A6"} }
        ]
      }
    ]
  };
  rotateLeftOption: any = {
    series: [
      {
        type: 'gauge',
        radius: '35%',
        center: ["50%", "50%"],
        startAngle: 0,
        endAngle: 360,
        min: 0,
        max: 100,
        splitNumber: 20,
        // itemStyle: {
        //   color: "#FFBA76"
        // },
        // 进度条
        progress: {
          show: false,
        },
        // 指针
        pointer: {
          show: false,
        },
        // 背景环
        axisLine: {
          roundCap: false,
          lineStyle: {
            width: 15,
            color: [[1, '#38789B']]
          },
        },
        // 刻度线
        axisTick: {
          distance: -32,
          splitNumber: 1,
          length: 10,
          lineStyle: {
            width: 4,
            color: '#50C7F5'
          }
        },
        // 刻度分割线
        splitLine: {
          show: false
        },
        // 刻度线上文字
        axisLabel: {
          show: false,
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 0
          }
        ]
      },
    ]
  };

  dataOption: any = {
    tooltip: { show: false },
    legend: { show: false },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['40%', '55%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderWidth: 5,
          borderColor: "#20263F"
        },
        labelLine: {
          length: "10%",
          length2: "0",
          maxSurfaceAngle: 80,
          lineStyle: {
            width: 3,
          }
        },
        label: {
          alignTo: 'edge',
          minMargin: 5,
          edgeDistance: 10,
          formatter: "{d|{d}%}\n{b|{b}}",
          rich: {
            b: {
              color: "#FFFFFF",
              fontSize: '0.8rem',
              lineHeight: 24,
              fontFamily: "'Helvetica Neue', Helvetica, sans-serif"
            },
            d: {
              color: "#FFFFFF",
              fontSize: '0.8rem',
              lineHeight: 24,
              fontFamily: "'Helvetica Neue', Helvetica, sans-serif"
            }
          }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },

        data: [
          { value: 1, name: '一级门店', itemStyle: { color:  "#58C4EB"} },
          { value: 1, name: '二级门店', itemStyle: { color:  "#38A6FF"} },
          { value: 1, name: '三级门店', itemStyle: { color:  "#F6A122"} },
        ]
      }
    ]
  };

  @Input() data: any;
}

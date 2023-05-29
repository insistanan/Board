import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart-b-cylinder',
  templateUrl: './app-chart-b-cylinder.component.html',
  styleUrls: ['./app-chart-b-cylinder.component.scss']
})
export class AppChartBCylinderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.chart = echarts.init(this.chartEl.nativeElement, {}, { renderer: 'svg' });
  }

  ngOnChanges() {
    if(this.data) {

      const xAxisData: any = [];
      const seriesData0: any = [];
      const seriesData1: any = [];
      this.data.forEach((item: any) => {
        xAxisData.push(item.xAxisData);
        seriesData0.push(item.seriesData0);
        seriesData1.push(item.seriesData1);
      });
      this.option.xAxis.data = xAxisData;
      this.option.series[0].data = seriesData0;
      this.option.series[1].data = seriesData0;
      this.option.series[2].data = seriesData0;
      this.option.series[2].name = this.title;
      // this.option.series[3].data = seriesData0;
      // if(this.chart) this.chart.setOption(this.option)
    }
    this.option.series[0].itemStyle.normal.color = new echarts.graphic.LinearGradient(
      0, 0, 0, 1,
      [
        { offset: 0, color: this.colors[0] },
        { offset: 1, color: this.colors[0] }
      ]
    );

    this.option.series[1].itemStyle.normal.color = new echarts.graphic.LinearGradient(
      0, 0, 0, 1,
      [
        { offset: 0, color: this.colors[3] },
        { offset: 1, color: this.colors[3] }
      ]
    );

    this.option.series[2].itemStyle.normal.color = {
      "x": 0,
      "y": 0,
      "x2": 0,
      "y2": 1,
      "type": "linear",
      "global": false,
      "colorStops": [
        {
          "offset": 0,
          "color": this.colors[1]
        }, 
        {
          "offset": 1,
          "color": this.colors[2]
        }
      ]
    }
    this.option.xAxis.axisLabel.textStyle.color = this.colors[0];
    if(this.chart) {
      this.chart.setOption(this.option);
      if(this.rank) {
        this.chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: this.rank - 1,
        });
      } else {
        this.setAnimation();
      }
    }
  }

  onMouseover() {
    this.option.tooltip.triggerOn = 'mousemove';
    this.option.tooltip.position = null;
    this.chart.setOption(this.option)
  }

  onMouseout() {
    this.option.tooltip.triggerOn = 'none';
    this.option.tooltip.position = ['50%', '10%'];
    this.chart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: this.rank - 1,
    });
    this.chart.setOption(this.option)
  }

  setAnimation() {
    this.clearTooltip();
    this.chart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: this.axisIndex,
    });
   // timeAnimation为我们设置的进行动态执行tooltip的方法
    this.timeAnimation = setInterval(() => {
      if (this.axisIndex >= this.option.xAxis.data.length-1) {
        this.axisIndex = 0;
      } else {
        this.axisIndex++;
      }
      this.chart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: this.axisIndex,
      });
    }, 3000);
  }

  // 鼠标选项
  // 这里我们需要当鼠标滑到某一图形状态的时候停止动画
  // 当鼠标划走则继续执行
  mouseAnimation() {
    this.chart.on("mouseover", (params: any) => {
      this.clearTooltip();
      this.axisIndex = params.dataIndex + 1;
      this.chart.on("mouseout", (params: any) => {
        this.setAnimation();
      });
    });
  }

  // 结束tooltip
  clearTooltip() {
    if (this.timeAnimation) {
      clearInterval(this.timeAnimation);
      this.timeAnimation = null;
    }
  }

  timeAnimation: any;
  axisIndex: any = 0;


  chart: any;

  @Input() data: any;
  @Input() colors: any = ["#85FFE4", "#00FFDE", "#103341"];
  @Input() title: any;
  @Input() rank: any = 0;
  @ViewChild("chartEl", {static: true}) chartEl!: ElementRef;

  option: any = {
    tooltip: {
      trigger: 'axis',
      triggerOn: 'mousemove',
      // axisPointer: { type: 'solid' },
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      borderColor: "transparent",
      position: ['50%', '10%'],
      textStyle: {
        color: "#FFF"
      },
      formatter: (value: any) => {
        const info = value[2];
        let text = info.value;
        if(text > 10000) text = `${text / 10000}万`;
        var result = `<span style='font-size: 20px; color: white'>${info.name}</span></br>`;
          result += 
          `<div style="min-width: 180px; display: flex; justify-content: space-between;">
            <span style='font-size: 18px; color: white; margin-right: 24px'>
              ${info.marker}
              ${info.seriesName}
            </span>
            <span style='font-size: 18px; color: white'>${text}</span>
          </div>`
        return result;
      }
    },
    grid: {
      left: '60px',
      top: '24px',
      right: '20px',
      bottom: '150px',
    },
    legend: {
      show: false,
    },
    xAxis: {
      data: [],
      axisLabel: {
        // rotate: -90,
        textStyle: {
          color: '#CCCCCC',
          fontSize: 20
        },
        formatter: function (value: any) {
          var str = value.split("");
          
          return str.join("\n");
        }
      },
      axisLine: {
        show: true, //显示x轴
        lineStyle:{
          color: "#242A46"
        }
      },
      axisTick: {
        show: false //显示刻度
      },
      boundaryGap: true,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#242A46',
          type: 'solid'
        }
      },
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          color: '#CCCCCC',
        },
        formatter: (value: any) => {
          let text = value;
          if(value > 10000) text = `${value / 10000}万`;
          return text
        }
      },
      axisLine: {
        show: true,
        lineStyle:{
          color: "#242A46"
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#242A46',
          type: 'solid'
        }
      },
    },
    series: [
      //柱顶圆片
      {
        name: "",
        type: "pictorialBar",
        symbolSize: [18, 10],
        symbolOffset: [0, -5],
        z: 12,
        data: [],
        symbolPosition: "end", 
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient( 0, 0, 0, 1,
              [
                { offset: 0, color: "#08E0A1" },
                { offset: 1, color: "#08E0A1" }
              ],
              false
            )
          }
        },
      },
      {
        //柱底圆片
        name: "",
        type: "pictorialBar",
        symbolSize: [18, 10],
        symbolOffset: [0, 0],
        z: 12,
        data: [],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
              { offset: 0, color: "rgba(8,224,161,0.30)" },
              { offset: 1, color: "rgba(8,224,161,0.30)" }
            ])
          }
        },
      }, 
      //柱体
      {
        name: '企业接入数',
        type: 'bar',
        barWidth: 18,
        barGap: '0%',
        data: [],

        itemStyle: {
          normal: {
            color: {
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "type": "linear",
              "global": false,
              "colorStops": [
                {
                  "offset": 0,
                  "color": "rgba(8,224,161,0.80)"
                }, 
                {
                  "offset": 1,
                  "color": "rgba(8,224,161,0.20)"
                }
              ]
            }
          }
        },
      },
      // {
      //   name: "柱图头部显示值",
      //   type: "pictorialBar",
      //   symbolSize: [20, 2],
      //   symbolOffset: [0, -10],
      //   z: 12,
      //   data: [],
      //   symbolPosition: "end", 
      //   label: {
      //     // 柱图头部显示值
      //     show: true,
      //     position: "top",
      //     color: "#33EFF6",
      //     fontSize: "10px"
      //   },
      //   itemStyle: {
      //     normal: {
      //       color: new echarts.graphic.LinearGradient( 0, 0, 0, 1,
      //         [
      //           { offset: 0, color: "#3FAFB3" },
      //           { offset: 1, color: "#3FAFB3" }
      //         ],
      //         false
      //       )
      //     }
      //   },
      // },
    ]
  }
}

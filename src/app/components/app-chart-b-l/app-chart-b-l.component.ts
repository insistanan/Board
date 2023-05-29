import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart-b-l',
  templateUrl: './app-chart-b-l.component.html',
  styleUrls: ['./app-chart-b-l.component.scss']
})
export class AppChartBLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initChart();
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

      // 图表颜色
      if(this.color) {
        const chartColor: any = new echarts.graphic.LinearGradient(0, 0, 0, 1,
          [
              {offset: 0, color: this.color[0]},   
              {offset: 1, color: this.color[1]}
          ]
        )
        this.option.series[0].itemStyle.normal.color = chartColor;
        this.option.series[1].itemStyle.normal.color = chartColor;
      }

      if(this.name) {
        this.option.series[0].name = this.name;
        this.option.series[1].name = this.name;
      }
      this.option.xAxis.data = xAxisData;
      this.option.series[0].data = seriesData0;
      this.option.series[1].data = seriesData1;
      if(this.chart) {
        this.chart.setOption(this.option);
        // this.setAnimation();
        this.chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: xAxisData.length - 1,
        });
      }
    }
  }

  initChart() {
    
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
  @Input() color: any;
  @Input() name: any;
  @ViewChild("chartEl", {static: true}) chartEl!: ElementRef;

  option: any = {
    tooltip: {
      trigger: 'axis',
      triggerOn: 'none',
      // axisPointer: { type: 'solid' },
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderColor: "transparent",
      position: ['10%', '10%'],
      textStyle: {
        color: "#FFF"
      },
      formatter: (value: any) => {
        const info = value[0];
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
    xAxis: {
      type: 'category',
      axisLabel: {
        color: '#E6E6E6',
        fontSize: "18",
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif"
      },
      data: []
    },
    yAxis: {
      type: 'value',
      splitLine:{
        show:true,
        lineStyle:{
          color: "#ADE7FF",
          opacity: 0.1
        }
      },
      axisLabel: {
        color: "#EBEBEB",
        fontSize: 18,
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        formatter: (value: any) => {
          let result = value;
          if(value >= 10000 && value < 100000000) {
            result = `${value/10000}万`
          }else if(value >= 100000000) {
            result = `${value/100000000}亿`
          }
          return result
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ADE7FF",
          opacity: 0.1
        }
      }
    },
    grid: {
      top: '24px',
      right: '24px',
      bottom: '30px',
      left: '60px', 
    },
    series: [
      {
        name: "数据集一",
        data: [],
        type: 'bar',
        barWidth: '20',
        itemStyle: {
          normal: {
            barBorderRadius:[2, 2, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                  {offset: 0, color: '#51C976'},   
                  {offset: 1, color: '#4BA3E2'}
              ]
            )
          }
        }
      },
      {
        name: "数据集二",
        data: [],
        type: 'line',
        itemStyle: {
          normal: {
            barBorderRadius:[0, 0, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                  {offset: 0, color: '#51C976'},   
                  {offset: 1, color: '#4BA3E2'}
              ]
            )
          }
        }
      }
    ]
  };
}

import { Component, OnInit } from '@angular/core';
import { TApiAppService } from 'src/app/services/app_service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  constructor(private Svc: TApiAppService) { }

  ngOnInit(): void {
    this.getApplyCount()
    this.getCityList()
    this.getComList1()
    this.getComList2()
    this.getComList3()
    this.getData();
    this.initTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  getApplyCount() {
    this.Svc.getApplyCount().then(res => {
      if (res != null) this.applyCount = res
    })
  }

  getCityList() {
    this.Svc.getCityList().then(res => {
      if (res != null) this.cityList = res;
    })
  }

  getComList1() {
    this.Svc.getComList1().then(res => {
      if (res != null) this.configList1 = res;
    })
  }

  getComList2() {
    this.Svc.getComList2().then(res => {
      if (res != null) this.configList2 = res;
    })
  }

  getComList3() {
    this.Svc.getComList3().then(res => {
      if (res != null) this.configList3 = res;
    })
  }

  getData() {
    this.idCodeParseList();
    this.productTraceList();
    this.warehouseManagerList();
    this.comNumFigure();
    this.parseNumFigure();
    this.loginNumFigure();
    this.thisMonthParseNumTop10();
    this.comAreaNum();
    this.areaParseNumList();
    this.thisMonthComNum();
    this.areaMonthParseNumList();
    this.cityComApplyNumFigure();
    this.cityComNumFigure();
    this.cityLoginNumFigure();
    this.cityParseNumFigure();
    this.todayInfo();
  }

  initTimer() {
    this.timer = setInterval(() => {
      this.getData()
    }, 3000)
  }

  comNumFigure() {
    this.Svc.comNumFigure().then(res => {
      if(res) {
        res.forEach((item: any) => {
          let month: any = item.xAxisData.split("-")[1];
          item.xAxisData = `${parseInt(month)}月`
        });
        setTimeout(() => {
          this.comNumFigureData = res;
        }, 500);

      }
    })
  }

  parseNumFigure() {
    this.Svc.parseNumFigure().then(res => {
      if(res) {
        res.forEach((item: any) => {
          let month: any = item.xAxisData.split("-")[1];
          item.xAxisData = `${parseInt(month)}月`
        });
        setTimeout(() => {
          this.parseNumFigureData = res;
        }, 200);

      }
    })
  }

  loginNumFigure() {
    this.Svc.loginNumFigure().then(res => {
      if(res) {
        res.forEach((item: any) => {
          let month: any = item.xAxisData.split("-")[1];
          item.xAxisData = `${parseInt(month)}月`
        });
        setTimeout(() => {
          this.loginNumFigureData = res;
        }, 800);

      }
    })
  }

  //
  idCodeParseList() {
    this.Svc.idCodeParseList().then(res => {
      if(res) this.idCodeParse = res
    })
  }

  productTraceList() {
    this.Svc.productTraceList().then(res => {
      if(res) this.productTrace = res
    })
  }

  warehouseManagerList() {
    this.Svc.warehouseManagerList().then(res => {
      if(res) this.warehouseManager = res
    })
  }

  thisMonthParseNumTop10() {
    this.Svc.thisMonthParseNumTop10().then(res => {
      if(res) {
        res.forEach((item: any) => {
          item.value = item.parse_num / res[0].parse_num * 100
        });
        this.thisMonthParseNumTop10Data = res;
      }
    })
  }

  comAreaNum() {
    this.Svc.comAreaNum().then(res => {
      if(res) this.comAreaNumData = res
    })
  }

  areaParseNumList() {
    this.Svc.areaParseNumList().then(res => {
      if(res) {
        res.forEach((item: any) => {
          switch(item.area) {
            case "余江区":
              item.map = "assets/images/map_a.png";
              item.infoStyle = { top: "24px", left: "180px" };
              item.locationStyle = { top: "300px", left: "750px" }
              break;
            case "月湖区":
              item.area = "高新区";
              item.map = "assets/images/map_b.png";
              item.infoStyle = { top: "450px", left: "180px" };
              item.locationStyle = { top: "360px", left: "890px" }
              break;
            case "高新区":
              item.area = "高新区";
              item.map = "assets/images/map_b.png";
              item.infoStyle = { top: "450px", left: "180px" };
              item.locationStyle = { top: "360px", left: "890px" }
              break;
            case "贵溪区":
              item.area = "贵溪市";
              item.map = "assets/images/map_c.png";
              item.infoStyle = { top: "480px", right: "280px" };
              item.locationStyle = { top: "500px", right: "900px" }
              break;
            case "贵溪市":
              item.area = "贵溪市";
              item.map = "assets/images/map_c.png";
              item.infoStyle = { top: "480px", right: "280px" };
              item.locationStyle = { top: "500px", right: "900px" }
              break;
          }
        });
        this.areaParseNumData = res;
        if(!this.mapTimer) {
          this.mapTimer = setInterval(() => {
            if(this.mapIndex < 2) {
              this.mapIndex ++
            } else {
              this.mapIndex = 0;
            }
          }, 5000)
        }

        this.dayParseData0 = res.filter((item: any) => item.area == "高新区")[0];
        this.dayParseData1 = res.filter((item: any) => item.area == "余江区")[0];
        this.dayParseData2 = res.filter((item: any) => item.area == "贵溪市")[0];
      }
    })
  }

  cityComApplyNumFigure() {
    this.Svc.cityComApplyNumFigure().then(res => {
      if(res) this.cityComApplyNumFigureData = res;
    })
  }

  cityComNumFigure() {
    this.Svc.cityComNumFigure().then(res => {
      if(res) {
        this.cityComNumFigureData = res;
      }
    })
  }

  cityLoginNumFigure() {
    this.Svc.cityLoginNumFigure().then(res => {
      if(res) {

        this.cityLoginNumFigureData = res;
      }
    })
  }

  cityParseNumFigure() {
    this.Svc.cityParseNumFigure().then(res => {
      if(res) this.cityParseNumFigureData = res;
    })
  }

  todayInfo() {
    this.Svc.todayInfo().then(res => {
      if(res) this.todayInfoData = res;
    })
  }

  timer: any;

  mapTimer: any;
  mapIndex: any = 0;

  areaMonthParseNumList() {
    this.Svc.areaMonthParseNumList().then(res => {
      if(res) {
        this.monthParseData0 = res.filter((item: any) => item.area == "月湖区")[0];
        this.monthParseData1 = res.filter((item: any) => item.area == "余江区")[0];
        this.monthParseData2 = res.filter((item: any) => item.area == "贵溪区")[0];
      }
    })
  }


  thisMonthComNum() {
    this.Svc.thisMonthComNum().then(res => {
      if(res) {
        this.thisMonthComNumData = res;
      }
    })
  }

  showIFrame(data: any) {
    this.frameVisible = true;
    this.frameUrl = data;
  }

  showPPT(data: any) {
    this.pptVisible = true;
    this.pptUrl = data;
  }

  hidePPT() {
    this.pptVisible = false;
    this.pptUrl = [];
  }

  showApply() {
    clearInterval(this.timer)
    this.applyVisible = true;
  }

  updateApplyCount() {
    var params = {
      num: parseInt(this.applyCount)
    }
    if (this.applyLoading) return;
    this.applyLoading = true;
    this.Svc.updateApplyCount(params).then(res => {
      this.applyLoading = false;
      this.applyVisible = false;
      this.getApplyCount()
      this.startTimer()
    })
  }

  showCity() {
    clearInterval(this.timer)
    this.cityVisible = true;
  }

  saveCityCount(item: any) {
    if (this.cityLoading) return;
    this.cityLoading = true;
    this.Svc.updateCityCount(item).then(res => {
      this.cityLoading = false;
      this.getCityList()
    })
  }

  showConfigModal(type: any) {
    clearInterval(this.timer)
    this.configVisible = true;
    this.configIndex = type;
    if (type == '1') this.configTitle = "应用1-标识解析编码"
    if (type == '2') this.configTitle = "应用2-产品溯源"
    if (type == '3') this.configTitle = "应用3-仓储管理"
  }

  saveConfigState(item: any) {
    if (this.configLoading) return;
    var params: any = {
      id: item.id,
      company_name: item.company_name,
    };
    if (this.configIndex == '1') params.id_code_parse = item.id_code_parse == 0?1:0
    if (this.configIndex == '2') params.product_trace = item.product_trace == 0?1:0
    if (this.configIndex == '3') params.warehouse_manager = item.warehouse_manager == 0?1:0
    this.configLoading = true;
    this.Svc.updateComPk(params).then(res => {
      this.configLoading = false;

      if (this.configIndex == '1') this.getComList1()
      if (this.configIndex == '2') this.getComList2()
      if (this.configIndex == '3') this.getComList3()
    })
  }

  startTimer() {
    console.log("close-----")
    console.log(this.timer)
    this.initTimer()
  }

  // 企业应用数
  applyVisible: any = false;
  applyCount: any;
  applyLoading: any = false;

  // 城市数量
  cityVisible: any = false;
  cityList: any = [];
  cityLoading: any = false;

  // 应用权限
  configIndex: any;
  configTitle: any = "";
  configVisible: any = false;
  configList1: any = [];
  configList2: any = [];
  configList3: any = [];
  configLoading: any = false;

  frameVisible: any = false;
  frameUrl: any;

  pptVisible: any = false;
  pptUrl: any;

  comNumFigureData: any;

  parseNumFigureData: any;

  loginNumFigureData: any;

  // 标识解析编码应用
  idCodeParse: any;

  // 产品溯源应用
  productTrace: any;

  // 仓储管理应用
  warehouseManager: any;

  // 月解析量top10
  thisMonthParseNumTop10Data: any = [];

  thisMonthComNumData: any = [];
  thisMonthComNumKey: any = {
    "id_code_parse_no": "标识解析编码应用",
    "product_trace_no": "产品溯源应用",
    "warehouse_manager_no": "仓储管理应用"
  };

  comAreaNumData: any;

  cityComApplyNumFigureData: any;
  cityComNumFigureData: any;
  cityLoginNumFigureData: any;
  cityParseNumFigureData: any;

  todayInfoData: any;

  // 日解析列表
  dayParseData0: any;
  dayParseData1: any;
  dayParseData2: any;

  monthParseData0: any;
  monthParseData1: any;
  monthParseData2: any;

  areaParseNumData: any = [];
  currentArea: any = "余江区";
}

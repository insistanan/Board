import { Injectable } from '@angular/core';
import { TAuthService } from './auth_service';

@Injectable()
export class TApiAppService
{
  constructor(private Svc: TAuthService)
  {
  }
  // 企业注册数量
  async comNumFigure()
  {
    return await this.Svc.request('get', 'board_manager/com_num_figure');
  }
  // 企业标识解析量
  async parseNumFigure()
  {
    return await this.Svc.request('get', 'board_manager/parse_num_figure');
  }
  // 企业产品注册数量
  async loginNumFigure()
  {
    return await this.Svc.request('get', 'board_manager/login_num_figure');
  }
  // 标识解析编码应用
  async idCodeParseList()
  {
    return await this.Svc.request('get', 'board_manager/id_code_parse_list');
  }
  // 产品溯源应用
  async productTraceList()
  {
    return await this.Svc.request('get', 'board_manager/product_trace_list');
  }
  // 仓储管理应用
  async warehouseManagerList()
  {
    return await this.Svc.request('get', 'board_manager/warehouse_manager_list');
  }
  // 地区企业统计
  async comAreaNum()
  {
    return await this.Svc.request('get', 'board_manager/com_area_num');
  }
  // 区域总数，日均解析数
  async areaParseNum()
  {
    return await this.Svc.request('get', 'board_manager/area_parse_num');
  }
  // 应用统计数
  async thisMonthComNum()
  {
    return await this.Svc.request('get', 'board_manager/this_month_com_num');
  }
  // 月解析量top10
  async thisMonthParseNumTop10()
  {
    return await this.Svc.request('get', 'board_manager/this_month_parse_num_top10');
  }
  // 月解析量
  async areaMonthParseNum()
  {
    return await this.Svc.request('get', 'board_manager/area_month_parse_num');
  }
  // 区域列表
  async areaList()
  {
    return await this.Svc.request('get', 'board_manager/area_list');
  }

  // 月解析列表
  async areaMonthParseNumList()
  {
    return await this.Svc.request('get', 'board_manager/area_month_parse_num_list');
  }
  
  // 日解析列表
  async areaParseNumList()
  {
    return await this.Svc.request('get', 'board_manager/area_parse_num_list');
  }
  // 企业应用数
  async cityComApplyNumFigure()
  {
    return await this.Svc.request('get', 'board_manager/city_com_apply_num_figure');
  }
  // 企业接入数
  async cityComNumFigure()
  {
    return await this.Svc.request('get', 'board_manager/city_com_num_figure');
  }
  // 企业注册量
  async cityLoginNumFigure()
  {
    return await this.Svc.request('get', 'board_manager/city_login_num_figure');
  }
  // 企业解析量
  async cityParseNumFigure()
  {
    return await this.Svc.request('get', 'board_manager/city_parse_num_figure');
  }
  // 今日信息
  async todayInfo()
  {
    return await this.Svc.request('get', 'board_manager/today_info');
  }
  // 窗口列表
  async winList(data: any)
  {
    return await this.Svc.request('get', 'board_manager/win_list/' + data);
  }
  // 企业应用数
  async getApplyCount() 
  {
    return await this.Svc.request('get', 'board_manager/get_apply_num');
  }
  // 修改企业应用数
  async updateApplyCount(data: any)
  {
    return await this.Svc.request('put', 'board_manager/update_apply_num', data)
  }
  // 城市数值列表
  async getCityList()
  {
    return await this.Svc.request('get', 'board_manager/get_city_num');
  }
  // 修改城市数值
  async updateCityCount(data: any)
  {
    return await this.Svc.request('put', 'board_manager/update_city_num', data)  
  }
  // 标识解析
  async getComList1()
  {
    return await this.Svc.request('get', 'board_manager/com_list1');
  }
  // 产品溯源
  async getComList2()
  {
    return await this.Svc.request('get', 'board_manager/com_list2');
  }
  // 仓储管理
  async getComList3()
  {
    return await this.Svc.request('get', 'board_manager/com_list3');
  }
  // 修改应用权限
  async updateComPk(data: any)
  {
    return await this.Svc.request('put', 'board_manager/update_com_pk', data)
  }
}
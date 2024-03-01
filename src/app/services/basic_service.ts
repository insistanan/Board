import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import {Config} from './config';

@Injectable()
export class TBasicService
{
    // 接受一个 Http 实例，用于执行HTTP请求
    constructor(public http: Http) {}

    // 创建并返回请求头，包括 Content-Type 和 Authorization（如果本地存储中有令牌的话）。这显示了服务如何为即将发出的每个请求动态添加认证令牌
    createHeader(): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const token = localStorage.getItem('saas@token');
        if (token)
        {
            headers.append('Authorization', token);
        }
        return new RequestOptions ({headers});
    }

    get(uri: string): Promise<any> {
        const url = Config.Host_url + '/' + uri;
        const  options = this.createHeader();
        return this.http.get(url, options).toPromise();
    }
    post(data: any, uri?: string): Promise<any> {
        let url = Config.Host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        const  options = this.createHeader();
        return this.http.post(url, data, options).toPromise();
    }

    put(data: any, uri?: string): Promise<any> {
        let url = Config.Host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        const  options = this.createHeader();
        return this.http.put(url, data, options).toPromise();
    }

    delete(data: any, uri?: string): Promise<any> {
        let url = Config.Host_url;
        if (uri) {
            url = url + '/' + uri;
        }
        const options = this.createHeader();
        return this.http.delete(url, options).toPromise();
    }

    getInfo(uri: string): Promise<any> {
      const url = Config.Info_url + '/' + uri;
      const  options = this.createHeader();
      return this.http.get(url, options).toPromise();
      // return this.http.get(url, options).toPromise();
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
// 一个服务基类，提供了一系列封装好的HTTP请求方法（get, post, put, delete），这些方法都使用Angular的 Http 模块来执行实际的请求
import { TBasicService } from './basic_service';

@Injectable()
export class TAuthService extends TBasicService {
    // 接收 Http 和 Router 作为依赖，调用父类 TBasicService 的构造函数，传入 Http 对象以供HTTP通信使用
    constructor (public http: Http, public router: Router)
    {
        super(http);
    }

    // 登出功能
    logout()
    {

    }

    // 封装请求功能
    async request (method: string, uri: string, data?: any) {
        try {
            let res = null;
            switch (method) {
                case 'get':
                    if (data !== undefined) {
                        res = await this.get (uri + '/' + data).then ( res => res.json() );
                    } else {
                        res = await this.get(uri).then( res => res.json()  );
                    }
                    break;
                case 'getinfo':
                    if (data !== undefined) {
                        res = await this.getInfo (uri + '/' + data).then ( res => res.json() );
                    } else {
                        res = await this.getInfo(uri).then( res => res.json()  );
                    }
                    break;
                case 'post':
                    res = await this.post(data, uri).then( res => res.json() );
                    break;
                case 'put':
                    res = await this.put(data, uri).then( res => res.json() );
                    break;
                case 'delete':
                    res = await this.delete(data, uri).then( res => res.json() );
                    break;
            }

            if ('error_code' in res )
            {
                if (uri !== 'login')
                {
                    if (res.error_code === 203) { this.router.navigate(['/login']); }
                }
                return null;
            }
            else {
                return res.data;
            }

        } catch (e) {
          console.log(e);
        }
    }
}

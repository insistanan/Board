import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Config } from './config';

@Injectable()
export class TBasicService 
{
    constructor (public http: Http) 
    {
    }

    createHeader(): any {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const token = localStorage.getItem('saas@token');
        if (token)  
        {
            headers.append('Authorization', token);
        }
        return new RequestOptions ({headers:  headers});
    }

    get (uri: string): Promise<any> {
        const url = Config.Host_url + '/' + uri;
        const  options = this.createHeader();
        return this.http.get(url, options).toPromise();
    }

    post (data: any, uri?: string): Promise<any> {
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
}

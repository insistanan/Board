import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TBasicService } from './basic_service';

@Injectable()
export class TAuthService extends TBasicService {
    constructor (public http: Http, public router: Router) 
    {
        super(http);
    }

    logout()
    {
        
    }

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
                if(uri !== 'login')
                {
                    if(res.error_code === 203) this.router.navigate(['/login']);
                }
                return null;
            } 
            else {
                return res.data;
            } 
                
        } catch(e) {
            
        }
        
    }
}



import { Injectable } from '@angular/core';

@Injectable()
export class RouteStoreService {

    private routeStore={}
    constructor() { }

    get(key:string){
        return this.routeStore[key]; 
    }

    set(key:string,value:any){
        this.routeStore[key]=value;
    }

    clear(key:string){
        delete this.routeStore[key];
    }

    
}
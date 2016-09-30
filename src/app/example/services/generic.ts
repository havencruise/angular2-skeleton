import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { ApiService } from './api';
import { StoreHelper } from '../../core/services';

@Injectable()
export class GenericService{
    constructor(private api_service: ApiService,
                private store_helper: StoreHelper) { }
    getSchemas(){
        let path = "/api/schema";
        return this.api_service.get(path)
            .map((res:any) => res.schemas)
            .do((schemas:any) => {
                this.store_helper.update('schemas', schemas.map((schema:any) => {
                    return Object.assign({}, schema, {['id']: schema.real_schema});
                }));
            });
    }

    getIndexes(){
        let path = "/api/index";
        return this.api_service.get(path)
            .map((res:any) => res.indexes)
            .do((indexes:any) => {
                this.store_helper.update('indexes', indexes.map((index:any) => {
                    return Object.assign({}, index, {['id']: index.real_indexes});
                }));
            });
    }
}
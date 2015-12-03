/// <reference path="../../../typings/angularjs/angular.d.ts" />


module data {
    export interface IDataContext {
        refresh(): angular.IPromise<any>;
        getByid(id: number);
        getLocalById(id: number);
        add(item: any);
        update(item: any);
        addorUpdate(item: any);
        remove(item: any);
        addlocal(item: any);
        items: any;
    }
}

module data {
    export class dxProduct implements data.IDataContext {
        dataservice: any;
        items: any;
        constructor(private entitySet: any, private $http) {
            this.items = {};
            this.dataservice = new entitySet("/api/Product", "ProductID", null);
        }

        refresh(): angular.IPromise<any> {
            return this.dataservice.getData(this.items);
        };
        getByid(id: number) { return this.dataservice.getByid(id, this.items); };
        getLocalById(id: number) { return this.dataservice.getLocalbyId(id); };
        add(item: any) { return this.dataservice.insertDataAddLocal(item); };
        update(item: any) { return this.dataservice.updateData(item); };
        addorUpdate(item: any) { return this.dataservice.insertorUpdateData(item); };
        remove(item: any) { return this.dataservice.deleteDataRemovelocal(item); };
        addlocal(item: any) { return this.dataservice.addlocal(item); };

        

        getCosthistory(id) {
            return this.$http.get("/api/ProductJson/" + id + "/CostHistory");
            //return this.dataservice.getHttp();
        };
        getPriceHistory(id) {
            return this.$http.get("/api/ProductJson/" + id + "/PriceHistory");
        };
        getTransactions(id) {
            return this.dataservice.getHttp("api/ProductJson/" + id + "/transactions");
        };
        getProductAssembly(id) {
            return this.dataservice.getHttp("api/ProductJson/" + id + "/ProductAssembly");
        };
        costPriceHostory(id) {
            return this.dataservice.getHttp("/api/Product/" + id + "/pricecosthistory")
        }
    }

    angular.module('data').service("dxProduct", ["entitySet","$http", dxProduct]);
}
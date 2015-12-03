var data;
(function (data) {
    var dxProduct = (function () {
        function dxProduct(entitySet) {
            this.entitySet = entitySet;
            this.items = {};
            this.dataservice = new entitySet("/api/Product", "ProductID", null);
        }
        dxProduct.prototype.refresh = function () {
            return this.dataservice.getData(this.items);
        };
        ;
        dxProduct.prototype.getByid = function (id) { return this.dataservice.getByid(id, this.items); };
        ;
        dxProduct.prototype.getLocalById = function (id) { return this.dataservice.getLocalbyId(id); };
        ;
        dxProduct.prototype.add = function (item) { return this.dataservice.insertDataAddLocal(item); };
        ;
        dxProduct.prototype.update = function (item) { return this.dataservice.updateData(item); };
        ;
        dxProduct.prototype.addorUpdate = function (item) { return this.dataservice.insertorUpdateData(item); };
        ;
        dxProduct.prototype.remove = function (item) { return this.dataservice.deleteDataRemovelocal(item); };
        ;
        dxProduct.prototype.addlocal = function (item) { return this.dataservice.addlocal(item); };
        ;
        dxProduct.prototype.getCosthistory = function (id) { return this.dataservice.getHttp("/api/ProductJson/" + id + "/CostHistory"); };
        ;
        dxProduct.prototype.getPriceHistory = function (id) { return this.dataservice.getHttp("/api/ProductJson/" + id + "/PriceHistory"); };
        ;
        dxProduct.prototype.getTransactions = function (id) { return this.dataservice.getHttp("api/ProductJson/" + id + "/transactions"); };
        ;
        dxProduct.prototype.getProductAssembly = function (id) { return this.dataservice.getHttp("api/ProductJson/" + id + "/ProductAssembly"); };
        ;
        dxProduct.prototype.costPriceHostory = function (id) { return this.dataservice.getCustomData("/api/Product/" + id + "/pricecosthistory"); };
        return dxProduct;
    })();
    data.dxProduct = dxProduct;
    angular.module('data').service("dxProduct", ["entitySet", dxProduct]);
})(data || (data = {}));
//# sourceMappingURL=dxproduct.js.map
//(function () {
//    angular.module('data').factory("dxProduct", ["entitySet", function (entitySet) {
//        var items = {};
//        var dataservice = new entitySet("/api/Product", "ProductID", null);
//        var refresh = function () { return dataservice.getData(items); };
//        var costPriceHostory = function (id) { return dataservice.getCustomData("/api/Product/" + id + "/pricecosthistory") }

//        var getByid = function (id) { return dataservice.getByid(id, items); };
//        var getLocalById = function (id) { return dataservice.getLocalbyId(id); };
//        var add = function (item) { return dataservice.insertDataAddLocal(item); };
//        var update = function (item) { return dataservice.updateData(item); };
//        var addorUpdate = function (item) { return dataservice.insertorUpdateData(item); };
//        var remove = function (item) { return dataservice.deleteDataRemovelocal(item); };
//        var addlocal = function (item) { return dataservice.addlocal(item); };

//        var getCosthistory = function (id) { return dataservice.getHttp("/api/ProductJson/" + id + "/CostHistory"); };
//        var getPriceHistory = function (id) { return dataservice.getHttp("/api/ProductJson/" + id + "/PriceHistory"); };
//        var getTransactions = function (id) { return dataservice.getHttp("api/ProductJson/"+id+"/transactions"); };
//        var getProductAssembly = function (id) { return dataservice.getHttp("api/ProductJson/" + id + "/ProductAssembly"); };



//        return {
//            items: items,
//            refresh: refresh,
//            getLocalById: getLocalById,
//            add: add,
//            update: update,
//            remove: remove,
//            addorUpdate: addorUpdate,
//            getByid: getByid,
//            addlocal: addlocal,
//            getPriceHistory: getPriceHistory,
//            getCosthistory: getCosthistory,
//            getTransactions: getTransactions,
//            getProductAssembly: getProductAssembly,
//            costPriceHostory: costPriceHostory,
//        };
//    }]);
//})();
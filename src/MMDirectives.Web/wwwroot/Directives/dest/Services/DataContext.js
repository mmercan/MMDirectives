/// <reference path="../interfaces/idatacontext.ts" />
/// <reference path="dxproduct.ts" />
var data;
(function (data) {
    var dataContext = (function () {
        function dataContext($http, progressBar, dxTest, dxProduct, dxProductCategory, dxProductSubcategory, dxUnitMeasure, dxProductModel) {
            this.$http = $http;
            this.progressBar = progressBar;
            this.dxTest = dxTest;
            this.Products = dxProduct;
            this.ProductCategories = dxProductCategory;
            this.ProductSubcategories = dxProductSubcategory;
            this.ProductModels = dxProductModel;
            this.UnitMeasures = dxUnitMeasure;
        }
        return dataContext;
    })();
    data.dataContext = dataContext;
    angular.module('data').service("dataContext", ["$http", "progressBar", "dxTest", "dxProduct", "dxProductCategory", "dxProductSubcategory", "dxUnitMeasure", "dxProductModel", dataContext]);
})(data || (data = {}));

//# sourceMappingURL=../Services/DataContext.js.map
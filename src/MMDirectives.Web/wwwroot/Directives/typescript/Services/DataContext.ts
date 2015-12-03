/// <reference path="../interfaces/idatacontext.ts" />
/// <reference path="dxproduct.ts" />
module data {
    export class dataContext {
        dxTest: any;
        Products: dxProduct;
        ProductCategories: IDataContext;
        ProductSubcategories: IDataContext;
        UnitMeasures: IDataContext;
        ProductModels: IDataContext;

        constructor(private $http, private progressBar, dxTest, dxProduct, dxProductCategory, dxProductSubcategory, dxUnitMeasure, dxProductModel) {

            this.dxTest = dxTest;
            this.Products = dxProduct;
            this.ProductCategories = dxProductCategory;
            this.ProductSubcategories = dxProductSubcategory;
            this.ProductModels = dxProductModel;
            this.UnitMeasures = dxUnitMeasure;
        }
    }
    angular.module('data').service("dataContext", ["$http", "progressBar", "dxTest", "dxProduct", "dxProductCategory", "dxProductSubcategory", "dxUnitMeasure", "dxProductModel", dataContext]);
}
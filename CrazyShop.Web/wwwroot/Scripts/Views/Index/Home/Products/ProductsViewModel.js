class ProductsViewModel
{
    constructor($ProductsService)
    {
        this.Products = [];
        this.GridOptions = null;
        this.InitializeTable();
        this.SelectedProduct = null;
        this.ProductsService = $ProductsService;
        this.GetAllProducts();
        this.IsEditing = false;
    }

    InitializeTable()
    {
        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.Products',
                appScopeProvider: this,
            columnDefs: [
                    { name: 'Name', field: 'Name' },
                    { name: 'Price', field: 'Price' },
                    { name: '', field: 'Id', cellTemplate: '<input type="button" value="Edit" ng-click="grid.appScope.Select(row.entity)">' },
                    { name: ' ', field: 'Id', cellTemplate: '<input type="button" value="Remove" ng-click="grid.appScope.RemoveProduct(row.entity)">'}
                ]
            };
    }

    GetAllProducts()
    {
        this.ProductsService.GetAllAsync()
            .then((response) => {
                this.OnGetData(response);
            });
    }

    OnGetData(response)
    {
        this.Products.length = 0;
        for (let i in response.data)
        {
            let product = new Product(response.data[i]);
            this.Products.push(product);
        }
    }

    CheckFormAdd(complete)
    {
        if (complete)
        {
            this.AddNewProduct()
        }
    }

    AddNewProduct()
    {
        let product = new Product();
        product.Name = this.Name;
        product.Price = this.Price;
        this.SetData(product);
    }

    SetData(product)
    {
        this.ProductsService.AddAsync(product)
            .then((response) => {
                this.OnSuccesAdd(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesAdd(response)
    {
        let product = new Product(response.data)
        this.Products.push(product);
        this.Clean();  
    }

    Clean()
    {
        this.Name = "";
        this.Price = 0;
    }

    Select(product)
    {
        this.SelectedProduct = product;
        this.Name = product.Name;
        this.Price = product.Price;
        this.IsEditing = true;
    }

    CheckFormSave(complete)
    {
        if (complete)
        {
            this.SaveSelectedProduct()
        }
    }

    SaveSelectedProduct()
    {
        this.SelectedProduct.Name = this.Name;
        this.SelectedProduct.Price = this.Price;
        this.SaveEditProduct();
        this.IsEditing = false;
        this.Clean();
        this.SelectedProduct = null;
    }

    SaveEditProduct()
    {

        this.ProductsService.UpdateAsync(this.SelectedProduct)
            .then((response) =>
            {
                this.OnSuccesUpdate(response);
            },
                response => console.log(response)
            ); 
    }

    OnSuccesUpdate(response)
    {
        let product = new Product(response.data)
        let index = this.Products.findIndex(x => x.Id == this.SelectedProduct.Id);
        this.Products.splice(index, 1, product)
        //this.Products[index] = product;
        this.GetAllProducts();
    }

    RemoveProduct(product)
    {
        this.ProductsService.DeleteAsync(product)
            .then((response) => {
                this.OnSuccesRemove(product);
            },
                response => console.log(response)
            ); 
    }

    OnSuccesRemove(product)
    {
        let index = this.Products.findIndex(x => x.Id == product.Id);
        this.Products.splice(index, 1);
        this.Clean();
    }
}

app.component('products',
{
    templateUrl: './Scripts/Views/Index/Home//Products/ProductsView.html',
    controller: ProductsViewModel,
    controllerAs: "vm"
});
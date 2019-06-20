﻿class PurchasesViewModel
{
    constructor($ClientsService, $ProductsService, $PurchasesService)
    {
        this.ClientsService = $ClientsService;
        this.ProductsService = $ProductsService;
        this.PurchasesService = $PurchasesService;

        this.SelectedClient = null;
        this.SelectedProduct = null;
        
        this.Clients = [];
        this.Products = [];
        this.Purchases = [];
        this.ClientsPurchases = [];

        this.GetAllPurchases();
        this.GetAllClients();
        this.GetAllProducts();

        this.InitializeTable();
    }

    InitializeTable()
    {
        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.ClientsPurchases',
                appScopeProvider: this,
                columnDefs: [
                    { name: 'Client', field: 'ClientName' },
                    { name: 'Product', field: 'ProductName' },
                    { name: 'Quantity', field: 'Quantity' },
                    { name: '', field: 'Id', cellTemplate: '<input type="button" value="Existe" ng-click="grid.appScope.Select(row.entity)">' },
                ]
            };
    }

    GetAllPurchases()
    {
        this.PurchasesService.GetAllAsync()
            .then((response) =>
            {
                this.OnGetDataPurchase(response);
            });
    }

    OnGetDataPurchase(response)
    {
        this.Purchases.length = 0;

        for (let i in response.data)
        {
            let purchase = new Purchase(response.data[i]);
            this.Purchases.push(purchase);
        }
    }

    CheckFormAdd(complete)
    {
        if (complete)
        {
            this.AddNewPurchase()
        }
    }

    AddNewPurchase()
    {
        
        let purchase = new Purchase();
        purchase.Quantity = this.Quantity;
        purchase.ClientId = this.SelectedClient.Id;
        purchase.ProductId = this.SelectedProduct.Id;


        this.SetData(purchase);
    }

    SetData(purchase)
    {
        alert(purchase.Quantity);
        this.PurchasesService.PostAsync(purchase)
            .then((response) =>
            {
                this.OnSuccesPost(response);
                console.log(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesPost(response)
    {
        let purchase = new Purchase(response.data)
        this.Purchases.push(purchase);
        this.Clean();
    }

    Clean()
    {
        this.Quantity = 0;
        this.SelectedClient = null;
        this.SelectedProduct = null;
    }

    Select(product)
    {
        this.SelectedClient = client;
        this.Name = client.Name;
        this.Surname = client.Surname;
        this.Email = client.Email;
        this.Password = client.Password;
        this.Address = client.Address;
        this.IsEditing = true;
    }

    CheckFormSave(complete)
    {
        if (complete)
        {
            this.SaveSelectedClient()
        }
    }

    SaveSelectedClient()
    {
        this.SelectedClient.Name = this.Name;
        this.SelectedClient.Surname = this.Surname;
        this.SelectedClient.Email = this.Email;
        this.SelectedClient.Password = this.Password;
        this.SelectedClient.Address = this.Address;

        this.SaveEditClient();

        this.IsEditing = false;
    }

    SaveEditClient()
    {
        this.ClientsService.PutAsync(this.SelectedClient)
            .then((response) =>
            {
                this.OnSuccesEdit(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesEdit(response)
    {
        let client = new Client(response.data)
        let index = this.Clients.findIndex(x => x.Id == this.SelectedClient.Id);
        this.Clients[index] = client;
        this.SelectedClient = null;
        this.Clean();
        this.GetAllClients();
    }

    RemoveClient(client)
    {
        this.ClientsService.DeleteAsync(client)
            .then((response) =>
            {
                this.OnSuccesRemove(client);
            },
                response => console.log(response)
            );
    }

    OnSuccesRemove(client)
    {
        let index = this.Clients.findIndex(x => x.Id == client.Id);
        this.Clients.splice(index, 1);
        this.Clean();
    }









    GetAllClients()
    {
        this.ClientsService.GetAllAsync()
            .then((response) =>
            {
                this.OnGetDataClient(response);
            });
    }

    OnGetDataClient(response)
    {
        this.Clients.length = 0; 

        for (let i in response.data) 
        {
            let client = new Client(response.data[i]);
            this.Clients.push(client);
        }
    }

    GetAllProducts()
    {
        this.ProductsService.GetAllAsync()
            .then((response) =>
            {
                this.OnGetDataProduct(response);
            });
    }

    OnGetDataProduct(response)
    {
        this.Products.length = 0; 

        for (let i in response.data)  
        {
            let product = new Product(response.data[i]);
            this.Products.push(product);
        }
    }

    CheckFormSave(complete)
    {
        if (complete)
        {
            this.SaveSelectedClient()
        }
    }
    
}

app.component('purchases',
    {
        templateUrl: './Scripts/Views/Purchases/PurchasesView.html',
        controller: PurchasesViewModel,
        controllerAs: "vm"
    });


class CRUDService extends GenericService
{
    constructor(http, url, $window)
    {
        super(http, url, $window);
    }

    GetAllAsync()
    {
        return this.Get();
    }

    AddAsync(entity)
    {
        return this.Post(entity);
    }

    UpdateAsync(entity)
    {
        return this.Put(entity);
    }

    DeleteAsync(entity)
    {
        return this.Delete(entity);
    }
}
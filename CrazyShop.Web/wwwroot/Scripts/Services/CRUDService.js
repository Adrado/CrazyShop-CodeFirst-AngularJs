class CRUDService extends GenericService
{
    constructor(http, url)
    {
        super(http, url);
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
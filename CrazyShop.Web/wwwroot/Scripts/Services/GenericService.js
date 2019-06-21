class GenericService
{
    constructor(http, url)
    {
        this.Http = http;
        this.Url = url;
    }

    GetAllAsync()
    {
        return this.Http.get(this.Url);
    }

    PostAsync(entity)
    {
        var config =
        {
            headers: { 'Content-Type': 'application/json' }
            //token: {'tokenguardado'} ParaLogin Service
        }
        return this.Http.post(this.Url, entity, config)
    }

    PutAsync(entity)
    {
        var config =
        {
            headers: { 'Content-Type': 'application/json' }
        }
        let urlID = this.Url + entity.Id;
        return this.Http.put(urlID, entity, config)
    }

    DeleteAsync(entity)
    {
        let urlID = this.Url + entity.Id;
        return this.Http.delete(urlID)
    }
}
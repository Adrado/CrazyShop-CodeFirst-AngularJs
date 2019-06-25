class GenericService
{
    get Config()
    {
        var config =
        {
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.Token
            }
        };
        return config;
    }

    constructor(http, url)
    {
        this.Http = http;
        this.Url = url;
    }

    Get()
    {
        return this.Http.get(this.Url);
    }

    Post(entity)
    {
        return this.Http.post(this.Url, entity, this.Config)
    }

    Put(entity)
    {
        let urlID = this.Url + entity.Id;
        return this.Http.put(urlID, entity, this.Config)
    }

    Delete(entity)
    {
        let urlID = this.Url + entity.Id;
        return this.Http.delete(urlID)
    }
}
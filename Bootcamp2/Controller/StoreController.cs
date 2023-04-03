using Amazon.DynamoDBv2.Model.Internal.MarshallTransformations;

namespace Bootcamp2.Controller;

public class StoreController
{
  /*  public async Task<List<Product>> GetMLProducts(string termo)
    {
        var response = Factory.GetStore("ML");
        return await response.Search(termo);
    }
    
    public async Task<List<Product>> GetAmazonProducts(string termo)
    {
        var response = Factory.GetStore("AM");
        return await response.Search(termo);
    }*/

    public async Task<List<Product>?> ListProducts(string termo)
    {
        List<Product> produtos = new List<Product>();
        produtos.AddRange(await Factory.GetStore("AM",termo));
        produtos.AddRange(await Factory.GetStore("ML",termo));

        return produtos;
    }

    public void GetProduct(Product produto)
    {
        if (produto.Source == "AMAZON")
        {
            Factory.GetProduct("AM", produto);
        }
        else
        {
            Factory.GetProduct("ML", produto);
        }
    }
}
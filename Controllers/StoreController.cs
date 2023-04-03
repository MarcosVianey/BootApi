using Microsoft.AspNetCore.Mvc;

namespace Bootcamp2.Controller;

[ApiController]
[Route("/Store")]
public class StoreController
{
    [HttpGet]
    [Route("/Search")]
    public async Task<List<Product>?> ListProducts(string termo)
    {
        List<Product> produtos = new List<Product>();
        produtos.AddRange(await Factory.GetStore("AM",termo));
        produtos.AddRange(await Factory.GetStore("ML",termo));

        return produtos;
    }

    [HttpGet]
    [Route("/Get")]
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
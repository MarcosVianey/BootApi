using Amazon.DynamoDBv2.DocumentModel;
using Bootcamp2;
using Bootcamp2.Controller;
using CMConnect.Kernel.DTO.Cadastro;
using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using Amazon = Bootcamp2.Controller.Amazon;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
        });
});
var app = builder.Build();

app.UseRouting();
app.UseCors(MyAllowSpecificOrigins);
app.UseAuthorization();

app.MapGet("/store",(string termo) => new StoreController().ListProducts(termo));
app.MapGet("/getproduct",([FromBody]Product produto) => new StoreController().GetProduct(produto));

await app.RunAsync();

// Search(new MercadoLivre(), "ps4");
// Search(new Bootcamp2.Controller.Amazon(), "ps4");
//
// Get(new MercadoLivre(), new Product(){Id = "MLB16650345", CategoryId = "MLB11172"});
// // Search(new MercadoLivre(), "ps4");
// //
// void Search(Creator creator, string termo)
// {
//     creator.Search(termo);
// }
// //
// void Get(Creator creator, Product product)
// {
//     creator.Get(product);
// }

using Bootcamp2.Controller;
using Bootcamp2.Interfaces;
using MercadoLivre = Bootcamp2.Store.MercadoLivre;

namespace Bootcamp2;

public class Factory
{
    
    public static Dictionary<string, Type> StoreMap = new Dictionary<string, Type>()
        {
            { "ML", typeof(MercadoLivre) },
            { "AM", typeof(Bootcamp2.Store.Amazon) }
        };
        
        public static Task<List<Product>> GetStore(string value,string termo)
        {
            var type = StoreMap[value].GetConstructor(new Type[] { });
            var instance = (IStore)type!.Invoke(new object[] { });
            return instance.Search(termo);
        }

        public static void GetProduct(string value, Product product)
        {
            var type = StoreMap[value].GetConstructor(new Type[] { });
            var instance = (IStore)type!.Invoke(new object[] { });
            instance.Get(product);
        }
}

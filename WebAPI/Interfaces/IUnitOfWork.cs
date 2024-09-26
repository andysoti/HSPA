using System.Threading.Tasks;
namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {

        // MUltiple differetnrepos can be added to unit of work
         ICityRepository CityRepository {get; }

        IUserRepository UserRepository {get; }

         Task<bool> SaveAsync();

        
    }
}
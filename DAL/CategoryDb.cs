using BOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface ICategoryDb
    {
        IQueryable<Category> GetAll();
    }
    public class CategoryDb : ICategoryDb
    {
        SSDbContext dbContext;
        public CategoryDb(SSDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IQueryable<Category> GetAll()
        {
            return dbContext.Categories;
        }
    }
}

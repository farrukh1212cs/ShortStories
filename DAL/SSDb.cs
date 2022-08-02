using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface ISSDb
    {
        IStoryDb storyDb { get; }
        ICategoryDb categoryDb { get; }
    }

    public class SSDb : ISSDb
    {
        SSDbContext context;
        public SSDb(SSDbContext _context)
        {
            context = _context;
        }

        IStoryDb _storyDb;
        ICategoryDb _categoryDb;

        public IStoryDb storyDb
        {
            get
            {
                if (_storyDb == null)
                {
                    _storyDb = new StoryDb(context);
                }
                return _storyDb;
            }
        }

        public ICategoryDb categoryDb
        {
            get
            {
                if (_categoryDb == null)
                {
                    _categoryDb = new CategoryDb(context);
                }
                return _categoryDb;
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BOL;
using DAL;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace WebAPI.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class StoriesController : ControllerBase
    {

        ISSDb ssDb;

        public StoriesController(ISSDb _ssDb)
        {
            ssDb = _ssDb;
        }

        // GET: api/Stories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Story>>> GetStories()
        {
            return await ssDb.storyDb.GetAll().ToListAsync();
        }

        // GET: api/Stories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Story>> GetStory(int id)
        {
            var story = await ssDb.storyDb.GetById(id).FirstOrDefaultAsync();

            if (story == null)
            {
                return NotFound();
            }

            return story;
        }

        // GET: api/getStoriesByStatus/true
        [HttpGet("getStoriesByStatus/{isApproved}")]
        public async Task<IActionResult> GetStoriesByStatus(bool isApproved)
        {
            var strs = await ssDb.storyDb.GetStoriesByStatus(isApproved).ToListAsync();
            return Ok(strs);
        }

        // GET: api/getStoriesByUserId/5
        [HttpGet("getStoriesByUserId/{id}")]
        public async Task<IActionResult> GetStoriesByUserId(string id)
        {
            var strs = await ssDb.storyDb.GetByUserId(id).ToListAsync();
            return Ok(strs);
        }


        // PUT: api/approveStory/5
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpPut("approveStory/{id}")]
        public async Task<IActionResult> ApproveStory(int id, Story story)
        {
            try
            {

                var str = await ssDb.storyDb.GetById(id)
                                                .AsNoTracking()
                                                .FirstOrDefaultAsync();
                if (str != null)
                {
                    ssDb.storyDb.Approve(id);
                    return NoContent();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception E)
            {
                //E
                var msg = (E.InnerException != null) ? (E.InnerException.Message) : (E.Message);
                return StatusCode(500, "Admin is working on it! " + msg);
            }
        }

        // POST: api/Stories
        [HttpPost]
        public async Task<ActionResult<Story>> PostStory(Story story)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    story.Id = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier).Value;
                    story.CreatedOn = DateTime.Now;
                    story.IsApproved = false;
                    ssDb.storyDb.Create(story);
                    return CreatedAtAction("GetStory", new { id = story.SSId }, story);
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception E)
            {
                var msg = (E.InnerException != null) ? (E.InnerException.Message) : (E.Message);
                return StatusCode(500, "Admin is working on it! " + msg);
            }
        }

        // DELETE: api/Stories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStory(int id)
        {
            var result = await ssDb.storyDb.Delete(id);
            if (result)
            {
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }

    }
}


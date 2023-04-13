using Microsoft.AspNetCore.Mvc;
using tamnime.Models;

namespace tamnime.Controllers;

[ApiController]
[Route("api/animeSearch")]
public class AnimeSearch : ControllerBase
{
    [HttpGet]
    public IEnumerable<Anime> GetAnimeSearch(string query)
    {
        var _jikan = new JikanSearch();
        var results = _jikan.searchAnime(query).GetAwaiter().GetResult();
        return results;
    }
}


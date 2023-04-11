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
        foreach(Anime anime in results)
        {
            Console.WriteLine(anime.title);
            Console.WriteLine(anime.url);
            Console.WriteLine(anime.images.jpg.image_url);
            Console.WriteLine(anime.score);
            Console.WriteLine(anime.episodes);
            Console.WriteLine(anime.status);
            Console.WriteLine(anime.aired.airedString);
            Console.WriteLine(string.Join(", ", anime.studios.Select(x => x.name)));
            Console.WriteLine(anime.source);
            Console.WriteLine(string.Join(", ", anime.genres.Select(x => x.name)));
            Console.WriteLine(anime.duration);
            Console.WriteLine(anime.synposis);
        }
        return results;
    }
}


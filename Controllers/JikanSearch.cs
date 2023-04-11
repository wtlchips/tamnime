using tamnime.Models;
using Newtonsoft.Json;

namespace tamnime.Controllers;

public class JikanSearch
{
    public async Task<IEnumerable<Anime>> searchAnime(string query)
    {
        List<Anime> animeList = new List<Anime>();

        // Declare base url and parameters
        string url = $"https://api.jikan.moe/v4/anime";
        string parameters = $"?q={query}&sfw";

        HttpClient client = new HttpClient();
        client.BaseAddress = new Uri(url);

        // Call Jikan API
        HttpResponseMessage response = await client.GetAsync(parameters).ConfigureAwait(false);

        if (response.IsSuccessStatusCode)
        {
            // Read body of the response and deserialize it
            string jsonString = await response.Content.ReadAsStringAsync();
            var searchResults = JsonConvert.DeserializeObject<AnimeList>(jsonString);

            if (searchResults != null)
            {
                animeList.AddRange(searchResults.animeList);
            }
        }

        return animeList;
    }
}
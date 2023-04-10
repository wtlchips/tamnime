using Newtonsoft.Json;

namespace tamnime.Models;

[Serializable]
public class AnimeList
{

    [JsonProperty("data")]
    public IEnumerable<Anime> animeList { get; set; } = null!;

}
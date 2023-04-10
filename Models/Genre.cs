using Newtonsoft.Json;

namespace tamnime.Models;

public class Genre
{
    [JsonProperty("name")]
    public string name { get; set; } = null!;
}
using Newtonsoft.Json;

namespace tamnime.Models;

public class Studio
{
    [JsonProperty("name")]
    public string name { get; set; } = null!;
}
using Newtonsoft.Json;

namespace tamnime.Models;

public class Aired
{
    [JsonProperty("string")]
    public string airedString { get; set; } = null!;
}
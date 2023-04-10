using Newtonsoft.Json;

namespace tamnime.Models;

public class Images
{
    [JsonProperty("jpg")]
    public Jpg jpg { get; set; } = null!;
}
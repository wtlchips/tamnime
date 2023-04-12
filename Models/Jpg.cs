using Newtonsoft.Json;

namespace tamnime.Models;

public class Jpg
{
    [JsonProperty("large_image_url")]
    public string image_url { get; set; } = null!;
}
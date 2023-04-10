using Newtonsoft.Json;

namespace tamnime.Models;

public class Jpg
{
    [JsonProperty("image_url")]
    public string image_url { get; set; } = null!;
}
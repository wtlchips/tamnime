using Newtonsoft.Json;

namespace tamnime.Models;

[Serializable]
public class Anime
{

    [JsonProperty("title")]
    public string title { get; set; } = null!;

    [JsonProperty("url")]
    public string url { get; set; } = null!;

    [JsonProperty("images")]
    public Images images { get; set; } = null!;

    [JsonProperty("score")]
    public string score { get; set; } = null!;

    [JsonProperty("episodes")]
    public string episodes { get; set; } = null!;

    [JsonProperty("status")]
    public string status { get; set; } = null!;

    [JsonProperty("aired")]
    public Aired aired { get; set; } = null!;

    [JsonProperty("studios")]
    public List<Studio> studios { get; set; } = null!;

    [JsonProperty("source")]
    public string source { get; set; } = null!;

    [JsonProperty("genres")]
    public List<Genre> genres { get; set; } = null!;

    [JsonProperty("duration")]
    public string duration { get; set; } = null!;

    [JsonProperty("synopsis")]
    public string synposis { get; set; } = null!;

}
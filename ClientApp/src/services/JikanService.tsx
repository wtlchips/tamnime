export async function searchAnime(query: string) {
    const response = await fetch(`/api/animeSearch?query=${query}`);
    return await response.json();
}
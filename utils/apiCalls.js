const baseUrl = "http://localhost:8080/api/v1";

export async function allVideos() {
  try {
    const response = await fetch(`${baseUrl}/video/`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching video:", error.message);
  }
}

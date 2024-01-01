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

export async function getVideo(id) {
  try {
    const response = await fetch(`${baseUrl}/video/${id}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching video:", error.message);
  }
}

export async function clickDeveloperContact() {
  try {
    await fetch(`${baseUrl}/statistic/DEVELOPER_CONTACT`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickIntroPlay() {
  try {
    await fetch(`${baseUrl}/statistic/INTRO_PLAY`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

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

export async function clickLogo() {
  try {
    await fetch(`${baseUrl}/statistic/LOGO`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickAddVideo() {
  try {
    await fetch(`${baseUrl}/statistic/ADD_VIDEO`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickFigureToy() {
  try {
    await fetch(`${baseUrl}/statistic/FIGURE_TOY`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickEnglishFlag() {
  try {
    await fetch(`${baseUrl}/statistic/ENGLISH_FLAG`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickTurkishFlag() {
  try {
    await fetch(`${baseUrl}/statistic/TURKISH_FLAG`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickSpanishFlag() {
  try {
    await fetch(`${baseUrl}/statistic/SPANISH_FLAG`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickVideoDetail() {
  try {
    await fetch(`${baseUrl}/statistic/VIDEO_DETAIL`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickCoffee() {
  try {
    await fetch(`${baseUrl}/statistic/COFFEE`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickInstagram() {
  try {
    await fetch(`${baseUrl}/statistic/INSTAGRAM`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickTwitter() {
  try {
    await fetch(`${baseUrl}/statistic/TWITTER`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickLinkedin() {
  try {
    await fetch(`${baseUrl}/statistic/LINKEDIN`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickGithub() {
  try {
    await fetch(`${baseUrl}/statistic/GITHUB`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function clickEmail() {
  try {
    await fetch(`${baseUrl}/statistic/EMAIL`, {
      method: "PUT",
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function addVideoRequest(data) {
  try {
    return await fetch(`${baseUrl}/petition/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function addFigureToyRequest(data) {
  try {
    return await fetch(`${baseUrl}/property/figure-toy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export async function getIntroStatistic() {
  try {
    const response = await fetch(`${baseUrl}/statistic/INTRO_PLAY`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

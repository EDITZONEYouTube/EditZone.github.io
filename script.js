document.addEventListener("DOMContentLoaded", function() {
    const videos = [
        {
            title: "gojo amv edit | gojo 😈 edit capcut #shorts",
            url: "https://youtu.be/xJm3p6FkVaA?si=qiEzt4b-EpGPYphr"
        },
        {
            title: "Anime Edits in CapCut Video Editor - Quick Tutorial #shorts",
            url: "https://www.youtube.com/watch?v=example2"
        },
        {
            title: "Zenitsu Agatsuma: The Powerful Demon #ViralEdit#Viral",
            url: "https://www.youtube.com/watch?v=example3"
        }
    ];

    const videoContainer = document.getElementById("video-container");

    videos.forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${new URL(video.url).searchParams.get("v")}`;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        const videoTitle = document.createElement("p");
        videoTitle.classList.add("video-title");
        videoTitle.innerText = video.title;

        videoItem.appendChild(iframe);
        videoItem.appendChild(videoTitle);
        videoContainer.appendChild(videoItem);
    });
});
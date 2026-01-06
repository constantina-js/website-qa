document.addEventListener("DOMContentLoaded", () => {
    const randomBtn = document.getElementById("random-post");
    if (randomBtn) {
        randomBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            const res = await fetch(`${window.SITE_BASEURL}/posts.json`);
            const posts = await res.json();

            const random = posts[Math.floor(Math.random() * posts.length)];
            window.location.href = `${window.SITE_BASEURL}/${random.url}`;
        });
    }
});
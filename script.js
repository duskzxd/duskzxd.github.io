const announcement = document.getElementById("announcement");
const closeBtn = document.getElementById("closeAnnouncement");

const SHOW_ANNOUNCEMENT = true;

if (SHOW_ANNOUNCEMENT && !localStorage.getItem("announcementClosed")) {
  announcement.classList.remove("hidden");
}

closeBtn?.addEventListener("click", () => {
  announcement.classList.add("hidden");
  localStorage.setItem("announcementClosed", "true");
});

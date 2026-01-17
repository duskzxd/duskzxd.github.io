const announcement = document.getElementById("announcement");
const closeBtn = document.getElementById("closeAnnouncement");

if (!localStorage.getItem("announcementClosed")) {
  announcement.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  announcement.style.display = "none";
  localStorage.setItem("announcementClosed", "true");
});

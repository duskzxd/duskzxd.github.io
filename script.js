const announcement = document.getElementById("announcement");
const closeBtn = document.getElementById("closeAnnouncement");

if (!localStorage.getItem("announcementClosed")) {
  announcement.classList.remove("hidden");
}

closeBtn.onclick = () => {
  announcement.classList.add("hidden");
  localStorage.setItem("announcementClosed", "true");
};


function show_hide_sidebar() {
  const sidebar = document.getElementsByClassName("sidebar")[0];
  if (sidebar) {
    sidebar.classList.toggle("open");
  }
}

function show_hide_details() {
  const details = document.getElementsByClassName("container__details")[0];
  if (details) {
    details.classList.toggle("open");
  }
}

function show_hide_sidebar() {
  const sidebar = document.getElementsByClassName("sidebar")[0];
  if (sidebar) {
    sidebar.classList.toggle("open");
  }
}

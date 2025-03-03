function show_hide_sidebar() {
  const sidebar = document.getElementsByClassName("sidebar")[0];
  console.log(sidebar);
  if (sidebar) {
    sidebar.style.display =
      sidebar.style.display === "block" ? "none" : "block";
  }
}

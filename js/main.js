document.addEventListener("DOMContentLoaded", () => {
  const loadEvents = async () => {
    const res = await fetch("data/events.json");
    const events = await res.json();
    const container = document.getElementById("events-list");
    events.slice(0, 3).forEach(event => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p><small>${event.date} - ${event.location}</small>`;
      container.appendChild(div);
    });
  };

  const loadBlogs = async () => {
    const res = await fetch("data/blogs.json");
    const blogs = await res.json();
    const container = document.getElementById("blogs-list");
    blogs.slice(0, 3).forEach(blog => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${blog.title}</h3><p>${blog.author}</p><small>${blog.date}</small>`;
      container.appendChild(div);
    });
  };

  loadEvents();
  loadBlogs();
});

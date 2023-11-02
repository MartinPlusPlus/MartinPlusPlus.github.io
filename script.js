const createNavbar = () => {
    let items = ["about", "contact", "projects", "resume"];
    let bar = document.getElementsByTagName("nav").item(0);

    // Preemptively add index.htmls
    bar.innerHTML += `<li><a href="index.html">About</a></li>`;

    for (let i = 1; i < items.length; i++) {
        let item = items[i];
        let itemUpper = item.charAt(0).toUpperCase() + item.slice(1);

        bar.innerHTML += `<li><a href="${item}.html">${itemUpper}</a></li>`;
    }
};

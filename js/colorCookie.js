function switchTheme() {
    let theme = localStorage.getItem("theme");
    
    if (theme === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    console.log("Theme preference saved...");
}



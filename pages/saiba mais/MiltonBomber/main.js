const input = document.querySelector("input");
const body = document.querySelector("body");
const div = document.querySelector("div");
const footer = document.querySelector("footer");
const headerbox = document.getElementById('headerbox');
const toggleMode = document.getElementById('toggleMode');
const vitudiv = document.getElementById('vitudiv');
const vitindiv = document.getElementById('vitindiv');
const rafadiv = document.getElementById('rafadiv');
const rochediv = document.getElementById('rochediv');
const cassiodiv = document.getElementById('cassiodiv');
const selvasdiv = document.getElementById('selvasdiv');
const andrediv = document.getElementById('andrediv');


const toggleThemeMode = () => {
    body.classList.toggle("dark");
    footer.classList.toggle("dark");
    headerbox.classList.toggle("dark");
    toggleMode.classList.toggle("dark");
    toggleModeA.classList.toggle("dark");
    vitu.classList.toggle("dark");
    vitin.classList.toggle("dark");
    rafa.classList.toggle("dark");
    roche.classList.toggle("dark");
    cassio.classList.toggle("dark");
    selvas.classList.toggle("dark");
    andre.classList.toggle("dark");
};

input.onchange = toggleThemeMode;
function clicky(event) {
    window.lastElementClicked = event.target;
}

window.oncontextmenu = clicky;

function clicar() {

    $.alert({
        title: 'Alert!',
        content: 'Simple alert!',
    });
}
document.getElementById("jdjd").onmousemove = function () {
    const id = event.target.id;
    console.log(id);
}
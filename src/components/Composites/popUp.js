export const usePopUp = (message) => {
    //Buscamos la clase de pop text y cambiamos su contenido
    document.getElementById("popup_text").textContent = message;
    //Verificamos el estado en el que esta el boton
    const pop = document.getElementById("popup_window");
    if (pop.style.display === "none") {
        pop.style.display = "block";
    } else {
        pop.style.display = "none";
    }
};
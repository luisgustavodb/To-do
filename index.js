/* geral ariaveis */
let criar_btn = document.getElementById("criar_btn");
let deletar_todas_btn = document.getElementById("delete_todas_btn");
let lista_container = document.getElementById("listas");
let mensagem_inicial = document.getElementById("mensagem_inicial");

/* pop up variaveis */
let criar_lista_popup = document.getElementById("pop_up_criar");
let cancelar_btn = document.getElementById("cancelar_btn_popup");
let criar_btn_popup = document.getElementById("criar_btn_popup");
let input_popup = document.getElementById("input_criar");

let lista_quant = 0;

criar_btn.onclick = function () {
    criar_lista_popup.style.display = "flex";
    input_popup.focus();
}

cancelar_btn.onclick = function () {
    criar_lista_popup.style.display = "none";
}

function adicionar_task() {

    if (input_popup.value.length > 10) {
        input_popup.value = input_popup.value.slice(0, 10) + "...";
    }

    const nome_lista = input_popup.value;

    const card = document.createElement("div");
    card.className = "card_container"

    card.innerHTML = `
                <input type="checkbox" class="checkbox">
                <label for="checkbox" class="label">${nome_lista}</label>
                <button class="delete_card_btn"><svg class="icone_delete_card_btn" xmlns="http://www.w3.org/2000/svg"
                        width="32" height="32"
                        viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
                        <path fill="currentColor"
                            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" />
                    </svg></button>`

    const delete_btn = card.querySelector(".delete_card_btn");


    delete_btn.onclick = function () {
        card.remove();

        lista_quant--;

        if (lista_quant <= 0) {

            mensagem_inicial.style.display = "flex";
        }

    }

    deletar_todas_btn.onclick = function () {

        const cards = document.querySelectorAll(".card_container");

        cards.forEach(card => {
            card.remove();
        });
        lista_quant = 0;
    }

    lista_container.appendChild(card);


    const checkbox = card.querySelector(".checkbox");
    const titulo = card.querySelector(".label");

    checkbox.onclick = function () {
        if (checkbox.checked == true) {
            const titulo = card.querySelector(".label");
            titulo.style.textDecoration = "line-through";
        }
        else if (checkbox.checked == false) {
            titulo.style.textDecoration = "none";
        }
    }

    lista_quant++;

    if (lista_quant > 0 || KeyboardEvent()) {
        mensagem_inicial.style.display = "none";
    }
}


criar_btn_popup.onclick = function () {
    if (input_popup.value.length > 3) {
        adicionar_task();
        criar_lista_popup.style.display = "none";
        input_popup.value = "";
    }
    else {
        window.alert("coloque pelo menos 3 caracteres no nome do item")
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (input_popup.value.length > 3) {
            adicionar_task();
            criar_lista_popup.style.display = "none";
            input_popup.value = "";
        }
        else {
            window.alert("coloque pelo menos 3 caracteres no nome do item")
        }
    }
});

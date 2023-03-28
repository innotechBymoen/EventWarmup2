function switch_golf(details) {
    if(details[`target`].getAttribute(`src`) === `/images/golf1.jpg`) {
        details[`target`].setAttribute(`src`, `/images/golf2.jpg`);
    } else {
        details[`target`].setAttribute(`src`, `/images/golf1.jpg`);
    }
}

let golf_image = document.querySelector(`#golf_image`);
golf_image.addEventListener(`click`, switch_golf);

function select_item(details) {
    let selection_text = document.getElementById(`selection_text`);
    selection_text[`innerHTML`] = `${details[`target`].getAttribute(`menu_value`)} Selected!`;
    Cookies.set(`menu_selection`, `${details[`target`].getAttribute(`menu_value`)}`);
}

let menu_buttons = document.querySelectorAll(`.menu_button`);
for(let i=0; i<menu_buttons.length; i++) {
    menu_buttons[i].addEventListener(`click`, select_item);
}

let menu_selection_value = Cookies.get(`menu_selection`);
let selection_text = document.getElementById(`selection_text`);
selection_text[`innerHTML`] = `${menu_selection_value} Selected`;
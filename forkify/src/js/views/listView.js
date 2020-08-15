import {
    elements
} from './base';

export const renderItem = item => {

    // Here we are adding data attributes to the list element
    const markup = `
        <li class="shopping__item" data-itemid = ${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class = "shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;

    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
    // TODO: Try to understand the approach of attribute addition for your own sake of comfort
    const item = document.querySelector(`[data-itemid="${id}"]`)
    if (item) {
        item.parentElement.removeChild(item);
    }
};
const tagInput = document.querySelector('[data-input-search]');
const tagButton = document.querySelector('[data-input-button]');

tagButton.addEventListener("click", () => {
    incluiTabela();
});


const tabelaa = document.querySelector('[data-app-tabela]').children;

function incluiTabela() {
    tabelaa.innerHTML += `
    <tr class="main__application__table-tabela-tr">
        <td class="main__application__table-tabela-td">${tagInput.value}</td>
        <td class="main__application__table-tabela-td">275484745668</td>
        <td class="main__application__table-tabela-td">R$ 15,90</td>
        <td class="main__application__table-tabela-td">01</td>
        <td class="main__application__table-tabela-td">
            <button>Comprado</button>
            <button>Remover</button>
        </td>
    </tr>`;

}
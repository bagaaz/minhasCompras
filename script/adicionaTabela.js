const tabela = document.querySelector('[data-app-tabela]');

function incluiTabela() {
    tabela.innerHTML = `<tr class="main__application__table-tabela-tr">
    <td class="main__application__table-tabela-td">${tagInput.value}</td>
    <td class="main__application__table-tabela-td">275484745668</td>
    <td class="main__application__table-tabela-td">R$ 15,90</td>
    <td class="main__application__table-tabela-td">01</td>
    <td class="main__application__table-tabela-td">
        <button>Comprado</button>
        <button>Remover</button>
    </td>
</tr>`

}
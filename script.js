function adicionarContato() {
    const nome=document.getElementById('nome').value;
    const telefone=document.getElementById('telefone').value;
    if (nome ==='' || telefone ==='') {
        alert('Por favor preencha ambos os campos.');
        return;
    }
    const tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const colunaNome = novaLinha.insertCell(0);
    const colunaTelefone = novaLinha.insertCell(1);

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    document.getElementById('contactForm').reset();
}
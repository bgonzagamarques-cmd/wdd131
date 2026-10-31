// Preenche o ano atual no rodapé
const hoje = new Date();
document.querySelector("#anoatual").textContent = hoje.getFullYear();

// Preenche a data da última modificação do documento
document.querySelector("#ultimomodificacao").textContent = `Última modificação: ${document.lastModified}`;
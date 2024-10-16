//Elementos do Dom
const musicForm=document.getElementByld('musicForm');
const musicTableBody=document.querySelector('#musicTable tbody');
const exportBtn=document.getElementByld('exportBtn');

//Função para adicionar uma linha na tabela
musicForm.addEvenListener('submit',function(event){
    event.preventDelault();
    const numero=document.getEElementByld('numero').value;
    const musica=document.getElementByld('musica').value;
const genero=document.getElementByld('cantor').value;
const autoria=document.getElementByld('autoria').value;

const newRow=document.createElement('tr');
newRow.innerHTML=`
<td>${numero}</td>
<td>${musica}</td>
<td>${genero}</td>
<td>${cantor}</td>
<td>${autoria}</td>
´;

music TableBody.appendChild(newRow);

//limpar
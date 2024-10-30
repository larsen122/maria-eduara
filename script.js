//Elementos do Dom
const musicForm=document.getElementByld('musicForm)');
const music TableBody=document.querySelector('#musicTable tbody');
const exporBtn=docoment.getElementByld('exportBtn');

//Função para adicionar uma linha na tabela
// musicForm.addEvenListener('submit',function(event){event.preventDefault();
    event.preventDefault();  

    const numero=document.getElementBydl('numero') value;
    const musica=document.getElementByld('musica')value;
    const genero=document.getElementByld('genero')value;
    const cantor=document.getElementByld('cantor')value;
    const autoria=document.getElementByld('autoria')value;

    const newRow=document.createElement('tr');
    newRow.innerHTML=´
       <td>${numero}</td>
       <td>${musica}</td>
       <td>${genero}</td>
       <td>${cantor}</td>
       <td>${autoria}</td>  
    ´;

      musicTableBody.appendChild(newRow)

      //Limpar o formulário
      musicForm.reset();
 });

 //Função para exportar a tabela como planilha dinÂmica
 export
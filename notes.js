let arr=[];
showNotes();
function addFunc()
{
    console.log('add to ls');
    let txt=document.getElementById('floatingTextarea2');

    arr.push(txt.value);
console.log(arr);
    localStorage.setItem('notes',JSON.stringify(arr));

    txt.value="";

    showNotes();
}

function upDate()
{
    console.log('update array ');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      arr = [];
    } else {
      arr = JSON.parse(notes);
    }

}

function showNotes()
{

 
   upDate();
   console.log('show');
    let html = "";
    arr.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title fw-light">Note ${index + 1}</h5>
                          <p class="card-text fst-italic"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });

    let box=document.getElementById('box3');
    if (arr.length != 0) {
        box.innerHTML = html;
      } else {
        box.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
    }


function deleteNote(index)
{
   console.log('delete');
    arr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(arr));
    showNotes();
}


let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();

    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element)
    {
        let cardText=element.getElementsByTagName('p')[0].innerHTML;
       
        if(cardText.includes(inputVal))
        {
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })

})

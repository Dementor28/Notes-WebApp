const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", function() {
    addNote();
});

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value)
    }
    )
    // console.log(data);

    if(data.length === 0) {
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes", JSON.stringify(data));

    }
}

const addNote = (text = '') => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="save fa-regular fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove();
            showDeletedMessage();
            saveNotes();
        }
         
    )
    function showDeletedMessage() {
        const message = document.createElement("div");
        message.textContent = "Item Deleted!";
        message.classList.add("saved-message");
        document.body.appendChild(message);
        console.log(message);
    
        setTimeout(function() {
            message.style.top = "0";
        }, 100);
    
        setTimeout(function() {
            message.style.top = "-50px";
            setTimeout(function() {
                message.remove();
            }, 500);
        }, 2000);
    }

    note.querySelector(".save").addEventListener("click", function() {
        saveNotes();
        showSavedMessage();
    });
    
    function showSavedMessage() {
        const message = document.createElement("div");
        message.textContent = "Item saved!";
        message.classList.add("saved-message");
        document.body.appendChild(message);
        console.log(message);
    
        setTimeout(function() {
            message.style.top = "0";
        }, 100);
    
        setTimeout(function() {
            message.style.top = "-50px";
            setTimeout(function() {
                message.remove();
            }, 500);
        }, 2000);
    }
    
    
    
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes();
        }
    );
    main.appendChild(note);
    saveNotes();
}


(
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        // console.log(lsnotes);
        if(lsnotes === null){
            addNote();
        }else{
            lsnotes.forEach(
                (lsnote) =>{
                addNote(lsnote);
            }
            )

        }
    }
)()


const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
const mainContent = document.querySelector("#main");

navbarToggler.addEventListener("click", function () {
  mainContent.classList.toggle("expanded");
});




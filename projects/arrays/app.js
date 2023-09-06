// theory
/*
const array = [1, 2, 3, 4, 21, 15];

console.log(array, array.length);
console.log(array[3]);
console.log(array[array.length-1]);

array[1] = 'hello';
array[array.length] = 'new element';
array.push(true);
console.log(array);
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('add-btn');
const listElement = document.getElementById('list');
const h1Title = document.getElementById('h1');
const completeBtn = document.getElementById('completed');
const notCompleteBtn = document.getElementById('not-completed');

const notes = [
  {
    text: 'Создать заметки на javascript',
    completed: true,
    deleted: false,
  },
  {
    text: 'Пообедать',
    completed: false,
    deleted: false,
  },
]

// console.log(inputElement.value);

function getNoteTemplate(value, i) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${value.completed ? 'text-decoration-line-through' : ''}">
        ${value.text}
      </span>
      <span>
        <span
         class="btn btn-small btn-${value.completed ? 'warning' : 'success'}"
         id="completed"
         data-index="${i}"
         data-type="toggle">&check;</span>
        <span
         class="btn btn-small btn-danger"
         id="not-completed"
         data-index="${i}"
         data-type="cancel">&times;</span>
      </span>
    </li>
  `
  
};

function render() {
  listElement.innerHTML = '';
  if (notes.length === 0) {
    listElement.innerHTML = '<p>Список задач пуст</p>'
  };
  for (let [i, note] of notes.entries()) {
    listElement.insertAdjacentHTML(
     'beforeend',
     getNoteTemplate(note, i)
    );
  };
};

createBtn.onclick = function () {
    if (inputElement.value.length !== 0) {
      const newNote = {
        text: inputElement.value,
        completed: false,
        deleted: false,
      };
      listElement.insertAdjacentHTML(
       'beforeend',
       getNoteTemplate(newNote)
      );
      notes.push(newNote);
    };
    render();
    inputElement.value = '';
};

listElement.onclick = function (event) {
  if (event.target.dataset) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;
    
    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    } else {
      notes.splice(index, 1);
    }
    render();
  };
};

h1Title.onclick = function logNotes() {
  notes.forEach((note) => {
    console.log(note);
  })
};


render();

//objects
/*
const person = {
  firstName: 'Evgeniy',
  lastName: 'Tyan',
  wasBorn: 1993,
  languages: ['ru', 'en', 'de'],
  getFullName: function() {
    console.log(person.firstName, this.lastName);
  },
};
console.log(typeof person);
person.getFullName();
*/

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapt => {
    displayList(chapt);
  });

button.addEventListener('click', () => {
    // if (input.value != ''){
    //     const li = document.createElement('li');
    //     const deleteButton = document.createElement('button');
    //     li.textContent = input.value;
    //     deleteButton.textContent = '❌';
    //     li.append(deleteButton);
    //     list.append(li);
    //     deleteButton.addEventListener('click', function () {
    //         list.removeChild(li);
    //         input.focus();
    //     });
    //     input.focus();
    //     input.value = '';
    // }
    // if (input.value == '') {alert("You need to add input!")}

    // console.log("Input is required!")

    if (input.value != '') {  
        displayList(input.value); 
        chaptersArray.push(input.value);  
        setChapterList(); 
        input.value = ''; 
        input.focus(); 
      }
})


function displayList(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    if (item == '') {alert("You need to add input!")}

    console.log("Input is required!")
}
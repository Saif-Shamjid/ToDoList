const addItem = event =>{
    event.preventDefault();

    let inputFild = document.getElementById('todo-input');
    let inputFildValue = inputFild.value;

    console.log(inputFildValue);

    db.collection("todo-items").add({
        text: inputFildValue,
        status:"active"
    })


    inputFild.value='';
}

function getItems(){
    db.collection("todo-items").onSnapshot((data) =>{
        console.log(data);
        let items =[];
        data.docs.forEach(item => {
            items.push({
                id: item.id,
                ...item.data()
            });
        })
        console.log(items);
    })
}

getItems();
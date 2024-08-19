import React, { useEffect, useState } from 'react'
import GetTodo from './GetTodo'

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const [getTodo, setGetTodo] = useState([])
    const [toggle, settoggle] = useState(false);
    const submithandle = (e) => {
        e.preventDefault();

        if (!toggle) {
            if (todo === "") {
                alert("Please fill todo for saving on Cloud!")
                return;
            }
            if (!localStorage.getItem("todo")) {
                localStorage.setItem("todo", JSON.stringify([todo]));
                setGetTodo([todo]);
            } else {
                let allTodo = JSON.parse(localStorage.getItem("todo"))
                let newTodo = [...allTodo, todo];
                setGetTodo(newTodo)
                localStorage.setItem("todo", JSON.stringify(newTodo));
            }
        }
        setTodo("");
        settoggle(false)
    }
    useEffect(() => {
        if (localStorage.getItem("todo")) {
            let allTodo = JSON.parse(localStorage.getItem("todo"));
            setGetTodo(allTodo);
        }
    }, [])
    const deleteHandle = (id) => {
        let allTodo = JSON.parse(localStorage.getItem("todo"));
        let filterTodo = allTodo.filter((todo, index) => index !== id);
        setGetTodo(filterTodo);
        localStorage.setItem("todo", JSON.stringify(filterTodo));
    }
    const editHandle = (id) => {
        let allTodo = JSON.parse(localStorage.getItem("todo"));
        let filterTodo = allTodo.filter((todo, index) => index === id);

        setTodo(filterTodo);

        let save = document.getElementById("save");
        save.style.display = "none";

        let formInput = document.getElementById("form-input");
        let button = document.createElement("button");
        button.innerText = "Update";
        button.style.background = "green";
        button.id = "update"
        button.addEventListener("click", function () {
             let input=document.getElementById("inp").value;
         allTodo= allTodo.map((item,index)=>{
                if(index===id){
                    item=input;
                }
                return item
          })
            setGetTodo(allTodo);
            localStorage.setItem("todo", JSON.stringify(allTodo))
            button.style.display = "none";
            save.style.display = ""

        })
        if (!toggle) {
            settoggle(true);
            formInput.appendChild(button);
        }
    }
    return (
        <div>
            <div className='container'>
                <h1 className='heading'>Manage Your Todos at one place</h1>
                <form action="" onSubmit={submithandle}>
                    <label htmlFor="">Add Todo</label>
                    <div id='form-input'>
                        <input type="text" value={todo} name='title' id='inp' onChange={(e) => setTodo(e.target.value)} />
                        <button id='save' className='save'>Save</button>
                    </div>
                </form>
                <h1 className='todo-list'>Your Todos</h1>
                {getTodo.map((todo, index) => {
                    return <GetTodo todo={todo} key={index} id={index} editHandle={editHandle} deleteHandle={deleteHandle} />
                })
                }
            </div>
        </div>
    )
}

export default AddTodo
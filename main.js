const ContainerTodo=document.querySelector('#contenedorTodito')
// const elementos=document.querySelector('#lista')
// const entrada=document.querySelector('#entrada')
// const agregar=document.querySelector('#agregar')

// Estableciendo el HTML
const headerCont=document.createElement('div')
const header=document.createElement('header')
header.setAttribute('class','title')
header.textContent='To do List'
headerCont.append(header)
const inputs=document.createElement('div')
inputs.className='inputs'
const entrada=document.createElement('input')
entrada.setAttribute('class','entrada') 
entrada.placeholder='Escriba su por hacer aquí'
const agregar=document.createElement('button')
agregar.setAttribute('class', 'agregar')
agregar.textContent='+'
inputs.append(entrada,agregar)
const elementos=document.createElement('div')
elementos.setAttribute('class', 'lista')

// Agregando todo al HTML
ContainerTodo.append(headerCont)
ContainerTodo.append(inputs)
ContainerTodo.append(elementos)


// Botón Agregar
agregar.addEventListener('click',()=>{
    const tarea=document.createElement('div')
    tarea.className='tarea'
    tarea.textContent=`${entrada.value}`
    entrada.value=''
    const borrarTarea=document.createElement('div')
    borrarTarea.className='bi bi-trash3'

    tarea.appendChild(borrarTarea)
    elementos.append(tarea)
})

// Botón Borrar
elementos.addEventListener('click',(e)=>{
    if(e.target.className=="bi bi-trash3"){
       elementos.removeChild(e.target.parentElement)
    }
})
let ar2r = axios.get("http://localhost:3001")
let top3 = document.querySelector('.top3')
let dob  = document.querySelector('.dob')


let  modal = document.querySelector('.modal')
let  modal_bg = document.querySelector('.modal_bg')

let arr = [
   {
      "id": "1",
      "title": "Переписать проект на Vue 3",
      "info": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "data": "21.10.21",
      "time": "14:31",
      "ready": "Не выполнено"
   },
   {
      "id": "2",
      "title": "Переписать проект на Vue 3",
      "info": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "data": "21.10.21",
      "time": "14:31",
      "ready": "Готово"
   },
   {
      "id": "3",
      "title": "Переписать проект на Vue 3",
      "info": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "data": "21.10.21",
      "time": "14:31",
      "ready": "Готово"
   },
   {
      "id": "4",
      "title": "Переписать проект на Vue 3",
      "info": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "data": "21.10.21",
      "time": "14:31",
      "ready": "В прогрессе"
   },
   {
      "id": "5",
      "title": "Переписать проект на Vue 3",
      "info": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "data": "21.10.21",
      "time": "14:31",
      "ready": "Готово"
   },
   {
      "id": "6",
      "title": "Переписать проект на Vue 3",
      "info": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "data": "21.10.21",
      "time": "14:31",
      "ready": "Не выполнено"
   },
   {
      "id": "7",
      "title": "Переписать проект на Vue 3",
      "info": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "data": "21.10.21",
      "time": "14:31",
      "ready": "В прогрессе"
   }
]

for (let item of arr) {
   let liniya = document.createElement("div")
   let l1 = document.createElement("div")
   let l2 = document.createElement("div")
   let l3 = document.createElement("div")
   let l4 = document.createElement("div")
   let l5 = document.createElement("div")

   liniya.classList.add('liniya')
   l1.classList.add('l1')
   l2.classList.add('l2')
   l3.classList.add('l3')
   l4.classList.add('l4')
   l5.classList.add('l5')
   
   l1.innerHTML = item.title
   l2.innerHTML = item.info
   l3.innerHTML = item.data
   l4.innerHTML = item.time
   l5.innerHTML = item.ready

   if(l5.innerHTML === 'Не выполнено') {
      l5.style.color = 'red'
   } else if(l5.innerHTML === 'В прогрессе') {
      l5.style.color = 'royalblue'
   } else {
      l5.style.color = 'black'
   }
   
   
   liniya.append(l1 ,l2 ,l3 ,l4 ,l5)
   top3.append(liniya)
 

}



dob.onclick = () => {
   openModal()
}
// save.onclick = () => {
//    closeModal()
// }

// modal_bg.onclick = () => {
//    closeModal()
// }

const openModal = () => {
   modal.style.display = "block"
   modal.style.opacity = "1"
   modal_bg.style.display = "block"
   modal_bg.style.opacity = "1"
}
const closeModal = () => {
   modal.style.display = "none"
   modal.style.opacity = "0"
   modal_bg.style.display = "none"
   modal_bg.style.opacity = "0"
}



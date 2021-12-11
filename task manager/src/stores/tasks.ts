import axios from "axios"
import type { Task } from "../models/Task"
import { API_URL } from "../config"
import { writable } from "svelte/store"

//Criar uma função.
const loadTasks = async () => {
    const http = axios.create({
        baseURL: API_URL
    })
  
//Criar uma constante.
//A resposta devolve um resultado.
//Ao verificar que devolveu alguma coisa, criar uma lista  
    const response = await http.get('/Tasks')
    const data = response.data
    let tasks: Task[] = []

//Se trouxe algum resultado
// Map é um laço de repetição. Para cada resultado ele mapeia para o endereço de Tasks    
    if (data) {
        tasks = data.map(result => {
            const { id, description, deadline, priorityLevel } = result
            return new Task(id, description, deadline, priorityLevel)
        })
    }
    
    return tasks
}

export let currentTasks = writable<Task[]>(await loadTasks())

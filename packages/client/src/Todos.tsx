import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    return data
}

const postTodo = async () => {

}

// const postTodo = () => {
//     console.log('post todo')
//     return []
// }

export default function Todos() {
    const queryClient = useQueryClient()
    const { data, isPending, error, isFetching } = useQuery({ 
        queryKey: ['todos'], 
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            return data
            }
        })
    if (isPending) return 'Loading'
    if (error) return 'An error ha occurred' + error.message
    if (isFetching) return 'Updating'

    // const mutation = useMutation({
    //     mutationFn: postTodo,
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({ queryKey: ['todos'] })
    //     }
    // })

    return (
        <div>
            <ul>
                {data?.map(todo => (<li key={todo.id}>{todo.title}</li>))}
            </ul>
            {/* <button onClick={mutation.mutate({id: Date.now(), title: 'Do smth'})}>Add Todo</button> */}
        </div>
    )
}
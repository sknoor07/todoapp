export default function ListTodoComponent(){
    const today= new Date();
    const targetdate= new Date(today.getFullYear()+3,today.getMonth(),today.getDay());
    const notes=[
        {id:1,title: "hello World",description:"Hello World",targetdate:targetdate},
        {id:2,title: "hello Noor",description:"Hello to Noor",targetdate:targetdate},
        {id:3,title: "hello Pratham",description:"Hello to Pratahm",targetdate:targetdate},
    ]
    

    return(
        <div>
            <h3>All notes</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notes.map(
                                note=>(
                                    <tr key={note.id}>
                                        <td>{note.id}</td>
                                        <td>{note.title}</td>
                                        <td>{note.description}</td>
                                        <td>{note.targetdate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
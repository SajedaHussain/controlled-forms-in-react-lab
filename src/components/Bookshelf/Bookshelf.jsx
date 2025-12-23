import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        auther: ''
    })

    function handleInput(event) {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault() //disables refresh for the form

        const data = {
            title: newBook.title,
            auther: newBook.auther
        }

        setBooks([...books, data])

        setNewBook({
            title: '',
            auther: ''
        })
    }


    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    {/* Form will go here */}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Book Title:</label>
                        <input name="title" onChange={handleInput} value={newBook.title} id="title" type="text" />

                        <label htmlFor="auther">Auther Name:</label>
                        <input name="auther" onChange={handleInput} value={newBook.auther} id="auther" type="text" />


                        <button>Create</button>





                    </form>
                </div>
                <div className="bookCardsDiv">{/* Book cards will display here */}</div>
                     {books.map((one)=><div key={one.title}>
                        <p>Book Title {one.title}</p>
                        <p>Author: {one.author}</p>
                        
                        </div>)}
                     {/* {books.map((one)=><div>Book Auther {one.author}</div>)} */}
            </div>

        </>
    )
}

export default Bookshelf
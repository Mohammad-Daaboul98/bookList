import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookeDetails from "./BookDetails";

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookeDetails book={book} key={book.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No book to read. Hello free time 😁</div>
    )
}

export default BookList;
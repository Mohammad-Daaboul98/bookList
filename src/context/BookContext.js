import { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : [
            { title: 'Atomic Habits', author: 'James Clear', id: 1 },
            { title: '40 (أربعون)', author: 'Ahmad Al Shugairi', id: 2 }
        ]
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
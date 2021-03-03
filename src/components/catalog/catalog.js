import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Row, Col, Alert} from "reactstrap";

import BookCard from "../book-card/book-card";

const Catalog = () => {

    let params = useParams();

    const getData = () => {
        fetch("/mock/books.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (params.authorId) {
                let data = jsonData.filter(book => book.authors && book.authors.find(author => author.id === parseInt(params.authorId)));
                setBooks(data);
            } else if (params.genreId) {
                let data = jsonData.filter(book => book.genres && book.genres.find(genre => genre.id === parseInt(params.genreId)));
                setBooks(data);
            } else {
                setBooks(jsonData);
            }
        });
    }

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={'content'}>
            <Row xs={"2"}>
                {
                    books.map(book => {
                        return (
                            <BookCard key={`book-${book.id}`} book={book} />
                        )
                    })
                }
            </Row>
        </div>
    );
}

export default Catalog;
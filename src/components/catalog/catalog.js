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
        <div>
            <Row xs={"3"}>
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
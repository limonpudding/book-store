import React, {useState, useEffect} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from "reactstrap";

const AuthorsBar = () => {

    const getAuthorsData = () => {
        fetch("/mock/books.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                let data = jsonData.map(book => book.authors).flat();
                let uniqueAuthors = [];
                data.filter(function (author) {
                    var i = uniqueAuthors.findIndex(item => item.id === author.id);
                    if (i <= -1) {
                        uniqueAuthors.push(author);
                    }
                    return null;
                });
                setAuthors(uniqueAuthors);
            });
    }

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthorsData();
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="#">Authors</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {
                            authors.map(author => {
                                return (
                                    <NavItem>
                                        <NavLink href={`/author/${author.id}`}>{author.name}</NavLink>
                                    </NavItem>
                                )
                            })
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default AuthorsBar;
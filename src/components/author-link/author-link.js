import React from "react";

import styles from "./author-link.css";

const AuthorLink = (props) => {
    return (
        <a href={`/author/${props.author.id}`} className={"authorLink"}>
            {props.author.name}
        </a>
    )
}

export default AuthorLink;
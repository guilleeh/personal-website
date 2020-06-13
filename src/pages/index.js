import React from "react"
import "../styles/styles.scss"

const IndexPage = () => {
  return (
    <nav class="level">
      <p class="level-item has-text-centered">
        <a class="link is-info">Home</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info">Menu</a>
      </p>
      <p class="level-item has-text-centered">
        <img src="https://bulma.io/images/bulma-type.png" alt="" style={{height: "20px"}}></img>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info">Reservations</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info">Contact</a>
      </p>
    </nav>
  )
}
export default IndexPage
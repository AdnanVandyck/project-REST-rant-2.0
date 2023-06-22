const React = require('react')
const Def = require('../default')

function show ({ place }) {

    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <img className="img-fluid height:50% rounded mx-auto d-block" src={place.pic} alt={place.name} />
                <div>
                    <a hfref="{`/places/${places.id}/edit`}" className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action="{`/places/${places.id}/?_method=DELETE`}">
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
                <div id="Rating">
                <h2>Rating</h2>
                <p>Not Rated</p>
                </div>
                
                <div id="comments section">
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
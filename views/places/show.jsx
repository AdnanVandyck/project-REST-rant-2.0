const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
            <main>
                <h1>Show Route</h1>
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
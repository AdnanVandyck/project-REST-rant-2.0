const React = require('react');
const Def = require('../default');

function edit_form ({ place }) {
    return(
        <Def>
            <main>
                <h1>Edit a Place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required defaultValue={place.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picure</label>
                        <img className="img-fluid height:50% rounded mx-auto d-block" src={place.pic} alt={place.name} />
                        <input className="form-control" type="url" id="pic" name="pic" defaultValue={place.pic}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Place City</label>
                        <input className="form-control" id="city" name="city" defaultValue={place.city}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">Place State</label>
                        <input className="form-control" id="state" name="state" defaultValue={place.state}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Place Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required defaultValue={place.cuisines}/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Edit Place" />
                    </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
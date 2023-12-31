const React = require('react');
const Def = require('./default');

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img className="img-fluid height:50% rounded mx-auto d-block" src="/images/grilled-bbq.jpg" alt="Grilled BBQ" />
                </div>
                <div>
                Photo by <a href="https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victoria Shes</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary" onClick="/places">Places Page</button>
                </a>
            </main>
        </Def>
    )
};

module.exports = home;
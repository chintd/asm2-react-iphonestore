import "./Info.css"
function Info(){
    return <div className="info">
        <div className="ship">
            <div>
                <h1>free shipping</h1>
                <p>Free shipping worldwidw</p>
            </div>
            <div>
                <h1>24 x 7 service</h1>
                <p>Free shipping worldwidw</p>
            </div>
            <div>
                <h1>festival offer</h1>
                <p>Free shipping worldwidw</p>
            </div>
        </div>
        <div className="signup-email">
            <div>
                <h1>let be friends!</h1>
                <p>Signup for more infomation</p>
            </div>
            <div>
                <input type="email" placeholder="enter your email address"></input>
                <button type="button">Subcribe</button>
            </div>
        </div>
    </div>
}
export default Info
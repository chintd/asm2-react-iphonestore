import "./LiveChat.css";
function LiveChat(props){
    return<div className="livechat" onClick={props.onHide}>
        <div className="livechat-header">
            <h3>Customer Support</h3>
            <p>Let's Chat App</p>
        </div>
        <div className="livechat-message">
            <div className="float-right">
            <p>Xin chào</p>
            <p>Làm thế nào để xem sản phẩm</p>
            </div>
            <div className="float-left">
            <p>ADMIN:Xin chào</p>
            <p>ADMIN:Làm thế nào để xem sản phẩm</p>
            </div>
        </div>
        <div className="livechat-send">
            <i><svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" 
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            </i>
            <input type="text" placeholder="Enter message!!!"/>
            <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
            </svg>
            </i>
            <i>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
             viewBox="0 0 24 24" 
             strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" 
            strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
            </i>
            <i>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            </i>
        </div>
    </div>
}
export default LiveChat
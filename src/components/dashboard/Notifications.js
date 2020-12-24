import React from 'react';
import moment from 'moment'




const Notifications = ({events}) => {
  
    
         return (
            <div className="section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Notifications</span>
                        <ul className="notifications">
{ events && events.map(event => {
            return(
                <div key={event.createdAt.toDate()}>
               <p className="pink-text">{event.notif}</p>
               <p className="grey-text">{moment(event.createdAt.toDate()).calendar()}</p>
               <br/>
               </div>
            )
})} 
                        </ul>
                    </div>
                </div>
            </div>
        )

         }
        
        

 




export default Notifications;
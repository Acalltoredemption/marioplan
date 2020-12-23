import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Notifications = (props) => {
    if(props.eventlog){
        const  events  = Object.values(props.eventlog);
         console.log(events)

         return (
            <div className="section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Notifications</span>
                        <ul className="notifications">
                { events.map(event => {
                return(
                   <p className="pink-text">{event.notif}</p>
                )
               })}
                        </ul>
                    </div>
                </div>
            </div>
        )
         } else {
             return (
                 <h4>Loading..</h4>
             )
         }

 



}


const mapStateToProps = (state) => {
    const eventlog = state.firestore.data.eventlog;
    return {
    eventlog: eventlog
   }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'eventlog', limit: 5 }
    ])
)(Notifications);
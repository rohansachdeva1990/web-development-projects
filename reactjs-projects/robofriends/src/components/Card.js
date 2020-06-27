import React from 'react';

// React must be in scope when using JSX

const Card = ({id, name, email}) => {

    return (
        // There can be only one component that you want to return.
        <di className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src = {`https://robohash.org/${id}?200x200 `} alt='photo'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </di>

    );
}


// const {name, email, id} = props

// Old Way
// const Card = (props) => {

//     return (
//         // There can be only one component that you want to return.
//         <di className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
//             <img src = {`https://robohash.org/${props.id}?200x200 `} alt='photo'/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </di>

//     );
// }



export default Card;
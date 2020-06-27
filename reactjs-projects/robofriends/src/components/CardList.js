import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    if(true){
        throw new Error('MOOOOOOO')
    }

    return (
        <div>
            {
                robots.map((user, index) => {
                    return (
                        <Card
                            key={index}
                            id={robots[index].id}
                            name={robots[index].name}
                            email={robots[index].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;






// Before Refactor of const cards

// const CardList = ({ robots }) => {


//     const cards = robots.map((user, index) => {
//         return (
//             <Card
//                 key={index}
//                 id={robots[index].id}
//                 name={robots[index].name}
//                 email={robots[index].email}
//             />
//         );
//     });

//     return (
//         <div>
//             {cards}
//         </div>
//     );
// }




// Before Loop
// const CardList = ({robots}) => {


//     const cards = robots.map((robots)=>{



//     });
//     robots.map()


//     return (
//         <div>
//             <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
//             <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
//             <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
//         </div>
//     );
// }

// export default CardList;

import Card from "./BookList"

const CardList = (props) => {
    return (
        <div>
            {props.containerData.map(({name, id, email})=>{
                <Card key={id} id={id} name={name} email={email}/>
            })}
        </div>
    );
}

export default CardList;

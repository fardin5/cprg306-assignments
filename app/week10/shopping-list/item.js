export default function Item({name, quantity, category, onSelect}){
    return(
        <ul onClick={onSelect} className="bg-[#30a143fd] p-4 rounded">
            <li>{name}</li>
            <li>Buy {quantity} in the {category} department</li>
        </ul>
    )
}
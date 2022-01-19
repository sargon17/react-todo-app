
export default function Tasks(items){
    return(

        // list items */
        <div className="list--item">
            <input type="checkbox" />
            <div>
                <p>{items.task}</p>
                <p className="due--time">{items.dueTime}</p>
            </div>
        </div>

    )
};


import React from 'react'

const List = (props) => {
    const   {items, deleteItem} = props,
            Length = items.length,
            allItems = Length ? (
                items.map(item => {
                    return (
                        <div key={item.id}>
                            <span className='name'>{item.name}</span>
                            <span className='age'>{item.age}</span>
                            <span className='action icon' onClick={() => deleteItem(item.id)}>&times;</span>
                        </div>
                    )
                })
            ) : (
                <div className='error'>There's no items to show</div>
            )

    return (

        <div className='listItems'>
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
            {allItems}
        </div>
    )
}
export default List
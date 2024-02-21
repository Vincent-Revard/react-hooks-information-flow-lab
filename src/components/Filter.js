

const Filter = ({onCategoryChange}) => {
    
    const handleOnCategoryChange = (e) => {
        const newSelectedCategory = e.target.value
        onCategoryChange(newSelectedCategory)
    }

    return (

    <>    
        <select name="filter" onChange={handleOnCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
    </>   
    )
}

export default Filter

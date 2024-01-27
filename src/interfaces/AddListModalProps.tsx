import GroceryList from "../types/GroceryList"

interface AddListModalProps {
    lists: GroceryList[]
    setLists: React.Dispatch<React.SetStateAction<GroceryList[]>>
}

export default AddListModalProps
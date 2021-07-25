import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

export default crudControllers(Item)


// in case we want to override a method of the crud methods

// export default {
//     ...crudControllers(Item),
//     getOne(){
//         // some logic here
//     }   
// }
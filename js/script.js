import { MovieItem } from "../components/MovieItem.js";
import { movies } from "./db.js";
import { reload } from "./utils.js";


const ul = document.querySelector('.promo__interactive-item')
reload(movies,MovieItem,ul)


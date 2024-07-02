
 export function MovieItem(item) {
    const li = document.createElement('li')
    const del = document.createElement('div')
    const img = document.querySelector('.promo__bg')
    const genre = document.querySelector('.promo__genre')
    const tile = document.querySelector('.promo__title')
    const descr = document.querySelector('.promo__descr') 
    const rating = document.querySelector('.promo__ratings')

    li.classList.add('.promo__interactive-item')
    del.classList.add('.delete')
    li.innerHTML = item.Title
    li.append('del')

    li.onclick=()=>{
        img.style.backgroundImage = `url(${item.Poster})`;
        tile.innerHTML = item.Title;
        rating.innerHTML = item.imdbRating + "/10";
        genre.innerHTML = item.Genre;
        descr.innerHTML =item.Plot

        console.log(img,movies);
    }
    return li
}



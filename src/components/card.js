
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const Card = (article) => {
  const card = document.createElement('div')
  card.classList.add('card')

  const headlineData = document.createElement('div')
  const authorData = document.createElement('div')
  const imgContainer = document.createElement('div')
  const authorPhotoData = document.createElement('img')
  const authorNameData = document.createElement('span')
  
  headlineData.textContent = article.headline
  authorPhotoData.src = article.authorPhoto
  authorNameData.textContent = article.authorName

  headlineData.classList.add('headline')
  authorData.classList.add('author')
  imgContainer.classList.add('img-container')

  imgContainer.appendChild(authorPhotoData)

  authorData.appendChild(imgContainer)
  authorData.appendChild(authorNameData)

  card.appendChild(headlineData)
  card.appendChild(authorData)

  card.addEventListener('click', console.log(headlineData.textContent))

  return card
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  const parent = document.querySelector(selector)
  axios.get('http://localhost:5001/api/articles')
  .then(res => {
    const resObj = Object.values(res.data.articles).flat()
    resObj.forEach( elem => {
      const newCard = Card(elem)
      parent.appendChild(newCard)
  })
  })
}

export { Card, cardAppender }

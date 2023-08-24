const e = React.createElement;

const Book = (props) => {
    // console.log(props);
    return e('div', {className: 'block__item'}, [
        e('h3', {}, props.name),
        e('h3', {}, props.year),
        e('p', {}, props.price),
    ])
}

const App = () => {
    return e('section', {className: 'block'}, [
        //  e(BooksTitle, {title: 'Books List'}),

         e(Book, {name: 'HTML5 for Children', year: 2015, price: '30$'}),
         e(Book, {name: 'CSS3 for Student', year: 2019, price: '20$'}),
         e(Book, {name: 'JS for Student', year: 2021, price: '50$'}),
    ]);
}

ReactDOM.render(e(App), document.getElementById ('root'));

export default Books.js;


// 1. -------------------------------------
// const e = React.createElement;

// const Book = () => {
//     return e('div', {}, [
//         e('h3', {}, 'HTML5 for Children'),
//         e('p', {}, 2015),
//         e('p', {}, '30$')
//     ])
// }
// ----------------------------------------

// 2. ------------------------------------
// const e = React.createElement;

// const Book = () => {
//     return e('div', {}, [
//         e('h3', {}, 'HTML5 for Children'),
//         e('h3', {}, '2015'),
//         e('p', {}, '30$'),

//     ])
// }





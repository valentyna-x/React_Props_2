const e = React.createElement;

const App = () => {
    return e('h1', {id: 'title', className: 'books__title'}, 'Books List');
}

ReactDOM.render(e(App), document.getElementById ('root_title'));


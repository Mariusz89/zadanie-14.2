var movies = [
		{
			title: 'Harry Potter',
			desc: 'film o czarodzieju',
			img: 'https://cdn.pixabay.com/photo/2017/10/06/16/50/bird-2823763__340.jpg'
		},
		{
			title: 'Król Lew',
			desc: 'Film o królu sawanny',
			img: 'https://cdn.pixabay.com/photo/2017/10/06/16/50/pine-cones-2823765__340.jpg'
		},
		{
			title: 'The Shawshank Redemption',
			desc: 'Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.',
			img: 'https://cdn.pixabay.com/photo/2017/10/02/17/49/mushroom-2809620__340.jpg'
		},
		{
			title: 'Intouchables',
			desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia.',
			img: 'https://cdn.pixabay.com/photo/2017/10/05/22/16/katz-2821316__340.jpg'
		}
		];	

var moviesElements = movies.map(function(movie) {
		return 	React.createElement('li', {},
					React.createElement('h2', {}, movie.title),
					React.createElement('p', {}, movie.desc),
					React.createElement('img', {src: movie.img})
				)
});

var element = 	React.createElement ('div', {},
					React.createElement('h1', {}, 'Lista filmów'),
					React.createElement('ul', {}, moviesElements)	
				);
				

ReactDOM.render(element, document.getElementById('app'));
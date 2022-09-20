import CatItem from './CatItem.js';

const Favorites = ({ favorites }) => {
	if (favorites.length === 0) {
	  return <div className='colored'>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>;
	}
  
	return (
	  <ul className="favorites">
		{favorites.map((cat) => (
		  <CatItem img={cat} key={cat}/>
		))}
	  </ul>
	)
}

export default Favorites;
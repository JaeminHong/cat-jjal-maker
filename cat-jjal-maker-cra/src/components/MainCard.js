const MainCard = ({img, onHeartClick, alreadyFavorite}) => {
	const heartIcon = alreadyFavorite ? "💖" : "🤍"
	
	return (
	  <div className="main-card">
		<img
		className="img-width"
		src={img}
		alt="고양이"
		/>
		<button 
		 className="pointer"
		 onClick={onHeartClick}
		>{heartIcon}
		</button>
	  </div>
	)
}

export default MainCard;
const MainCard = ({img, onHeartClick, alreadyFavorite}) => {
	const heartIcon = alreadyFavorite ? "đ" : "đ¤"
	
	return (
	  <div className="main-card">
		<img
		className="img-width"
		src={img}
		alt="ęł ěě´"
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
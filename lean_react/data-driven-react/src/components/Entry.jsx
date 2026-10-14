import React from "react";
import location from "../assets/marker.png";

function Entry(props) {
    console.log(props)
	return (
		<article className="card">
            <img className="card-img" src={props.img.src} alt={props.img.alt} />
			<div>
				<div className="top-card">
					<p>
						<img src={location} alt="location icon" /> {props.country.toUpperCase()}
					</p>
					<a href={props.googleMapsLink}>
						View on Google Maps
					</a>
				</div>
				<h3 className="card-title">{props.title}</h3>
				<p className="card-date">{props.dates}</p>
				<p className="card-text">
					{props.text}
				</p>
			</div>
		</article>
	);
}

export default Entry;

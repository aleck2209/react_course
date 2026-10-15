import React from "react";
import location from "../assets/marker.png";

function Entry(props) {
    console.log(props)
	return (
		<article className="card">
            <img className="card-img" src={props.entry.img.src} alt={props.entry.img.alt} />
			<div>
				<div className="top-card">
					<p>
						<img src={location} alt="location icon" /> {props.entry.country.toUpperCase()}
					</p>
					<a href={props.entry.googleMapsLink}>
						View on Google Maps
					</a>
				</div>
				<h3 className="card-title">{props.entry.title}</h3>
				<p className="card-date">{props.entry.dates}</p>
				<p className="card-text">
					{props.entry.text}
				</p>
			</div>
		</article>
	);
}

export default Entry;

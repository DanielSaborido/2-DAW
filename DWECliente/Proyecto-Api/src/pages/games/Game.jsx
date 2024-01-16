import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Game = () => {
  const { game } = useLoaderData();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h1>{game.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: game.description }} />
        </div>
        <div className="col-md-4">
          <img src={game.background_image} alt={game.name} className="img-fluid rounded" />
        </div>
      </div>
      <div className="mt-4">
        <h3>Metacritic Scores</h3>
        <ul>
          {game.metacritic_platforms.map((platform) => (
            <li key={platform.platform.slug}>
              <a href={platform.url} target="_blank" rel="noopener noreferrer" > {platform.platform.name} : {platform.metascore} </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3>Release Date</h3>
        <p>{game.released}</p>
      </div>
      <div className="mt-4">
        <h3>Ratings</h3>
        <ul>
          {game.ratings.map((rating) => (
            <li key={rating.id}>
              {rating.title}: {rating.percent}%
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3>Additional Information</h3>
        <p><strong>Platforms:</strong> {game.platforms.map((platforms) => platforms.platform.name).join(', ')}</p>
        <p><strong>Genres:</strong> {game.genres.map((genre) => genre.name).join(', ')}</p>
        <p><strong>Tags:</strong> {game.tags.map((tag) => tag.name).join(', ')}</p>
        <p><strong>Developers:</strong> {game.developers.map((developer) => developer.name).join(', ')}</p>
        <p><strong>Publishers:</strong> {game.publishers.map((publisher) => publisher.name).join(', ')}</p>
      </div>
      <div className="mt-4">
        <h3>Stores</h3>
        <ul>
          {game.stores.map((store) => (
            <li key={store.id}>
              <a href={`https://${store.store.domain}`} target="_blank" rel="noopener noreferrer">{store.store.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3>Links</h3>
        <ul>
            <li>
              <a href={`https://${game.website}`} target="_blank" rel="noopener noreferrer">Official Website</a>
            </li>
            <li>
              <a href={`https://${game.reddit_url}`} target="_blank" rel="noopener noreferrer"> Reddit Community</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Game;

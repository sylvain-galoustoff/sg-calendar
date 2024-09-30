function EventCard() {
  return (
    <div className="event-card">
      <div className="event-card-header">
        <h2 className="event-name big bold">Nom de l'événement</h2>
        <div className="event-data bold">
          <p className="event-agenda">Sacha</p>
          <p className="event-time">13h45</p>
        </div>
      </div>
      <div className="event-note">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ducimus cumque,
        ab non earum, ut odit optio ipsa necessitatibus.
      </div>
    </div>
  );
}

export default EventCard;

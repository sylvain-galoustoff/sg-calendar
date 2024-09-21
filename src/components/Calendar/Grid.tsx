function Grid() {
  return (
    <div id="grid-container">
      <div id="weekdays">
        <div className="bold cell weekday">Lun</div>
        <div className="bold cell weekday">Mar</div>
        <div className="bold cell weekday">Mer</div>
        <div className="bold cell weekday">Jeu</div>
        <div className="bold cell weekday">Ven</div>
        <div className="bold cell weekday">Sam</div>
        <div className="bold cell weekday">Dim</div>
      </div>
      <div id="grid">
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell today">
          <div className="cell-content">
            <div className="span cell-value">31</div>
          </div>
        </div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell">31</div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
      </div>
    </div>
  );
}

export default Grid;

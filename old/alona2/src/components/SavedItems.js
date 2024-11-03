import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CloseButton from './CloseButton';
import InfoContainer from './InfoContainer';

const ItemTypes = {
  SAVED_ITEM: 'savedItem',
};

function CalendarSquare({ day, onDrop, onRemove, item }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SAVED_ITEM,
    drop: (droppedItem) => onDrop(day, droppedItem),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <InfoContainer
      ref={drop}
      style={{
        border: '1px solid #ccc',
        width: '100%',
        height: '100%',
        minWidth: '100px',
        minHeight: '150px',
        backgroundColor: isOver ? '#f0f0f0' : '#fff',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <span style={{ position: 'absolute', top: '5px', left: '5px', fontSize: "5em", zIndex: "1"}}>{day}</span>
      {item && (
        <div style={{ width: '100%', height: '100%' }}>
          {item.src && (
            <img
              src={item.src}
              alt={item.title}
              style={{ 
                width: '100%',
                height: '150px',//105%
                objectFit: 'cover',
              }}
            />
          )}
          {item.title && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                backgroundColor: 'rgba(235, 220, 220, 0.5)',
                height: '100%',
                width:'100%',
                padding: '5px 10px',
                borderRadius: '5px',
                textAlign: 'center',
              }}
            >
              <p style={{ margin: 0, fontSize: '12px', width:"100px" }}>{item.title}</p>
            </div>
          )}
          <CloseButton
            onClick={() => onRemove(day)}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              cursor: 'pointer',
            }}
          >
            ×
          </CloseButton>
        </div>
      )}
    </InfoContainer>
  );
}

function DraggableItem({ item, onRemove }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SAVED_ITEM,
    item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  };

  return (
    <li ref={drag} style={{ opacity: isDragging ? 0.5 : 1, marginBottom: '10px', position: 'relative' }}>
      {item.src && (
        item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.src}
              alt={item.title}
              style={imageStyle}
            />
          </a>
        ) : (
          <img
            src={item.src}
            alt={item.title}
            style={imageStyle}
          />
        )
      )}
      <p style={{ margin: '5px 0 0', fontSize: '14px', textAlign: 'center', maxWidth: '100px' }}>{item.title}</p>
      
      {/* Close button for removing saved item */}
      <CloseButton
        onClick={() => onRemove(item.id)}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          cursor: 'pointer',
        }}
      >
        ×
      </CloseButton>
    </li>
  );
}

function SavedItems({ savedMovies, savedRecipes, savedIdeas, savedCustomThoughts }) {
  const [calendarItems, setCalendarItems] = useState({});
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('calendarItems'));
    if (storedItems) {
      setCalendarItems(storedItems);
    }

    const initialItems = [
      ...savedMovies.map((movie) => ({
        id: movie.id,
        src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
      })),
      ...savedRecipes.map((recipe) => ({
        id: recipe.label,
        src: recipe.image,
        title: recipe.label,
        url: recipe.url,
      })),
      ...savedIdeas.map((idea, index) => ({
        id: `idea-${index}`,
        src: idea.image,
        title: idea.title,
      })),
      ...savedCustomThoughts.map((thought, index) => ({
        id: `thought-${index}`,
        src: thought.image,
        title: thought.text,
      })),
    ];
    setAvailableItems(initialItems);
  }, [savedMovies, savedRecipes, savedIdeas, savedCustomThoughts]);

  const handleDrop = (day, droppedItem) => {
    setCalendarItems((prev) => {
      const updatedItems = { ...prev, [day]: droppedItem };
      localStorage.setItem('calendarItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
    setAvailableItems((prevItems) => prevItems.filter((item) => item.id !== droppedItem.id));
  };

  const handleRemoveCalendarItem = (day) => {
    setCalendarItems((prev) => {
      const newItems = { ...prev };
      const removedItem = newItems[day];
      delete newItems[day];
      localStorage.setItem('calendarItems', JSON.stringify(newItems));
      setAvailableItems((prevItems) => {
        if (!prevItems.some((item) => item.id === removedItem.id)) {
          return [...prevItems, removedItem];
        }
        return prevItems;
      });
      return newItems;
    });
  };

  const handleRemoveAvailableItem = (itemId) => {
    setAvailableItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <InfoContainer>
      <DndProvider backend={HTML5Backend}>
        <h2>drag and drop</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gridGap: '0px',
            width: '100vw',
          }}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <CalendarSquare
              key={i + 1}
              day={i + 1}
              onDrop={handleDrop}
              onRemove={handleRemoveCalendarItem}
              item={calendarItems[i + 1]}
            />
          ))}
        </div>

        <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
          {availableItems.map((item) => (
            <DraggableItem key={item.id} item={item} onRemove={handleRemoveAvailableItem} />
          ))}
        </ul>
      </DndProvider>
    </InfoContainer>
  );
}

export default SavedItems;

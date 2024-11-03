function CalendarSquare({ day, onDrop, onRemove, item }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SAVED_ITEM,
    drop: (droppedItem) => onDrop(day, droppedItem),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // Only show overlay when no item is present
  const [overlayVisible, setOverlayVisible] = useState(!item);

  const handleOverlayClick = () => {
    if (!item) {
      setOverlayVisible(false); // Hide overlay when no item is present
    }
  };

  return (
    <InfoContainer
      ref={drop}
      style={{
        border: '1px solid #ccc',
        width: '100px',
        height: '100px',
        backgroundColor: isOver ? '#f0f0f0' : '#fff',
        textAlign: 'center',
        overflow: 'auto',
        wordBreak: 'break-word',
        position: 'relative',
        boxSizing: 'border-box',
        cursor: item ? 'pointer' : 'default', // Pointer cursor if item exists
      }}
      onClick={handleOverlayClick} // Hide overlay on click
    >
      <span style={{ position: 'absolute', top: '5px', left: '5px' }}>{day}</span>
      {item && (
        <>
          {item.src && (
            <img
              src={item.src}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          <p>{item.title}</p>

          <CloseButton
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering overlay click
              onRemove(day);
            }}
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
        </>
      )}

      {overlayVisible && !item && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '16px',
            zIndex: 1, // Ensure overlay appears above the content
          }}
        >
          Click to reveal
        </div>
      )}
    </InfoContainer>
  );
}

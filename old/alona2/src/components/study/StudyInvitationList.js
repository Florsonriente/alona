import React, { useState } from 'react';
import Button from './Button';
import CloseButton from './CloseButton';
import StyledList from './StyledList';
import InfoContainer from './InfoContainer';

const PartyInvitationList = ({ savedInvitations, setSavedInvitations }) => {
  const [newInvitee, setNewInvitee] = useState(""); // Manages the input state for new invitees
  const [showInvitations, setShowInvitations] = useState(false); // Controls the visibility of the invitation list

  const handleAddInvitee = () => {
    if (!newInvitee.trim()) return; // Prevents adding empty invitees

    if (!savedInvitations.find(invitee => invitee.name === newInvitee)) { // Avoids duplicate invitees
      setSavedInvitations([...savedInvitations, { name: newInvitee }]); // Adds the new invitee to the list
      setNewInvitee(""); // Clears the input field
      setShowInvitations(true); // Shows the list if it's not already visible
    }
  };

  const removeInvitee = (indexToRemove) => {
    setSavedInvitations(savedInvitations.filter((_, index) => index !== indexToRemove)); // Removes the selected invitee
  };

  return (
    <InfoContainer>
      <h1>Party Invitation List</h1>
      <InfoContainer>
        <input
          type="text"
          value={newInvitee}
          onChange={(e) => setNewInvitee(e.target.value)} // Updates the input state on change
          placeholder="Add an invitee"
          style={{
            padding: '10px',
            width: 'calc(100% - 22px)',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <Button onClick={handleAddInvitee} style={{ margin: '0 10px' }}>
          Add Invitee
        </Button>
      </InfoContainer>

      {savedInvitations.length > 0 && ( // Conditional rendering based on the list length
        <InfoContainer style={{ marginTop: '30px' }}>
          <h3>Invited Guests:</h3>
          <StyledList>
            {savedInvitations.map((invitee, index) => (
              <StyledList key={index}>
                <p>{invitee.name}</p> {/* Displays each invitee */}
                <CloseButton onClick={() => removeInvitee(index)} style={{ marginLeft: '10px' }}>
                  X
                </CloseButton>
              </StyledList>
            ))}
          </StyledList>
        </InfoContainer>
      )}
    </InfoContainer>
  );
};

export default PartyInvitationList;

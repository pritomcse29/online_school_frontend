import React from 'react';

const ProfileButton = ({ isEditing, setIsEditing }) => {
  return (
    <div className="flex justify-center pt-4">
      <div className="space-x-4">
        {isEditing ? (
          <>
            <button type="submit" className="btn btn-primary px-8">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileButton;

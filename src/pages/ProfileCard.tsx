import React, { useState } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
    initialName: string;
    initialTitle: string;
    initialProfileImageUrl: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ initialName, initialTitle, initialProfileImageUrl }) => {
    const [profileImage, setProfileImage] = useState<string>(initialProfileImageUrl);
    const [name, setName] = useState<string>(initialName);
    const [title, setTitle] = useState<string>(initialTitle);
    

    const [showModal, setShowModal] = useState<boolean>(false);
    const [showEditForm, setShowEditForm] = useState<boolean>(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const openEditForm = () => {
        setShowModal(false);
        setShowEditForm(true);
    };
    const closeEditForm = () => setShowEditForm(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const saveChanges = () => {
        // Here you can also handle saving data to a backend or local storage if needed
        setShowEditForm(false);
    };

    return (
        <div className="profile-card" >
            <div className="profile" onClick={openModal}>
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>

                <div className="profile-info">
                    <h5>{name}</h5>
                    <p>{title}</p>
                </div>

            </div>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Do you want to change profile?</h3>
                        <button onClick={openEditForm}>Yes</button>
                        <button onClick={closeModal}>No</button>
                    </div>
                </div>
            )}
            {showEditForm && (
                <div className="edit-form-overlay">
                    <div className="edit-form-content">
                        <button className="close-btn" onClick={closeEditForm}>x</button>
                        <h3>Edit Profile</h3>
                        <input 
                            type="file" 
                            id="fileInput" 
                            accept="image/*" 
                            onChange={handleImageChange}
                        />
                        <input 
                            type="text" 
                            value={name} 
                            onChange={handleNameChange} 
                            placeholder="Enter Name" 
                        />
                        <input 
                            type="text" 
                            value={title} 
                            onChange={handleTitleChange} 
                            placeholder="Enter Job Title" 
                        />
                        <button onClick={saveChanges}>Save Changes</button>
                    </div>
                </div>
            )}
        </div>
    );
};

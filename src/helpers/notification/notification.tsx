import React, { useState } from 'react';
import { Toast,ToastContainer } from 'react-bootstrap';

export enum NotificationType {
    Primary = 'Primary',
    Secondary = 'Secondary',
    Success = 'Success',
    Danger = 'Danger',
    Warning = 'Warning',
    Info = 'Info',
    Light = 'Light',
    Dark = 'Dark',
}

interface NotificationProps {
    title: string;
    message: string;
    type: NotificationType
}

const Notification: React.FC<NotificationProps> = ({ title, message, type }) => {
    const [showNotification, setShowNotification] = useState(true);
    return (
        <>
            {showNotification && (
                <ToastContainer
                    className="position-fixed p-3"
                    position="top-end"
                    style={{ zIndex: 1 }}
                >
                    <Toast onClose={() => setShowNotification(false)} show={showNotification} bg={type.toLowerCase()}>
                        <Toast.Header>
                            <strong className="me-auto">{title}</strong>
                        </Toast.Header>
                        <Toast.Body className={type === NotificationType.Dark ? 'text-white' : ''}>
                            {message}
                        </Toast.Body>
                    </Toast>
                </ToastContainer>
            )}

        </>
    );
};

export default Notification;

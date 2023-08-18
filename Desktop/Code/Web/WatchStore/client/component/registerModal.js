import ReactDOM from 'react-dom'
const registerModal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const register = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <a href="#" onClick={handleCloseClick}>
                        X
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        register,
        document.getElementById("modal-root")
    );
    
};

export default registerModal
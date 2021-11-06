function CDetail({ reviewer }) {
    return (
        <div className="cdetail">
            <div className="img-container">
                <div className="profile-img" style={{ backgroundImage: `url(${reviewer.avatar})` }}>
                </div>
            </div>
            <h2 className="profile-name">
                {reviewer.name}
            </h2>
            <p className="profile-job">
                {reviewer.designation}
            </p>
            <p className="profile-review">
                {reviewer.message}
            </p>
        </div>
    );
}

export default CDetail;
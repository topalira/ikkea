import './LikePage.css';

const LikePage = () => {
  return (
    <div className="like-page">
      <main className="empty-like">
        <h1>Ваш лист бажань пустий...</h1>

        <div className="empty-icon">
          <img src="Group.png" alt="Empty state" />
        </div>
      </main>
    </div>
  );
};

export default LikePage;

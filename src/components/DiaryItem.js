import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ date, emotion, id, content }) => {
  const navigate = useNavigate();

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit`);
  };

  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion-img-wrapper",
          `emotion-img-wrapper--${emotion}`,
        ].join(" ")}
        onClick={goDetail}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div className="info-wrapper" onClick={goDetail}>
        <div className="diary-date">{strDate}</div>
        <div className="diary-content-preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn-wrapper">
        <MyButton text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;

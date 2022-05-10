import React from "react";

// React.memo를 적용해도 부모로부터 전달받은 props 중 함수(onClick)으로 전달받은 상태변화 함수가
// useState가 아니거나 useCallback으로 묶인 상태가 아니라면 계속해서 재랜더링 된다.
// ==> 부모인(diaryEditor)에서 onClick으로 전달하는 props를 useCallback으로 처리해야함
const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem-on--${emotion_id}` : `EmotionItem-off`,
      ].join(" ")}
      onClick={() => onClick(emotion_id)}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default React.memo(EmotionItem);

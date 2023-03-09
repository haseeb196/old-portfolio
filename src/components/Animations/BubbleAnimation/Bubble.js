function BubbleAnimation() {
  const link = 'http://localhost:3000/ProfilePic/Haseeb%202.png';
  const imagestyle = {
    backgroundImage: `url(${link})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundClip: 'padding-box',
    boxShadow: `inset 0 0 0 9px rgb(255, 255, 255, 25%)`,
    borderWidth: '12px',
    borderColor: 'transparent',
    animation: 'bubbleanimate 8s ease-in-out infinite 1s',
  };
  return (
    <div
      className="min-h-[260px] min-w-[260px] sm:min-h-[200px] sm:min-w-[200px]"
      style={imagestyle}
    ></div>
  );
}

export default BubbleAnimation;

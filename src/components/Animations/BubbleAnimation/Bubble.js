function BubbleAnimation() {
  const background = 'https://img.freepik.com/premium-psd/luxury-dark-3d-logo-mockup_225928-131.jpg?w=360';
  const imagestyle = {
    backgroundImage: `url(${background})`,
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

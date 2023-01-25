function BubbleAnimation({ cdg }) {
  const background =
    'https://img.freepik.com/premium-psd/luxury-dark-3d-logo-mockup_225928-131.jpg?w=360';
  const imagestyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundClip: 'padding-box',
    boxShadow: `inset 0 0 0 9px rgb(255, 255, 255, ${cdg ? '30%' : '15%'})`,
    borderWidth: '12px',
    borderColor: 'transparent',
    animation: 'bubbleanimate 8s ease-in-out infinite 1s',
  };
  return (
    <div
      className="h-[250px] w-[250px] sm:h-[200px] sm:w-[200px]"
      style={imagestyle}
    ></div>
  );
}

export default BubbleAnimation;

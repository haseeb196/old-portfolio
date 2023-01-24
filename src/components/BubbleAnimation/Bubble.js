//Continue///....g

function BubbleAnimation() {
  const background = 'http://i54.tinypic.com/4zuxif.jpg';
  const imagestyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderColor: '#C0C0C0',
    borderWidth: '12px',
    animation: 'bubbleanimate 8s ease-in-out infinite 1s',
  };
  return (
    <div className="">
      <div
        className="h-[150px] w-[150px] sm:h-[135px] sm:w-[135px]"
        style={imagestyle}
      ></div>
    </div>
  );
}

export default BubbleAnimation;

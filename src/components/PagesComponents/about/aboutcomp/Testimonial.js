const Testimonial = () => {
  const content = [
    {
      text: 'Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!',
      author: 'alexander walker',
      span: 'graphic designer',
      image:
        'https://i.pinimg.com/736x/87/14/d5/8714d527903f7a8093091e167d9bddcc.jpg',
    },
    {
      text: 'I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.',
      author: 'baraka clinton',
      span: 'english teacher',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2K27XkymJzsG1mdFcseZwBeqgyOLT2Pr_Kg&usqp=CAU',
    },
    {
      text: 'These people really know what they are doing! Great customer support availability and supperb kindness.',
      author: 'mics4',
      span: 'developer',
      image:
        'https://img.myloview.com/stickers/people-or-human-logo-template-in-3d-circle-shape-700-238264360.jpg',
    },
  ];
  return (
    <div className="py-12 xl:px-40 sg:px-16 s400:px-12">
      <div>
        <h1 className="font-serif text-[25px] font-[900] ">Testimonial</h1>
      </div>
      <div>
        {content.map((x) => {
          console.log(x);
        })}
      </div>
    </div>
  );
};

export default Testimonial;

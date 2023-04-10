const AboutImages = ({ img }) => {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:py-24 lg:px-8">
      <img
        src={
          img
            ? img
            : "https://fireart.studio/wp-content/themes/fireart/assets/img/double-img/01.webp"
        }
        className="w-full h-full rounded-md pb-5"
      />
      <img
        src={
          img
            ? img
            : "https://fireart.studio/wp-content/themes/fireart/assets/img/double-img/01.webp"
        }
        className="w-full h-full rounded-md pb-5"
      />
    </div>
  );
};

export default AboutImages;

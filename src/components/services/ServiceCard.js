const ServiceCard = ({ index, data }) => {
  return (
    <div
      onMouseEnter={() => {
        const title_element = document.getElementById(index);
        title_element.classList.add("text-purple-800");
        title_element.classList.remove("text-gray-900");
      }}
      onMouseLeave={() => {
        const title_element = document.getElementById(index);
        title_element.classList.remove("text-purple-800");
        title_element.classList.add("text-gray-900");
      }}
      className="w-full rounded-md relative p-8 h-full lg:h-[200pm] hover:-translate-y-1 transition duration-600 ease-in-out"
    >
      <div className="w-full">
        <img
          src={data.img ? data.img : "https://placekitten.com/g/64/64"}
          className="w-15 h-15"
        />
        <h2 className="text-xl font-semibold text-gray-900 pt-8">
          {data.title}
        </h2>
        <p className="text-lg font-regular text-gray-500 pt-4 pb-10">
          {data.description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 p-8">
        <h2 id={index} className="items-end mt-2 text-xl font-semibold text-gray-900 pt-8">
          LEARN MORE <span aria-hidden="true">&rarr;</span>
        </h2>
      </div>
    </div>
  );
};

export default ServiceCard;

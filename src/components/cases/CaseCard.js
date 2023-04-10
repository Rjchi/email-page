import { Link } from "react-router-dom";

// El valor de index para la primera targeta es 0 y se va sumando
const CaseCard = ({ index, data }) => {
  return (
    // Esto es para detectar cuando nuestro mause esta encima de algo
    <Link
      to="/cases/id"
      onMouseEnter={() => {
        const title_element = document.getElementById(index);
        // Le agregamos una clase al elemento con id="title"
        title_element.classList.add("text-purple-800");

        const img = document.getElementById(data.id);
        img.classList.add("object-scale-down");
      }}
      // Este para el momento en que lo quitamos
      onMouseLeave={() => {
        const title_element = document.getElementById(index);
        title_element.classList.remove("text-purple-800");

        const img = document.getElementById(data.id);
        img.classList.remove("object-scale-down");
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img
          id={data.id}
          className="h-96 w-full object-cover"
          src={data.imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-xl font-medium text-gray-500">
            <a href={data.category.href} className="hover:underline">
              {data.category.name}
            </a>
          </p>
          <a href={data.href} className="mt-2 block">
            <p
              id={index} className="lg:text-4xl pt-2 pb-4 text-2xl font-semibold transition duration-400 ease-in-out text-gray-900"
            >
              {data.title}
            </p>
            <p className="mt-3 text-xl leading-6 text-gray-500">
              {data.description}
            </p>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;

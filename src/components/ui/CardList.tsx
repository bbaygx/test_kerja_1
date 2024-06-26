import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  src: string;
  logo?: string;
  id: number;
}

export function CardList({ title, description, src, logo, id }: CardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm max-w-xs">
      <img alt="" src={`${src}`} className="h-56 w-full object-cover" />

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
        <Link
          to={`playlist/${id}`}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </Link>
        <img src={logo} alt="" className="w-32" />
      </div>
    </article>
  );
}

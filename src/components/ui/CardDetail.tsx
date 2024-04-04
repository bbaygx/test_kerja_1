interface CardProps {
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
}

export function CardDetail({ title, description, type, src }: CardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm max-w-sm">
      {type == "image" ? (
        <img alt="" src={`${src}`} className="h-56 w-full object-cover" />
      ) : (
        <div className="aspect-video">
          <iframe
            src={`${src}`}
            frameBorder={0}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="object-cover w-full h-full"
          ></iframe>
        </div>
      )}

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

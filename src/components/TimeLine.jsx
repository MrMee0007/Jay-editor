export default function TimeLine({ items }) {
  return (
    <div className="relative border-l border-primary ml-4">
      {items.map((item, index) => (
        <div key={index} className="mb-12 ml-6">
          <div className="absolute -left-3 w-6 h-6 bg-primary rounded-full"></div>

          <p className="text-xs uppercase tracking-widest text-primary mb-2">
            {item.period}
          </p>

          <h3 className="text-xl font-bold uppercase">
            {item.title}
          </h3>

          <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

type ExperienceItemProps = {
  title: string;
  context: string;
  description?: string;
  showLeftLine?: boolean;
};

const ExperienceItem = ({
  title,
  context,
  description,
  showLeftLine = true,
}: ExperienceItemProps) => {
  return (
    <div className="flex my-2">
      <div className="education__time">
        <span className="w-4 h-4 bg-primary block rounded-full mt-1"></span>
        {showLeftLine && (
          <span className=" bg-primary block h-full w-[2px] translate-x-[7px]"></span>
        )}
      </div>
      <div className="bd-grid px-5">
        <h3 className="font-semibold">{title}</h3>
        <span className="font-light text-sm">{context}</span>
        {description && <p className="my-1 text-justify">{description}</p>}
      </div>
    </div>
  );
};

export default ExperienceItem;

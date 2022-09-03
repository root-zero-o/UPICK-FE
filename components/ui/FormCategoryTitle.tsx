interface FormCateTitleProps {
  title: string;
  icon: boolean;
  iTitle: string;
  sub: boolean;
  subtitle: string;
}

const FormCategoryTitle = ({
  title,
  icon,
  iTitle,
  sub,
  subtitle,
}: FormCateTitleProps) => {
  return (
    <div className="w-full z-40 flex flex-col justify-center items-start mb-3">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-darkblue1 text-md font-black">{title}</h2>
        {icon && <span className="text-xs">{iTitle}</span>}
      </div>
      {sub && (
        <span className="text-xs text-blue2 font-medium mb-4">{subtitle}</span>
      )}
    </div>
  );
};

export default FormCategoryTitle;

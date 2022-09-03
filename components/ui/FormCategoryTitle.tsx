interface FormCateTitleProps {
  title: string;
}

const FormCategoryTitle = ({ title }: FormCateTitleProps) => {
  return (
    <div className="w-full z-40 flex justify-between items-center mb-3">
      <div className="flex">
        <h2 className="text-darkblue1 text-md font-black">{title}</h2>
      </div>
    </div>
  );
};

export default FormCategoryTitle;

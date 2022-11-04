import { Dispatch, FC, SetStateAction } from "react";

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

interface IProps {
  placeholder: string;
  setState: Dispatch<SetStateAction<string>>;
}
const EditInput: FC<IProps> = ({ placeholder, setState }) => {
  return (
    <>
      <div className={cls("inputDiv")}>
        <input
          onChange={(v) => setState(v.target.value)}
          placeholder={placeholder}
        />
      </div>
      <style jsx>
        {`
          input {
            background-color: transparent;
            margin-left: 20px;
            width: calc(100% - 20px);
            line-height: 23px;
          }
          input::placeholder {
            color: #cacaca;
          }
          .inputDiv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 44px;
            background-color: #f7faff;
            border: 1px solid #b1c2d0;
            border-radius: 22px;
          }
        `}
      </style>
    </>
  );
};

export default EditInput;

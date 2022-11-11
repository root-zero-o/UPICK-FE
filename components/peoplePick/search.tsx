import moduleStyle from "../../pages/peoplePick/peoplePick.module.css";

const Search = () => {
  return (
    <div className={moduleStyle.header}>
      <input
        type="text"
        className={moduleStyle.search}
        placeholder="브랜드명 또는 영양제 검색"
      />
    </div>
  );
};

export default Search;

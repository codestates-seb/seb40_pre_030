import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Atag = ({ name, link, logged, isContent }) => {
  return (
    <>
      {logged === true ? (
        name === "Products" ? (
          <a href={link}>{name}</a>
        ) : (
          <a href={link}>
            <FontAwesomeIcon icon={name} />
          </a>
        )
      ) : (
        <a href={link}>{name}</a>
      )}
    </>
  );
};
export default Atag;

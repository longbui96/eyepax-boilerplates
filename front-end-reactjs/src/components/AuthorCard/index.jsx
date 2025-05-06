import { useEffect } from "react";
import {
  useSelector,
  // useDispatch
} from "react-redux";
// import { fetchAuthor } from "../../redux/slices/author";

import "./index.css";

const AuthorCard = () => {
  // const dispatch = useDispatch();
  const {
    data,
    // status,
    // error
  } = useSelector((state) => state.author);

  useEffect(() => {
    // dispatch(fetchAuthor());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const renderContent = {
  //   loading: <p>Loading...</p>,
  //   failed: <p>Error: {error}</p>,
  //   succeeded: (
  //     <>
  //       <span>Name: {data.author}</span>
  //       <br />
  //       <span>Role: {data.role}</span>
  //       <br />
  //       <span>Phone number: {data.phoneNumber}</span>
  //     </>
  //   ),
  // };

  // return <div className="author-card">{renderContent[status] || null}</div>;
  return (
    <div className="author-card">
      <span>Name: {data.author}</span>
      <br />
      <span>Role: {data.role}</span>
      <br />
      <span>Phone number: {data.phoneNumber}</span>
    </div>
  );
};

export default AuthorCard;

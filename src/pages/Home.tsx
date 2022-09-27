import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCard } from "../components/ProfileCard";

export type userInfo = {
  name: string;
  country: string;
  image: string;
};

export const Home = () => {
  //const [user, setUser] = useState(() => ({}));

  const user = useSelector((state): userInfo => state.user);

  const handleClick = () => {
    dispatch({ type: "GET_USER" });
  };

  return (
    <>
      <h2 className="mb-3">Stack Scraper</h2>
      <div className="button_div d-flex justify-content-center">
        <Button variant="primary" className="col-lg-6" onClick={handleClick}>
          Scrape profile
        </Button>
      </div>
      {user && <ProfileCard user={user} />}
    </>
  );
};

function dispatch(arg0: { type: string }) {
  throw new Error("Function not implemented.");
}
/**
 * named exports are easier to work with for bigger projects
 */

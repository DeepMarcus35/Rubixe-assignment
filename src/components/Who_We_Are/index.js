import "./whoweare.css";
export const WhoWeAre = () => {
  return (
    <div className="whowearecontainer">
      <div className="text-container">
        <h1>WHO WE ARE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dicta
          excepturi ut consequuntur accusantium eum, ad laboriosam a fugit
          similique, tenetur blanditiis voluptas nisi necessitatibus voluptate?
          Illum esse incidunt aspernatur autem velit quam alias eligendi
          suscipit repellendus.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dicta
          excepturi ut consequuntur accusantium eum, ad laboriosam a fugit
          similique, tenetur blanditiis voluptas nisi necessitatibus voluptate?
          Illum esse incidunt aspernatur autem velit quam alias eligendi
          suscipit repellendus.
        </p>
      </div>
      <div className="image">
        <div className="line"></div>
        <img
          src={require("../../images/meeting.jpg")}
          alt="who we are"
          width={400}
          height={200}
        />
        <div className="green-box"></div>
      </div>
    </div>
  );
};

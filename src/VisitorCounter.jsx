// import { useEffect, useState } from "react";

// function VisitorCounter() {

//   const [count, setCount] = useState(null);

//   useEffect(() => {

//     fetch(
//       "https://api.countapi.xyz/hit/luxuryglasswebsite/homepage"
//     )

//       .then((res) => res.json())

//       .then((data) => {

//         setCount(data.value);

//       })

//       .catch((err) => {

//         console.log(err);

//       });

//   }, []);

//   return (

//     <div className="luxury-visitor-counter">

//       <div className="luxury-visitor-glow"></div>

//       <span className="luxury-visitor-label">

//         Website Visitors

//       </span>

//       <h3>

//         {count !== null
//           ? count.toLocaleString()
//           : "Loading..."}

//       </h3>

//     </div>

//   );
// }

// export default VisitorCounter;





import { useEffect, useState } from "react";

function VisitorCounter() {

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchVisitorCount = async () => {

      try {

        const response = await fetch(
          "https://api.countapi.xyz/hit/luxuryglasswebsite/homepage"
        );

        const data = await response.json();

        if (data.value !== undefined) {

          setCount(data.value);

        }

      } catch (error) {

        console.error(
          "Count API Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchVisitorCount();

  }, []);

  return (

    <div className="luxury-visitor-counter">

      <div className="luxury-visitor-glow"></div>

      <span className="luxury-visitor-label">

        Website Visitors

      </span>

      <h3>

        {loading
          ? "0000"
          : count.toLocaleString()}

      </h3>

    </div>

  );
}

export default VisitorCounter;
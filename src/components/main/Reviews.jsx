/* eslint-disable react/prop-types */
import { cloneElement } from "react";
import trustpilotLogo from "../../assets/trustpilot.png";

const ReviewRating = ({ rating, size }) => {
  const star = (value, size) => {
    if (value === 10) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path>
          <path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path>
          <path
            d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
            fill="#fff"
          ></path>
        </svg>
      );
    } else if (value === 5) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path>
          <path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path>
          <path
            d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
            fill="#fff"
          ></path>
        </svg>
      );
    } else if (value === 0) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path>
          <path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#DCDCE6"></path>
          <path
            d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
            fill="#fff"
          ></path>
        </svg>
      );
    }
  };

  const stars = [];
  let value;

  for (let i = 0; i < 5; i++) {
    if (rating - i <= 0) {
      value = 0;
    }
    if (rating - i > 0 && rating - i < 1) {
      value = 5;
    }
    if (rating - i > 1) {
      value = 10;
    }

    stars.push(cloneElement(star(value, size), { key: i }));
  }
  return <div className="flex gap-[2px]">{stars}</div>;
};

const Review = ({ review }) => {
  const { rating, title, text, author } = review;

  return (
    <div className="h-[450px] min-w-[270px] max-w-[calc(50vw-2.5rem)] p-6 bg-black-haze-50 shrink-0 rounded-lg text-neutral-700">
      <div className="h-[calc(100%-1rem)]">
        <p className="text-xs uppercase tracking-widest font-semibold leading">
          {title}
        </p>
        <div className="my-4">
          <ReviewRating rating={rating} size="18px" />
        </div>
        <p
          className={
            "leading-7" +
            (text.split("").length > 160 ? " text-xl" : " text-2xl")
          }
        >
          {text}
        </p>
      </div>
      <p className="text-sm font-semibold">{author}</p>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "The support person have good knowledge…",
      text: "The support person have good knowledge and help with good suggestion on improving my setting that is extraordinary.",
      author: "Niraj Singh",
    },
    {
      id: 2,
      rating: 5,
      title: "10 on 10 customer support.",
      text: "The support provided by GoDaddy is the best in the industry with knowledgeable customer agents and best practices. They offer the best rates upfront over the call.",
      author: "Chandrashekar Mhaskar",
    },
    {
      id: 3,
      rating: 4,
      title: "Good Communication Skill by Support Assistant",
      text: "Great Product and Service Customer Support Assistance from Godadddy Support Team",
      author: "Prashant Khambhayata",
    },
    {
      id: 4,
      rating: 5,
      title: "Godaddy customer support is 100%…",
      text: "Godaddy customer support is 100% reliable for all website-related support. The support staff are reliable, quick, knowledgeable, and always ready to help.",
      author: "Sirisha Ramaraju",
    },
    {
      id: 5,
      rating: 5,
      title: "Excellent service godaddy",
      text: "Very Nice Service.CustmerCare People are So Polite.Good Offers.Clarifed Each And Every Point, Discounts Also.Finally Happy with the GoDaddy Support.",
      author: "KAPU CARZ HUB",
    },
    {
      id: 6,
      rating: 5,
      title: "Godaddy really goes!",
      text: "Easiest and smooth experience for website and domain registration/hosting. The customer service is amazing in troubleshooting and resolving issues: always going all the way to ensure we get the best.",
      author: "Kannan Rajaram",
    },
    {
      id: 7,
      rating: 5,
      title: "Polite and helpful customer service",
      text: "The customer support at GoDaddy is extremely polite and helpful. I get my problems sorted out in quick time. Thanks!",
      author: "Prashant Mishra",
    },
    {
      id: 8,
      rating: 5,
      title: "Excellent product and the service is…",
      text: "Excellent product and the service is top notch. Very happy to be associated with GODaddy!",
      author: "Vishal Hanmattekar",
    },
    {
      id: 9,
      rating: 5,
      title: "I have been using Godaddy Hosting…",
      text: "I have been using Godaddy Hosting Services for more than 10 years. It's very easy to use and the Customer service is excellent.",
      author: "Jamal Ashraf",
    },
    {
      id: 10,
      rating: 4,
      title: "Top level professionalism",
      text: "After trying 2-3 domain/web hosting companies, I found GoDaddy much more professional in dealing with customer issues. Highly recommended.",
      author: "Chandra Shekhar",
    },
  ];

  return (
    <section className="px-4 !mt-12 w-screen sm:m-4">
      <div>
        <h2 className="text-[28px] font-bold leading-9">
          Trusted by 20+ million <br /> customers around the world.
        </h2>
      </div>

      <div className="mt-5 flex flex-nowrap gap-4 w-full overflow-x-scroll">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>

      <div className="mt-10">
        <a href="#">
          <img src={trustpilotLogo} alt="trustpilot logo" className="w-28" />
          <div className="my-3">
            <ReviewRating rating={4.7} size={"30px"} />
          </div>
          <p className="text-sm">
            4.7 out of 5 stars based on <strong>91,674</strong> reviews <br />
            Showing our 4 and 5 stars reviews.
          </p>
        </a>
      </div>
    </section>
  );
};

export default Reviews;

import htmlIcon from "../assets/Icon/Tech/html.svg";
import cssIcon from "../assets/Icon/Tech/css.svg";
import jsIcon from "../assets/Icon/Tech/js.svg";
import tsIcon from "../assets/Icon/Tech/ts.svg";
import reactIcon from "../assets/Icon/Tech/react.svg";
import pythonIcon from "../assets/Icon/Tech/python.svg";
import PostgreSQL from "../assets/Icon/Tech/postgresql.svg";
import fastAPIIcon from "../assets/Icon/Tech/fastapi.svg";

const techs = [
  {
    title: "Python",
    icon: pythonIcon,
    greyscale: true,
    detail:
      "A high-level programming language known for readability and broad versatility.",
  },
  {
    title: "FastAPI",
    icon: fastAPIIcon,
    greyscale: true,
    detail:
      "A modern Python framework for fast, efficient, and documented APIs.",
  },
  {
    title: "PostgreSQL",
    icon: PostgreSQL,
    greyscale: true,
    detail:
      "An advanced open-source relational database for reliable and scalable applications.",
  },
  {
    title: "HTML 5",
    icon: htmlIcon,
    detail:
      "Hypertext Markup Language, used for structuring and presenting content on the World Wide Web.",
  },
  {
    title: "CSS 3",
    icon: cssIcon,
    detail:
      "Cascading Style Sheets, used for describing the look and formatting of a document written in HTML.",
  },
  {
    title: "JavaScript",
    icon: jsIcon,
    detail:
      "Programming language that enables interactive web pages and is an essential part of web applications.",
  },
  {
    title: "TypeScript",
    icon: tsIcon,
    detail:
      "TypeScript, a superset of JavaScript that adds static typing abilities to the language.",
  },
  {
    title: "React",
    icon: reactIcon,
    detail:
      "JavaScript library for building user interfaces, particularly single-page applications.",
  },
];

export default techs;

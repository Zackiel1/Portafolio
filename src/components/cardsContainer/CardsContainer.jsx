import Cards from "../cards/Cards";
import style from "./CardsContainer.module.css";
import { listProjects } from "../../services/ListProyjects";

const CardsContainer = () => {
    return(
        listProjects.map((proj, index) => {
            return(
                <main key={index}>
                    <Cards
                    key={proj.id}
                    id={proj.id}
                    name={proj.name}
                    image={proj.image}
                    date={proj.date}
                    description={proj.description}
                    technologies={proj.technologies}
                    code={proj.code}
                    deploy={proj.deploy}
                    />
                </main>
            )
        })
    )
    
};

function ekis(params) {
    return params
};

export default CardsContainer;
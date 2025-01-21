import style from "./Skills.module.css";
import skillsList from "../../services/SkillsList";

const Skills = () => {
    return(
        skillsList.map((skill, index) => {
            return(
                <main key={index}>
                    <img src={skill.img} alt={skill.title} />
                </main>
            )
        })
    )
};

export default Skills;
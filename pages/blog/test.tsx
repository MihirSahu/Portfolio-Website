import md from 'markdown-it';
import corridor from "./Corridor.md";


const Test = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: md().render(corridor) }}></div>
    );
}

export default Test;
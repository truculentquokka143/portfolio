import { useEffect } from "react";
import Description from "../components/page/Description";
import Heading from "../components/page/Heading";
import "./Development.css";
import top from "../development-images/marsupialmini.png";
import Image from "../components/page/Image";
import filter from "../development-images/filter.gif";
import sortby from "../development-images/sortby.gif";
import favorites from "../development-images/favorites.gif";


export default function Development() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div>
            <img className="main-img" src={top}></img>

            <div className="page">
                <h1>React Sorting and Filtering App</h1>
                <Description
                    roles={["UI Designer"]}
                    team={["Individual"]}
                    tools={["React"]}
                    timeline={["Nov. 8 - Nov. 29 2022"]}>
                </Description>

                <div className="section" id="overview">
                    <Heading title="Overview 🔍"></Heading>
                    <p>
                        The goal of this project was to use React to develop an interactive
                        interface, use interface components, and tie the components
                        to an internal data state. The list-based interface
                        I have created allows users to sort, filter, and
                        favorite different marsupials based on their name, mass, length, and diet.
                    </p>
                </div>

                <div className="section">
                    <Heading title="Features"></Heading>
                    <ul id="features">
                        <li>
                            2 filtering categories: Diet and Average Length
                        </li>
                        <p>By default, "All" is selected and no filters are applied.
                            A user can select one value for each filter since
                            there are radio buttons. I chose to use
                            radio buttons instead of checkboxes because the filtering
                            categories are mutually exclusive (carnivore and herbivore does
                            not equal omnivore in this case). Stacking both filters produced
                            the same results as a logical AND.
                        </p>
                        <div className="img-container">
                            <Image src={filter} caption="Stacking two filters"></Image>
                        </div>


                        <li>
                            4 sorting features: Name (Alphabetically and reverse Alphabetically)
                            and Mass (Lowest to Highest, Highest to Lowest)
                        </li>
                        <p>By default, the items are sorted by in alphabetical order by name.
                            A user can select a value from the Sort by dropdown to select
                            a different sorting method. Sorting is compatible
                            with the filtering and favorite features.
                        </p>
                        <div className="img-container">
                            <Image src={sortby} caption="Sorting"></Image>
                        </div>


                        <li>
                            Aggregator feature: Favorites button, Cart, and Total Average Mass
                        </li>
                        <p>Users can click the "Add To Favorites" button in each
                            item card to add a marsupial to their favorites cart and
                            also remove items by clicking the "Remove" button.
                            Items that are favorited are added to the favorites cart
                            beneath the filter section, and the total average mass of all of the
                            favorited marsupials is updated. A user can click the
                            favorites checkbox in the filter section, which will display
                            only the favorited marsupials.
                        </p>

                        <div className="img-container">
                            <Image src={favorites} caption="Adding and removing items from favorites"></Image>
                        </div>

                    </ul>
                </div>

                <div className="section" id="takeaways">
                    <Heading title="Takeaways 📝"></Heading>
                    <p>
                        After completing this project, I feel that I have strengthened
                        my understanding of React fundamentals such as reusing components,
                        passing props, and managing states. I also enjoyed getting more practice
                        with flexbox and bringing my vision for the website to life with CSS.
                    </p>
                </div>
            </div>
        </div>
    )
}
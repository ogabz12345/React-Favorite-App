import { useContext } from "react"
import FavoritesContext from "../store/favorite-context"
import MeetupList from "../components/meetups/MeetupList";

const FavoritePage = () => {

    const favoritesCtx = useContext(FavoritesContext);
    let context;
    if(favoritesCtx.totalFavorites === 0) {
        context = <p>You got no favorites yet. Start adding some?</p>
    } else {
        context = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {context}
        </section>
    )
}

export default FavoritePage

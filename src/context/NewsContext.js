import React, {useState} from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../config/firebase";

const NewsContext = React.createContext();

export const useNewsContext = () => {
    return React.useContext(NewsContext);
}

export const NewsProvider = ({children}) => {
    //state declaration
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //function declaration
    const fetchAllNewsArticles = async () => {
        setLoading(true)
        setError(null)
        try {
            const querySnapshot = await getDocs(collection(db, "news"));
            const newsArticles = querySnapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            setNews(newsArticles)
        } catch (error) {
            console.log("Error Fetching News Articles, ", error.message)
            setError("Error Fetching News Articles")
        }
        setLoading(false)
    }

    return (
        <NewsContext.Provider value={{news, loading, error, fetchAllNewsArticles}}> 
            {children}
        </NewsContext.Provider>
    )

}
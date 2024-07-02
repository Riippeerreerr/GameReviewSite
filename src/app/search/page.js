import Navbar from "../../../components/Navbar"
import SearchBar from "../../../components/search/SearchBar"
import './SearchPage.css'
import SearchTable from "../../../components/search/Table"

export default function Search(){
    return(
        <>
        <Navbar />
        <div className="content">
                <SearchBar />
                <SearchTable />
        </div>
    </>
    )
}
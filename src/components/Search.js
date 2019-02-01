import React, { Component } from 'react';
import "./LectureList";
class search extends Component {
    state = {
        query: '',
    }
    
    handleInputChange = () => {
        console.log(this.search.value);
        this.setState({
            query: this.search.value
        })
    }
    myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
    
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    render() {
        return (
            <form>
                <div className="search-bar">
                <input type="text" id="myInput" onKeyUp="myFunction()" placeholder="Search for videos.."/>
                </div>
                
                <p>{this.state.query}</p>
            </form>
        )    
    }
}
    
export default search;
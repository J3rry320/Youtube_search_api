import React, {
    Component
} from 'react';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.emptySearchTerm=this.emptySearchTerm.bind(this)
    }
    render() {
        return ( 
            <div>
            <nav className="navbar ">
         
            <a href="#" className="navbar-brand youtube"><i className="fa fa-youtube"></i></a>
           
    
            </nav>
            <div className="container mt-3 mb-4">
<div className="row">
<div className="col-sm-12 input-group">

             <input value = {
                this.state.term
            }
            onChange = {
                event => this.onSearchTermChange(event.target.value)
         
         
            } className="form-control "  placeholder="Search Videos" aria-label="Search"/>
             <div className="input-group-append">
    <button className="btn btn-outline-secondary" onClick={this.emptySearchTerm}>
    <i className="fa fa-close"></i>
    </button>
  </div>

  </div>
  </div>
            </div>
           
</div>
        );
    }
    emptySearchTerm(){
        this.setState({term:""})
        
    }
    onSearchTermChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term)
    }

}
export default SearchBar;
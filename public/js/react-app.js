	var $csrf = "adfdfdfdfdfdf";

	function CsrfField(){
		return (<input type="hidden" value={$csrf}/>);
	}

	function TextField(props){
		return (<div className="form-group">
            		<input className="form-control" type="text" name={props.name} value={props.value}></input>
            	</div>);

	}

	ReactDOM.render(
	  

		<div className="container">
		    <div className="row">
		        <div className="col-md-8 col-md-offset-2">
		            <div className="panel panel-default">
		                <div className="panel-heading">Add Item</div>

		                <div class="panel-body">
		                    <form action="item/store" method='post'>
		                    	<CsrfField />
		                    	<TextField name='itemName'/>
		                    	<TextField name='amount'/>
		                    	<button type="text" className='btn'>Button</button>
		                    </form>

		                </div>
		            </div>
		        </div>
		    </div>
		</div>,
	  document.getElementById('react-app')

	);
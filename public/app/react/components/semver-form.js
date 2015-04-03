var SemVerForm = React.createClass({
	getInitialState: function() {
		return {
			pgk: '',
			version: ''
		};
	},
	changePackage: function() {
		var packageName = this.state.pkg;
		this.props.onPackageChange(packageName);
	},
	fetchMatchingVersions: function(e) {
		var version = e.target.value;
		this.setState({version: version});

		this.props.onVersionChange(version);
	},
	updatePackage: function(e) {
		this.setState({pkg: e.target.value});
	},
	render: function() {
		return (
			<div className="search">
				<div>
					<input placeholder="Package" id="package" onChange={this.updatePackage} value={this.state.pkg} />
					<button className="btn btn-default" onClick={this.changePackage}>Search</button>
					<input placeholder="Version" id="version" value={this.state.version} onChange={this.fetchMatchingVersions} />
				</div>
			</div>
		);
	}
});
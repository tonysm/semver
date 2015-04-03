var SemVerApp = React.createClass({
	getInitialState: function() {
		return {
			packageName: '',
			versions: [],
			versionSearch: ''
		}
	},
	onPackageChange: function(packageName) {
		var _this = this;
		_this.setState({packageName: packageName});

		$.getJSON('/packages/' + packageName).done(function(data) {
			_this.setState({versions: data});
		});
	},
	onVersionChange: function(version) {
		this.setState({versionSearch: version});

		console.log(version);
		$.post('/packages/' + this.state.packageName + '/match', JSON.stringify({ constraint: version })).done(function(data) {
			console.log(data);
		});
	},
	render: function() {
		return (
			<div>
				<SemVerForm onPackageChange={this.onPackageChange} onVersionChange={this.onVersionChange} />
				<SemVerList versions={this.state.versions} packageName={this.state.packageName} versionSearch={this.state.versionSearch} />
			</div>
		);
	}
});

React.render(<SemVerApp />, document.getElementById('semverapp'));
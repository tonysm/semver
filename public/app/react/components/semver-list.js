var SemVerList = React.createClass({
	render: function() {
		var items = this.props.versions.map(function(version) {
			return <li className="version">
				<a target="_blank" href={version.source}>{version.version}</a>
			</li>
		});

		return (
			<div className="versions">
				<h1>Results for <a target="_blank" href="https://packagist.org/packages/{this.state.packageName}">{this.props.packageName}:{this.props.versionSearch}</a></h1>
				<ul className="versions list-unstyled">
					{items}
				</ul>

				<h2>Satisfied</h2>
				<pre>composer require {this.props.packageName}:{this.props.versionSearch}</pre>
			</div>
		);
	}
});
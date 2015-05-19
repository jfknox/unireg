      var CommentBox = React.createClass({
        render: function() {
          return (
            <div className="commentBox">
              <h1>Hello, world! Fuck you god dammit.</h1>

              <CommentList/>
              <CommentForm/>
            </div>
            
          );
        }
      });

      var CommentList = React.createClass({
        render: function() {
          return (
            <div classname="commentList">
              Oh, we are just going to sit here and take it
            </div>
          );
        }
      });

      var CommentForm = React.createClass({
        render: function() {
          return (
            <div classname="CommentForm">
              another pointless shit
            </div>
          );
        }
      });
      




      React.render(
        <CommentBox />, 
        document.getElementById('content')

      );
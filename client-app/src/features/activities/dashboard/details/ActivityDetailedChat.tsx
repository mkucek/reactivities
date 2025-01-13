import { observer } from "mobx-react-lite"
import { Header, Segment, Comment } from "semantic-ui-react"

export default observer(function ActivityDetailedChat() {
    return (
        <>
        <Segment textAlign='center' attached='top' secondary inverted color='teal' style={{ border: 'none' }}>
            <Header>Chat about this event</Header>
        </Segment>
        <Segment attached>
            <Comment.Group>
            <Comment>
                <Comment.Avatar src='/assets/user.png' />
                <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
                </Comment.Content>

                </Comment>
            </Comment.Group>
        </Segment>
        </>
    )
}
)
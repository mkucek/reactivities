import { observer } from "mobx-react-lite"
import { List, Segment } from "semantic-ui-react"

export default observer(function ActivityDetailedSidebar() {
    return (
        <>
            <Segment textAlign='center' attached='top' secondary inverted color='teal' style={{ border: 'none' }}>
                2 People Going

            </Segment>
            <Segment attached>
                <List relaxed divided>
                    <List.Item style={{ position: 'relative' }}>
                        <List.Icon name='user' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Bob</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item style={{ position: 'relative' }}>
                        <List.Icon name='user' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Tom</List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        </>
    )
}
)
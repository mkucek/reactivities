import { observer } from "mobx-react-lite"
import { Activity } from "../../../../app/models/activity"
import { Grid, Icon, Segment } from "semantic-ui-react"

interface Props {
    activity: Activity
}       

export default observer(function ActivityDetailedInfo({activity}: Props) {
    return (
        <Segment.Group>
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='info' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{activity.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='calendar' />
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{activity.date}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size='large' color='teal' name='marker' />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{activity.venue}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
})
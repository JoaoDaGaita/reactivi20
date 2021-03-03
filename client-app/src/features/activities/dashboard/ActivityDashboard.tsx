import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/layout/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "./details/ActivityDetails";
import ActivityForm from "./form/AcitivityForm";

interface Props {
    activities: Activity[];
    selectedActitivy: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({
    activities,
    selectedActitivy,
    selectActivity,
    cancelSelectActivity,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteActivity,
    submitting
}: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <ActivityList
                    activities={activities}
                    selectActvity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width="6">
                {selectedActitivy && !editMode &&
                    <ActivityDetails
                        activity={selectedActitivy}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                }
                {editMode && <ActivityForm activity={selectedActitivy} closeForm={closeForm} createOrEdit={createOrEdit} submitting={submitting} />}
            </Grid.Column>
        </Grid>
    );
}

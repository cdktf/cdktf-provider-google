// https://www.terraform.io/docs/providers/google/r/bigquery_data_transfer_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDataTransferConfigConfig extends cdktf.TerraformMetaArguments {
  /** The number of days to look back to automatically refresh the data.
For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value. */
  readonly dataRefreshWindowDays?: number;
  /** The data source id. Cannot be changed once the transfer config is created. */
  readonly dataSourceId: string;
  /** The BigQuery target dataset id. */
  readonly destinationDatasetId: string;
  /** When set to true, no runs are scheduled for a given transfer. */
  readonly disabled?: boolean;
  /** The user specified display name for the transfer config. */
  readonly displayName: string;
  /** The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US. */
  readonly location?: string;
  /** Pub/Sub topic where notifications will be sent after transfer runs
associated with this transfer config finish. */
  readonly notificationPubsubTopic?: string;
  /** These parameters are specific to each data source. */
  readonly params: { [key: string]: string };
  readonly project?: string;
  /** Data transfer schedule. If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent. */
  readonly schedule?: string;
  /** Optional service account name. If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account. */
  readonly serviceAccountName?: string;
  /** email_preferences block */
  readonly emailPreferences?: BigqueryDataTransferConfigEmailPreferences[];
  /** schedule_options block */
  readonly scheduleOptions?: BigqueryDataTransferConfigScheduleOptions[];
  /** sensitive_params block */
  readonly sensitiveParams?: BigqueryDataTransferConfigSensitiveParams[];
  /** timeouts block */
  readonly timeouts?: BigqueryDataTransferConfigTimeouts;
}
export interface BigqueryDataTransferConfigEmailPreferences {
  /** If true, email notifications will be sent on transfer run failures. */
  readonly enableFailureEmail: boolean;
}

function bigqueryDataTransferConfigEmailPreferencesToTerraform(struct?: BigqueryDataTransferConfigEmailPreferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_failure_email: cdktf.booleanToTerraform(struct!.enableFailureEmail),
  }
}

export interface BigqueryDataTransferConfigScheduleOptions {
  /** If true, automatic scheduling of data transfer runs for this
configuration will be disabled. The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored. */
  readonly disableAutoScheduling?: boolean;
  /** Defines time to stop scheduling transfer runs. A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option. */
  readonly endTime?: string;
  /** Specifies time to start scheduling transfer runs. The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option. */
  readonly startTime?: string;
}

function bigqueryDataTransferConfigScheduleOptionsToTerraform(struct?: BigqueryDataTransferConfigScheduleOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_auto_scheduling: cdktf.booleanToTerraform(struct!.disableAutoScheduling),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface BigqueryDataTransferConfigSensitiveParams {
  /** The Secret Access Key of the AWS account transferring data from. */
  readonly secretAccessKey: string;
}

function bigqueryDataTransferConfigSensitiveParamsToTerraform(struct?: BigqueryDataTransferConfigSensitiveParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}

export interface BigqueryDataTransferConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function bigqueryDataTransferConfigTimeoutsToTerraform(struct?: BigqueryDataTransferConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BigqueryDataTransferConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigqueryDataTransferConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_data_transfer_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataRefreshWindowDays = config.dataRefreshWindowDays;
    this._dataSourceId = config.dataSourceId;
    this._destinationDatasetId = config.destinationDatasetId;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._location = config.location;
    this._notificationPubsubTopic = config.notificationPubsubTopic;
    this._params = config.params;
    this._project = config.project;
    this._schedule = config.schedule;
    this._serviceAccountName = config.serviceAccountName;
    this._emailPreferences = config.emailPreferences;
    this._scheduleOptions = config.scheduleOptions;
    this._sensitiveParams = config.sensitiveParams;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_refresh_window_days - computed: false, optional: true, required: false
  private _dataRefreshWindowDays?: number;
  public get dataRefreshWindowDays() {
    return this.getNumberAttribute('data_refresh_window_days');
  }
  public set dataRefreshWindowDays(value: number ) {
    this._dataRefreshWindowDays = value;
  }
  public resetDataRefreshWindowDays() {
    this._dataRefreshWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRefreshWindowDaysInput() {
    return this._dataRefreshWindowDays
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId: string;
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId
  }

  // destination_dataset_id - computed: false, optional: false, required: true
  private _destinationDatasetId: string;
  public get destinationDatasetId() {
    return this.getStringAttribute('destination_dataset_id');
  }
  public set destinationDatasetId(value: string) {
    this._destinationDatasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDatasetIdInput() {
    return this._destinationDatasetId
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_pubsub_topic - computed: false, optional: true, required: false
  private _notificationPubsubTopic?: string;
  public get notificationPubsubTopic() {
    return this.getStringAttribute('notification_pubsub_topic');
  }
  public set notificationPubsubTopic(value: string ) {
    this._notificationPubsubTopic = value;
  }
  public resetNotificationPubsubTopic() {
    this._notificationPubsubTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPubsubTopicInput() {
    return this._notificationPubsubTopic
  }

  // params - computed: false, optional: false, required: true
  private _params: { [key: string]: string };
  public get params() {
    return this.interpolationForAttribute('params') as any;
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string ) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string;
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string ) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName
  }

  // email_preferences - computed: false, optional: true, required: false
  private _emailPreferences?: BigqueryDataTransferConfigEmailPreferences[];
  public get emailPreferences() {
    return this.interpolationForAttribute('email_preferences') as any;
  }
  public set emailPreferences(value: BigqueryDataTransferConfigEmailPreferences[] ) {
    this._emailPreferences = value;
  }
  public resetEmailPreferences() {
    this._emailPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPreferencesInput() {
    return this._emailPreferences
  }

  // schedule_options - computed: false, optional: true, required: false
  private _scheduleOptions?: BigqueryDataTransferConfigScheduleOptions[];
  public get scheduleOptions() {
    return this.interpolationForAttribute('schedule_options') as any;
  }
  public set scheduleOptions(value: BigqueryDataTransferConfigScheduleOptions[] ) {
    this._scheduleOptions = value;
  }
  public resetScheduleOptions() {
    this._scheduleOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOptionsInput() {
    return this._scheduleOptions
  }

  // sensitive_params - computed: false, optional: true, required: false
  private _sensitiveParams?: BigqueryDataTransferConfigSensitiveParams[];
  public get sensitiveParams() {
    return this.interpolationForAttribute('sensitive_params') as any;
  }
  public set sensitiveParams(value: BigqueryDataTransferConfigSensitiveParams[] ) {
    this._sensitiveParams = value;
  }
  public resetSensitiveParams() {
    this._sensitiveParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveParamsInput() {
    return this._sensitiveParams
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryDataTransferConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BigqueryDataTransferConfigTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_refresh_window_days: cdktf.numberToTerraform(this._dataRefreshWindowDays),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      destination_dataset_id: cdktf.stringToTerraform(this._destinationDatasetId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      location: cdktf.stringToTerraform(this._location),
      notification_pubsub_topic: cdktf.stringToTerraform(this._notificationPubsubTopic),
      params: cdktf.hashMapper(cdktf.anyToTerraform)(this._params),
      project: cdktf.stringToTerraform(this._project),
      schedule: cdktf.stringToTerraform(this._schedule),
      service_account_name: cdktf.stringToTerraform(this._serviceAccountName),
      email_preferences: cdktf.listMapper(bigqueryDataTransferConfigEmailPreferencesToTerraform)(this._emailPreferences),
      schedule_options: cdktf.listMapper(bigqueryDataTransferConfigScheduleOptionsToTerraform)(this._scheduleOptions),
      sensitive_params: cdktf.listMapper(bigqueryDataTransferConfigSensitiveParamsToTerraform)(this._sensitiveParams),
      timeouts: bigqueryDataTransferConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}

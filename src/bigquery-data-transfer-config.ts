// https://www.terraform.io/docs/providers/google/r/bigquery_data_transfer_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigqueryDataTransferConfigConfig extends TerraformMetaArguments {
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
  /** timeouts block */
  readonly timeouts?: BigqueryDataTransferConfigTimeouts;
}
export interface BigqueryDataTransferConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BigqueryDataTransferConfig extends TerraformResource {

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
    this._params = config.params;
    this._project = config.project;
    this._schedule = config.schedule;
    this._serviceAccountName = config.serviceAccountName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_refresh_window_days - computed: false, optional: true, required: false
  private _dataRefreshWindowDays?: number;
  public get dataRefreshWindowDays() {
    return this._dataRefreshWindowDays;
  }
  public set dataRefreshWindowDays(value: number | undefined) {
    this._dataRefreshWindowDays = value;
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId: string;
  public get dataSourceId() {
    return this._dataSourceId;
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }

  // destination_dataset_id - computed: false, optional: false, required: true
  private _destinationDatasetId: string;
  public get destinationDatasetId() {
    return this._destinationDatasetId;
  }
  public set destinationDatasetId(value: string) {
    this._destinationDatasetId = value;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this._disabled;
  }
  public set disabled(value: boolean | undefined) {
    this._disabled = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // params - computed: false, optional: false, required: true
  private _params: { [key: string]: string };
  public get params() {
    return this._params;
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string;
  public get schedule() {
    return this._schedule;
  }
  public set schedule(value: string | undefined) {
    this._schedule = value;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string;
  public get serviceAccountName() {
    return this._serviceAccountName;
  }
  public set serviceAccountName(value: string | undefined) {
    this._serviceAccountName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigqueryDataTransferConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BigqueryDataTransferConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      data_refresh_window_days: this._dataRefreshWindowDays,
      data_source_id: this._dataSourceId,
      destination_dataset_id: this._destinationDatasetId,
      disabled: this._disabled,
      display_name: this._displayName,
      location: this._location,
      params: this._params,
      project: this._project,
      schedule: this._schedule,
      service_account_name: this._serviceAccountName,
      timeouts: this._timeouts,
    };
  }
}

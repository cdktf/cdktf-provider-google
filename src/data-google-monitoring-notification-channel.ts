// https://www.terraform.io/docs/providers/google/r/data_google_monitoring_notification_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleMonitoringNotificationChannelConfig extends TerraformMetaArguments {
  /** An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters. */
  readonly displayName?: string;
  /** Configuration fields that define the channel and its behavior. The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places. */
  readonly labels?: { [key: string]: string };
  readonly project?: string;
  /** The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc... */
  readonly type?: string;
  /** User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
  readonly userLabels?: { [key: string]: string };
}
export class DataGoogleMonitoringNotificationChannelSensitiveLabels extends ComplexComputedList {

  // auth_token - computed: true, optional: false, required: true
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // service_key - computed: true, optional: false, required: true
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
}

// Resource

export class DataGoogleMonitoringNotificationChannel extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringNotificationChannelConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_notification_channel',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._project = config.project;
    this._type = config.type;
    this._userLabels = config.userLabels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // sensitive_labels - computed: true, optional: false, required: true
  public sensitiveLabels(index: string) {
    return new DataGoogleMonitoringNotificationChannelSensitiveLabels(this, 'sensitive_labels', index);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // user_labels - computed: false, optional: true, required: false
  private _userLabels?: { [key: string]: string };
  public get userLabels() {
    return this._userLabels;
  }
  public set userLabels(value: { [key: string]: string } | undefined) {
    this._userLabels = value;
  }

  // verification_status - computed: true, optional: false, required: true
  public get verificationStatus() {
    return this.getStringAttribute('verification_status');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      labels: this._labels,
      project: this._project,
      type: this._type,
      user_labels: this._userLabels,
    };
  }
}

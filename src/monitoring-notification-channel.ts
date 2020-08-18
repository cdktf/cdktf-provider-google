// https://www.terraform.io/docs/providers/google/r/monitoring_notification_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitoringNotificationChannelConfig extends TerraformMetaArguments {
  /** An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters. */
  readonly description?: string;
  /** An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters. */
  readonly displayName?: string;
  /** Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future. */
  readonly enabled?: boolean;
  /** Configuration fields that define the channel and its behavior. The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places. */
  readonly labels?: { [key: string]: string };
  readonly project?: string;
  /** The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc... */
  readonly type: string;
  /** User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
  readonly userLabels?: { [key: string]: string };
  /** sensitive_labels block */
  readonly sensitiveLabels?: MonitoringNotificationChannelSensitiveLabels[];
  /** timeouts block */
  readonly timeouts?: MonitoringNotificationChannelTimeouts;
}
export interface MonitoringNotificationChannelSensitiveLabels {
  /** An authorization token for a notification channel. Channel types that support this field include: slack */
  readonly authToken?: string;
  /** An password for a notification channel. Channel types that support this field include: webhook_basicauth */
  readonly password?: string;
  /** An servicekey token for a notification channel. Channel types that support this field include: pagerduty */
  readonly serviceKey?: string;
}
export interface MonitoringNotificationChannelTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MonitoringNotificationChannel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitoringNotificationChannelConfig) {
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._labels = config.labels;
    this._project = config.project;
    this._type = config.type;
    this._userLabels = config.userLabels;
    this._sensitiveLabels = config.sensitiveLabels;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
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

  // sensitive_labels - computed: false, optional: true, required: false
  private _sensitiveLabels?: MonitoringNotificationChannelSensitiveLabels[];
  public get sensitiveLabels() {
    return this._sensitiveLabels;
  }
  public set sensitiveLabels(value: MonitoringNotificationChannelSensitiveLabels[] | undefined) {
    this._sensitiveLabels = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringNotificationChannelTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringNotificationChannelTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      enabled: this._enabled,
      labels: this._labels,
      project: this._project,
      type: this._type,
      user_labels: this._userLabels,
      sensitive_labels: this._sensitiveLabels,
      timeouts: this._timeouts,
    };
  }
}

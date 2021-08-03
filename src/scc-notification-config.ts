// https://www.terraform.io/docs/providers/google/r/scc_notification_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SccNotificationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * This must be unique within the organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#config_id SccNotificationConfig#config_id}
  */
  readonly configId: string;
  /**
  * The description of the notification config (max of 1024 characters).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#description SccNotificationConfig#description}
  */
  readonly description?: string;
  /**
  * The organization whose Cloud Security Command Center the Notification
Config lives in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#organization SccNotificationConfig#organization}
  */
  readonly organization: string;
  /**
  * The Pub/Sub topic to send notifications to. Its format is
"projects/[project_id]/topics/[topic]".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#pubsub_topic SccNotificationConfig#pubsub_topic}
  */
  readonly pubsubTopic: string;
  /**
  * streaming_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#streaming_config SccNotificationConfig#streaming_config}
  */
  readonly streamingConfig: SccNotificationConfigStreamingConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#timeouts SccNotificationConfig#timeouts}
  */
  readonly timeouts?: SccNotificationConfigTimeouts;
}
export interface SccNotificationConfigStreamingConfig {
  /**
  * Expression that defines the filter to apply across create/update
events of assets or findings as specified by the event type. The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#filter SccNotificationConfig#filter}
  */
  readonly filter: string;
}

function sccNotificationConfigStreamingConfigToTerraform(struct?: SccNotificationConfigStreamingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}

export interface SccNotificationConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#create SccNotificationConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#delete SccNotificationConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html#update SccNotificationConfig#update}
  */
  readonly update?: string;
}

function sccNotificationConfigTimeoutsToTerraform(struct?: SccNotificationConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html google_scc_notification_config}
*/
export class SccNotificationConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/scc_notification_config.html google_scc_notification_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SccNotificationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SccNotificationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_scc_notification_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configId = config.configId;
    this._description = config.description;
    this._organization = config.organization;
    this._pubsubTopic = config.pubsubTopic;
    this._streamingConfig = config.streamingConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId: string;
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: false, required: true
  private _organization: string;
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic: string;
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // streaming_config - computed: false, optional: false, required: true
  private _streamingConfig: SccNotificationConfigStreamingConfig[];
  public get streamingConfig() {
    return this.interpolationForAttribute('streaming_config') as any;
  }
  public set streamingConfig(value: SccNotificationConfigStreamingConfig[]) {
    this._streamingConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingConfigInput() {
    return this._streamingConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SccNotificationConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SccNotificationConfigTimeouts ) {
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
      config_id: cdktf.stringToTerraform(this._configId),
      description: cdktf.stringToTerraform(this._description),
      organization: cdktf.stringToTerraform(this._organization),
      pubsub_topic: cdktf.stringToTerraform(this._pubsubTopic),
      streaming_config: cdktf.listMapper(sccNotificationConfigStreamingConfigToTerraform)(this._streamingConfig),
      timeouts: sccNotificationConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}

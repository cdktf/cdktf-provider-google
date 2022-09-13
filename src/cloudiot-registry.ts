// https://www.terraform.io/docs/providers/google/r/cloudiot_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudiotRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate or deactivate HTTP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#http_config CloudiotRegistry#http_config}
  */
  readonly httpConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#id CloudiotRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The default logging verbosity for activity from devices in this
registry. Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#log_level CloudiotRegistry#log_level}
  */
  readonly logLevel?: string;
  /**
  * Activate or deactivate MQTT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#mqtt_config CloudiotRegistry#mqtt_config}
  */
  readonly mqttConfig?: { [key: string]: string };
  /**
  * A unique name for the resource, required by device registry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#name CloudiotRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#project CloudiotRegistry#project}
  */
  readonly project?: string;
  /**
  * The region in which the created registry should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#region CloudiotRegistry#region}
  */
  readonly region?: string;
  /**
  * A PubSub topic to publish device state updates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#state_notification_config CloudiotRegistry#state_notification_config}
  */
  readonly stateNotificationConfig?: { [key: string]: string };
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#credentials CloudiotRegistry#credentials}
  */
  readonly credentials?: CloudiotRegistryCredentials[] | cdktf.IResolvable;
  /**
  * event_notification_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#event_notification_configs CloudiotRegistry#event_notification_configs}
  */
  readonly eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#timeouts CloudiotRegistry#timeouts}
  */
  readonly timeouts?: CloudiotRegistryTimeouts;
}
export interface CloudiotRegistryCredentials {
  /**
  * A public key certificate format and data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#public_key_certificate CloudiotRegistry#public_key_certificate}
  */
  readonly publicKeyCertificate: { [key: string]: string };
}

export function cloudiotRegistryCredentialsToTerraform(struct?: CloudiotRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_certificate: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.publicKeyCertificate),
  }
}

export class CloudiotRegistryCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudiotRegistryCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKeyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyCertificate = this._publicKeyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotRegistryCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicKeyCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicKeyCertificate = value.publicKeyCertificate;
    }
  }

  // public_key_certificate - computed: false, optional: false, required: true
  private _publicKeyCertificate?: { [key: string]: string }; 
  public get publicKeyCertificate() {
    return this.getStringMapAttribute('public_key_certificate');
  }
  public set publicKeyCertificate(value: { [key: string]: string }) {
    this._publicKeyCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyCertificateInput() {
    return this._publicKeyCertificate;
  }
}

export class CloudiotRegistryCredentialsList extends cdktf.ComplexList {
  public internalValue? : CloudiotRegistryCredentials[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudiotRegistryCredentialsOutputReference {
    return new CloudiotRegistryCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudiotRegistryEventNotificationConfigs {
  /**
  * PubSub topic name to publish device events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#pubsub_topic_name CloudiotRegistry#pubsub_topic_name}
  */
  readonly pubsubTopicName: string;
  /**
  * If the subfolder name matches this string exactly, this
configuration will be used. The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#subfolder_matches CloudiotRegistry#subfolder_matches}
  */
  readonly subfolderMatches?: string;
}

export function cloudiotRegistryEventNotificationConfigsToTerraform(struct?: CloudiotRegistryEventNotificationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_topic_name: cdktf.stringToTerraform(struct!.pubsubTopicName),
    subfolder_matches: cdktf.stringToTerraform(struct!.subfolderMatches),
  }
}

export class CloudiotRegistryEventNotificationConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudiotRegistryEventNotificationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubTopicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopicName = this._pubsubTopicName;
    }
    if (this._subfolderMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.subfolderMatches = this._subfolderMatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotRegistryEventNotificationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pubsubTopicName = undefined;
      this._subfolderMatches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pubsubTopicName = value.pubsubTopicName;
      this._subfolderMatches = value.subfolderMatches;
    }
  }

  // pubsub_topic_name - computed: false, optional: false, required: true
  private _pubsubTopicName?: string; 
  public get pubsubTopicName() {
    return this.getStringAttribute('pubsub_topic_name');
  }
  public set pubsubTopicName(value: string) {
    this._pubsubTopicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicNameInput() {
    return this._pubsubTopicName;
  }

  // subfolder_matches - computed: false, optional: true, required: false
  private _subfolderMatches?: string; 
  public get subfolderMatches() {
    return this.getStringAttribute('subfolder_matches');
  }
  public set subfolderMatches(value: string) {
    this._subfolderMatches = value;
  }
  public resetSubfolderMatches() {
    this._subfolderMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subfolderMatchesInput() {
    return this._subfolderMatches;
  }
}

export class CloudiotRegistryEventNotificationConfigsList extends cdktf.ComplexList {
  public internalValue? : CloudiotRegistryEventNotificationConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudiotRegistryEventNotificationConfigsOutputReference {
    return new CloudiotRegistryEventNotificationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudiotRegistryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#create CloudiotRegistry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#delete CloudiotRegistry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#update CloudiotRegistry#update}
  */
  readonly update?: string;
}

export function cloudiotRegistryTimeoutsToTerraform(struct?: CloudiotRegistryTimeoutsOutputReference | CloudiotRegistryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudiotRegistryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudiotRegistryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotRegistryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry google_cloudiot_registry}
*/
export class CloudiotRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudiot_registry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry google_cloudiot_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudiotRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: CloudiotRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudiot_registry',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpConfig = config.httpConfig;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._mqttConfig = config.mqttConfig;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._stateNotificationConfig = config.stateNotificationConfig;
    this._credentials.internalValue = config.credentials;
    this._eventNotificationConfigs.internalValue = config.eventNotificationConfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_config - computed: true, optional: true, required: false
  private _httpConfig?: { [key: string]: string }; 
  public get httpConfig() {
    return this.getStringMapAttribute('http_config');
  }
  public set httpConfig(value: { [key: string]: string }) {
    this._httpConfig = value;
  }
  public resetHttpConfig() {
    this._httpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mqtt_config - computed: true, optional: true, required: false
  private _mqttConfig?: { [key: string]: string }; 
  public get mqttConfig() {
    return this.getStringMapAttribute('mqtt_config');
  }
  public set mqttConfig(value: { [key: string]: string }) {
    this._mqttConfig = value;
  }
  public resetMqttConfig() {
    this._mqttConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttConfigInput() {
    return this._mqttConfig;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
    return this._project;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state_notification_config - computed: false, optional: true, required: false
  private _stateNotificationConfig?: { [key: string]: string }; 
  public get stateNotificationConfig() {
    return this.getStringMapAttribute('state_notification_config');
  }
  public set stateNotificationConfig(value: { [key: string]: string }) {
    this._stateNotificationConfig = value;
  }
  public resetStateNotificationConfig() {
    this._stateNotificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNotificationConfigInput() {
    return this._stateNotificationConfig;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new CloudiotRegistryCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: CloudiotRegistryCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // event_notification_configs - computed: false, optional: true, required: false
  private _eventNotificationConfigs = new CloudiotRegistryEventNotificationConfigsList(this, "event_notification_configs", false);
  public get eventNotificationConfigs() {
    return this._eventNotificationConfigs;
  }
  public putEventNotificationConfigs(value: CloudiotRegistryEventNotificationConfigs[] | cdktf.IResolvable) {
    this._eventNotificationConfigs.internalValue = value;
  }
  public resetEventNotificationConfigs() {
    this._eventNotificationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNotificationConfigsInput() {
    return this._eventNotificationConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudiotRegistryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudiotRegistryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpConfig),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      mqtt_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._mqttConfig),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      state_notification_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._stateNotificationConfig),
      credentials: cdktf.listMapper(cloudiotRegistryCredentialsToTerraform, true)(this._credentials.internalValue),
      event_notification_configs: cdktf.listMapper(cloudiotRegistryEventNotificationConfigsToTerraform, true)(this._eventNotificationConfigs.internalValue),
      timeouts: cloudiotRegistryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

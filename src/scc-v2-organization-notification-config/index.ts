/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SccV2OrganizationNotificationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * This must be unique within the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#config_id SccV2OrganizationNotificationConfig#config_id}
  */
  readonly configId: string;
  /**
  * The description of the notification config (max of 1024 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#description SccV2OrganizationNotificationConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#id SccV2OrganizationNotificationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * location Id is provided by organization. If not provided, Use global as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#location SccV2OrganizationNotificationConfig#location}
  */
  readonly location?: string;
  /**
  * The organization whose Cloud Security Command Center the Notification
  * Config lives in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#organization SccV2OrganizationNotificationConfig#organization}
  */
  readonly organization: string;
  /**
  * The Pub/Sub topic to send notifications to. Its format is
  * "projects/[project_id]/topics/[topic]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#pubsub_topic SccV2OrganizationNotificationConfig#pubsub_topic}
  */
  readonly pubsubTopic: string;
  /**
  * streaming_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#streaming_config SccV2OrganizationNotificationConfig#streaming_config}
  */
  readonly streamingConfig: SccV2OrganizationNotificationConfigStreamingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#timeouts SccV2OrganizationNotificationConfig#timeouts}
  */
  readonly timeouts?: SccV2OrganizationNotificationConfigTimeouts;
}
export interface SccV2OrganizationNotificationConfigStreamingConfig {
  /**
  * Expression that defines the filter to apply across create/update
  * events of assets or findings as specified by the event type. The
  * expression is a list of zero or more restrictions combined via
  * logical operators AND and OR. Parentheses are supported, and OR
  * has higher precedence than AND.
  * 
  * Restrictions have the form <field> <operator> <value> and may have
  * a - character in front of them to indicate negation. The fields
  * map to those defined in the corresponding resource.
  * 
  * The supported operators are:
  * 
  * * = for all value types.
  * * >, <, >=, <= for integer values.
  * * :, meaning substring matching, for strings.
  * 
  * The supported value types are:
  * 
  * * string literals in quotes.
  * * integer literals without quotes.
  * * boolean literals true and false without quotes.
  * 
  * See
  * [Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
  * for information on how to write a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#filter SccV2OrganizationNotificationConfig#filter}
  */
  readonly filter: string;
}

export function sccV2OrganizationNotificationConfigStreamingConfigToTerraform(struct?: SccV2OrganizationNotificationConfigStreamingConfigOutputReference | SccV2OrganizationNotificationConfigStreamingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function sccV2OrganizationNotificationConfigStreamingConfigToHclTerraform(struct?: SccV2OrganizationNotificationConfigStreamingConfigOutputReference | SccV2OrganizationNotificationConfigStreamingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccV2OrganizationNotificationConfigStreamingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SccV2OrganizationNotificationConfigStreamingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SccV2OrganizationNotificationConfigStreamingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface SccV2OrganizationNotificationConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#create SccV2OrganizationNotificationConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#delete SccV2OrganizationNotificationConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#update SccV2OrganizationNotificationConfig#update}
  */
  readonly update?: string;
}

export function sccV2OrganizationNotificationConfigTimeoutsToTerraform(struct?: SccV2OrganizationNotificationConfigTimeouts | cdktf.IResolvable): any {
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


export function sccV2OrganizationNotificationConfigTimeoutsToHclTerraform(struct?: SccV2OrganizationNotificationConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SccV2OrganizationNotificationConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SccV2OrganizationNotificationConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SccV2OrganizationNotificationConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config google_scc_v2_organization_notification_config}
*/
export class SccV2OrganizationNotificationConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_scc_v2_organization_notification_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SccV2OrganizationNotificationConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SccV2OrganizationNotificationConfig to import
  * @param importFromId The id of the existing SccV2OrganizationNotificationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SccV2OrganizationNotificationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_scc_v2_organization_notification_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/scc_v2_organization_notification_config google_scc_v2_organization_notification_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SccV2OrganizationNotificationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SccV2OrganizationNotificationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_scc_v2_organization_notification_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._pubsubTopic = config.pubsubTopic;
    this._streamingConfig.internalValue = config.streamingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // streaming_config - computed: false, optional: false, required: true
  private _streamingConfig = new SccV2OrganizationNotificationConfigStreamingConfigOutputReference(this, "streaming_config");
  public get streamingConfig() {
    return this._streamingConfig;
  }
  public putStreamingConfig(value: SccV2OrganizationNotificationConfigStreamingConfig) {
    this._streamingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingConfigInput() {
    return this._streamingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SccV2OrganizationNotificationConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SccV2OrganizationNotificationConfigTimeouts) {
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
      config_id: cdktf.stringToTerraform(this._configId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      organization: cdktf.stringToTerraform(this._organization),
      pubsub_topic: cdktf.stringToTerraform(this._pubsubTopic),
      streaming_config: sccV2OrganizationNotificationConfigStreamingConfigToTerraform(this._streamingConfig.internalValue),
      timeouts: sccV2OrganizationNotificationConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.stringToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pubsub_topic: {
        value: cdktf.stringToHclTerraform(this._pubsubTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streaming_config: {
        value: sccV2OrganizationNotificationConfigStreamingConfigToHclTerraform(this._streamingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SccV2OrganizationNotificationConfigStreamingConfigList",
      },
      timeouts: {
        value: sccV2OrganizationNotificationConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SccV2OrganizationNotificationConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

// https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryAnalyticsHubDataExchangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#data_exchange_id BigqueryAnalyticsHubDataExchange#data_exchange_id}
  */
  readonly dataExchangeId: string;
  /**
  * Description of the data exchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#description BigqueryAnalyticsHubDataExchange#description}
  */
  readonly description?: string;
  /**
  * Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#display_name BigqueryAnalyticsHubDataExchange#display_name}
  */
  readonly displayName: string;
  /**
  * Documentation describing the data exchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#documentation BigqueryAnalyticsHubDataExchange#documentation}
  */
  readonly documentation?: string;
  /**
  * Base64 encoded image representing the data exchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#icon BigqueryAnalyticsHubDataExchange#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this data exchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#location BigqueryAnalyticsHubDataExchange#location}
  */
  readonly location: string;
  /**
  * Email or URL of the primary point of contact of the data exchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#primary_contact BigqueryAnalyticsHubDataExchange#primary_contact}
  */
  readonly primaryContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}
  */
  readonly project?: string;
  /**
  * sharing_environment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#sharing_environment_config BigqueryAnalyticsHubDataExchange#sharing_environment_config}
  */
  readonly sharingEnvironmentConfig?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#timeouts BigqueryAnalyticsHubDataExchange#timeouts}
  */
  readonly timeouts?: BigqueryAnalyticsHubDataExchangeTimeouts;
}
export interface BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig {
}

export function bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigToTerraform(struct?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference | BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigToHclTerraform(struct?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference | BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig {
}

export function bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigToTerraform(struct?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference | BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigToHclTerraform(struct?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference | BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig {
  /**
  * dcr_exchange_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#dcr_exchange_config BigqueryAnalyticsHubDataExchange#dcr_exchange_config}
  */
  readonly dcrExchangeConfig?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig;
  /**
  * default_exchange_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#default_exchange_config BigqueryAnalyticsHubDataExchange#default_exchange_config}
  */
  readonly defaultExchangeConfig?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig;
}

export function bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigToTerraform(struct?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference | BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dcr_exchange_config: bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigToTerraform(struct!.dcrExchangeConfig),
    default_exchange_config: bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigToTerraform(struct!.defaultExchangeConfig),
  }
}


export function bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigToHclTerraform(struct?: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference | BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dcr_exchange_config: {
      value: bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigToHclTerraform(struct!.dcrExchangeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigList",
    },
    default_exchange_config: {
      value: bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigToHclTerraform(struct!.defaultExchangeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dcrExchangeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrExchangeConfig = this._dcrExchangeConfig?.internalValue;
    }
    if (this._defaultExchangeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultExchangeConfig = this._defaultExchangeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dcrExchangeConfig.internalValue = undefined;
      this._defaultExchangeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dcrExchangeConfig.internalValue = value.dcrExchangeConfig;
      this._defaultExchangeConfig.internalValue = value.defaultExchangeConfig;
    }
  }

  // dcr_exchange_config - computed: false, optional: true, required: false
  private _dcrExchangeConfig = new BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference(this, "dcr_exchange_config");
  public get dcrExchangeConfig() {
    return this._dcrExchangeConfig;
  }
  public putDcrExchangeConfig(value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig) {
    this._dcrExchangeConfig.internalValue = value;
  }
  public resetDcrExchangeConfig() {
    this._dcrExchangeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrExchangeConfigInput() {
    return this._dcrExchangeConfig.internalValue;
  }

  // default_exchange_config - computed: false, optional: true, required: false
  private _defaultExchangeConfig = new BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference(this, "default_exchange_config");
  public get defaultExchangeConfig() {
    return this._defaultExchangeConfig;
  }
  public putDefaultExchangeConfig(value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig) {
    this._defaultExchangeConfig.internalValue = value;
  }
  public resetDefaultExchangeConfig() {
    this._defaultExchangeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExchangeConfigInput() {
    return this._defaultExchangeConfig.internalValue;
  }
}
export interface BigqueryAnalyticsHubDataExchangeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#create BigqueryAnalyticsHubDataExchange#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#delete BigqueryAnalyticsHubDataExchange#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#update BigqueryAnalyticsHubDataExchange#update}
  */
  readonly update?: string;
}

export function bigqueryAnalyticsHubDataExchangeTimeoutsToTerraform(struct?: BigqueryAnalyticsHubDataExchangeTimeouts | cdktf.IResolvable): any {
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


export function bigqueryAnalyticsHubDataExchangeTimeoutsToHclTerraform(struct?: BigqueryAnalyticsHubDataExchangeTimeouts | cdktf.IResolvable): any {
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

export class BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryAnalyticsHubDataExchangeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BigqueryAnalyticsHubDataExchangeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange google_bigquery_analytics_hub_data_exchange}
*/
export class BigqueryAnalyticsHubDataExchange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_analytics_hub_data_exchange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryAnalyticsHubDataExchange to import
  * @param importFromId The id of the existing BigqueryAnalyticsHubDataExchange that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryAnalyticsHubDataExchange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_analytics_hub_data_exchange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/bigquery_analytics_hub_data_exchange google_bigquery_analytics_hub_data_exchange} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryAnalyticsHubDataExchangeConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryAnalyticsHubDataExchangeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_analytics_hub_data_exchange',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.27.0',
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
    this._dataExchangeId = config.dataExchangeId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentation = config.documentation;
    this._icon = config.icon;
    this._id = config.id;
    this._location = config.location;
    this._primaryContact = config.primaryContact;
    this._project = config.project;
    this._sharingEnvironmentConfig.internalValue = config.sharingEnvironmentConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_exchange_id - computed: false, optional: false, required: true
  private _dataExchangeId?: string; 
  public get dataExchangeId() {
    return this.getStringAttribute('data_exchange_id');
  }
  public set dataExchangeId(value: string) {
    this._dataExchangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExchangeIdInput() {
    return this._dataExchangeId;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation?: string; 
  public get documentation() {
    return this.getStringAttribute('documentation');
  }
  public set documentation(value: string) {
    this._documentation = value;
  }
  public resetDocumentation() {
    this._documentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // listing_count - computed: true, optional: false, required: false
  public get listingCount() {
    return this.getNumberAttribute('listing_count');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
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

  // sharing_environment_config - computed: false, optional: true, required: false
  private _sharingEnvironmentConfig = new BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference(this, "sharing_environment_config");
  public get sharingEnvironmentConfig() {
    return this._sharingEnvironmentConfig;
  }
  public putSharingEnvironmentConfig(value: BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig) {
    this._sharingEnvironmentConfig.internalValue = value;
  }
  public resetSharingEnvironmentConfig() {
    this._sharingEnvironmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingEnvironmentConfigInput() {
    return this._sharingEnvironmentConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryAnalyticsHubDataExchangeTimeouts) {
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
      data_exchange_id: cdktf.stringToTerraform(this._dataExchangeId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      documentation: cdktf.stringToTerraform(this._documentation),
      icon: cdktf.stringToTerraform(this._icon),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      primary_contact: cdktf.stringToTerraform(this._primaryContact),
      project: cdktf.stringToTerraform(this._project),
      sharing_environment_config: bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigToTerraform(this._sharingEnvironmentConfig.internalValue),
      timeouts: bigqueryAnalyticsHubDataExchangeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_exchange_id: {
        value: cdktf.stringToHclTerraform(this._dataExchangeId),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      documentation: {
        value: cdktf.stringToHclTerraform(this._documentation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
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
      primary_contact: {
        value: cdktf.stringToHclTerraform(this._primaryContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing_environment_config: {
        value: bigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigToHclTerraform(this._sharingEnvironmentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigList",
      },
      timeouts: {
        value: bigqueryAnalyticsHubDataExchangeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryAnalyticsHubDataExchangeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

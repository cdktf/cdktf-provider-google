// https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAssetOrganizationFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of the full names of the assets to receive updates. You must specify either or both of
  * assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
  * exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
  * See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#asset_names CloudAssetOrganizationFeed#asset_names}
  */
  readonly assetNames?: string[];
  /**
  * A list of types of the assets to receive updates. You must specify either or both of assetNames
  * and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
  * the feed. For example: "compute.googleapis.com/Disk"
  * See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
  * supported asset types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#asset_types CloudAssetOrganizationFeed#asset_types}
  */
  readonly assetTypes?: string[];
  /**
  * The project whose identity will be used when sending messages to the
  * destination pubsub topic. It also specifies the project for API
  * enablement check, quota, and billing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#billing_project CloudAssetOrganizationFeed#billing_project}
  */
  readonly billingProject: string;
  /**
  * Asset content type. If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "OS_INVENTORY", "ACCESS_POLICY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#content_type CloudAssetOrganizationFeed#content_type}
  */
  readonly contentType?: string;
  /**
  * This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#feed_id CloudAssetOrganizationFeed#feed_id}
  */
  readonly feedId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization this feed should be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#org_id CloudAssetOrganizationFeed#org_id}
  */
  readonly orgId: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#condition CloudAssetOrganizationFeed#condition}
  */
  readonly condition?: CloudAssetOrganizationFeedCondition;
  /**
  * feed_output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#feed_output_config CloudAssetOrganizationFeed#feed_output_config}
  */
  readonly feedOutputConfig: CloudAssetOrganizationFeedFeedOutputConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#timeouts CloudAssetOrganizationFeed#timeouts}
  */
  readonly timeouts?: CloudAssetOrganizationFeedTimeouts;
}
export interface CloudAssetOrganizationFeedCondition {
  /**
  * Description of the expression. This is a longer text which describes the expression,
  * e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#description CloudAssetOrganizationFeed#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#expression CloudAssetOrganizationFeed#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file
  * name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#location CloudAssetOrganizationFeed#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  * This can be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#title CloudAssetOrganizationFeed#title}
  */
  readonly title?: string;
}

export function cloudAssetOrganizationFeedConditionToTerraform(struct?: CloudAssetOrganizationFeedConditionOutputReference | CloudAssetOrganizationFeedCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function cloudAssetOrganizationFeedConditionToHclTerraform(struct?: CloudAssetOrganizationFeedConditionOutputReference | CloudAssetOrganizationFeedCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAssetOrganizationFeedConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAssetOrganizationFeedCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAssetOrganizationFeedCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
    }
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination {
  /**
  * Destination on Cloud Pubsub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#topic CloudAssetOrganizationFeed#topic}
  */
  readonly topic: string;
}

export function cloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationToTerraform(struct?: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference | CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function cloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationToHclTerraform(struct?: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference | CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topic = value.topic;
    }
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface CloudAssetOrganizationFeedFeedOutputConfig {
  /**
  * pubsub_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#pubsub_destination CloudAssetOrganizationFeed#pubsub_destination}
  */
  readonly pubsubDestination: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination;
}

export function cloudAssetOrganizationFeedFeedOutputConfigToTerraform(struct?: CloudAssetOrganizationFeedFeedOutputConfigOutputReference | CloudAssetOrganizationFeedFeedOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_destination: cloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationToTerraform(struct!.pubsubDestination),
  }
}


export function cloudAssetOrganizationFeedFeedOutputConfigToHclTerraform(struct?: CloudAssetOrganizationFeedFeedOutputConfigOutputReference | CloudAssetOrganizationFeedFeedOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pubsub_destination: {
      value: cloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationToHclTerraform(struct!.pubsubDestination),
      isBlock: true,
      type: "list",
      storageClassType: "CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAssetOrganizationFeedFeedOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAssetOrganizationFeedFeedOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubDestination = this._pubsubDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAssetOrganizationFeedFeedOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsubDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsubDestination.internalValue = value.pubsubDestination;
    }
  }

  // pubsub_destination - computed: false, optional: false, required: true
  private _pubsubDestination = new CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference(this, "pubsub_destination");
  public get pubsubDestination() {
    return this._pubsubDestination;
  }
  public putPubsubDestination(value: CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination) {
    this._pubsubDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubDestinationInput() {
    return this._pubsubDestination.internalValue;
  }
}
export interface CloudAssetOrganizationFeedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}
  */
  readonly update?: string;
}

export function cloudAssetOrganizationFeedTimeoutsToTerraform(struct?: CloudAssetOrganizationFeedTimeouts | cdktf.IResolvable): any {
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


export function cloudAssetOrganizationFeedTimeoutsToHclTerraform(struct?: CloudAssetOrganizationFeedTimeouts | cdktf.IResolvable): any {
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

export class CloudAssetOrganizationFeedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAssetOrganizationFeedTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudAssetOrganizationFeedTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed google_cloud_asset_organization_feed}
*/
export class CloudAssetOrganizationFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_asset_organization_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAssetOrganizationFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAssetOrganizationFeed to import
  * @param importFromId The id of the existing CloudAssetOrganizationFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAssetOrganizationFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_asset_organization_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/cloud_asset_organization_feed google_cloud_asset_organization_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAssetOrganizationFeedConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAssetOrganizationFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_asset_organization_feed',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.20.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetNames = config.assetNames;
    this._assetTypes = config.assetTypes;
    this._billingProject = config.billingProject;
    this._contentType = config.contentType;
    this._feedId = config.feedId;
    this._id = config.id;
    this._orgId = config.orgId;
    this._condition.internalValue = config.condition;
    this._feedOutputConfig.internalValue = config.feedOutputConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_names - computed: false, optional: true, required: false
  private _assetNames?: string[]; 
  public get assetNames() {
    return this.getListAttribute('asset_names');
  }
  public set assetNames(value: string[]) {
    this._assetNames = value;
  }
  public resetAssetNames() {
    this._assetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNamesInput() {
    return this._assetNames;
  }

  // asset_types - computed: false, optional: true, required: false
  private _assetTypes?: string[]; 
  public get assetTypes() {
    return this.getListAttribute('asset_types');
  }
  public set assetTypes(value: string[]) {
    this._assetTypes = value;
  }
  public resetAssetTypes() {
    this._assetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypesInput() {
    return this._assetTypes;
  }

  // billing_project - computed: false, optional: false, required: true
  private _billingProject?: string; 
  public get billingProject() {
    return this.getStringAttribute('billing_project');
  }
  public set billingProject(value: string) {
    this._billingProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectInput() {
    return this._billingProject;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // feed_id - computed: false, optional: false, required: true
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new CloudAssetOrganizationFeedConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: CloudAssetOrganizationFeedCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // feed_output_config - computed: false, optional: false, required: true
  private _feedOutputConfig = new CloudAssetOrganizationFeedFeedOutputConfigOutputReference(this, "feed_output_config");
  public get feedOutputConfig() {
    return this._feedOutputConfig;
  }
  public putFeedOutputConfig(value: CloudAssetOrganizationFeedFeedOutputConfig) {
    this._feedOutputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedOutputConfigInput() {
    return this._feedOutputConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudAssetOrganizationFeedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudAssetOrganizationFeedTimeouts) {
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
      asset_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetNames),
      asset_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetTypes),
      billing_project: cdktf.stringToTerraform(this._billingProject),
      content_type: cdktf.stringToTerraform(this._contentType),
      feed_id: cdktf.stringToTerraform(this._feedId),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      condition: cloudAssetOrganizationFeedConditionToTerraform(this._condition.internalValue),
      feed_output_config: cloudAssetOrganizationFeedFeedOutputConfigToTerraform(this._feedOutputConfig.internalValue),
      timeouts: cloudAssetOrganizationFeedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      asset_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      billing_project: {
        value: cdktf.stringToHclTerraform(this._billingProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feed_id: {
        value: cdktf.stringToHclTerraform(this._feedId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cloudAssetOrganizationFeedConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAssetOrganizationFeedConditionList",
      },
      feed_output_config: {
        value: cloudAssetOrganizationFeedFeedOutputConfigToHclTerraform(this._feedOutputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAssetOrganizationFeedFeedOutputConfigList",
      },
      timeouts: {
        value: cloudAssetOrganizationFeedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAssetOrganizationFeedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

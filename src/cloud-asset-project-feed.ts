// https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAssetProjectFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of the full names of the assets to receive updates. You must specify either or both of 
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#asset_names CloudAssetProjectFeed#asset_names}
  */
  readonly assetNames?: string[];
  /**
  * A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#asset_types CloudAssetProjectFeed#asset_types}
  */
  readonly assetTypes?: string[];
  /**
  * The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API 
enablement check, quota, and billing. If not specified, the resource's
project will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#billing_project CloudAssetProjectFeed#billing_project}
  */
  readonly billingProject?: string;
  /**
  * Asset content type. If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "ACCESS_POLICY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#content_type CloudAssetProjectFeed#content_type}
  */
  readonly contentType?: string;
  /**
  * This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#feed_id CloudAssetProjectFeed#feed_id}
  */
  readonly feedId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#id CloudAssetProjectFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#project CloudAssetProjectFeed#project}
  */
  readonly project?: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#condition CloudAssetProjectFeed#condition}
  */
  readonly condition?: CloudAssetProjectFeedCondition;
  /**
  * feed_output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#feed_output_config CloudAssetProjectFeed#feed_output_config}
  */
  readonly feedOutputConfig: CloudAssetProjectFeedFeedOutputConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#timeouts CloudAssetProjectFeed#timeouts}
  */
  readonly timeouts?: CloudAssetProjectFeedTimeouts;
}
export interface CloudAssetProjectFeedCondition {
  /**
  * Description of the expression. This is a longer text which describes the expression,
e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#description CloudAssetProjectFeed#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#expression CloudAssetProjectFeed#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file 
name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#location CloudAssetProjectFeed#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#title CloudAssetProjectFeed#title}
  */
  readonly title?: string;
}

export function cloudAssetProjectFeedConditionToTerraform(struct?: CloudAssetProjectFeedConditionOutputReference | CloudAssetProjectFeedCondition): any {
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

export class CloudAssetProjectFeedConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAssetProjectFeedCondition | undefined {
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

  public set internalValue(value: CloudAssetProjectFeedCondition | undefined) {
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
export interface CloudAssetProjectFeedFeedOutputConfigPubsubDestination {
  /**
  * Destination on Cloud Pubsub topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#topic CloudAssetProjectFeed#topic}
  */
  readonly topic: string;
}

export function cloudAssetProjectFeedFeedOutputConfigPubsubDestinationToTerraform(struct?: CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference | CloudAssetProjectFeedFeedOutputConfigPubsubDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAssetProjectFeedFeedOutputConfigPubsubDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAssetProjectFeedFeedOutputConfigPubsubDestination | undefined) {
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
export interface CloudAssetProjectFeedFeedOutputConfig {
  /**
  * pubsub_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#pubsub_destination CloudAssetProjectFeed#pubsub_destination}
  */
  readonly pubsubDestination: CloudAssetProjectFeedFeedOutputConfigPubsubDestination;
}

export function cloudAssetProjectFeedFeedOutputConfigToTerraform(struct?: CloudAssetProjectFeedFeedOutputConfigOutputReference | CloudAssetProjectFeedFeedOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_destination: cloudAssetProjectFeedFeedOutputConfigPubsubDestinationToTerraform(struct!.pubsubDestination),
  }
}

export class CloudAssetProjectFeedFeedOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAssetProjectFeedFeedOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubDestination = this._pubsubDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAssetProjectFeedFeedOutputConfig | undefined) {
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
  private _pubsubDestination = new CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference(this, "pubsub_destination");
  public get pubsubDestination() {
    return this._pubsubDestination;
  }
  public putPubsubDestination(value: CloudAssetProjectFeedFeedOutputConfigPubsubDestination) {
    this._pubsubDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubDestinationInput() {
    return this._pubsubDestination.internalValue;
  }
}
export interface CloudAssetProjectFeedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#create CloudAssetProjectFeed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#delete CloudAssetProjectFeed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#update CloudAssetProjectFeed#update}
  */
  readonly update?: string;
}

export function cloudAssetProjectFeedTimeoutsToTerraform(struct?: CloudAssetProjectFeedTimeoutsOutputReference | CloudAssetProjectFeedTimeouts | cdktf.IResolvable): any {
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

export class CloudAssetProjectFeedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAssetProjectFeedTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudAssetProjectFeedTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed google_cloud_asset_project_feed}
*/
export class CloudAssetProjectFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_asset_project_feed";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed google_cloud_asset_project_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAssetProjectFeedConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAssetProjectFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_asset_project_feed',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._assetNames = config.assetNames;
    this._assetTypes = config.assetTypes;
    this._billingProject = config.billingProject;
    this._contentType = config.contentType;
    this._feedId = config.feedId;
    this._id = config.id;
    this._project = config.project;
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

  // billing_project - computed: false, optional: true, required: false
  private _billingProject?: string; 
  public get billingProject() {
    return this.getStringAttribute('billing_project');
  }
  public set billingProject(value: string) {
    this._billingProject = value;
  }
  public resetBillingProject() {
    this._billingProject = undefined;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new CloudAssetProjectFeedConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: CloudAssetProjectFeedCondition) {
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
  private _feedOutputConfig = new CloudAssetProjectFeedFeedOutputConfigOutputReference(this, "feed_output_config");
  public get feedOutputConfig() {
    return this._feedOutputConfig;
  }
  public putFeedOutputConfig(value: CloudAssetProjectFeedFeedOutputConfig) {
    this._feedOutputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedOutputConfigInput() {
    return this._feedOutputConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudAssetProjectFeedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudAssetProjectFeedTimeouts) {
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
      project: cdktf.stringToTerraform(this._project),
      condition: cloudAssetProjectFeedConditionToTerraform(this._condition.internalValue),
      feed_output_config: cloudAssetProjectFeedFeedOutputConfigToTerraform(this._feedOutputConfig.internalValue),
      timeouts: cloudAssetProjectFeedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

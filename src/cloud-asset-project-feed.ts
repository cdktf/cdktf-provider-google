// https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAssetProjectFeedConfig extends cdktf.TerraformMetaArguments {
  /** A list of the full names of the assets to receive updates. You must specify either or both of 
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info. */
  readonly assetNames?: string[];
  /** A list of types of the assets to receive updates. You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types. */
  readonly assetTypes?: string[];
  /** The project whose identity will be used when sending messages to the
destination pubsub topic. It also specifies the project for API 
enablement check, quota, and billing. If not specified, the resource's
project will be used. */
  readonly billingProject?: string;
  /** Asset content type. If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "ACCESS_POLICY"] */
  readonly contentType?: string;
  /** This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. */
  readonly feedId: string;
  readonly project?: string;
  /** condition block */
  readonly condition?: CloudAssetProjectFeedCondition[];
  /** feed_output_config block */
  readonly feedOutputConfig: CloudAssetProjectFeedFeedOutputConfig[];
  /** timeouts block */
  readonly timeouts?: CloudAssetProjectFeedTimeouts;
}
export interface CloudAssetProjectFeedCondition {
  /** Description of the expression. This is a longer text which describes the expression,
e.g. when hovered over it in a UI. */
  readonly description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  readonly expression: string;
  /** String indicating the location of the expression for error reporting, e.g. a file 
name and a position in the file. */
  readonly location?: string;
  /** Title for the expression, i.e. a short string describing its purpose.
This can be used e.g. in UIs which allow to enter the expression. */
  readonly title?: string;
}

function cloudAssetProjectFeedConditionToTerraform(struct?: CloudAssetProjectFeedCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export interface CloudAssetProjectFeedFeedOutputConfigPubsubDestination {
  /** Destination on Cloud Pubsub topic. */
  readonly topic: string;
}

function cloudAssetProjectFeedFeedOutputConfigPubsubDestinationToTerraform(struct?: CloudAssetProjectFeedFeedOutputConfigPubsubDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface CloudAssetProjectFeedFeedOutputConfig {
  /** pubsub_destination block */
  readonly pubsubDestination: CloudAssetProjectFeedFeedOutputConfigPubsubDestination[];
}

function cloudAssetProjectFeedFeedOutputConfigToTerraform(struct?: CloudAssetProjectFeedFeedOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pubsub_destination: cdktf.listMapper(cloudAssetProjectFeedFeedOutputConfigPubsubDestinationToTerraform)(struct!.pubsubDestination),
  }
}

export interface CloudAssetProjectFeedTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudAssetProjectFeedTimeoutsToTerraform(struct?: CloudAssetProjectFeedTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudAssetProjectFeed extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudAssetProjectFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_asset_project_feed',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assetNames = config.assetNames;
    this._assetTypes = config.assetTypes;
    this._billingProject = config.billingProject;
    this._contentType = config.contentType;
    this._feedId = config.feedId;
    this._project = config.project;
    this._condition = config.condition;
    this._feedOutputConfig = config.feedOutputConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_names - computed: false, optional: true, required: false
  private _assetNames?: string[];
  public get assetNames() {
    return this.getListAttribute('asset_names');
  }
  public set assetNames(value: string[] ) {
    this._assetNames = value;
  }
  public resetAssetNames() {
    this._assetNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNamesInput() {
    return this._assetNames
  }

  // asset_types - computed: false, optional: true, required: false
  private _assetTypes?: string[];
  public get assetTypes() {
    return this.getListAttribute('asset_types');
  }
  public set assetTypes(value: string[] ) {
    this._assetTypes = value;
  }
  public resetAssetTypes() {
    this._assetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypesInput() {
    return this._assetTypes
  }

  // billing_project - computed: false, optional: true, required: false
  private _billingProject?: string;
  public get billingProject() {
    return this.getStringAttribute('billing_project');
  }
  public set billingProject(value: string ) {
    this._billingProject = value;
  }
  public resetBillingProject() {
    this._billingProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectInput() {
    return this._billingProject
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string ) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // feed_id - computed: false, optional: false, required: true
  private _feedId: string;
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._project
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: CloudAssetProjectFeedCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: CloudAssetProjectFeedCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // feed_output_config - computed: false, optional: false, required: true
  private _feedOutputConfig: CloudAssetProjectFeedFeedOutputConfig[];
  public get feedOutputConfig() {
    return this.interpolationForAttribute('feed_output_config') as any;
  }
  public set feedOutputConfig(value: CloudAssetProjectFeedFeedOutputConfig[]) {
    this._feedOutputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedOutputConfigInput() {
    return this._feedOutputConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudAssetProjectFeedTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudAssetProjectFeedTimeouts ) {
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
      asset_names: cdktf.listMapper(cdktf.stringToTerraform)(this._assetNames),
      asset_types: cdktf.listMapper(cdktf.stringToTerraform)(this._assetTypes),
      billing_project: cdktf.stringToTerraform(this._billingProject),
      content_type: cdktf.stringToTerraform(this._contentType),
      feed_id: cdktf.stringToTerraform(this._feedId),
      project: cdktf.stringToTerraform(this._project),
      condition: cdktf.listMapper(cloudAssetProjectFeedConditionToTerraform)(this._condition),
      feed_output_config: cdktf.listMapper(cloudAssetProjectFeedFeedOutputConfigToTerraform)(this._feedOutputConfig),
      timeouts: cloudAssetProjectFeedTimeoutsToTerraform(this._timeouts),
    };
  }
}

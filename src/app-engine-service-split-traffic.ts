// https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineServiceSplitTrafficConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true traffic will be migrated to this version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}
  */
  readonly migrateTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#project AppEngineServiceSplitTraffic#project}
  */
  readonly project?: string;
  /**
  * The name of the service these settings apply to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#service AppEngineServiceSplitTraffic#service}
  */
  readonly service: string;
  /**
  * split block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#split AppEngineServiceSplitTraffic#split}
  */
  readonly split: AppEngineServiceSplitTrafficSplit;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#timeouts AppEngineServiceSplitTraffic#timeouts}
  */
  readonly timeouts?: AppEngineServiceSplitTrafficTimeouts;
}
export interface AppEngineServiceSplitTrafficSplit {
  /**
  * Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#allocations AppEngineServiceSplitTraffic#allocations}
  */
  readonly allocations: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#shard_by AppEngineServiceSplitTraffic#shard_by}
  */
  readonly shardBy?: string;
}

function appEngineServiceSplitTrafficSplitToTerraform(struct?: AppEngineServiceSplitTrafficSplitOutputReference | AppEngineServiceSplitTrafficSplit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.allocations),
    shard_by: cdktf.stringToTerraform(struct!.shardBy),
  }
}

export class AppEngineServiceSplitTrafficSplitOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allocations - computed: false, optional: false, required: true
  private _allocations?: { [key: string]: string } | cdktf.IResolvable; 
  public get allocations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allocations') as any;
  }
  public set allocations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._allocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationsInput() {
    return this._allocations
  }

  // shard_by - computed: false, optional: true, required: false
  private _shardBy?: string | undefined; 
  public get shardBy() {
    return this.getStringAttribute('shard_by');
  }
  public set shardBy(value: string | undefined) {
    this._shardBy = value;
  }
  public resetShardBy() {
    this._shardBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardByInput() {
    return this._shardBy
  }
}
export interface AppEngineServiceSplitTrafficTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#create AppEngineServiceSplitTraffic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#delete AppEngineServiceSplitTraffic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html#update AppEngineServiceSplitTraffic#update}
  */
  readonly update?: string;
}

function appEngineServiceSplitTrafficTimeoutsToTerraform(struct?: AppEngineServiceSplitTrafficTimeoutsOutputReference | AppEngineServiceSplitTrafficTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class AppEngineServiceSplitTrafficTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html google_app_engine_service_split_traffic}
*/
export class AppEngineServiceSplitTraffic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_app_engine_service_split_traffic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html google_app_engine_service_split_traffic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineServiceSplitTrafficConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineServiceSplitTrafficConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_service_split_traffic',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._migrateTraffic = config.migrateTraffic;
    this._project = config.project;
    this._service = config.service;
    this._split = config.split;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // migrate_traffic - computed: false, optional: true, required: false
  private _migrateTraffic?: boolean | cdktf.IResolvable | undefined; 
  public get migrateTraffic() {
    return this.getBooleanAttribute('migrate_traffic') as any;
  }
  public set migrateTraffic(value: boolean | cdktf.IResolvable | undefined) {
    this._migrateTraffic = value;
  }
  public resetMigrateTraffic() {
    this._migrateTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateTrafficInput() {
    return this._migrateTraffic
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // split - computed: false, optional: false, required: true
  private _split?: AppEngineServiceSplitTrafficSplit; 
  private __splitOutput = new AppEngineServiceSplitTrafficSplitOutputReference(this as any, "split", true);
  public get split() {
    return this.__splitOutput;
  }
  public putSplit(value: AppEngineServiceSplitTrafficSplit) {
    this._split = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineServiceSplitTrafficTimeouts | undefined; 
  private __timeoutsOutput = new AppEngineServiceSplitTrafficTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AppEngineServiceSplitTrafficTimeouts | undefined) {
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
      migrate_traffic: cdktf.booleanToTerraform(this._migrateTraffic),
      project: cdktf.stringToTerraform(this._project),
      service: cdktf.stringToTerraform(this._service),
      split: appEngineServiceSplitTrafficSplitToTerraform(this._split),
      timeouts: appEngineServiceSplitTrafficTimeoutsToTerraform(this._timeouts),
    };
  }
}

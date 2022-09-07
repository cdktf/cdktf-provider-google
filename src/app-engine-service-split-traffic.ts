// https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineServiceSplitTrafficConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to true traffic will be migrated to this version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}
  */
  readonly migrateTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}
  */
  readonly project?: string;
  /**
  * The name of the service these settings apply to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}
  */
  readonly service: string;
  /**
  * split block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}
  */
  readonly split: AppEngineServiceSplitTrafficSplit;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}
  */
  readonly timeouts?: AppEngineServiceSplitTrafficTimeouts;
}
export interface AppEngineServiceSplitTrafficSplit {
  /**
  * Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#allocations AppEngineServiceSplitTraffic#allocations}
  */
  readonly allocations: { [key: string]: string };
  /**
  * Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#shard_by AppEngineServiceSplitTraffic#shard_by}
  */
  readonly shardBy?: string;
}

export function appEngineServiceSplitTrafficSplitToTerraform(struct?: AppEngineServiceSplitTrafficSplitOutputReference | AppEngineServiceSplitTrafficSplit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allocations),
    shard_by: cdktf.stringToTerraform(struct!.shardBy),
  }
}

export class AppEngineServiceSplitTrafficSplitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineServiceSplitTrafficSplit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocations = this._allocations;
    }
    if (this._shardBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardBy = this._shardBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEngineServiceSplitTrafficSplit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocations = undefined;
      this._shardBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocations = value.allocations;
      this._shardBy = value.shardBy;
    }
  }

  // allocations - computed: false, optional: false, required: true
  private _allocations?: { [key: string]: string }; 
  public get allocations() {
    return this.getStringMapAttribute('allocations');
  }
  public set allocations(value: { [key: string]: string }) {
    this._allocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationsInput() {
    return this._allocations;
  }

  // shard_by - computed: false, optional: true, required: false
  private _shardBy?: string; 
  public get shardBy() {
    return this.getStringAttribute('shard_by');
  }
  public set shardBy(value: string) {
    this._shardBy = value;
  }
  public resetShardBy() {
    this._shardBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardByInput() {
    return this._shardBy;
  }
}
export interface AppEngineServiceSplitTrafficTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}
  */
  readonly update?: string;
}

export function appEngineServiceSplitTrafficTimeoutsToTerraform(struct?: AppEngineServiceSplitTrafficTimeoutsOutputReference | AppEngineServiceSplitTrafficTimeouts | cdktf.IResolvable): any {
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

export class AppEngineServiceSplitTrafficTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEngineServiceSplitTrafficTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AppEngineServiceSplitTrafficTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic google_app_engine_service_split_traffic}
*/
export class AppEngineServiceSplitTraffic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_service_split_traffic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic google_app_engine_service_split_traffic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineServiceSplitTrafficConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineServiceSplitTrafficConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_service_split_traffic',
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
    this._id = config.id;
    this._migrateTraffic = config.migrateTraffic;
    this._project = config.project;
    this._service = config.service;
    this._split.internalValue = config.split;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // migrate_traffic - computed: false, optional: true, required: false
  private _migrateTraffic?: boolean | cdktf.IResolvable; 
  public get migrateTraffic() {
    return this.getBooleanAttribute('migrate_traffic');
  }
  public set migrateTraffic(value: boolean | cdktf.IResolvable) {
    this._migrateTraffic = value;
  }
  public resetMigrateTraffic() {
    this._migrateTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateTrafficInput() {
    return this._migrateTraffic;
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
    return this._service;
  }

  // split - computed: false, optional: false, required: true
  private _split = new AppEngineServiceSplitTrafficSplitOutputReference(this, "split");
  public get split() {
    return this._split;
  }
  public putSplit(value: AppEngineServiceSplitTrafficSplit) {
    this._split.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppEngineServiceSplitTrafficTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppEngineServiceSplitTrafficTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      migrate_traffic: cdktf.booleanToTerraform(this._migrateTraffic),
      project: cdktf.stringToTerraform(this._project),
      service: cdktf.stringToTerraform(this._service),
      split: appEngineServiceSplitTrafficSplitToTerraform(this._split.internalValue),
      timeouts: appEngineServiceSplitTrafficTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

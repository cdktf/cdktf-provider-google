// https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineServiceSplitTrafficConfig extends cdktf.TerraformMetaArguments {
  /** If set to true traffic will be migrated to this version. */
  readonly migrateTraffic?: boolean;
  readonly project?: string;
  /** The name of the service these settings apply to. */
  readonly service: string;
  /** split block */
  readonly split: AppEngineServiceSplitTrafficSplit[];
  /** timeouts block */
  readonly timeouts?: AppEngineServiceSplitTrafficTimeouts;
}
export interface AppEngineServiceSplitTrafficSplit {
  /** Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. */
  readonly allocations: { [key: string]: string };
  /** Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"] */
  readonly shardBy?: string;
}

function appEngineServiceSplitTrafficSplitToTerraform(struct?: AppEngineServiceSplitTrafficSplit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allocations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.allocations),
    shard_by: cdktf.stringToTerraform(struct!.shardBy),
  }
}

export interface AppEngineServiceSplitTrafficTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function appEngineServiceSplitTrafficTimeoutsToTerraform(struct?: AppEngineServiceSplitTrafficTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AppEngineServiceSplitTraffic extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _migrateTraffic?: boolean;
  public get migrateTraffic() {
    return this.getBooleanAttribute('migrate_traffic');
  }
  public set migrateTraffic(value: boolean ) {
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

  // service - computed: false, optional: false, required: true
  private _service: string;
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
  private _split: AppEngineServiceSplitTrafficSplit[];
  public get split() {
    return this.interpolationForAttribute('split') as any;
  }
  public set split(value: AppEngineServiceSplitTrafficSplit[]) {
    this._split = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineServiceSplitTrafficTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppEngineServiceSplitTrafficTimeouts ) {
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
      split: cdktf.listMapper(appEngineServiceSplitTrafficSplitToTerraform)(this._split),
      timeouts: appEngineServiceSplitTrafficTimeoutsToTerraform(this._timeouts),
    };
  }
}

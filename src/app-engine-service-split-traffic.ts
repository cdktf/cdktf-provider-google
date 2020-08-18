// https://www.terraform.io/docs/providers/google/r/app_engine_service_split_traffic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppEngineServiceSplitTrafficConfig extends TerraformMetaArguments {
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
export interface AppEngineServiceSplitTrafficTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AppEngineServiceSplitTraffic extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // migrate_traffic - computed: false, optional: true, required: false
  private _migrateTraffic?: boolean;
  public get migrateTraffic() {
    return this._migrateTraffic;
  }
  public set migrateTraffic(value: boolean | undefined) {
    this._migrateTraffic = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // split - computed: false, optional: false, required: true
  private _split: AppEngineServiceSplitTrafficSplit[];
  public get split() {
    return this._split;
  }
  public set split(value: AppEngineServiceSplitTrafficSplit[]) {
    this._split = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineServiceSplitTrafficTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppEngineServiceSplitTrafficTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      migrate_traffic: this._migrateTraffic,
      project: this._project,
      service: this._service,
      split: this._split,
      timeouts: this._timeouts,
    };
  }
}

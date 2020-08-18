// https://www.terraform.io/docs/providers/google/r/data_google_redis_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataGoogleRedisInstanceConfig extends TerraformMetaArguments {
  /** The ID of the instance or a fully qualified identifier for the instance. */
  readonly name: string;
  readonly project?: string;
  /** The name of the Redis region of the instance. */
  readonly region?: string;
}

// Resource

export class DataGoogleRedisInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleRedisInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_redis_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_location_id - computed: true, optional: false, required: true
  public get alternativeLocationId() {
    return this.getStringAttribute('alternative_location_id');
  }

  // authorized_network - computed: true, optional: false, required: true
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }

  // connect_mode - computed: true, optional: false, required: true
  public get connectMode() {
    return this.getStringAttribute('connect_mode');
  }

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_location_id - computed: true, optional: false, required: true
  public get currentLocationId() {
    return this.getStringAttribute('current_location_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: true, optional: false, required: true
  public labels(key: string): string {
    return new StringMap(this, 'labels').lookup(key);
  }

  // location_id - computed: true, optional: false, required: true
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // memory_size_gb - computed: true, optional: false, required: true
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // persistence_iam_identity - computed: true, optional: false, required: true
  public get persistenceIamIdentity() {
    return this.getStringAttribute('persistence_iam_identity');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // redis_configs - computed: true, optional: false, required: true
  public redisConfigs(key: string): string {
    return new StringMap(this, 'redis_configs').lookup(key);
  }

  // redis_version - computed: true, optional: false, required: true
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // reserved_ip_range - computed: true, optional: false, required: true
  public get reservedIpRange() {
    return this.getStringAttribute('reserved_ip_range');
  }

  // tier - computed: true, optional: false, required: true
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      region: this._region,
    };
  }
}

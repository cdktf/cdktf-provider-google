// https://www.terraform.io/docs/providers/google/d/redis_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleRedisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the instance or a fully qualified identifier for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/redis_instance#name DataGoogleRedisInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/redis_instance#project DataGoogleRedisInstance#project}
  */
  readonly project?: string;
  /**
  * The name of the Redis region of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/redis_instance#region DataGoogleRedisInstance#region}
  */
  readonly region?: string;
}
export class DataGoogleRedisInstanceServerCaCerts extends cdktf.ComplexComputedList {

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/redis_instance google_redis_instance}
*/
export class DataGoogleRedisInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_redis_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/redis_instance google_redis_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleRedisInstanceConfig
  */
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

  // alternative_location_id - computed: true, optional: false, required: false
  public get alternativeLocationId() {
    return this.getStringAttribute('alternative_location_id');
  }

  // auth_enabled - computed: true, optional: false, required: false
  public get authEnabled() {
    return this.getBooleanAttribute('auth_enabled') as any;
  }

  // auth_string - computed: true, optional: false, required: false
  public get authString() {
    return this.getStringAttribute('auth_string');
  }

  // authorized_network - computed: true, optional: false, required: false
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }

  // connect_mode - computed: true, optional: false, required: false
  public get connectMode() {
    return this.getStringAttribute('connect_mode');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_location_id - computed: true, optional: false, required: false
  public get currentLocationId() {
    return this.getStringAttribute('current_location_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public labels(key: string): string {
    return new cdktf.StringMap(this, 'labels').lookup(key);
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // memory_size_gb - computed: true, optional: false, required: false
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // persistence_iam_identity - computed: true, optional: false, required: false
  public get persistenceIamIdentity() {
    return this.getStringAttribute('persistence_iam_identity');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project - computed: false, optional: true, required: false
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

  // redis_configs - computed: true, optional: false, required: false
  public redisConfigs(key: string): string {
    return new cdktf.StringMap(this, 'redis_configs').lookup(key);
  }

  // redis_version - computed: true, optional: false, required: false
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserved_ip_range - computed: true, optional: false, required: false
  public get reservedIpRange() {
    return this.getStringAttribute('reserved_ip_range');
  }

  // server_ca_certs - computed: true, optional: false, required: false
  public serverCaCerts(index: string) {
    return new DataGoogleRedisInstanceServerCaCerts(this, 'server_ca_certs', index);
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // transit_encryption_mode - computed: true, optional: false, required: false
  public get transitEncryptionMode() {
    return this.getStringAttribute('transit_encryption_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}

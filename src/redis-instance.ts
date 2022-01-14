// https://www.terraform.io/docs/providers/google/r/redis_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only applicable to STANDARD_HA tier which protects the instance
against zonal failures by provisioning it across two zones.
If provided, it must be a different zone from the one provided in
[locationId].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#alternative_location_id RedisInstance#alternative_location_id}
  */
  readonly alternativeLocationId?: string;
  /**
  * Optional. Indicates whether OSS Redis AUTH is enabled for the
instance. If set to "true" AUTH is enabled on the instance.
Default value is "false" meaning AUTH is disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#auth_enabled RedisInstance#auth_enabled}
  */
  readonly authEnabled?: boolean | cdktf.IResolvable;
  /**
  * The full name of the Google Compute Engine network to which the
instance is connected. If left unspecified, the default network
will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#authorized_network RedisInstance#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#connect_mode RedisInstance#connect_mode}
  */
  readonly connectMode?: string;
  /**
  * An arbitrary and optional user-provided name for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#display_name RedisInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#labels RedisInstance#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The zone where the instance will be provisioned. If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#location_id RedisInstance#location_id}
  */
  readonly locationId?: string;
  /**
  * Redis memory size in GiB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#memory_size_gb RedisInstance#memory_size_gb}
  */
  readonly memorySizeGb: number;
  /**
  * The ID of the instance or a fully qualified identifier for the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#name RedisInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#project RedisInstance#project}
  */
  readonly project?: string;
  /**
  * Redis configuration parameters, according to http://redis.io/topics/config.
Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#redis_configs RedisInstance#redis_configs}
  */
  readonly redisConfigs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The version of Redis software. If not provided, latest supported
version will be used. Please check the API documentation linked 
at the top for the latest valid values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#redis_version RedisInstance#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * The name of the Redis region of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#region RedisInstance#region}
  */
  readonly region?: string;
  /**
  * The CIDR range of internal addresses that are reserved for this
instance. If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#reserved_ip_range RedisInstance#reserved_ip_range}
  */
  readonly reservedIpRange?: string;
  /**
  * The service tier of the instance. Must be one of these values:

- BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#tier RedisInstance#tier}
  */
  readonly tier?: string;
  /**
  * The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.

- SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentcation Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#transit_encryption_mode RedisInstance#transit_encryption_mode}
  */
  readonly transitEncryptionMode?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#timeouts RedisInstance#timeouts}
  */
  readonly timeouts?: RedisInstanceTimeouts;
}
export class RedisInstanceServerCaCerts extends cdktf.ComplexComputedList {

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
export interface RedisInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#create RedisInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#delete RedisInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/redis_instance#update RedisInstance#update}
  */
  readonly update?: string;
}

export function redisInstanceTimeoutsToTerraform(struct?: RedisInstanceTimeoutsOutputReference | RedisInstanceTimeouts): any {
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

export class RedisInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): RedisInstanceTimeouts | undefined {
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

  public set internalValue(value: RedisInstanceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/redis_instance google_redis_instance}
*/
export class RedisInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_redis_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/redis_instance google_redis_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RedisInstanceConfig) {
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
    this._alternativeLocationId = config.alternativeLocationId;
    this._authEnabled = config.authEnabled;
    this._authorizedNetwork = config.authorizedNetwork;
    this._connectMode = config.connectMode;
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._locationId = config.locationId;
    this._memorySizeGb = config.memorySizeGb;
    this._name = config.name;
    this._project = config.project;
    this._redisConfigs = config.redisConfigs;
    this._redisVersion = config.redisVersion;
    this._region = config.region;
    this._reservedIpRange = config.reservedIpRange;
    this._tier = config.tier;
    this._transitEncryptionMode = config.transitEncryptionMode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_location_id - computed: true, optional: true, required: false
  private _alternativeLocationId?: string; 
  public get alternativeLocationId() {
    return this.getStringAttribute('alternative_location_id');
  }
  public set alternativeLocationId(value: string) {
    this._alternativeLocationId = value;
  }
  public resetAlternativeLocationId() {
    this._alternativeLocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeLocationIdInput() {
    return this._alternativeLocationId;
  }

  // auth_enabled - computed: false, optional: true, required: false
  private _authEnabled?: boolean | cdktf.IResolvable; 
  public get authEnabled() {
    return this.getBooleanAttribute('auth_enabled') as any;
  }
  public set authEnabled(value: boolean | cdktf.IResolvable) {
    this._authEnabled = value;
  }
  public resetAuthEnabled() {
    this._authEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEnabledInput() {
    return this._authEnabled;
  }

  // auth_string - computed: true, optional: false, required: false
  public get authString() {
    return this.getStringAttribute('auth_string');
  }

  // authorized_network - computed: true, optional: true, required: false
  private _authorizedNetwork?: string; 
  public get authorizedNetwork() {
    return this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string) {
    this._authorizedNetwork = value;
  }
  public resetAuthorizedNetwork() {
    this._authorizedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworkInput() {
    return this._authorizedNetwork;
  }

  // connect_mode - computed: false, optional: true, required: false
  private _connectMode?: string; 
  public get connectMode() {
    return this.getStringAttribute('connect_mode');
  }
  public set connectMode(value: string) {
    this._connectMode = value;
  }
  public resetConnectMode() {
    this._connectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectModeInput() {
    return this._connectMode;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_location_id - computed: true, optional: false, required: false
  public get currentLocationId() {
    return this.getStringAttribute('current_location_id');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // memory_size_gb - computed: false, optional: false, required: true
  private _memorySizeGb?: number; 
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }
  public set memorySizeGb(value: number) {
    this._memorySizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeGbInput() {
    return this._memorySizeGb;
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

  // redis_configs - computed: false, optional: true, required: false
  private _redisConfigs?: { [key: string]: string } | cdktf.IResolvable; 
  public get redisConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('redis_configs') as any;
  }
  public set redisConfigs(value: { [key: string]: string } | cdktf.IResolvable) {
    this._redisConfigs = value;
  }
  public resetRedisConfigs() {
    this._redisConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisConfigsInput() {
    return this._redisConfigs;
  }

  // redis_version - computed: true, optional: true, required: false
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // region - computed: true, optional: true, required: false
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

  // reserved_ip_range - computed: true, optional: true, required: false
  private _reservedIpRange?: string; 
  public get reservedIpRange() {
    return this.getStringAttribute('reserved_ip_range');
  }
  public set reservedIpRange(value: string) {
    this._reservedIpRange = value;
  }
  public resetReservedIpRange() {
    this._reservedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangeInput() {
    return this._reservedIpRange;
  }

  // server_ca_certs - computed: true, optional: false, required: false
  public serverCaCerts(index: string) {
    return new RedisInstanceServerCaCerts(this, 'server_ca_certs', index);
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // transit_encryption_mode - computed: false, optional: true, required: false
  private _transitEncryptionMode?: string; 
  public get transitEncryptionMode() {
    return this.getStringAttribute('transit_encryption_mode');
  }
  public set transitEncryptionMode(value: string) {
    this._transitEncryptionMode = value;
  }
  public resetTransitEncryptionMode() {
    this._transitEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionModeInput() {
    return this._transitEncryptionMode;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisInstanceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisInstanceTimeouts) {
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
      alternative_location_id: cdktf.stringToTerraform(this._alternativeLocationId),
      auth_enabled: cdktf.booleanToTerraform(this._authEnabled),
      authorized_network: cdktf.stringToTerraform(this._authorizedNetwork),
      connect_mode: cdktf.stringToTerraform(this._connectMode),
      display_name: cdktf.stringToTerraform(this._displayName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location_id: cdktf.stringToTerraform(this._locationId),
      memory_size_gb: cdktf.numberToTerraform(this._memorySizeGb),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      redis_configs: cdktf.hashMapper(cdktf.anyToTerraform)(this._redisConfigs),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      region: cdktf.stringToTerraform(this._region),
      reserved_ip_range: cdktf.stringToTerraform(this._reservedIpRange),
      tier: cdktf.stringToTerraform(this._tier),
      transit_encryption_mode: cdktf.stringToTerraform(this._transitEncryptionMode),
      timeouts: redisInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

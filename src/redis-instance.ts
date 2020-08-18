// https://www.terraform.io/docs/providers/google/r/redis_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RedisInstanceConfig extends TerraformMetaArguments {
  /** Only applicable to STANDARD_HA tier which protects the instance
against zonal failures by provisioning it across two zones.
If provided, it must be a different zone from the one provided in
[locationId]. */
  readonly alternativeLocationId?: string;
  /** The full name of the Google Compute Engine network to which the
instance is connected. If left unspecified, the default network
will be used. */
  readonly authorizedNetwork?: string;
  /** The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"] */
  readonly connectMode?: string;
  /** An arbitrary and optional user-provided name for the instance. */
  readonly displayName?: string;
  /** Resource labels to represent user provided metadata. */
  readonly labels?: { [key: string]: string };
  /** The zone where the instance will be provisioned. If not provided,
the service will choose a zone for the instance. For STANDARD_HA tier,
instances will be created across two zones for protection against
zonal failures. If [alternativeLocationId] is also provided, it must
be different from [locationId]. */
  readonly locationId?: string;
  /** Redis memory size in GiB. */
  readonly memorySizeGb: number;
  /** The ID of the instance or a fully qualified identifier for the instance. */
  readonly name: string;
  readonly project?: string;
  /** Redis configuration parameters, according to http://redis.io/topics/config.
Please check Memorystore documentation for the list of supported parameters:
https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs */
  readonly redisConfigs?: { [key: string]: string };
  /** The version of Redis software. If not provided, latest supported
version will be used. Currently, the supported values are:

- REDIS_5_0 for Redis 5.0 compatibility
- REDIS_4_0 for Redis 4.0 compatibility
- REDIS_3_2 for Redis 3.2 compatibility */
  readonly redisVersion?: string;
  /** The name of the Redis region of the instance. */
  readonly region?: string;
  /** The CIDR range of internal addresses that are reserved for this
instance. If not provided, the service will choose an unused /29
block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
unique and non-overlapping with existing subnets in an authorized
network. */
  readonly reservedIpRange?: string;
  /** The service tier of the instance. Must be one of these values:

- BASIC: standalone instance
- STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"] */
  readonly tier?: string;
  /** timeouts block */
  readonly timeouts?: RedisInstanceTimeouts;
}
export interface RedisInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class RedisInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_location_id - computed: true, optional: true, required: false
  private _alternativeLocationId?: string;
  public get alternativeLocationId() {
    return this._alternativeLocationId ?? this.getStringAttribute('alternative_location_id');
  }
  public set alternativeLocationId(value: string | undefined) {
    this._alternativeLocationId = value;
  }

  // authorized_network - computed: true, optional: true, required: false
  private _authorizedNetwork?: string;
  public get authorizedNetwork() {
    return this._authorizedNetwork ?? this.getStringAttribute('authorized_network');
  }
  public set authorizedNetwork(value: string | undefined) {
    this._authorizedNetwork = value;
  }

  // connect_mode - computed: false, optional: true, required: false
  private _connectMode?: string;
  public get connectMode() {
    return this._connectMode;
  }
  public set connectMode(value: string | undefined) {
    this._connectMode = value;
  }

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current_location_id - computed: true, optional: false, required: true
  public get currentLocationId() {
    return this.getStringAttribute('current_location_id');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string;
  public get locationId() {
    return this._locationId ?? this.getStringAttribute('location_id');
  }
  public set locationId(value: string | undefined) {
    this._locationId = value;
  }

  // memory_size_gb - computed: false, optional: false, required: true
  private _memorySizeGb: number;
  public get memorySizeGb() {
    return this._memorySizeGb;
  }
  public set memorySizeGb(value: number) {
    this._memorySizeGb = value;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // redis_configs - computed: false, optional: true, required: false
  private _redisConfigs?: { [key: string]: string };
  public get redisConfigs() {
    return this._redisConfigs;
  }
  public set redisConfigs(value: { [key: string]: string } | undefined) {
    this._redisConfigs = value;
  }

  // redis_version - computed: true, optional: true, required: false
  private _redisVersion?: string;
  public get redisVersion() {
    return this._redisVersion ?? this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string | undefined) {
    this._redisVersion = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // reserved_ip_range - computed: true, optional: true, required: false
  private _reservedIpRange?: string;
  public get reservedIpRange() {
    return this._reservedIpRange ?? this.getStringAttribute('reserved_ip_range');
  }
  public set reservedIpRange(value: string | undefined) {
    this._reservedIpRange = value;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string | undefined) {
    this._tier = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RedisInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      alternative_location_id: this._alternativeLocationId,
      authorized_network: this._authorizedNetwork,
      connect_mode: this._connectMode,
      display_name: this._displayName,
      labels: this._labels,
      location_id: this._locationId,
      memory_size_gb: this._memorySizeGb,
      name: this._name,
      project: this._project,
      redis_configs: this._redisConfigs,
      redis_version: this._redisVersion,
      region: this._region,
      reserved_ip_range: this._reservedIpRange,
      tier: this._tier,
      timeouts: this._timeouts,
    };
  }
}

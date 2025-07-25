/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only applicable to STANDARD_HA tier which protects the instance
  * against zonal failures by provisioning it across two zones.
  * If provided, it must be a different zone from the one provided in
  * [locationId].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#alternative_location_id RedisInstance#alternative_location_id}
  */
  readonly alternativeLocationId?: string;
  /**
  * Optional. Indicates whether OSS Redis AUTH is enabled for the
  * instance. If set to "true" AUTH is enabled on the instance.
  * Default value is "false" meaning AUTH is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#auth_enabled RedisInstance#auth_enabled}
  */
  readonly authEnabled?: boolean | cdktf.IResolvable;
  /**
  * The full name of the Google Compute Engine network to which the
  * instance is connected. If left unspecified, the default network
  * will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#authorized_network RedisInstance#authorized_network}
  */
  readonly authorizedNetwork?: string;
  /**
  * The connection mode of the Redis instance. Default value: "DIRECT_PEERING" Possible values: ["DIRECT_PEERING", "PRIVATE_SERVICE_ACCESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#connect_mode RedisInstance#connect_mode}
  */
  readonly connectMode?: string;
  /**
  * Optional. The KMS key reference that you want to use to encrypt the data at rest for this Redis
  * instance. If this is provided, CMEK is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#customer_managed_key RedisInstance#customer_managed_key}
  */
  readonly customerManagedKey?: string;
  /**
  * An arbitrary and optional user-provided name for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#display_name RedisInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#id RedisInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#labels RedisInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The zone where the instance will be provisioned. If not provided,
  * the service will choose a zone for the instance. For STANDARD_HA tier,
  * instances will be created across two zones for protection against
  * zonal failures. If [alternativeLocationId] is also provided, it must
  * be different from [locationId].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#location_id RedisInstance#location_id}
  */
  readonly locationId?: string;
  /**
  * The self service update maintenance version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#maintenance_version RedisInstance#maintenance_version}
  */
  readonly maintenanceVersion?: string;
  /**
  * Redis memory size in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#memory_size_gb RedisInstance#memory_size_gb}
  */
  readonly memorySizeGb: number;
  /**
  * The ID of the instance or a fully qualified identifier for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#name RedisInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#project RedisInstance#project}
  */
  readonly project?: string;
  /**
  * Optional. Read replica mode. Can only be specified when trying to create the instance.
  * If not set, Memorystore Redis backend will default to READ_REPLICAS_DISABLED.
  * - READ_REPLICAS_DISABLED: If disabled, read endpoint will not be provided and the
  * instance cannot scale up or down the number of replicas.
  * - READ_REPLICAS_ENABLED: If enabled, read endpoint will be provided and the instance
  * can scale up and down the number of replicas. Possible values: ["READ_REPLICAS_DISABLED", "READ_REPLICAS_ENABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#read_replicas_mode RedisInstance#read_replicas_mode}
  */
  readonly readReplicasMode?: string;
  /**
  * Redis configuration parameters, according to http://redis.io/topics/config.
  * Please check Memorystore documentation for the list of supported parameters:
  * https://cloud.google.com/memorystore/docs/redis/reference/rest/v1/projects.locations.instances#Instance.FIELDS.redis_configs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#redis_configs RedisInstance#redis_configs}
  */
  readonly redisConfigs?: { [key: string]: string };
  /**
  * The version of Redis software. If not provided, latest supported
  * version will be used. Please check the API documentation linked
  * at the top for the latest valid values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#redis_version RedisInstance#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * The name of the Redis region of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#region RedisInstance#region}
  */
  readonly region?: string;
  /**
  * Optional. The number of replica nodes. The valid range for the Standard Tier with
  * read replicas enabled is [1-5] and defaults to 2. If read replicas are not enabled
  * for a Standard Tier instance, the only valid value is 1 and the default is 1.
  * The valid value for basic tier is 0 and the default is also 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#replica_count RedisInstance#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * The CIDR range of internal addresses that are reserved for this
  * instance. If not provided, the service will choose an unused /29
  * block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be
  * unique and non-overlapping with existing subnets in an authorized
  * network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#reserved_ip_range RedisInstance#reserved_ip_range}
  */
  readonly reservedIpRange?: string;
  /**
  * Optional. Additional IP range for node placement. Required when enabling read replicas on
  * an existing instance. For DIRECT_PEERING mode value must be a CIDR range of size /28, or
  * "auto". For PRIVATE_SERVICE_ACCESS mode value must be the name of an allocated address
  * range associated with the private service access connection, or "auto".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#secondary_ip_range RedisInstance#secondary_ip_range}
  */
  readonly secondaryIpRange?: string;
  /**
  * The service tier of the instance. Must be one of these values:
  * 
  * - BASIC: standalone instance
  * - STANDARD_HA: highly available primary/replica instances Default value: "BASIC" Possible values: ["BASIC", "STANDARD_HA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#tier RedisInstance#tier}
  */
  readonly tier?: string;
  /**
  * The TLS mode of the Redis instance, If not provided, TLS is disabled for the instance.
  * 
  * - SERVER_AUTHENTICATION: Client to Server traffic encryption enabled with server authentication Default value: "DISABLED" Possible values: ["SERVER_AUTHENTICATION", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#transit_encryption_mode RedisInstance#transit_encryption_mode}
  */
  readonly transitEncryptionMode?: string;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#maintenance_policy RedisInstance#maintenance_policy}
  */
  readonly maintenancePolicy?: RedisInstanceMaintenancePolicy;
  /**
  * persistence_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#persistence_config RedisInstance#persistence_config}
  */
  readonly persistenceConfig?: RedisInstancePersistenceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#timeouts RedisInstance#timeouts}
  */
  readonly timeouts?: RedisInstanceTimeouts;
}
export interface RedisInstanceMaintenanceSchedule {
}

export function redisInstanceMaintenanceScheduleToTerraform(struct?: RedisInstanceMaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redisInstanceMaintenanceScheduleToHclTerraform(struct?: RedisInstanceMaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedisInstanceMaintenanceScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RedisInstanceMaintenanceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceMaintenanceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // schedule_deadline_time - computed: true, optional: false, required: false
  public get scheduleDeadlineTime() {
    return this.getStringAttribute('schedule_deadline_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class RedisInstanceMaintenanceScheduleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RedisInstanceMaintenanceScheduleOutputReference {
    return new RedisInstanceMaintenanceScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisInstanceNodes {
}

export function redisInstanceNodesToTerraform(struct?: RedisInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redisInstanceNodesToHclTerraform(struct?: RedisInstanceNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedisInstanceNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RedisInstanceNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class RedisInstanceNodesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RedisInstanceNodesOutputReference {
    return new RedisInstanceNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisInstanceServerCaCerts {
}

export function redisInstanceServerCaCertsToTerraform(struct?: RedisInstanceServerCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redisInstanceServerCaCertsToHclTerraform(struct?: RedisInstanceServerCaCerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedisInstanceServerCaCertsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RedisInstanceServerCaCerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceServerCaCerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class RedisInstanceServerCaCertsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RedisInstanceServerCaCertsOutputReference {
    return new RedisInstanceServerCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  * An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#hours RedisInstance#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#minutes RedisInstance#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#nanos RedisInstance#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  * An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#seconds RedisInstance#seconds}
  */
  readonly seconds?: number;
}

export function redisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct?: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference | RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function redisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToHclTerraform(struct?: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference | RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow {
  /**
  * Required. The day of week that maintenance updates occur.
  * 
  * - DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
  * - MONDAY: Monday
  * - TUESDAY: Tuesday
  * - WEDNESDAY: Wednesday
  * - THURSDAY: Thursday
  * - FRIDAY: Friday
  * - SATURDAY: Saturday
  * - SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#day RedisInstance#day}
  */
  readonly day: string;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#start_time RedisInstance#start_time}
  */
  readonly startTime: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
}

export function redisInstanceMaintenancePolicyWeeklyMaintenanceWindowToTerraform(struct?: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    start_time: redisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToTerraform(struct!.startTime),
  }
}


export function redisInstanceMaintenancePolicyWeeklyMaintenanceWindowToHclTerraform(struct?: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: redisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._startTime.internalValue = value.startTime;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference {
    return new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisInstanceMaintenancePolicy {
  /**
  * Optional. Description of what this policy is for.
  * Create/Update methods return INVALID_ARGUMENT if the
  * length is greater than 512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#description RedisInstance#description}
  */
  readonly description?: string;
  /**
  * weekly_maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#weekly_maintenance_window RedisInstance#weekly_maintenance_window}
  */
  readonly weeklyMaintenanceWindow?: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable;
}

export function redisInstanceMaintenancePolicyToTerraform(struct?: RedisInstanceMaintenancePolicyOutputReference | RedisInstanceMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    weekly_maintenance_window: cdktf.listMapper(redisInstanceMaintenancePolicyWeeklyMaintenanceWindowToTerraform, true)(struct!.weeklyMaintenanceWindow),
  }
}


export function redisInstanceMaintenancePolicyToHclTerraform(struct?: RedisInstanceMaintenancePolicyOutputReference | RedisInstanceMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekly_maintenance_window: {
      value: cdktf.listMapperHcl(redisInstanceMaintenancePolicyWeeklyMaintenanceWindowToHclTerraform, true)(struct!.weeklyMaintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisInstanceMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisInstanceMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._weeklyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyMaintenanceWindow = this._weeklyMaintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstanceMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._weeklyMaintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._weeklyMaintenanceWindow.internalValue = value.weeklyMaintenanceWindow;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // weekly_maintenance_window - computed: false, optional: true, required: false
  private _weeklyMaintenanceWindow = new RedisInstanceMaintenancePolicyWeeklyMaintenanceWindowList(this, "weekly_maintenance_window", false);
  public get weeklyMaintenanceWindow() {
    return this._weeklyMaintenanceWindow;
  }
  public putWeeklyMaintenanceWindow(value: RedisInstanceMaintenancePolicyWeeklyMaintenanceWindow[] | cdktf.IResolvable) {
    this._weeklyMaintenanceWindow.internalValue = value;
  }
  public resetWeeklyMaintenanceWindow() {
    this._weeklyMaintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceWindowInput() {
    return this._weeklyMaintenanceWindow.internalValue;
  }
}
export interface RedisInstancePersistenceConfig {
  /**
  * Optional. Controls whether Persistence features are enabled. If not provided, the existing value will be used.
  * 
  * - DISABLED: 	Persistence is disabled for the instance, and any existing snapshots are deleted.
  * - RDB: RDB based Persistence is enabled. Possible values: ["DISABLED", "RDB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#persistence_mode RedisInstance#persistence_mode}
  */
  readonly persistenceMode?: string;
  /**
  * Optional. Available snapshot periods for scheduling.
  * 
  * - ONE_HOUR:	Snapshot every 1 hour.
  * - SIX_HOURS:	Snapshot every 6 hours.
  * - TWELVE_HOURS:	Snapshot every 12 hours.
  * - TWENTY_FOUR_HOURS:	Snapshot every 24 hours. Possible values: ["ONE_HOUR", "SIX_HOURS", "TWELVE_HOURS", "TWENTY_FOUR_HOURS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#rdb_snapshot_period RedisInstance#rdb_snapshot_period}
  */
  readonly rdbSnapshotPeriod?: string;
  /**
  * Optional. Date and time that the first snapshot was/will be attempted,
  * and to which future snapshots will be aligned. If not provided,
  * the current time will be used.
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution
  * and up to nine fractional digits.
  * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#rdb_snapshot_start_time RedisInstance#rdb_snapshot_start_time}
  */
  readonly rdbSnapshotStartTime?: string;
}

export function redisInstancePersistenceConfigToTerraform(struct?: RedisInstancePersistenceConfigOutputReference | RedisInstancePersistenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistence_mode: cdktf.stringToTerraform(struct!.persistenceMode),
    rdb_snapshot_period: cdktf.stringToTerraform(struct!.rdbSnapshotPeriod),
    rdb_snapshot_start_time: cdktf.stringToTerraform(struct!.rdbSnapshotStartTime),
  }
}


export function redisInstancePersistenceConfigToHclTerraform(struct?: RedisInstancePersistenceConfigOutputReference | RedisInstancePersistenceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistence_mode: {
      value: cdktf.stringToHclTerraform(struct!.persistenceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdb_snapshot_period: {
      value: cdktf.stringToHclTerraform(struct!.rdbSnapshotPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdb_snapshot_start_time: {
      value: cdktf.stringToHclTerraform(struct!.rdbSnapshotStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisInstancePersistenceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisInstancePersistenceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistenceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistenceMode = this._persistenceMode;
    }
    if (this._rdbSnapshotPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbSnapshotPeriod = this._rdbSnapshotPeriod;
    }
    if (this._rdbSnapshotStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdbSnapshotStartTime = this._rdbSnapshotStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisInstancePersistenceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistenceMode = undefined;
      this._rdbSnapshotPeriod = undefined;
      this._rdbSnapshotStartTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistenceMode = value.persistenceMode;
      this._rdbSnapshotPeriod = value.rdbSnapshotPeriod;
      this._rdbSnapshotStartTime = value.rdbSnapshotStartTime;
    }
  }

  // persistence_mode - computed: true, optional: true, required: false
  private _persistenceMode?: string; 
  public get persistenceMode() {
    return this.getStringAttribute('persistence_mode');
  }
  public set persistenceMode(value: string) {
    this._persistenceMode = value;
  }
  public resetPersistenceMode() {
    this._persistenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceModeInput() {
    return this._persistenceMode;
  }

  // rdb_next_snapshot_time - computed: true, optional: false, required: false
  public get rdbNextSnapshotTime() {
    return this.getStringAttribute('rdb_next_snapshot_time');
  }

  // rdb_snapshot_period - computed: false, optional: true, required: false
  private _rdbSnapshotPeriod?: string; 
  public get rdbSnapshotPeriod() {
    return this.getStringAttribute('rdb_snapshot_period');
  }
  public set rdbSnapshotPeriod(value: string) {
    this._rdbSnapshotPeriod = value;
  }
  public resetRdbSnapshotPeriod() {
    this._rdbSnapshotPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbSnapshotPeriodInput() {
    return this._rdbSnapshotPeriod;
  }

  // rdb_snapshot_start_time - computed: true, optional: true, required: false
  private _rdbSnapshotStartTime?: string; 
  public get rdbSnapshotStartTime() {
    return this.getStringAttribute('rdb_snapshot_start_time');
  }
  public set rdbSnapshotStartTime(value: string) {
    this._rdbSnapshotStartTime = value;
  }
  public resetRdbSnapshotStartTime() {
    this._rdbSnapshotStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdbSnapshotStartTimeInput() {
    return this._rdbSnapshotStartTime;
  }
}
export interface RedisInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#create RedisInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#delete RedisInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#update RedisInstance#update}
  */
  readonly update?: string;
}

export function redisInstanceTimeoutsToTerraform(struct?: RedisInstanceTimeouts | cdktf.IResolvable): any {
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


export function redisInstanceTimeoutsToHclTerraform(struct?: RedisInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedisInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance google_redis_instance}
*/
export class RedisInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_redis_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisInstance to import
  * @param importFromId The id of the existing RedisInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_redis_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/redis_instance google_redis_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RedisInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_redis_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternativeLocationId = config.alternativeLocationId;
    this._authEnabled = config.authEnabled;
    this._authorizedNetwork = config.authorizedNetwork;
    this._connectMode = config.connectMode;
    this._customerManagedKey = config.customerManagedKey;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._locationId = config.locationId;
    this._maintenanceVersion = config.maintenanceVersion;
    this._memorySizeGb = config.memorySizeGb;
    this._name = config.name;
    this._project = config.project;
    this._readReplicasMode = config.readReplicasMode;
    this._redisConfigs = config.redisConfigs;
    this._redisVersion = config.redisVersion;
    this._region = config.region;
    this._replicaCount = config.replicaCount;
    this._reservedIpRange = config.reservedIpRange;
    this._secondaryIpRange = config.secondaryIpRange;
    this._tier = config.tier;
    this._transitEncryptionMode = config.transitEncryptionMode;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._persistenceConfig.internalValue = config.persistenceConfig;
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
    return this.getBooleanAttribute('auth_enabled');
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

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey?: string; 
  public get customerManagedKey() {
    return this.getStringAttribute('customer_managed_key');
  }
  public set customerManagedKey(value: string) {
    this._customerManagedKey = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // effective_reserved_ip_range - computed: true, optional: false, required: false
  public get effectiveReservedIpRange() {
    return this.getStringAttribute('effective_reserved_ip_range');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
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

  // maintenance_schedule - computed: true, optional: false, required: false
  private _maintenanceSchedule = new RedisInstanceMaintenanceScheduleList(this, "maintenance_schedule", false);
  public get maintenanceSchedule() {
    return this._maintenanceSchedule;
  }

  // maintenance_version - computed: true, optional: true, required: false
  private _maintenanceVersion?: string; 
  public get maintenanceVersion() {
    return this.getStringAttribute('maintenance_version');
  }
  public set maintenanceVersion(value: string) {
    this._maintenanceVersion = value;
  }
  public resetMaintenanceVersion() {
    this._maintenanceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceVersionInput() {
    return this._maintenanceVersion;
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

  // nodes - computed: true, optional: false, required: false
  private _nodes = new RedisInstanceNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
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

  // read_endpoint - computed: true, optional: false, required: false
  public get readEndpoint() {
    return this.getStringAttribute('read_endpoint');
  }

  // read_endpoint_port - computed: true, optional: false, required: false
  public get readEndpointPort() {
    return this.getNumberAttribute('read_endpoint_port');
  }

  // read_replicas_mode - computed: true, optional: true, required: false
  private _readReplicasMode?: string; 
  public get readReplicasMode() {
    return this.getStringAttribute('read_replicas_mode');
  }
  public set readReplicasMode(value: string) {
    this._readReplicasMode = value;
  }
  public resetReadReplicasMode() {
    this._readReplicasMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicasModeInput() {
    return this._readReplicasMode;
  }

  // redis_configs - computed: false, optional: true, required: false
  private _redisConfigs?: { [key: string]: string }; 
  public get redisConfigs() {
    return this.getStringMapAttribute('redis_configs');
  }
  public set redisConfigs(value: { [key: string]: string }) {
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

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
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

  // secondary_ip_range - computed: true, optional: true, required: false
  private _secondaryIpRange?: string; 
  public get secondaryIpRange() {
    return this.getStringAttribute('secondary_ip_range');
  }
  public set secondaryIpRange(value: string) {
    this._secondaryIpRange = value;
  }
  public resetSecondaryIpRange() {
    this._secondaryIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpRangeInput() {
    return this._secondaryIpRange;
  }

  // server_ca_certs - computed: true, optional: false, required: false
  private _serverCaCerts = new RedisInstanceServerCaCertsList(this, "server_ca_certs", false);
  public get serverCaCerts() {
    return this._serverCaCerts;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new RedisInstanceMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: RedisInstanceMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // persistence_config - computed: false, optional: true, required: false
  private _persistenceConfig = new RedisInstancePersistenceConfigOutputReference(this, "persistence_config");
  public get persistenceConfig() {
    return this._persistenceConfig;
  }
  public putPersistenceConfig(value: RedisInstancePersistenceConfig) {
    this._persistenceConfig.internalValue = value;
  }
  public resetPersistenceConfig() {
    this._persistenceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceConfigInput() {
    return this._persistenceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisInstanceTimeoutsOutputReference(this, "timeouts");
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
      customer_managed_key: cdktf.stringToTerraform(this._customerManagedKey),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location_id: cdktf.stringToTerraform(this._locationId),
      maintenance_version: cdktf.stringToTerraform(this._maintenanceVersion),
      memory_size_gb: cdktf.numberToTerraform(this._memorySizeGb),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      read_replicas_mode: cdktf.stringToTerraform(this._readReplicasMode),
      redis_configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._redisConfigs),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      region: cdktf.stringToTerraform(this._region),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      reserved_ip_range: cdktf.stringToTerraform(this._reservedIpRange),
      secondary_ip_range: cdktf.stringToTerraform(this._secondaryIpRange),
      tier: cdktf.stringToTerraform(this._tier),
      transit_encryption_mode: cdktf.stringToTerraform(this._transitEncryptionMode),
      maintenance_policy: redisInstanceMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      persistence_config: redisInstancePersistenceConfigToTerraform(this._persistenceConfig.internalValue),
      timeouts: redisInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternative_location_id: {
        value: cdktf.stringToHclTerraform(this._alternativeLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._authEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorized_network: {
        value: cdktf.stringToHclTerraform(this._authorizedNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_mode: {
        value: cdktf.stringToHclTerraform(this._connectMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key: {
        value: cdktf.stringToHclTerraform(this._customerManagedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_version: {
        value: cdktf.stringToHclTerraform(this._maintenanceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size_gb: {
        value: cdktf.numberToHclTerraform(this._memorySizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_replicas_mode: {
        value: cdktf.stringToHclTerraform(this._readReplicasMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_configs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._redisConfigs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      redis_version: {
        value: cdktf.stringToHclTerraform(this._redisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_count: {
        value: cdktf.numberToHclTerraform(this._replicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_ip_range: {
        value: cdktf.stringToHclTerraform(this._reservedIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_ip_range: {
        value: cdktf.stringToHclTerraform(this._secondaryIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_encryption_mode: {
        value: cdktf.stringToHclTerraform(this._transitEncryptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_policy: {
        value: redisInstanceMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisInstanceMaintenancePolicyList",
      },
      persistence_config: {
        value: redisInstancePersistenceConfigToHclTerraform(this._persistenceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisInstancePersistenceConfigList",
      },
      timeouts: {
        value: redisInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

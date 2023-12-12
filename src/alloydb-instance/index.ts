/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlloydbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#annotations AlloydbInstance#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * 'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
  * Note that primary and read instances can have different availability types.
  * Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
  * Zone is automatically chosen from the list of zones in the region specified.
  * Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
  * can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#availability_type AlloydbInstance#availability_type}
  */
  readonly availabilityType?: string;
  /**
  * Identifies the alloydb cluster. Must be in the format
  * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#cluster AlloydbInstance#cluster}
  */
  readonly cluster: string;
  /**
  * Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#database_flags AlloydbInstance#database_flags}
  */
  readonly databaseFlags?: { [key: string]: string };
  /**
  * User-settable and human-readable display name for the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#display_name AlloydbInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#gce_zone AlloydbInstance#gce_zone}
  */
  readonly gceZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#id AlloydbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the alloydb instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#instance_id AlloydbInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * The type of the instance.
  * If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
  * If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
  * Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
  * If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
  * Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
  * Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#instance_type AlloydbInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * User-defined labels for the alloydb instance.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#labels AlloydbInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * client_connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#client_connection_config AlloydbInstance#client_connection_config}
  */
  readonly clientConnectionConfig?: AlloydbInstanceClientConnectionConfig;
  /**
  * machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#machine_config AlloydbInstance#machine_config}
  */
  readonly machineConfig?: AlloydbInstanceMachineConfig;
  /**
  * query_insights_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#query_insights_config AlloydbInstance#query_insights_config}
  */
  readonly queryInsightsConfig?: AlloydbInstanceQueryInsightsConfig;
  /**
  * read_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#read_pool_config AlloydbInstance#read_pool_config}
  */
  readonly readPoolConfig?: AlloydbInstanceReadPoolConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#timeouts AlloydbInstance#timeouts}
  */
  readonly timeouts?: AlloydbInstanceTimeouts;
}
export interface AlloydbInstanceClientConnectionConfigSslConfig {
  /**
  * SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#ssl_mode AlloydbInstance#ssl_mode}
  */
  readonly sslMode?: string;
}

export function alloydbInstanceClientConnectionConfigSslConfigToTerraform(struct?: AlloydbInstanceClientConnectionConfigSslConfigOutputReference | AlloydbInstanceClientConnectionConfigSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_mode: cdktf.stringToTerraform(struct!.sslMode),
  }
}

export class AlloydbInstanceClientConnectionConfigSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbInstanceClientConnectionConfigSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceClientConnectionConfigSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslMode = value.sslMode;
    }
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}
export interface AlloydbInstanceClientConnectionConfig {
  /**
  * Configuration to enforce connectors only (ex: AuthProxy) connections to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#require_connectors AlloydbInstance#require_connectors}
  */
  readonly requireConnectors?: boolean | cdktf.IResolvable;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#ssl_config AlloydbInstance#ssl_config}
  */
  readonly sslConfig?: AlloydbInstanceClientConnectionConfigSslConfig;
}

export function alloydbInstanceClientConnectionConfigToTerraform(struct?: AlloydbInstanceClientConnectionConfigOutputReference | AlloydbInstanceClientConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_connectors: cdktf.booleanToTerraform(struct!.requireConnectors),
    ssl_config: alloydbInstanceClientConnectionConfigSslConfigToTerraform(struct!.sslConfig),
  }
}

export class AlloydbInstanceClientConnectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbInstanceClientConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireConnectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireConnectors = this._requireConnectors;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceClientConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requireConnectors = undefined;
      this._sslConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requireConnectors = value.requireConnectors;
      this._sslConfig.internalValue = value.sslConfig;
    }
  }

  // require_connectors - computed: false, optional: true, required: false
  private _requireConnectors?: boolean | cdktf.IResolvable; 
  public get requireConnectors() {
    return this.getBooleanAttribute('require_connectors');
  }
  public set requireConnectors(value: boolean | cdktf.IResolvable) {
    this._requireConnectors = value;
  }
  public resetRequireConnectors() {
    this._requireConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireConnectorsInput() {
    return this._requireConnectors;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new AlloydbInstanceClientConnectionConfigSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: AlloydbInstanceClientConnectionConfigSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }
}
export interface AlloydbInstanceMachineConfig {
  /**
  * The number of CPU's in the VM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#cpu_count AlloydbInstance#cpu_count}
  */
  readonly cpuCount?: number;
}

export function alloydbInstanceMachineConfigToTerraform(struct?: AlloydbInstanceMachineConfigOutputReference | AlloydbInstanceMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
  }
}

export class AlloydbInstanceMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbInstanceMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
    }
  }

  // cpu_count - computed: true, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }
}
export interface AlloydbInstanceQueryInsightsConfig {
  /**
  * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#query_plans_per_minute AlloydbInstance#query_plans_per_minute}
  */
  readonly queryPlansPerMinute?: number;
  /**
  * Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#query_string_length AlloydbInstance#query_string_length}
  */
  readonly queryStringLength?: number;
  /**
  * Record application tags for an instance. This flag is turned "on" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#record_application_tags AlloydbInstance#record_application_tags}
  */
  readonly recordApplicationTags?: boolean | cdktf.IResolvable;
  /**
  * Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#record_client_address AlloydbInstance#record_client_address}
  */
  readonly recordClientAddress?: boolean | cdktf.IResolvable;
}

export function alloydbInstanceQueryInsightsConfigToTerraform(struct?: AlloydbInstanceQueryInsightsConfigOutputReference | AlloydbInstanceQueryInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_plans_per_minute: cdktf.numberToTerraform(struct!.queryPlansPerMinute),
    query_string_length: cdktf.numberToTerraform(struct!.queryStringLength),
    record_application_tags: cdktf.booleanToTerraform(struct!.recordApplicationTags),
    record_client_address: cdktf.booleanToTerraform(struct!.recordClientAddress),
  }
}

export class AlloydbInstanceQueryInsightsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbInstanceQueryInsightsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryPlansPerMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPlansPerMinute = this._queryPlansPerMinute;
    }
    if (this._queryStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringLength = this._queryStringLength;
    }
    if (this._recordApplicationTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordApplicationTags = this._recordApplicationTags;
    }
    if (this._recordClientAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClientAddress = this._recordClientAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceQueryInsightsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryPlansPerMinute = undefined;
      this._queryStringLength = undefined;
      this._recordApplicationTags = undefined;
      this._recordClientAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryPlansPerMinute = value.queryPlansPerMinute;
      this._queryStringLength = value.queryStringLength;
      this._recordApplicationTags = value.recordApplicationTags;
      this._recordClientAddress = value.recordClientAddress;
    }
  }

  // query_plans_per_minute - computed: false, optional: true, required: false
  private _queryPlansPerMinute?: number; 
  public get queryPlansPerMinute() {
    return this.getNumberAttribute('query_plans_per_minute');
  }
  public set queryPlansPerMinute(value: number) {
    this._queryPlansPerMinute = value;
  }
  public resetQueryPlansPerMinute() {
    this._queryPlansPerMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPlansPerMinuteInput() {
    return this._queryPlansPerMinute;
  }

  // query_string_length - computed: false, optional: true, required: false
  private _queryStringLength?: number; 
  public get queryStringLength() {
    return this.getNumberAttribute('query_string_length');
  }
  public set queryStringLength(value: number) {
    this._queryStringLength = value;
  }
  public resetQueryStringLength() {
    this._queryStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringLengthInput() {
    return this._queryStringLength;
  }

  // record_application_tags - computed: false, optional: true, required: false
  private _recordApplicationTags?: boolean | cdktf.IResolvable; 
  public get recordApplicationTags() {
    return this.getBooleanAttribute('record_application_tags');
  }
  public set recordApplicationTags(value: boolean | cdktf.IResolvable) {
    this._recordApplicationTags = value;
  }
  public resetRecordApplicationTags() {
    this._recordApplicationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordApplicationTagsInput() {
    return this._recordApplicationTags;
  }

  // record_client_address - computed: false, optional: true, required: false
  private _recordClientAddress?: boolean | cdktf.IResolvable; 
  public get recordClientAddress() {
    return this.getBooleanAttribute('record_client_address');
  }
  public set recordClientAddress(value: boolean | cdktf.IResolvable) {
    this._recordClientAddress = value;
  }
  public resetRecordClientAddress() {
    this._recordClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClientAddressInput() {
    return this._recordClientAddress;
  }
}
export interface AlloydbInstanceReadPoolConfig {
  /**
  * Read capacity, i.e. number of nodes in a read pool instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#node_count AlloydbInstance#node_count}
  */
  readonly nodeCount?: number;
}

export function alloydbInstanceReadPoolConfigToTerraform(struct?: AlloydbInstanceReadPoolConfigOutputReference | AlloydbInstanceReadPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}

export class AlloydbInstanceReadPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbInstanceReadPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceReadPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCount = value.nodeCount;
    }
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}
export interface AlloydbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#create AlloydbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#delete AlloydbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#update AlloydbInstance#update}
  */
  readonly update?: string;
}

export function alloydbInstanceTimeoutsToTerraform(struct?: AlloydbInstanceTimeouts | cdktf.IResolvable): any {
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

export class AlloydbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlloydbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlloydbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance google_alloydb_instance}
*/
export class AlloydbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_alloydb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlloydbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlloydbInstance to import
  * @param importFromId The id of the existing AlloydbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlloydbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_alloydb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/alloydb_instance google_alloydb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlloydbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AlloydbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_alloydb_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.9.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._availabilityType = config.availabilityType;
    this._cluster = config.cluster;
    this._databaseFlags = config.databaseFlags;
    this._displayName = config.displayName;
    this._gceZone = config.gceZone;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceType = config.instanceType;
    this._labels = config.labels;
    this._clientConnectionConfig.internalValue = config.clientConnectionConfig;
    this._machineConfig.internalValue = config.machineConfig;
    this._queryInsightsConfig.internalValue = config.queryInsightsConfig;
    this._readPoolConfig.internalValue = config.readPoolConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // availability_type - computed: true, optional: true, required: false
  private _availabilityType?: string; 
  public get availabilityType() {
    return this.getStringAttribute('availability_type');
  }
  public set availabilityType(value: string) {
    this._availabilityType = value;
  }
  public resetAvailabilityType() {
    this._availabilityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityTypeInput() {
    return this._availabilityType;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database_flags - computed: false, optional: true, required: false
  private _databaseFlags?: { [key: string]: string }; 
  public get databaseFlags() {
    return this.getStringMapAttribute('database_flags');
  }
  public set databaseFlags(value: { [key: string]: string }) {
    this._databaseFlags = value;
  }
  public resetDatabaseFlags() {
    this._databaseFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFlagsInput() {
    return this._databaseFlags;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // gce_zone - computed: false, optional: true, required: false
  private _gceZone?: string; 
  public get gceZone() {
    return this.getStringAttribute('gce_zone');
  }
  public set gceZone(value: string) {
    this._gceZone = value;
  }
  public resetGceZone() {
    this._gceZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceZoneInput() {
    return this._gceZone;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // client_connection_config - computed: false, optional: true, required: false
  private _clientConnectionConfig = new AlloydbInstanceClientConnectionConfigOutputReference(this, "client_connection_config");
  public get clientConnectionConfig() {
    return this._clientConnectionConfig;
  }
  public putClientConnectionConfig(value: AlloydbInstanceClientConnectionConfig) {
    this._clientConnectionConfig.internalValue = value;
  }
  public resetClientConnectionConfig() {
    this._clientConnectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectionConfigInput() {
    return this._clientConnectionConfig.internalValue;
  }

  // machine_config - computed: false, optional: true, required: false
  private _machineConfig = new AlloydbInstanceMachineConfigOutputReference(this, "machine_config");
  public get machineConfig() {
    return this._machineConfig;
  }
  public putMachineConfig(value: AlloydbInstanceMachineConfig) {
    this._machineConfig.internalValue = value;
  }
  public resetMachineConfig() {
    this._machineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConfigInput() {
    return this._machineConfig.internalValue;
  }

  // query_insights_config - computed: false, optional: true, required: false
  private _queryInsightsConfig = new AlloydbInstanceQueryInsightsConfigOutputReference(this, "query_insights_config");
  public get queryInsightsConfig() {
    return this._queryInsightsConfig;
  }
  public putQueryInsightsConfig(value: AlloydbInstanceQueryInsightsConfig) {
    this._queryInsightsConfig.internalValue = value;
  }
  public resetQueryInsightsConfig() {
    this._queryInsightsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsConfigInput() {
    return this._queryInsightsConfig.internalValue;
  }

  // read_pool_config - computed: false, optional: true, required: false
  private _readPoolConfig = new AlloydbInstanceReadPoolConfigOutputReference(this, "read_pool_config");
  public get readPoolConfig() {
    return this._readPoolConfig;
  }
  public putReadPoolConfig(value: AlloydbInstanceReadPoolConfig) {
    this._readPoolConfig.internalValue = value;
  }
  public resetReadPoolConfig() {
    this._readPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPoolConfigInput() {
    return this._readPoolConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlloydbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlloydbInstanceTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      availability_type: cdktf.stringToTerraform(this._availabilityType),
      cluster: cdktf.stringToTerraform(this._cluster),
      database_flags: cdktf.hashMapper(cdktf.stringToTerraform)(this._databaseFlags),
      display_name: cdktf.stringToTerraform(this._displayName),
      gce_zone: cdktf.stringToTerraform(this._gceZone),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      client_connection_config: alloydbInstanceClientConnectionConfigToTerraform(this._clientConnectionConfig.internalValue),
      machine_config: alloydbInstanceMachineConfigToTerraform(this._machineConfig.internalValue),
      query_insights_config: alloydbInstanceQueryInsightsConfigToTerraform(this._queryInsightsConfig.internalValue),
      read_pool_config: alloydbInstanceReadPoolConfigToTerraform(this._readPoolConfig.internalValue),
      timeouts: alloydbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

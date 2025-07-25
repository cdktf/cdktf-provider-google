/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlloydbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'Specifies whether an instance needs to spin up. Once the instance is
  * active, the activation policy can be updated to the 'NEVER' to stop the
  * instance. Likewise, the activation policy can be updated to 'ALWAYS' to
  * start the instance.
  * There are restrictions around when an instance can/cannot be activated (for
  * example, a read pool instance should be stopped before stopping primary
  * etc.). Please refer to the API documentation for more details.
  * Possible values are: 'ACTIVATION_POLICY_UNSPECIFIED', 'ALWAYS', 'NEVER'.' Possible values: ["ACTIVATION_POLICY_UNSPECIFIED", "ALWAYS", "NEVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#activation_policy AlloydbInstance#activation_policy}
  */
  readonly activationPolicy?: string;
  /**
  * Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#annotations AlloydbInstance#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * 'Availability type of an Instance. Defaults to REGIONAL for both primary and read instances.
  * Note that primary and read instances can have different availability types.
  * Primary instances can be either ZONAL or REGIONAL. Read Pool instances can also be either ZONAL or REGIONAL.
  * Read pools of size 1 can only have zonal availability. Read pools with a node count of 2 or more
  * can have regional availability (nodes are present in 2 or more zones in a region).
  * Possible values are: 'AVAILABILITY_TYPE_UNSPECIFIED', 'ZONAL', 'REGIONAL'.' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#availability_type AlloydbInstance#availability_type}
  */
  readonly availabilityType?: string;
  /**
  * Identifies the alloydb cluster. Must be in the format
  * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#cluster AlloydbInstance#cluster}
  */
  readonly cluster: string;
  /**
  * Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#database_flags AlloydbInstance#database_flags}
  */
  readonly databaseFlags?: { [key: string]: string };
  /**
  * User-settable and human-readable display name for the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#display_name AlloydbInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#gce_zone AlloydbInstance#gce_zone}
  */
  readonly gceZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#id AlloydbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the alloydb instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#instance_id AlloydbInstance#instance_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#instance_type AlloydbInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * User-defined labels for the alloydb instance.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#labels AlloydbInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * client_connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#client_connection_config AlloydbInstance#client_connection_config}
  */
  readonly clientConnectionConfig?: AlloydbInstanceClientConnectionConfig;
  /**
  * machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#machine_config AlloydbInstance#machine_config}
  */
  readonly machineConfig?: AlloydbInstanceMachineConfig;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#network_config AlloydbInstance#network_config}
  */
  readonly networkConfig?: AlloydbInstanceNetworkConfig;
  /**
  * psc_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#psc_instance_config AlloydbInstance#psc_instance_config}
  */
  readonly pscInstanceConfig?: AlloydbInstancePscInstanceConfig;
  /**
  * query_insights_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#query_insights_config AlloydbInstance#query_insights_config}
  */
  readonly queryInsightsConfig?: AlloydbInstanceQueryInsightsConfig;
  /**
  * read_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#read_pool_config AlloydbInstance#read_pool_config}
  */
  readonly readPoolConfig?: AlloydbInstanceReadPoolConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#timeouts AlloydbInstance#timeouts}
  */
  readonly timeouts?: AlloydbInstanceTimeouts;
}
export interface AlloydbInstanceClientConnectionConfigSslConfig {
  /**
  * SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#ssl_mode AlloydbInstance#ssl_mode}
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


export function alloydbInstanceClientConnectionConfigSslConfigToHclTerraform(struct?: AlloydbInstanceClientConnectionConfigSslConfigOutputReference | AlloydbInstanceClientConnectionConfigSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#require_connectors AlloydbInstance#require_connectors}
  */
  readonly requireConnectors?: boolean | cdktf.IResolvable;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#ssl_config AlloydbInstance#ssl_config}
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


export function alloydbInstanceClientConnectionConfigToHclTerraform(struct?: AlloydbInstanceClientConnectionConfigOutputReference | AlloydbInstanceClientConnectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_connectors: {
      value: cdktf.booleanToHclTerraform(struct!.requireConnectors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_config: {
      value: alloydbInstanceClientConnectionConfigSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbInstanceClientConnectionConfigSslConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#cpu_count AlloydbInstance#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Machine type of the VM instance.
  * E.g. "n2-highmem-4", "n2-highmem-8", "c4a-highmem-4-lssd".
  * 'cpu_count' must match the number of vCPUs in the machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#machine_type AlloydbInstance#machine_type}
  */
  readonly machineType?: string;
}

export function alloydbInstanceMachineConfigToTerraform(struct?: AlloydbInstanceMachineConfigOutputReference | AlloydbInstanceMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}


export function alloydbInstanceMachineConfigToHclTerraform(struct?: AlloydbInstanceMachineConfigOutputReference | AlloydbInstanceMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._machineType = value.machineType;
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

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface AlloydbInstanceNetworkConfigAuthorizedExternalNetworks {
  /**
  * CIDR range for one authorized network of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#cidr_range AlloydbInstance#cidr_range}
  */
  readonly cidrRange?: string;
}

export function alloydbInstanceNetworkConfigAuthorizedExternalNetworksToTerraform(struct?: AlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_range: cdktf.stringToTerraform(struct!.cidrRange),
  }
}


export function alloydbInstanceNetworkConfigAuthorizedExternalNetworksToHclTerraform(struct?: AlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_range: {
      value: cdktf.stringToHclTerraform(struct!.cidrRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrRange = this._cidrRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceNetworkConfigAuthorizedExternalNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrRange = value.cidrRange;
    }
  }

  // cidr_range - computed: false, optional: true, required: false
  private _cidrRange?: string; 
  public get cidrRange() {
    return this.getStringAttribute('cidr_range');
  }
  public set cidrRange(value: string) {
    this._cidrRange = value;
  }
  public resetCidrRange() {
    this._cidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrRangeInput() {
    return this._cidrRange;
  }
}

export class AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList extends cdktf.ComplexList {
  public internalValue? : AlloydbInstanceNetworkConfigAuthorizedExternalNetworks[] | cdktf.IResolvable

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
  public get(index: number): AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference {
    return new AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbInstanceNetworkConfig {
  /**
  * Name of the allocated IP range for the private IP AlloyDB instance, for example: "google-managed-services-default".
  * If set, the instance IPs will be created from this allocated range and will override the IP range used by the parent cluster.
  * The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#allocated_ip_range_override AlloydbInstance#allocated_ip_range_override}
  */
  readonly allocatedIpRangeOverride?: string;
  /**
  * Enabling outbound public ip for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#enable_outbound_public_ip AlloydbInstance#enable_outbound_public_ip}
  */
  readonly enableOutboundPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Enabling public ip for the instance. If a user wishes to disable this,
  * please also clear the list of the authorized external networks set on
  * the same instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#enable_public_ip AlloydbInstance#enable_public_ip}
  */
  readonly enablePublicIp?: boolean | cdktf.IResolvable;
  /**
  * authorized_external_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#authorized_external_networks AlloydbInstance#authorized_external_networks}
  */
  readonly authorizedExternalNetworks?: AlloydbInstanceNetworkConfigAuthorizedExternalNetworks[] | cdktf.IResolvable;
}

export function alloydbInstanceNetworkConfigToTerraform(struct?: AlloydbInstanceNetworkConfigOutputReference | AlloydbInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range_override: cdktf.stringToTerraform(struct!.allocatedIpRangeOverride),
    enable_outbound_public_ip: cdktf.booleanToTerraform(struct!.enableOutboundPublicIp),
    enable_public_ip: cdktf.booleanToTerraform(struct!.enablePublicIp),
    authorized_external_networks: cdktf.listMapper(alloydbInstanceNetworkConfigAuthorizedExternalNetworksToTerraform, true)(struct!.authorizedExternalNetworks),
  }
}


export function alloydbInstanceNetworkConfigToHclTerraform(struct?: AlloydbInstanceNetworkConfigOutputReference | AlloydbInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated_ip_range_override: {
      value: cdktf.stringToHclTerraform(struct!.allocatedIpRangeOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_outbound_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enableOutboundPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authorized_external_networks: {
      value: cdktf.listMapperHcl(alloydbInstanceNetworkConfigAuthorizedExternalNetworksToHclTerraform, true)(struct!.authorizedExternalNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbInstanceNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbInstanceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRangeOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRangeOverride = this._allocatedIpRangeOverride;
    }
    if (this._enableOutboundPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOutboundPublicIp = this._enableOutboundPublicIp;
    }
    if (this._enablePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicIp = this._enablePublicIp;
    }
    if (this._authorizedExternalNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedExternalNetworks = this._authorizedExternalNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstanceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRangeOverride = undefined;
      this._enableOutboundPublicIp = undefined;
      this._enablePublicIp = undefined;
      this._authorizedExternalNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRangeOverride = value.allocatedIpRangeOverride;
      this._enableOutboundPublicIp = value.enableOutboundPublicIp;
      this._enablePublicIp = value.enablePublicIp;
      this._authorizedExternalNetworks.internalValue = value.authorizedExternalNetworks;
    }
  }

  // allocated_ip_range_override - computed: false, optional: true, required: false
  private _allocatedIpRangeOverride?: string; 
  public get allocatedIpRangeOverride() {
    return this.getStringAttribute('allocated_ip_range_override');
  }
  public set allocatedIpRangeOverride(value: string) {
    this._allocatedIpRangeOverride = value;
  }
  public resetAllocatedIpRangeOverride() {
    this._allocatedIpRangeOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeOverrideInput() {
    return this._allocatedIpRangeOverride;
  }

  // enable_outbound_public_ip - computed: false, optional: true, required: false
  private _enableOutboundPublicIp?: boolean | cdktf.IResolvable; 
  public get enableOutboundPublicIp() {
    return this.getBooleanAttribute('enable_outbound_public_ip');
  }
  public set enableOutboundPublicIp(value: boolean | cdktf.IResolvable) {
    this._enableOutboundPublicIp = value;
  }
  public resetEnableOutboundPublicIp() {
    this._enableOutboundPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOutboundPublicIpInput() {
    return this._enableOutboundPublicIp;
  }

  // enable_public_ip - computed: false, optional: true, required: false
  private _enablePublicIp?: boolean | cdktf.IResolvable; 
  public get enablePublicIp() {
    return this.getBooleanAttribute('enable_public_ip');
  }
  public set enablePublicIp(value: boolean | cdktf.IResolvable) {
    this._enablePublicIp = value;
  }
  public resetEnablePublicIp() {
    this._enablePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicIpInput() {
    return this._enablePublicIp;
  }

  // authorized_external_networks - computed: false, optional: true, required: false
  private _authorizedExternalNetworks = new AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(this, "authorized_external_networks", false);
  public get authorizedExternalNetworks() {
    return this._authorizedExternalNetworks;
  }
  public putAuthorizedExternalNetworks(value: AlloydbInstanceNetworkConfigAuthorizedExternalNetworks[] | cdktf.IResolvable) {
    this._authorizedExternalNetworks.internalValue = value;
  }
  public resetAuthorizedExternalNetworks() {
    this._authorizedExternalNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedExternalNetworksInput() {
    return this._authorizedExternalNetworks.internalValue;
  }
}
export interface AlloydbInstancePscInstanceConfigPscAutoConnections {
  /**
  * The consumer network for the PSC service automation, example:
  * "projects/vpc-host-project/global/networks/default".
  * The consumer network might be hosted a different project than the
  * consumer project. The API expects the consumer project specified to be
  * the project ID (and not the project number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#consumer_network AlloydbInstance#consumer_network}
  */
  readonly consumerNetwork?: string;
  /**
  * The consumer project to which the PSC service automation endpoint will
  * be created. The API expects the consumer project to be the project ID(
  * and not the project number).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#consumer_project AlloydbInstance#consumer_project}
  */
  readonly consumerProject?: string;
}

export function alloydbInstancePscInstanceConfigPscAutoConnectionsToTerraform(struct?: AlloydbInstancePscInstanceConfigPscAutoConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_network: cdktf.stringToTerraform(struct!.consumerNetwork),
    consumer_project: cdktf.stringToTerraform(struct!.consumerProject),
  }
}


export function alloydbInstancePscInstanceConfigPscAutoConnectionsToHclTerraform(struct?: AlloydbInstancePscInstanceConfigPscAutoConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumer_network: {
      value: cdktf.stringToHclTerraform(struct!.consumerNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_project: {
      value: cdktf.stringToHclTerraform(struct!.consumerProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbInstancePscInstanceConfigPscAutoConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerNetwork = this._consumerNetwork;
    }
    if (this._consumerProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerProject = this._consumerProject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstancePscInstanceConfigPscAutoConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consumerNetwork = undefined;
      this._consumerProject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consumerNetwork = value.consumerNetwork;
      this._consumerProject = value.consumerProject;
    }
  }

  // consumer_network - computed: false, optional: true, required: false
  private _consumerNetwork?: string; 
  public get consumerNetwork() {
    return this.getStringAttribute('consumer_network');
  }
  public set consumerNetwork(value: string) {
    this._consumerNetwork = value;
  }
  public resetConsumerNetwork() {
    this._consumerNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerNetworkInput() {
    return this._consumerNetwork;
  }

  // consumer_network_status - computed: true, optional: false, required: false
  public get consumerNetworkStatus() {
    return this.getStringAttribute('consumer_network_status');
  }

  // consumer_project - computed: false, optional: true, required: false
  private _consumerProject?: string; 
  public get consumerProject() {
    return this.getStringAttribute('consumer_project');
  }
  public set consumerProject(value: string) {
    this._consumerProject = value;
  }
  public resetConsumerProject() {
    this._consumerProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerProjectInput() {
    return this._consumerProject;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class AlloydbInstancePscInstanceConfigPscAutoConnectionsList extends cdktf.ComplexList {
  public internalValue? : AlloydbInstancePscInstanceConfigPscAutoConnections[] | cdktf.IResolvable

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
  public get(index: number): AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference {
    return new AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbInstancePscInstanceConfigPscInterfaceConfigs {
  /**
  * The network attachment resource created in the consumer project to which the PSC interface will be linked.
  * This is of the format: "projects/${CONSUMER_PROJECT}/regions/${REGION}/networkAttachments/${NETWORK_ATTACHMENT_NAME}".
  * The network attachment must be in the same region as the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#network_attachment_resource AlloydbInstance#network_attachment_resource}
  */
  readonly networkAttachmentResource?: string;
}

export function alloydbInstancePscInstanceConfigPscInterfaceConfigsToTerraform(struct?: AlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment_resource: cdktf.stringToTerraform(struct!.networkAttachmentResource),
  }
}


export function alloydbInstancePscInstanceConfigPscInterfaceConfigsToHclTerraform(struct?: AlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_attachment_resource: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachmentResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachmentResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachmentResource = this._networkAttachmentResource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstancePscInstanceConfigPscInterfaceConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAttachmentResource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkAttachmentResource = value.networkAttachmentResource;
    }
  }

  // network_attachment_resource - computed: false, optional: true, required: false
  private _networkAttachmentResource?: string; 
  public get networkAttachmentResource() {
    return this.getStringAttribute('network_attachment_resource');
  }
  public set networkAttachmentResource(value: string) {
    this._networkAttachmentResource = value;
  }
  public resetNetworkAttachmentResource() {
    this._networkAttachmentResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentResourceInput() {
    return this._networkAttachmentResource;
  }
}

export class AlloydbInstancePscInstanceConfigPscInterfaceConfigsList extends cdktf.ComplexList {
  public internalValue? : AlloydbInstancePscInstanceConfigPscInterfaceConfigs[] | cdktf.IResolvable

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
  public get(index: number): AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference {
    return new AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlloydbInstancePscInstanceConfig {
  /**
  * List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.
  * These should be specified as project numbers only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#allowed_consumer_projects AlloydbInstance#allowed_consumer_projects}
  */
  readonly allowedConsumerProjects?: string[];
  /**
  * psc_auto_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#psc_auto_connections AlloydbInstance#psc_auto_connections}
  */
  readonly pscAutoConnections?: AlloydbInstancePscInstanceConfigPscAutoConnections[] | cdktf.IResolvable;
  /**
  * psc_interface_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#psc_interface_configs AlloydbInstance#psc_interface_configs}
  */
  readonly pscInterfaceConfigs?: AlloydbInstancePscInstanceConfigPscInterfaceConfigs[] | cdktf.IResolvable;
}

export function alloydbInstancePscInstanceConfigToTerraform(struct?: AlloydbInstancePscInstanceConfigOutputReference | AlloydbInstancePscInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_consumer_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedConsumerProjects),
    psc_auto_connections: cdktf.listMapper(alloydbInstancePscInstanceConfigPscAutoConnectionsToTerraform, true)(struct!.pscAutoConnections),
    psc_interface_configs: cdktf.listMapper(alloydbInstancePscInstanceConfigPscInterfaceConfigsToTerraform, true)(struct!.pscInterfaceConfigs),
  }
}


export function alloydbInstancePscInstanceConfigToHclTerraform(struct?: AlloydbInstancePscInstanceConfigOutputReference | AlloydbInstancePscInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_consumer_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedConsumerProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    psc_auto_connections: {
      value: cdktf.listMapperHcl(alloydbInstancePscInstanceConfigPscAutoConnectionsToHclTerraform, true)(struct!.pscAutoConnections),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbInstancePscInstanceConfigPscAutoConnectionsList",
    },
    psc_interface_configs: {
      value: cdktf.listMapperHcl(alloydbInstancePscInstanceConfigPscInterfaceConfigsToHclTerraform, true)(struct!.pscInterfaceConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "AlloydbInstancePscInstanceConfigPscInterfaceConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlloydbInstancePscInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlloydbInstancePscInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedConsumerProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedConsumerProjects = this._allowedConsumerProjects;
    }
    if (this._pscAutoConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscAutoConnections = this._pscAutoConnections?.internalValue;
    }
    if (this._pscInterfaceConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscInterfaceConfigs = this._pscInterfaceConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlloydbInstancePscInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedConsumerProjects = undefined;
      this._pscAutoConnections.internalValue = undefined;
      this._pscInterfaceConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedConsumerProjects = value.allowedConsumerProjects;
      this._pscAutoConnections.internalValue = value.pscAutoConnections;
      this._pscInterfaceConfigs.internalValue = value.pscInterfaceConfigs;
    }
  }

  // allowed_consumer_projects - computed: false, optional: true, required: false
  private _allowedConsumerProjects?: string[]; 
  public get allowedConsumerProjects() {
    return this.getListAttribute('allowed_consumer_projects');
  }
  public set allowedConsumerProjects(value: string[]) {
    this._allowedConsumerProjects = value;
  }
  public resetAllowedConsumerProjects() {
    this._allowedConsumerProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedConsumerProjectsInput() {
    return this._allowedConsumerProjects;
  }

  // psc_dns_name - computed: true, optional: false, required: false
  public get pscDnsName() {
    return this.getStringAttribute('psc_dns_name');
  }

  // service_attachment_link - computed: true, optional: false, required: false
  public get serviceAttachmentLink() {
    return this.getStringAttribute('service_attachment_link');
  }

  // psc_auto_connections - computed: false, optional: true, required: false
  private _pscAutoConnections = new AlloydbInstancePscInstanceConfigPscAutoConnectionsList(this, "psc_auto_connections", false);
  public get pscAutoConnections() {
    return this._pscAutoConnections;
  }
  public putPscAutoConnections(value: AlloydbInstancePscInstanceConfigPscAutoConnections[] | cdktf.IResolvable) {
    this._pscAutoConnections.internalValue = value;
  }
  public resetPscAutoConnections() {
    this._pscAutoConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscAutoConnectionsInput() {
    return this._pscAutoConnections.internalValue;
  }

  // psc_interface_configs - computed: false, optional: true, required: false
  private _pscInterfaceConfigs = new AlloydbInstancePscInstanceConfigPscInterfaceConfigsList(this, "psc_interface_configs", false);
  public get pscInterfaceConfigs() {
    return this._pscInterfaceConfigs;
  }
  public putPscInterfaceConfigs(value: AlloydbInstancePscInstanceConfigPscInterfaceConfigs[] | cdktf.IResolvable) {
    this._pscInterfaceConfigs.internalValue = value;
  }
  public resetPscInterfaceConfigs() {
    this._pscInterfaceConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInterfaceConfigsInput() {
    return this._pscInterfaceConfigs.internalValue;
  }
}
export interface AlloydbInstanceQueryInsightsConfig {
  /**
  * Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#query_plans_per_minute AlloydbInstance#query_plans_per_minute}
  */
  readonly queryPlansPerMinute?: number;
  /**
  * Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#query_string_length AlloydbInstance#query_string_length}
  */
  readonly queryStringLength?: number;
  /**
  * Record application tags for an instance. This flag is turned "on" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#record_application_tags AlloydbInstance#record_application_tags}
  */
  readonly recordApplicationTags?: boolean | cdktf.IResolvable;
  /**
  * Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#record_client_address AlloydbInstance#record_client_address}
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


export function alloydbInstanceQueryInsightsConfigToHclTerraform(struct?: AlloydbInstanceQueryInsightsConfigOutputReference | AlloydbInstanceQueryInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_plans_per_minute: {
      value: cdktf.numberToHclTerraform(struct!.queryPlansPerMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_string_length: {
      value: cdktf.numberToHclTerraform(struct!.queryStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_application_tags: {
      value: cdktf.booleanToHclTerraform(struct!.recordApplicationTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_client_address: {
      value: cdktf.booleanToHclTerraform(struct!.recordClientAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#node_count AlloydbInstance#node_count}
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


export function alloydbInstanceReadPoolConfigToHclTerraform(struct?: AlloydbInstanceReadPoolConfigOutputReference | AlloydbInstanceReadPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#create AlloydbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#delete AlloydbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#update AlloydbInstance#update}
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


export function alloydbInstanceTimeoutsToHclTerraform(struct?: AlloydbInstanceTimeouts | cdktf.IResolvable): any {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance google_alloydb_instance}
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
  * @param importFromId The id of the existing AlloydbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlloydbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_alloydb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance google_alloydb_instance} Resource
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
    this._activationPolicy = config.activationPolicy;
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
    this._networkConfig.internalValue = config.networkConfig;
    this._pscInstanceConfig.internalValue = config.pscInstanceConfig;
    this._queryInsightsConfig.internalValue = config.queryInsightsConfig;
    this._readPoolConfig.internalValue = config.readPoolConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_policy - computed: true, optional: true, required: false
  private _activationPolicy?: string; 
  public get activationPolicy() {
    return this.getStringAttribute('activation_policy');
  }
  public set activationPolicy(value: string) {
    this._activationPolicy = value;
  }
  public resetActivationPolicy() {
    this._activationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationPolicyInput() {
    return this._activationPolicy;
  }

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

  // database_flags - computed: true, optional: true, required: false
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

  // outbound_public_ip_addresses - computed: true, optional: false, required: false
  public get outboundPublicIpAddresses() {
    return this.getListAttribute('outbound_public_ip_addresses');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
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

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new AlloydbInstanceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: AlloydbInstanceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // psc_instance_config - computed: false, optional: true, required: false
  private _pscInstanceConfig = new AlloydbInstancePscInstanceConfigOutputReference(this, "psc_instance_config");
  public get pscInstanceConfig() {
    return this._pscInstanceConfig;
  }
  public putPscInstanceConfig(value: AlloydbInstancePscInstanceConfig) {
    this._pscInstanceConfig.internalValue = value;
  }
  public resetPscInstanceConfig() {
    this._pscInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInstanceConfigInput() {
    return this._pscInstanceConfig.internalValue;
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
      activation_policy: cdktf.stringToTerraform(this._activationPolicy),
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
      network_config: alloydbInstanceNetworkConfigToTerraform(this._networkConfig.internalValue),
      psc_instance_config: alloydbInstancePscInstanceConfigToTerraform(this._pscInstanceConfig.internalValue),
      query_insights_config: alloydbInstanceQueryInsightsConfigToTerraform(this._queryInsightsConfig.internalValue),
      read_pool_config: alloydbInstanceReadPoolConfigToTerraform(this._readPoolConfig.internalValue),
      timeouts: alloydbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_policy: {
        value: cdktf.stringToHclTerraform(this._activationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      availability_type: {
        value: cdktf.stringToHclTerraform(this._availabilityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_flags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._databaseFlags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gce_zone: {
        value: cdktf.stringToHclTerraform(this._gceZone),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
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
      client_connection_config: {
        value: alloydbInstanceClientConnectionConfigToHclTerraform(this._clientConnectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbInstanceClientConnectionConfigList",
      },
      machine_config: {
        value: alloydbInstanceMachineConfigToHclTerraform(this._machineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbInstanceMachineConfigList",
      },
      network_config: {
        value: alloydbInstanceNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbInstanceNetworkConfigList",
      },
      psc_instance_config: {
        value: alloydbInstancePscInstanceConfigToHclTerraform(this._pscInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbInstancePscInstanceConfigList",
      },
      query_insights_config: {
        value: alloydbInstanceQueryInsightsConfigToHclTerraform(this._queryInsightsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbInstanceQueryInsightsConfigList",
      },
      read_pool_config: {
        value: alloydbInstanceReadPoolConfigToHclTerraform(this._readPoolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlloydbInstanceReadPoolConfigList",
      },
      timeouts: {
        value: alloydbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlloydbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

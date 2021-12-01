// https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#graceful_decommission_timeout DataprocCluster#graceful_decommission_timeout}
  */
  readonly gracefulDecommissionTimeout?: string;
  /**
  * The list of labels (key/value pairs) to be applied to instances in the cluster. GCP generates some itself including goog-dataproc-cluster-name which is the name of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#labels DataprocCluster#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name of the cluster, unique within the project and zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#name DataprocCluster#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the cluster will exist. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#project DataprocCluster#project}
  */
  readonly project?: string;
  /**
  * The region in which the cluster and associated nodes will be created in. Defaults to global.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#region DataprocCluster#region}
  */
  readonly region?: string;
  /**
  * cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cluster_config DataprocCluster#cluster_config}
  */
  readonly clusterConfig?: DataprocClusterClusterConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#timeouts DataprocCluster#timeouts}
  */
  readonly timeouts?: DataprocClusterTimeouts;
}
export interface DataprocClusterClusterConfigAutoscalingConfig {
  /**
  * The autoscaling policy used by the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#policy_uri DataprocCluster#policy_uri}
  */
  readonly policyUri: string;
}

export function dataprocClusterClusterConfigAutoscalingConfigToTerraform(struct?: DataprocClusterClusterConfigAutoscalingConfigOutputReference | DataprocClusterClusterConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_uri: cdktf.stringToTerraform(struct!.policyUri),
  }
}

export class DataprocClusterClusterConfigAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigAutoscalingConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._policyUri) {
      hasAnyValues = true;
      internalValueResult.policyUri = this._policyUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigAutoscalingConfig | undefined) {
    if (value === undefined) {
      this._policyUri = undefined;
    }
    else {
      this._policyUri = value.policyUri;
    }
  }

  // policy_uri - computed: false, optional: false, required: true
  private _policyUri?: string; 
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }
  public set policyUri(value: string) {
    this._policyUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriInput() {
    return this._policyUri;
  }
}
export interface DataprocClusterClusterConfigEncryptionConfig {
  /**
  * The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kms_key_name DataprocCluster#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function dataprocClusterClusterConfigEncryptionConfigToTerraform(struct?: DataprocClusterClusterConfigEncryptionConfigOutputReference | DataprocClusterClusterConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class DataprocClusterClusterConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigEncryptionConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._kmsKeyName) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this._kmsKeyName = undefined;
    }
    else {
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
  /**
  * Defines whether instances have integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_integrity_monitoring DataprocCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether instances have Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_secure_boot DataprocCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether instances have the vTPM enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_vtpm DataprocCluster#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference | DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export class DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring') as any;
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot') as any;
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm') as any;
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface DataprocClusterClusterConfigGceClusterConfig {
  /**
  * By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. If set to true, all instances in the cluster will only have internal IP addresses. Note: Private Google Access (also known as privateIpGoogleAccess) must be enabled on the subnetwork that the cluster will be launched in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#internal_ip_only DataprocCluster#internal_ip_only}
  */
  readonly internalIpOnly?: boolean | cdktf.IResolvable;
  /**
  * A map of the Compute Engine metadata entries to add to all instances
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#metadata DataprocCluster#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name or self_link of the Google Compute Engine network to the cluster will be part of. Conflicts with subnetwork. If neither is specified, this defaults to the "default" network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#network DataprocCluster#network}
  */
  readonly network?: string;
  /**
  * The service account to be used by the Node VMs. If not specified, the "default" service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#service_account DataprocCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs under the service_account specified. These can be either FQDNs, or scope aliases.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#service_account_scopes DataprocCluster#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#subnetwork DataprocCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The list of instance tags applied to instances in the cluster. Tags are used to identify valid sources or targets for network firewalls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#tags DataprocCluster#tags}
  */
  readonly tags?: string[];
  /**
  * The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#zone DataprocCluster#zone}
  */
  readonly zone?: string;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#shielded_instance_config DataprocCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig;
}

export function dataprocClusterClusterConfigGceClusterConfigToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigOutputReference | DataprocClusterClusterConfigGceClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip_only: cdktf.booleanToTerraform(struct!.internalIpOnly),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceAccountScopes),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
    shielded_instance_config: dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}

export class DataprocClusterClusterConfigGceClusterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigGceClusterConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._internalIpOnly) {
      hasAnyValues = true;
      internalValueResult.internalIpOnly = this._internalIpOnly;
    }
    if (this._metadata) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._network) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._serviceAccount) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceAccountScopes) {
      hasAnyValues = true;
      internalValueResult.serviceAccountScopes = this._serviceAccountScopes;
    }
    if (this._subnetwork) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._shieldedInstanceConfig) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigGceClusterConfig | undefined) {
    if (value === undefined) {
      this._internalIpOnly = undefined;
      this._metadata = undefined;
      this._network = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountScopes = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
      this._zone = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this._internalIpOnly = value.internalIpOnly;
      this._metadata = value.metadata;
      this._network = value.network;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountScopes = value.serviceAccountScopes;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
      this._zone = value.zone;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // internal_ip_only - computed: false, optional: true, required: false
  private _internalIpOnly?: boolean | cdktf.IResolvable; 
  public get internalIpOnly() {
    return this.getBooleanAttribute('internal_ip_only') as any;
  }
  public set internalIpOnly(value: boolean | cdktf.IResolvable) {
    this._internalIpOnly = value;
  }
  public resetInternalIpOnly() {
    this._internalIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpOnlyInput() {
    return this._internalIpOnly;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_scopes - computed: true, optional: true, required: false
  private _serviceAccountScopes?: string[]; 
  public get serviceAccountScopes() {
    return this.getListAttribute('service_account_scopes');
  }
  public set serviceAccountScopes(value: string[]) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigOutputReference(this as any, "shielded_instance_config", true);
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfigInitializationAction {
  /**
  * The script to be executed during initialization of the cluster. The script must be a GCS file with a gs:// prefix.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#script DataprocCluster#script}
  */
  readonly script: string;
  /**
  * The maximum duration (in seconds) which script is allowed to take to execute its action. GCP will default to a predetermined computed value if not set (currently 300).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#timeout_sec DataprocCluster#timeout_sec}
  */
  readonly timeoutSec?: number;
}

export function dataprocClusterClusterConfigInitializationActionToTerraform(struct?: DataprocClusterClusterConfigInitializationAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
    timeout_sec: cdktf.numberToTerraform(struct!.timeoutSec),
  }
}

export interface DataprocClusterClusterConfigMasterConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_count DataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_type DataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function dataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform(struct?: DataprocClusterClusterConfigMasterConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocClusterClusterConfigMasterConfigDiskConfig {
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigMasterConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference | DataprocClusterClusterConfigMasterConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigMasterConfigDiskConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfigDiskConfig | undefined) {
    if (value === undefined) {
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigMasterConfig {
  /**
  * The URI for the image to use for this master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#image_uri DataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerators DataprocCluster#accelerators}
  */
  readonly accelerators?: DataprocClusterClusterConfigMasterConfigAccelerators[];
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigMasterConfigDiskConfig;
}

export function dataprocClusterClusterConfigMasterConfigToTerraform(struct?: DataprocClusterClusterConfigMasterConfigOutputReference | DataprocClusterClusterConfigMasterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    accelerators: cdktf.listMapper(dataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: dataprocClusterClusterConfigMasterConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class DataprocClusterClusterConfigMasterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigMasterConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._imageUri) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._machineType) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._accelerators) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators;
    }
    if (this._diskConfig) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigMasterConfig | undefined) {
    if (value === undefined) {
      this._imageUri = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._accelerators = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this._imageUri = value.imageUri;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._accelerators = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
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

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocClusterClusterConfigMasterConfigAccelerators[]; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocClusterClusterConfigMasterConfigAccelerators[]) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigMasterConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigMasterConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig {
  /**
  * Size of the primary disk attached to each preemptible worker node, specified in GB. The smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each preemptible worker node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfig {
  /**
  * Specifies the number of preemptible nodes to create. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig;
}

export function dataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference | DataprocClusterClusterConfigPreemptibleWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    disk_config: dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigPreemptibleWorkerConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._numInstances) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._diskConfig) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigPreemptibleWorkerConfig | undefined) {
    if (value === undefined) {
      this._numInstances = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this._numInstances = value.numInstances;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfigSecurityConfigKerberosConfig {
  /**
  * The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_admin_server DataprocCluster#cross_realm_trust_admin_server}
  */
  readonly crossRealmTrustAdminServer?: string;
  /**
  * The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_kdc DataprocCluster#cross_realm_trust_kdc}
  */
  readonly crossRealmTrustKdc?: string;
  /**
  * The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_realm DataprocCluster#cross_realm_trust_realm}
  */
  readonly crossRealmTrustRealm?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster
Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_shared_password_uri DataprocCluster#cross_realm_trust_shared_password_uri}
  */
  readonly crossRealmTrustSharedPasswordUri?: string;
  /**
  * Flag to indicate whether to Kerberize the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_kerberos DataprocCluster#enable_kerberos}
  */
  readonly enableKerberos?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kdc_db_key_uri DataprocCluster#kdc_db_key_uri}
  */
  readonly kdcDbKeyUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#key_password_uri DataprocCluster#key_password_uri}
  */
  readonly keyPasswordUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided keystore. For the self-signed certificate, this password is generated
by Dataproc
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#keystore_password_uri DataprocCluster#keystore_password_uri}
  */
  readonly keystorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#keystore_uri DataprocCluster#keystore_uri}
  */
  readonly keystoreUri?: string;
  /**
  * The uri of the KMS key used to encrypt various sensitive files.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kms_key_uri DataprocCluster#kms_key_uri}
  */
  readonly kmsKeyUri: string;
  /**
  * The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#realm DataprocCluster#realm}
  */
  readonly realm?: string;
  /**
  * The cloud Storage URI of a KMS encrypted file containing the root principal password.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#root_principal_password_uri DataprocCluster#root_principal_password_uri}
  */
  readonly rootPrincipalPasswordUri: string;
  /**
  * The lifetime of the ticket granting ticket, in hours.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#tgt_lifetime_hours DataprocCluster#tgt_lifetime_hours}
  */
  readonly tgtLifetimeHours?: number;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#truststore_password_uri DataprocCluster#truststore_password_uri}
  */
  readonly truststorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#truststore_uri DataprocCluster#truststore_uri}
  */
  readonly truststoreUri?: string;
}

export function dataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference | DataprocClusterClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_realm_trust_admin_server: cdktf.stringToTerraform(struct!.crossRealmTrustAdminServer),
    cross_realm_trust_kdc: cdktf.stringToTerraform(struct!.crossRealmTrustKdc),
    cross_realm_trust_realm: cdktf.stringToTerraform(struct!.crossRealmTrustRealm),
    cross_realm_trust_shared_password_uri: cdktf.stringToTerraform(struct!.crossRealmTrustSharedPasswordUri),
    enable_kerberos: cdktf.booleanToTerraform(struct!.enableKerberos),
    kdc_db_key_uri: cdktf.stringToTerraform(struct!.kdcDbKeyUri),
    key_password_uri: cdktf.stringToTerraform(struct!.keyPasswordUri),
    keystore_password_uri: cdktf.stringToTerraform(struct!.keystorePasswordUri),
    keystore_uri: cdktf.stringToTerraform(struct!.keystoreUri),
    kms_key_uri: cdktf.stringToTerraform(struct!.kmsKeyUri),
    realm: cdktf.stringToTerraform(struct!.realm),
    root_principal_password_uri: cdktf.stringToTerraform(struct!.rootPrincipalPasswordUri),
    tgt_lifetime_hours: cdktf.numberToTerraform(struct!.tgtLifetimeHours),
    truststore_password_uri: cdktf.stringToTerraform(struct!.truststorePasswordUri),
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
  }
}

export class DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigSecurityConfigKerberosConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._crossRealmTrustAdminServer) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustAdminServer = this._crossRealmTrustAdminServer;
    }
    if (this._crossRealmTrustKdc) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustKdc = this._crossRealmTrustKdc;
    }
    if (this._crossRealmTrustRealm) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustRealm = this._crossRealmTrustRealm;
    }
    if (this._crossRealmTrustSharedPasswordUri) {
      hasAnyValues = true;
      internalValueResult.crossRealmTrustSharedPasswordUri = this._crossRealmTrustSharedPasswordUri;
    }
    if (this._enableKerberos) {
      hasAnyValues = true;
      internalValueResult.enableKerberos = this._enableKerberos;
    }
    if (this._kdcDbKeyUri) {
      hasAnyValues = true;
      internalValueResult.kdcDbKeyUri = this._kdcDbKeyUri;
    }
    if (this._keyPasswordUri) {
      hasAnyValues = true;
      internalValueResult.keyPasswordUri = this._keyPasswordUri;
    }
    if (this._keystorePasswordUri) {
      hasAnyValues = true;
      internalValueResult.keystorePasswordUri = this._keystorePasswordUri;
    }
    if (this._keystoreUri) {
      hasAnyValues = true;
      internalValueResult.keystoreUri = this._keystoreUri;
    }
    if (this._kmsKeyUri) {
      hasAnyValues = true;
      internalValueResult.kmsKeyUri = this._kmsKeyUri;
    }
    if (this._realm) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._rootPrincipalPasswordUri) {
      hasAnyValues = true;
      internalValueResult.rootPrincipalPasswordUri = this._rootPrincipalPasswordUri;
    }
    if (this._tgtLifetimeHours) {
      hasAnyValues = true;
      internalValueResult.tgtLifetimeHours = this._tgtLifetimeHours;
    }
    if (this._truststorePasswordUri) {
      hasAnyValues = true;
      internalValueResult.truststorePasswordUri = this._truststorePasswordUri;
    }
    if (this._truststoreUri) {
      hasAnyValues = true;
      internalValueResult.truststoreUri = this._truststoreUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSecurityConfigKerberosConfig | undefined) {
    if (value === undefined) {
      this._crossRealmTrustAdminServer = undefined;
      this._crossRealmTrustKdc = undefined;
      this._crossRealmTrustRealm = undefined;
      this._crossRealmTrustSharedPasswordUri = undefined;
      this._enableKerberos = undefined;
      this._kdcDbKeyUri = undefined;
      this._keyPasswordUri = undefined;
      this._keystorePasswordUri = undefined;
      this._keystoreUri = undefined;
      this._kmsKeyUri = undefined;
      this._realm = undefined;
      this._rootPrincipalPasswordUri = undefined;
      this._tgtLifetimeHours = undefined;
      this._truststorePasswordUri = undefined;
      this._truststoreUri = undefined;
    }
    else {
      this._crossRealmTrustAdminServer = value.crossRealmTrustAdminServer;
      this._crossRealmTrustKdc = value.crossRealmTrustKdc;
      this._crossRealmTrustRealm = value.crossRealmTrustRealm;
      this._crossRealmTrustSharedPasswordUri = value.crossRealmTrustSharedPasswordUri;
      this._enableKerberos = value.enableKerberos;
      this._kdcDbKeyUri = value.kdcDbKeyUri;
      this._keyPasswordUri = value.keyPasswordUri;
      this._keystorePasswordUri = value.keystorePasswordUri;
      this._keystoreUri = value.keystoreUri;
      this._kmsKeyUri = value.kmsKeyUri;
      this._realm = value.realm;
      this._rootPrincipalPasswordUri = value.rootPrincipalPasswordUri;
      this._tgtLifetimeHours = value.tgtLifetimeHours;
      this._truststorePasswordUri = value.truststorePasswordUri;
      this._truststoreUri = value.truststoreUri;
    }
  }

  // cross_realm_trust_admin_server - computed: false, optional: true, required: false
  private _crossRealmTrustAdminServer?: string; 
  public get crossRealmTrustAdminServer() {
    return this.getStringAttribute('cross_realm_trust_admin_server');
  }
  public set crossRealmTrustAdminServer(value: string) {
    this._crossRealmTrustAdminServer = value;
  }
  public resetCrossRealmTrustAdminServer() {
    this._crossRealmTrustAdminServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustAdminServerInput() {
    return this._crossRealmTrustAdminServer;
  }

  // cross_realm_trust_kdc - computed: false, optional: true, required: false
  private _crossRealmTrustKdc?: string; 
  public get crossRealmTrustKdc() {
    return this.getStringAttribute('cross_realm_trust_kdc');
  }
  public set crossRealmTrustKdc(value: string) {
    this._crossRealmTrustKdc = value;
  }
  public resetCrossRealmTrustKdc() {
    this._crossRealmTrustKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustKdcInput() {
    return this._crossRealmTrustKdc;
  }

  // cross_realm_trust_realm - computed: false, optional: true, required: false
  private _crossRealmTrustRealm?: string; 
  public get crossRealmTrustRealm() {
    return this.getStringAttribute('cross_realm_trust_realm');
  }
  public set crossRealmTrustRealm(value: string) {
    this._crossRealmTrustRealm = value;
  }
  public resetCrossRealmTrustRealm() {
    this._crossRealmTrustRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustRealmInput() {
    return this._crossRealmTrustRealm;
  }

  // cross_realm_trust_shared_password_uri - computed: false, optional: true, required: false
  private _crossRealmTrustSharedPasswordUri?: string; 
  public get crossRealmTrustSharedPasswordUri() {
    return this.getStringAttribute('cross_realm_trust_shared_password_uri');
  }
  public set crossRealmTrustSharedPasswordUri(value: string) {
    this._crossRealmTrustSharedPasswordUri = value;
  }
  public resetCrossRealmTrustSharedPasswordUri() {
    this._crossRealmTrustSharedPasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRealmTrustSharedPasswordUriInput() {
    return this._crossRealmTrustSharedPasswordUri;
  }

  // enable_kerberos - computed: false, optional: true, required: false
  private _enableKerberos?: boolean | cdktf.IResolvable; 
  public get enableKerberos() {
    return this.getBooleanAttribute('enable_kerberos') as any;
  }
  public set enableKerberos(value: boolean | cdktf.IResolvable) {
    this._enableKerberos = value;
  }
  public resetEnableKerberos() {
    this._enableKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKerberosInput() {
    return this._enableKerberos;
  }

  // kdc_db_key_uri - computed: false, optional: true, required: false
  private _kdcDbKeyUri?: string; 
  public get kdcDbKeyUri() {
    return this.getStringAttribute('kdc_db_key_uri');
  }
  public set kdcDbKeyUri(value: string) {
    this._kdcDbKeyUri = value;
  }
  public resetKdcDbKeyUri() {
    this._kdcDbKeyUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcDbKeyUriInput() {
    return this._kdcDbKeyUri;
  }

  // key_password_uri - computed: false, optional: true, required: false
  private _keyPasswordUri?: string; 
  public get keyPasswordUri() {
    return this.getStringAttribute('key_password_uri');
  }
  public set keyPasswordUri(value: string) {
    this._keyPasswordUri = value;
  }
  public resetKeyPasswordUri() {
    this._keyPasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordUriInput() {
    return this._keyPasswordUri;
  }

  // keystore_password_uri - computed: false, optional: true, required: false
  private _keystorePasswordUri?: string; 
  public get keystorePasswordUri() {
    return this.getStringAttribute('keystore_password_uri');
  }
  public set keystorePasswordUri(value: string) {
    this._keystorePasswordUri = value;
  }
  public resetKeystorePasswordUri() {
    this._keystorePasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystorePasswordUriInput() {
    return this._keystorePasswordUri;
  }

  // keystore_uri - computed: false, optional: true, required: false
  private _keystoreUri?: string; 
  public get keystoreUri() {
    return this.getStringAttribute('keystore_uri');
  }
  public set keystoreUri(value: string) {
    this._keystoreUri = value;
  }
  public resetKeystoreUri() {
    this._keystoreUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreUriInput() {
    return this._keystoreUri;
  }

  // kms_key_uri - computed: false, optional: false, required: true
  private _kmsKeyUri?: string; 
  public get kmsKeyUri() {
    return this.getStringAttribute('kms_key_uri');
  }
  public set kmsKeyUri(value: string) {
    this._kmsKeyUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyUriInput() {
    return this._kmsKeyUri;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // root_principal_password_uri - computed: false, optional: false, required: true
  private _rootPrincipalPasswordUri?: string; 
  public get rootPrincipalPasswordUri() {
    return this.getStringAttribute('root_principal_password_uri');
  }
  public set rootPrincipalPasswordUri(value: string) {
    this._rootPrincipalPasswordUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPrincipalPasswordUriInput() {
    return this._rootPrincipalPasswordUri;
  }

  // tgt_lifetime_hours - computed: false, optional: true, required: false
  private _tgtLifetimeHours?: number; 
  public get tgtLifetimeHours() {
    return this.getNumberAttribute('tgt_lifetime_hours');
  }
  public set tgtLifetimeHours(value: number) {
    this._tgtLifetimeHours = value;
  }
  public resetTgtLifetimeHours() {
    this._tgtLifetimeHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtLifetimeHoursInput() {
    return this._tgtLifetimeHours;
  }

  // truststore_password_uri - computed: false, optional: true, required: false
  private _truststorePasswordUri?: string; 
  public get truststorePasswordUri() {
    return this.getStringAttribute('truststore_password_uri');
  }
  public set truststorePasswordUri(value: string) {
    this._truststorePasswordUri = value;
  }
  public resetTruststorePasswordUri() {
    this._truststorePasswordUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststorePasswordUriInput() {
    return this._truststorePasswordUri;
  }

  // truststore_uri - computed: false, optional: true, required: false
  private _truststoreUri?: string; 
  public get truststoreUri() {
    return this.getStringAttribute('truststore_uri');
  }
  public set truststoreUri(value: string) {
    this._truststoreUri = value;
  }
  public resetTruststoreUri() {
    this._truststoreUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreUriInput() {
    return this._truststoreUri;
  }
}
export interface DataprocClusterClusterConfigSecurityConfig {
  /**
  * kerberos_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kerberos_config DataprocCluster#kerberos_config}
  */
  readonly kerberosConfig: DataprocClusterClusterConfigSecurityConfigKerberosConfig;
}

export function dataprocClusterClusterConfigSecurityConfigToTerraform(struct?: DataprocClusterClusterConfigSecurityConfigOutputReference | DataprocClusterClusterConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_config: dataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}

export class DataprocClusterClusterConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigSecurityConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._kerberosConfig) {
      hasAnyValues = true;
      internalValueResult.kerberosConfig = this._kerberosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSecurityConfig | undefined) {
    if (value === undefined) {
      this._kerberosConfig.internalValue = undefined;
    }
    else {
      this._kerberosConfig.internalValue = value.kerberosConfig;
    }
  }

  // kerberos_config - computed: false, optional: false, required: true
  private _kerberosConfig = new DataprocClusterClusterConfigSecurityConfigKerberosConfigOutputReference(this as any, "kerberos_config", true);
  public get kerberosConfig() {
    return this._kerberosConfig;
  }
  public putKerberosConfig(value: DataprocClusterClusterConfigSecurityConfigKerberosConfig) {
    this._kerberosConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosConfigInput() {
    return this._kerberosConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfigSoftwareConfig {
  /**
  * The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters. If not specified, defaults to the latest version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#image_version DataprocCluster#image_version}
  */
  readonly imageVersion?: string;
  /**
  * The set of optional components to activate on the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#optional_components DataprocCluster#optional_components}
  */
  readonly optionalComponents?: string[];
  /**
  * A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#override_properties DataprocCluster#override_properties}
  */
  readonly overrideProperties?: { [key: string]: string } | cdktf.IResolvable;
}

export function dataprocClusterClusterConfigSoftwareConfigToTerraform(struct?: DataprocClusterClusterConfigSoftwareConfigOutputReference | DataprocClusterClusterConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    optional_components: cdktf.listMapper(cdktf.stringToTerraform)(struct!.optionalComponents),
    override_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.overrideProperties),
  }
}

export class DataprocClusterClusterConfigSoftwareConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigSoftwareConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._imageVersion) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._optionalComponents) {
      hasAnyValues = true;
      internalValueResult.optionalComponents = this._optionalComponents;
    }
    if (this._overrideProperties) {
      hasAnyValues = true;
      internalValueResult.overrideProperties = this._overrideProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigSoftwareConfig | undefined) {
    if (value === undefined) {
      this._imageVersion = undefined;
      this._optionalComponents = undefined;
      this._overrideProperties = undefined;
    }
    else {
      this._imageVersion = value.imageVersion;
      this._optionalComponents = value.optionalComponents;
      this._overrideProperties = value.overrideProperties;
    }
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // optional_components - computed: false, optional: true, required: false
  private _optionalComponents?: string[]; 
  public get optionalComponents() {
    return this.getListAttribute('optional_components');
  }
  public set optionalComponents(value: string[]) {
    this._optionalComponents = value;
  }
  public resetOptionalComponents() {
    this._optionalComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalComponentsInput() {
    return this._optionalComponents;
  }

  // override_properties - computed: false, optional: true, required: false
  private _overrideProperties?: { [key: string]: string } | cdktf.IResolvable; 
  public get overrideProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('override_properties') as any;
  }
  public set overrideProperties(value: { [key: string]: string } | cdktf.IResolvable) {
    this._overrideProperties = value;
  }
  public resetOverrideProperties() {
    this._overrideProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePropertiesInput() {
    return this._overrideProperties;
  }
}
export interface DataprocClusterClusterConfigWorkerConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_count DataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_type DataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function dataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocClusterClusterConfigWorkerConfigDiskConfig {
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

export function dataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference | DataprocClusterClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export class DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigWorkerConfigDiskConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._bootDiskType) {
      hasAnyValues = true;
      internalValueResult.bootDiskType = this._bootDiskType;
    }
    if (this._numLocalSsds) {
      hasAnyValues = true;
      internalValueResult.numLocalSsds = this._numLocalSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfigDiskConfig | undefined) {
    if (value === undefined) {
      this._bootDiskSizeGb = undefined;
      this._bootDiskType = undefined;
      this._numLocalSsds = undefined;
    }
    else {
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._bootDiskType = value.bootDiskType;
      this._numLocalSsds = value.numLocalSsds;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // boot_disk_type - computed: false, optional: true, required: false
  private _bootDiskType?: string; 
  public get bootDiskType() {
    return this.getStringAttribute('boot_disk_type');
  }
  public set bootDiskType(value: string) {
    this._bootDiskType = value;
  }
  public resetBootDiskType() {
    this._bootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskTypeInput() {
    return this._bootDiskType;
  }

  // num_local_ssds - computed: true, optional: true, required: false
  private _numLocalSsds?: number; 
  public get numLocalSsds() {
    return this.getNumberAttribute('num_local_ssds');
  }
  public set numLocalSsds(value: number) {
    this._numLocalSsds = value;
  }
  public resetNumLocalSsds() {
    this._numLocalSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLocalSsdsInput() {
    return this._numLocalSsds;
  }
}
export interface DataprocClusterClusterConfigWorkerConfig {
  /**
  * The URI for the image to use for this master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#image_uri DataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerators DataprocCluster#accelerators}
  */
  readonly accelerators?: DataprocClusterClusterConfigWorkerConfigAccelerators[];
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigWorkerConfigDiskConfig;
}

export function dataprocClusterClusterConfigWorkerConfigToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigOutputReference | DataprocClusterClusterConfigWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    accelerators: cdktf.listMapper(dataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: dataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform(struct!.diskConfig),
  }
}

export class DataprocClusterClusterConfigWorkerConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfigWorkerConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._imageUri) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._machineType) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._numInstances) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._accelerators) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators;
    }
    if (this._diskConfig) {
      hasAnyValues = true;
      internalValueResult.diskConfig = this._diskConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfigWorkerConfig | undefined) {
    if (value === undefined) {
      this._imageUri = undefined;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._numInstances = undefined;
      this._accelerators = undefined;
      this._diskConfig.internalValue = undefined;
    }
    else {
      this._imageUri = value.imageUri;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._numInstances = value.numInstances;
      this._accelerators = value.accelerators;
      this._diskConfig.internalValue = value.diskConfig;
    }
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
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

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // num_instances - computed: true, optional: true, required: false
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  public resetNumInstances() {
    this._numInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators?: DataprocClusterClusterConfigWorkerConfigAccelerators[]; 
  public get accelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('accelerators') as any;
  }
  public set accelerators(value: DataprocClusterClusterConfigWorkerConfigAccelerators[]) {
    this._accelerators = value;
  }
  public resetAccelerators() {
    this._accelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators;
  }

  // disk_config - computed: false, optional: true, required: false
  private _diskConfig = new DataprocClusterClusterConfigWorkerConfigDiskConfigOutputReference(this as any, "disk_config", true);
  public get diskConfig() {
    return this._diskConfig;
  }
  public putDiskConfig(value: DataprocClusterClusterConfigWorkerConfigDiskConfig) {
    this._diskConfig.internalValue = value;
  }
  public resetDiskConfig() {
    this._diskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskConfigInput() {
    return this._diskConfig.internalValue;
  }
}
export interface DataprocClusterClusterConfig {
  /**
  * The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster. Note: If you don't explicitly specify a staging_bucket then GCP will auto create / assign one for you. However, you are not guaranteed an auto generated bucket which is solely dedicated to your cluster; it may be shared with other clusters in the same region/zone also choosing to use the auto generation option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#staging_bucket DataprocCluster#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. Note: If you don't explicitly specify a temp_bucket then GCP will auto create / assign one for you.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#temp_bucket DataprocCluster#temp_bucket}
  */
  readonly tempBucket?: string;
  /**
  * autoscaling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#autoscaling_config DataprocCluster#autoscaling_config}
  */
  readonly autoscalingConfig?: DataprocClusterClusterConfigAutoscalingConfig;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#encryption_config DataprocCluster#encryption_config}
  */
  readonly encryptionConfig?: DataprocClusterClusterConfigEncryptionConfig;
  /**
  * gce_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#gce_cluster_config DataprocCluster#gce_cluster_config}
  */
  readonly gceClusterConfig?: DataprocClusterClusterConfigGceClusterConfig;
  /**
  * initialization_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#initialization_action DataprocCluster#initialization_action}
  */
  readonly initializationAction?: DataprocClusterClusterConfigInitializationAction[];
  /**
  * master_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#master_config DataprocCluster#master_config}
  */
  readonly masterConfig?: DataprocClusterClusterConfigMasterConfig;
  /**
  * preemptible_worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#preemptible_worker_config DataprocCluster#preemptible_worker_config}
  */
  readonly preemptibleWorkerConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfig;
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#security_config DataprocCluster#security_config}
  */
  readonly securityConfig?: DataprocClusterClusterConfigSecurityConfig;
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#software_config DataprocCluster#software_config}
  */
  readonly softwareConfig?: DataprocClusterClusterConfigSoftwareConfig;
  /**
  * worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#worker_config DataprocCluster#worker_config}
  */
  readonly workerConfig?: DataprocClusterClusterConfigWorkerConfig;
}

export function dataprocClusterClusterConfigToTerraform(struct?: DataprocClusterClusterConfigOutputReference | DataprocClusterClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    temp_bucket: cdktf.stringToTerraform(struct!.tempBucket),
    autoscaling_config: dataprocClusterClusterConfigAutoscalingConfigToTerraform(struct!.autoscalingConfig),
    encryption_config: dataprocClusterClusterConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    gce_cluster_config: dataprocClusterClusterConfigGceClusterConfigToTerraform(struct!.gceClusterConfig),
    initialization_action: cdktf.listMapper(dataprocClusterClusterConfigInitializationActionToTerraform)(struct!.initializationAction),
    master_config: dataprocClusterClusterConfigMasterConfigToTerraform(struct!.masterConfig),
    preemptible_worker_config: dataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform(struct!.preemptibleWorkerConfig),
    security_config: dataprocClusterClusterConfigSecurityConfigToTerraform(struct!.securityConfig),
    software_config: dataprocClusterClusterConfigSoftwareConfigToTerraform(struct!.softwareConfig),
    worker_config: dataprocClusterClusterConfigWorkerConfigToTerraform(struct!.workerConfig),
  }
}

export class DataprocClusterClusterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterClusterConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._stagingBucket) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._tempBucket) {
      hasAnyValues = true;
      internalValueResult.tempBucket = this._tempBucket;
    }
    if (this._autoscalingConfig) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfig = this._autoscalingConfig?.internalValue;
    }
    if (this._encryptionConfig) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._gceClusterConfig) {
      hasAnyValues = true;
      internalValueResult.gceClusterConfig = this._gceClusterConfig?.internalValue;
    }
    if (this._initializationAction) {
      hasAnyValues = true;
      internalValueResult.initializationAction = this._initializationAction;
    }
    if (this._masterConfig) {
      hasAnyValues = true;
      internalValueResult.masterConfig = this._masterConfig?.internalValue;
    }
    if (this._preemptibleWorkerConfig) {
      hasAnyValues = true;
      internalValueResult.preemptibleWorkerConfig = this._preemptibleWorkerConfig?.internalValue;
    }
    if (this._securityConfig) {
      hasAnyValues = true;
      internalValueResult.securityConfig = this._securityConfig?.internalValue;
    }
    if (this._softwareConfig) {
      hasAnyValues = true;
      internalValueResult.softwareConfig = this._softwareConfig?.internalValue;
    }
    if (this._workerConfig) {
      hasAnyValues = true;
      internalValueResult.workerConfig = this._workerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterClusterConfig | undefined) {
    if (value === undefined) {
      this._stagingBucket = undefined;
      this._tempBucket = undefined;
      this._autoscalingConfig.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._gceClusterConfig.internalValue = undefined;
      this._initializationAction = undefined;
      this._masterConfig.internalValue = undefined;
      this._preemptibleWorkerConfig.internalValue = undefined;
      this._securityConfig.internalValue = undefined;
      this._softwareConfig.internalValue = undefined;
      this._workerConfig.internalValue = undefined;
    }
    else {
      this._stagingBucket = value.stagingBucket;
      this._tempBucket = value.tempBucket;
      this._autoscalingConfig.internalValue = value.autoscalingConfig;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._gceClusterConfig.internalValue = value.gceClusterConfig;
      this._initializationAction = value.initializationAction;
      this._masterConfig.internalValue = value.masterConfig;
      this._preemptibleWorkerConfig.internalValue = value.preemptibleWorkerConfig;
      this._securityConfig.internalValue = value.securityConfig;
      this._softwareConfig.internalValue = value.softwareConfig;
      this._workerConfig.internalValue = value.workerConfig;
    }
  }

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // temp_bucket - computed: true, optional: true, required: false
  private _tempBucket?: string; 
  public get tempBucket() {
    return this.getStringAttribute('temp_bucket');
  }
  public set tempBucket(value: string) {
    this._tempBucket = value;
  }
  public resetTempBucket() {
    this._tempBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempBucketInput() {
    return this._tempBucket;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new DataprocClusterClusterConfigAutoscalingConfigOutputReference(this as any, "autoscaling_config", true);
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: DataprocClusterClusterConfigAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new DataprocClusterClusterConfigEncryptionConfigOutputReference(this as any, "encryption_config", true);
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: DataprocClusterClusterConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // gce_cluster_config - computed: false, optional: true, required: false
  private _gceClusterConfig = new DataprocClusterClusterConfigGceClusterConfigOutputReference(this as any, "gce_cluster_config", true);
  public get gceClusterConfig() {
    return this._gceClusterConfig;
  }
  public putGceClusterConfig(value: DataprocClusterClusterConfigGceClusterConfig) {
    this._gceClusterConfig.internalValue = value;
  }
  public resetGceClusterConfig() {
    this._gceClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceClusterConfigInput() {
    return this._gceClusterConfig.internalValue;
  }

  // initialization_action - computed: false, optional: true, required: false
  private _initializationAction?: DataprocClusterClusterConfigInitializationAction[]; 
  public get initializationAction() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('initialization_action') as any;
  }
  public set initializationAction(value: DataprocClusterClusterConfigInitializationAction[]) {
    this._initializationAction = value;
  }
  public resetInitializationAction() {
    this._initializationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationActionInput() {
    return this._initializationAction;
  }

  // master_config - computed: false, optional: true, required: false
  private _masterConfig = new DataprocClusterClusterConfigMasterConfigOutputReference(this as any, "master_config", true);
  public get masterConfig() {
    return this._masterConfig;
  }
  public putMasterConfig(value: DataprocClusterClusterConfigMasterConfig) {
    this._masterConfig.internalValue = value;
  }
  public resetMasterConfig() {
    this._masterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigInput() {
    return this._masterConfig.internalValue;
  }

  // preemptible_worker_config - computed: false, optional: true, required: false
  private _preemptibleWorkerConfig = new DataprocClusterClusterConfigPreemptibleWorkerConfigOutputReference(this as any, "preemptible_worker_config", true);
  public get preemptibleWorkerConfig() {
    return this._preemptibleWorkerConfig;
  }
  public putPreemptibleWorkerConfig(value: DataprocClusterClusterConfigPreemptibleWorkerConfig) {
    this._preemptibleWorkerConfig.internalValue = value;
  }
  public resetPreemptibleWorkerConfig() {
    this._preemptibleWorkerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleWorkerConfigInput() {
    return this._preemptibleWorkerConfig.internalValue;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig = new DataprocClusterClusterConfigSecurityConfigOutputReference(this as any, "security_config", true);
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: DataprocClusterClusterConfigSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new DataprocClusterClusterConfigSoftwareConfigOutputReference(this as any, "software_config", true);
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: DataprocClusterClusterConfigSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new DataprocClusterClusterConfigWorkerConfigOutputReference(this as any, "worker_config", true);
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: DataprocClusterClusterConfigWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }
}
export interface DataprocClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#create DataprocCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#delete DataprocCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#update DataprocCluster#update}
  */
  readonly update?: string;
}

export function dataprocClusterTimeoutsToTerraform(struct?: DataprocClusterTimeoutsOutputReference | DataprocClusterTimeouts): any {
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

export class DataprocClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataprocClusterTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocClusterTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html google_dataproc_cluster}
*/
export class DataprocCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dataproc_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html google_dataproc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gracefulDecommissionTimeout = config.gracefulDecommissionTimeout;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // graceful_decommission_timeout - computed: false, optional: true, required: false
  private _gracefulDecommissionTimeout?: string; 
  public get gracefulDecommissionTimeout() {
    return this.getStringAttribute('graceful_decommission_timeout');
  }
  public set gracefulDecommissionTimeout(value: string) {
    this._gracefulDecommissionTimeout = value;
  }
  public resetGracefulDecommissionTimeout() {
    this._gracefulDecommissionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulDecommissionTimeoutInput() {
    return this._gracefulDecommissionTimeout;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
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

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataprocClusterClusterConfigOutputReference(this as any, "cluster_config", true);
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataprocClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocClusterTimeouts) {
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
      graceful_decommission_timeout: cdktf.stringToTerraform(this._gracefulDecommissionTimeout),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      cluster_config: dataprocClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      timeouts: dataprocClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

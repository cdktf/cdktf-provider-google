// https://www.terraform.io/docs/providers/google/r/bigtable_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigtableInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#deletion_protection BigtableInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The human-readable display name of the Bigtable instance. Defaults to the instance name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#display_name BigtableInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#instance_type BigtableInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * A mapping of labels to assign to the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#labels BigtableInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#name BigtableInstance#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#project BigtableInstance#project}
  */
  readonly project?: string;
  /**
  * cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#cluster BigtableInstance#cluster}
  */
  readonly cluster?: BigtableInstanceCluster[] | cdktf.IResolvable;
}
export interface BigtableInstanceClusterAutoscalingConfig {
  /**
  * The target CPU utilization for autoscaling. Value must be between 10 and 80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#cpu_target BigtableInstance#cpu_target}
  */
  readonly cpuTarget: number;
  /**
  * The maximum number of nodes for autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#max_nodes BigtableInstance#max_nodes}
  */
  readonly maxNodes: number;
  /**
  * The minimum number of nodes for autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#min_nodes BigtableInstance#min_nodes}
  */
  readonly minNodes: number;
}

export function bigtableInstanceClusterAutoscalingConfigToTerraform(struct?: BigtableInstanceClusterAutoscalingConfigOutputReference | BigtableInstanceClusterAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_target: cdktf.numberToTerraform(struct!.cpuTarget),
    max_nodes: cdktf.numberToTerraform(struct!.maxNodes),
    min_nodes: cdktf.numberToTerraform(struct!.minNodes),
  }
}

export class BigtableInstanceClusterAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigtableInstanceClusterAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuTarget = this._cpuTarget;
    }
    if (this._maxNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodes = this._maxNodes;
    }
    if (this._minNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodes = this._minNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableInstanceClusterAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuTarget = undefined;
      this._maxNodes = undefined;
      this._minNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuTarget = value.cpuTarget;
      this._maxNodes = value.maxNodes;
      this._minNodes = value.minNodes;
    }
  }

  // cpu_target - computed: false, optional: false, required: true
  private _cpuTarget?: number; 
  public get cpuTarget() {
    return this.getNumberAttribute('cpu_target');
  }
  public set cpuTarget(value: number) {
    this._cpuTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTargetInput() {
    return this._cpuTarget;
  }

  // max_nodes - computed: false, optional: false, required: true
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: false, optional: false, required: true
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
  }
}
export interface BigtableInstanceCluster {
  /**
  * The ID of the Cloud Bigtable cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#cluster_id BigtableInstance#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. 3) All clusters within an instance must use the same CMEK key. Values are of the form projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#kms_key_name BigtableInstance#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The number of nodes in your Cloud Bigtable cluster. Required, with a minimum of 1 for a PRODUCTION instance. Must be left unset for a DEVELOPMENT instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#num_nodes BigtableInstance#num_nodes}
  */
  readonly numNodes?: number;
  /**
  * The storage type to use. One of "SSD" or "HDD". Defaults to "SSD".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#storage_type BigtableInstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * The zone to create the Cloud Bigtable cluster in. Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#zone BigtableInstance#zone}
  */
  readonly zone?: string;
  /**
  * autoscaling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance#autoscaling_config BigtableInstance#autoscaling_config}
  */
  readonly autoscalingConfig?: BigtableInstanceClusterAutoscalingConfig;
}

export function bigtableInstanceClusterToTerraform(struct?: BigtableInstanceCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    num_nodes: cdktf.numberToTerraform(struct!.numNodes),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    zone: cdktf.stringToTerraform(struct!.zone),
    autoscaling_config: bigtableInstanceClusterAutoscalingConfigToTerraform(struct!.autoscalingConfig),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance google_bigtable_instance}
*/
export class BigtableInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigtable_instance google_bigtable_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._instanceType = config.instanceType;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._cluster = config.cluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // display_name - computed: true, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // cluster - computed: false, optional: true, required: false
  private _cluster?: BigtableInstanceCluster[] | cdktf.IResolvable; 
  public get cluster() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cluster');
  }
  public set cluster(value: BigtableInstanceCluster[] | cdktf.IResolvable) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      display_name: cdktf.stringToTerraform(this._displayName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      cluster: cdktf.listMapper(bigtableInstanceClusterToTerraform)(this._cluster),
    };
  }
}

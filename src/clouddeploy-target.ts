// https://www.terraform.io/docs/providers/google/r/clouddeploy_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClouddeployTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#annotations ClouddeployTarget#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Optional. Description of the `Target`. Max length is 255 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#description ClouddeployTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#id ClouddeployTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#labels ClouddeployTarget#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#location ClouddeployTarget#location}
  */
  readonly location: string;
  /**
  * Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#name ClouddeployTarget#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#project ClouddeployTarget#project}
  */
  readonly project?: string;
  /**
  * Optional. Whether or not the `Target` requires approval.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#require_approval ClouddeployTarget#require_approval}
  */
  readonly requireApproval?: boolean | cdktf.IResolvable;
  /**
  * anthos_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}
  */
  readonly anthosCluster?: ClouddeployTargetAnthosCluster;
  /**
  * execution_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}
  */
  readonly executionConfigs?: ClouddeployTargetExecutionConfigs[] | cdktf.IResolvable;
  /**
  * gke block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#gke ClouddeployTarget#gke}
  */
  readonly gke?: ClouddeployTargetGke;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#timeouts ClouddeployTarget#timeouts}
  */
  readonly timeouts?: ClouddeployTargetTimeouts;
}
export interface ClouddeployTargetAnthosCluster {
  /**
  * Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#membership ClouddeployTarget#membership}
  */
  readonly membership?: string;
}

export function clouddeployTargetAnthosClusterToTerraform(struct?: ClouddeployTargetAnthosClusterOutputReference | ClouddeployTargetAnthosCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    membership: cdktf.stringToTerraform(struct!.membership),
  }
}

export class ClouddeployTargetAnthosClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetAnthosCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._membership !== undefined) {
      hasAnyValues = true;
      internalValueResult.membership = this._membership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetAnthosCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._membership = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._membership = value.membership;
    }
  }

  // membership - computed: false, optional: true, required: false
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  public resetMembership() {
    this._membership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
  }
}
export interface ClouddeployTargetExecutionConfigs {
  /**
  * Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}
  */
  readonly artifactStorage?: string;
  /**
  * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#service_account ClouddeployTarget#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Required. Usages when this configuration should be applied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#usages ClouddeployTarget#usages}
  */
  readonly usages: string[];
  /**
  * Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}
  */
  readonly workerPool?: string;
}

export function clouddeployTargetExecutionConfigsToTerraform(struct?: ClouddeployTargetExecutionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_storage: cdktf.stringToTerraform(struct!.artifactStorage),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usages),
    worker_pool: cdktf.stringToTerraform(struct!.workerPool),
  }
}

export class ClouddeployTargetExecutionConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployTargetExecutionConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactStorage = this._artifactStorage;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetExecutionConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactStorage = undefined;
      this._serviceAccount = undefined;
      this._usages = undefined;
      this._workerPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactStorage = value.artifactStorage;
      this._serviceAccount = value.serviceAccount;
      this._usages = value.usages;
      this._workerPool = value.workerPool;
    }
  }

  // artifact_storage - computed: true, optional: true, required: false
  private _artifactStorage?: string; 
  public get artifactStorage() {
    return this.getStringAttribute('artifact_storage');
  }
  public set artifactStorage(value: string) {
    this._artifactStorage = value;
  }
  public resetArtifactStorage() {
    this._artifactStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStorageInput() {
    return this._artifactStorage;
  }

  // service_account - computed: true, optional: true, required: false
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

  // usages - computed: false, optional: false, required: true
  private _usages?: string[]; 
  public get usages() {
    return this.getListAttribute('usages');
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }
}

export class ClouddeployTargetExecutionConfigsList extends cdktf.ComplexList {
  public internalValue? : ClouddeployTargetExecutionConfigs[] | cdktf.IResolvable

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
  public get(index: number): ClouddeployTargetExecutionConfigsOutputReference {
    return new ClouddeployTargetExecutionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployTargetGke {
  /**
  * Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#cluster ClouddeployTarget#cluster}
  */
  readonly cluster?: string;
  /**
  * Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}
  */
  readonly internalIp?: boolean | cdktf.IResolvable;
}

export function clouddeployTargetGkeToTerraform(struct?: ClouddeployTargetGkeOutputReference | ClouddeployTargetGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    internal_ip: cdktf.booleanToTerraform(struct!.internalIp),
  }
}

export class ClouddeployTargetGkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetGke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployTargetGke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._internalIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._internalIp = value.internalIp;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: boolean | cdktf.IResolvable; 
  public get internalIp() {
    return this.getBooleanAttribute('internal_ip');
  }
  public set internalIp(value: boolean | cdktf.IResolvable) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }
}
export interface ClouddeployTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#create ClouddeployTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#delete ClouddeployTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target#update ClouddeployTarget#update}
  */
  readonly update?: string;
}

export function clouddeployTargetTimeoutsToTerraform(struct?: ClouddeployTargetTimeoutsOutputReference | ClouddeployTargetTimeouts | cdktf.IResolvable): any {
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

export class ClouddeployTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployTargetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClouddeployTargetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target google_clouddeploy_target}
*/
export class ClouddeployTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_target";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_target google_clouddeploy_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClouddeployTargetConfig
  */
  public constructor(scope: Construct, id: string, config: ClouddeployTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_target',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._requireApproval = config.requireApproval;
    this._anthosCluster.internalValue = config.anthosCluster;
    this._executionConfigs.internalValue = config.executionConfigs;
    this._gke.internalValue = config.gke;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // require_approval - computed: false, optional: true, required: false
  private _requireApproval?: boolean | cdktf.IResolvable; 
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }
  public set requireApproval(value: boolean | cdktf.IResolvable) {
    this._requireApproval = value;
  }
  public resetRequireApproval() {
    this._requireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApprovalInput() {
    return this._requireApproval;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // anthos_cluster - computed: false, optional: true, required: false
  private _anthosCluster = new ClouddeployTargetAnthosClusterOutputReference(this, "anthos_cluster");
  public get anthosCluster() {
    return this._anthosCluster;
  }
  public putAnthosCluster(value: ClouddeployTargetAnthosCluster) {
    this._anthosCluster.internalValue = value;
  }
  public resetAnthosCluster() {
    this._anthosCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthosClusterInput() {
    return this._anthosCluster.internalValue;
  }

  // execution_configs - computed: false, optional: true, required: false
  private _executionConfigs = new ClouddeployTargetExecutionConfigsList(this, "execution_configs", false);
  public get executionConfigs() {
    return this._executionConfigs;
  }
  public putExecutionConfigs(value: ClouddeployTargetExecutionConfigs[] | cdktf.IResolvable) {
    this._executionConfigs.internalValue = value;
  }
  public resetExecutionConfigs() {
    this._executionConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionConfigsInput() {
    return this._executionConfigs.internalValue;
  }

  // gke - computed: false, optional: true, required: false
  private _gke = new ClouddeployTargetGkeOutputReference(this, "gke");
  public get gke() {
    return this._gke;
  }
  public putGke(value: ClouddeployTargetGke) {
    this._gke.internalValue = value;
  }
  public resetGke() {
    this._gke.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeInput() {
    return this._gke.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClouddeployTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClouddeployTargetTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      require_approval: cdktf.booleanToTerraform(this._requireApproval),
      anthos_cluster: clouddeployTargetAnthosClusterToTerraform(this._anthosCluster.internalValue),
      execution_configs: cdktf.listMapper(clouddeployTargetExecutionConfigsToTerraform, true)(this._executionConfigs.internalValue),
      gke: clouddeployTargetGkeToTerraform(this._gke.internalValue),
      timeouts: clouddeployTargetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

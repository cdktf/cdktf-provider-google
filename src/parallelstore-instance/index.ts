// https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ParallelstoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. Immutable. Storage capacity of Parallelstore instance in Gibibytes (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#capacity_gib ParallelstoreInstance#capacity_gib}
  */
  readonly capacityGib: string;
  /**
  * Parallelstore Instance deployment type.
  *   Possible values:
  *   DEPLOYMENT_TYPE_UNSPECIFIED
  *   SCRATCH
  *   PERSISTENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#deployment_type ParallelstoreInstance#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * The description of the instance. 2048 characters or less.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#description ParallelstoreInstance#description}
  */
  readonly description?: string;
  /**
  * Stripe level for directories.
  * MIN when directory has a small number of files.
  * MAX when directory has a large number of files.
  *   Possible values:
  *   DIRECTORY_STRIPE_LEVEL_UNSPECIFIED
  *   DIRECTORY_STRIPE_LEVEL_MIN
  *   DIRECTORY_STRIPE_LEVEL_BALANCED
  *   DIRECTORY_STRIPE_LEVEL_MAX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#directory_stripe_level ParallelstoreInstance#directory_stripe_level}
  */
  readonly directoryStripeLevel?: string;
  /**
  * Stripe level for files.
  * MIN better suited for small size files.
  * MAX higher throughput performance for larger files.
  *   Possible values:
  *   FILE_STRIPE_LEVEL_UNSPECIFIED
  *   FILE_STRIPE_LEVEL_MIN
  *   FILE_STRIPE_LEVEL_BALANCED
  *   FILE_STRIPE_LEVEL_MAX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#file_stripe_level ParallelstoreInstance#file_stripe_level}
  */
  readonly fileStripeLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#id ParallelstoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The logical name of the Parallelstore instance in the user project with the following restrictions:
  *   * Must contain only lowercase letters, numbers, and hyphens.
  *   * Must start with a letter.
  *   * Must be between 1-63 characters.
  *   * Must end with a number or a letter.
  *   * Must be unique within the customer project/ location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#instance_id ParallelstoreInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Cloud Labels are a flexible and lightweight mechanism for
  * organizing cloud resources into groups that reflect a customer's organizational
  * needs and deployment strategies. Cloud Labels can be used to filter collections
  * of resources. They can be used to control how resource metrics are aggregated.
  * And they can be used as arguments to policy management rules (e.g. route, firewall,
  * load balancing, etc.).
  * 
  * * Label keys must be between 1 and 63 characters long and must conform to
  *  the following regular expression: 'a-z{0,62}'.
  * * Label values must be between 0 and 63 characters long and must conform
  *  to the regular expression '[a-z0-9_-]{0,63}'.
  * * No more than 64 labels can be associated with a given resource.
  * 
  * See https://goo.gl/xmQnxf for more information on and examples of labels.
  * 
  * If you plan to use labels in your own code, please note that additional
  * characters may be allowed in the future. Therefore, you are advised to use
  * an internal label representation, such as JSON, which doesn't rely upon
  * specific characters being disallowed.  For example, representing labels
  * as the string:  'name + "_" + value' would prove problematic if we were to
  * allow '"_"' in a future release. "
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#labels ParallelstoreInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Part of 'parent'. See documentation of 'projectsId'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#location ParallelstoreInstance#location}
  */
  readonly location: string;
  /**
  * Immutable. The name of the Google Compute Engine [VPC network](https://cloud.google.com/vpc/docs/vpc)
  * to which the instance is connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#network ParallelstoreInstance#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#project ParallelstoreInstance#project}
  */
  readonly project?: string;
  /**
  * Immutable. Contains the id of the allocated IP address range
  * associated with the private service access connection for example, \"test-default\"
  * associated with IP range 10.0.0.0/29. If no range id is provided all ranges will
  * be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#reserved_ip_range ParallelstoreInstance#reserved_ip_range}
  */
  readonly reservedIpRange?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#timeouts ParallelstoreInstance#timeouts}
  */
  readonly timeouts?: ParallelstoreInstanceTimeouts;
}
export interface ParallelstoreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#create ParallelstoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#delete ParallelstoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#update ParallelstoreInstance#update}
  */
  readonly update?: string;
}

export function parallelstoreInstanceTimeoutsToTerraform(struct?: ParallelstoreInstanceTimeouts | cdktf.IResolvable): any {
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


export function parallelstoreInstanceTimeoutsToHclTerraform(struct?: ParallelstoreInstanceTimeouts | cdktf.IResolvable): any {
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

export class ParallelstoreInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ParallelstoreInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ParallelstoreInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance google_parallelstore_instance}
*/
export class ParallelstoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_parallelstore_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ParallelstoreInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ParallelstoreInstance to import
  * @param importFromId The id of the existing ParallelstoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ParallelstoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_parallelstore_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/parallelstore_instance google_parallelstore_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ParallelstoreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ParallelstoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_parallelstore_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.36.0',
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
    this._capacityGib = config.capacityGib;
    this._deploymentType = config.deploymentType;
    this._description = config.description;
    this._directoryStripeLevel = config.directoryStripeLevel;
    this._fileStripeLevel = config.fileStripeLevel;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._project = config.project;
    this._reservedIpRange = config.reservedIpRange;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_points - computed: true, optional: false, required: false
  public get accessPoints() {
    return this.getListAttribute('access_points');
  }

  // capacity_gib - computed: false, optional: false, required: true
  private _capacityGib?: string; 
  public get capacityGib() {
    return this.getStringAttribute('capacity_gib');
  }
  public set capacityGib(value: string) {
    this._capacityGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGibInput() {
    return this._capacityGib;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // daos_version - computed: true, optional: false, required: false
  public get daosVersion() {
    return this.getStringAttribute('daos_version');
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // directory_stripe_level - computed: false, optional: true, required: false
  private _directoryStripeLevel?: string; 
  public get directoryStripeLevel() {
    return this.getStringAttribute('directory_stripe_level');
  }
  public set directoryStripeLevel(value: string) {
    this._directoryStripeLevel = value;
  }
  public resetDirectoryStripeLevel() {
    this._directoryStripeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryStripeLevelInput() {
    return this._directoryStripeLevel;
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

  // file_stripe_level - computed: false, optional: true, required: false
  private _fileStripeLevel?: string; 
  public get fileStripeLevel() {
    return this.getStringAttribute('file_stripe_level');
  }
  public set fileStripeLevel(value: string) {
    this._fileStripeLevel = value;
  }
  public resetFileStripeLevel() {
    this._fileStripeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStripeLevelInput() {
    return this._fileStripeLevel;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: false, optional: true, required: false
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

  // reserved_ip_range - computed: false, optional: true, required: false
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ParallelstoreInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ParallelstoreInstanceTimeouts) {
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
      capacity_gib: cdktf.stringToTerraform(this._capacityGib),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      description: cdktf.stringToTerraform(this._description),
      directory_stripe_level: cdktf.stringToTerraform(this._directoryStripeLevel),
      file_stripe_level: cdktf.stringToTerraform(this._fileStripeLevel),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      reserved_ip_range: cdktf.stringToTerraform(this._reservedIpRange),
      timeouts: parallelstoreInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_gib: {
        value: cdktf.stringToHclTerraform(this._capacityGib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_stripe_level: {
        value: cdktf.stringToHclTerraform(this._directoryStripeLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_stripe_level: {
        value: cdktf.stringToHclTerraform(this._fileStripeLevel),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      reserved_ip_range: {
        value: cdktf.stringToHclTerraform(this._reservedIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: parallelstoreInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ParallelstoreInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

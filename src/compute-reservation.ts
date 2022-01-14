// https://www.terraform.io/docs/providers/google/r/compute_reservation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeReservationConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#description ComputeReservation#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#name ComputeReservation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#project ComputeReservation#project}
  */
  readonly project?: string;
  /**
  * When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#specific_reservation_required ComputeReservation#specific_reservation_required}
  */
  readonly specificReservationRequired?: boolean | cdktf.IResolvable;
  /**
  * The zone where the reservation is made.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#zone ComputeReservation#zone}
  */
  readonly zone: string;
  /**
  * specific_reservation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#specific_reservation ComputeReservation#specific_reservation}
  */
  readonly specificReservation: ComputeReservationSpecificReservation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#timeouts ComputeReservation#timeouts}
  */
  readonly timeouts?: ComputeReservationTimeouts;
}
export interface ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators {
  /**
  * The number of the guest accelerator cards exposed to
this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#accelerator_count ComputeReservation#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The full or partial URL of the accelerator type to
attach to this instance. For example:
'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'

If you are creating an instance template, specify only the accelerator name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#accelerator_type ComputeReservation#accelerator_type}
  */
  readonly acceleratorType: string;
}

export function computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface ComputeReservationSpecificReservationInstancePropertiesLocalSsds {
  /**
  * The size of the disk in base-2 GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#disk_size_gb ComputeReservation#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#interface ComputeReservation#interface}
  */
  readonly interface?: string;
}

export function computeReservationSpecificReservationInstancePropertiesLocalSsdsToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}

export interface ComputeReservationSpecificReservationInstanceProperties {
  /**
  * The name of the machine type to reserve.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#machine_type ComputeReservation#machine_type}
  */
  readonly machineType: string;
  /**
  * The minimum CPU platform for the reservation. For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#min_cpu_platform ComputeReservation#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * guest_accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#guest_accelerators ComputeReservation#guest_accelerators}
  */
  readonly guestAccelerators?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[];
  /**
  * local_ssds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#local_ssds ComputeReservation#local_ssds}
  */
  readonly localSsds?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds[];
}

export function computeReservationSpecificReservationInstancePropertiesToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesOutputReference | ComputeReservationSpecificReservationInstanceProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    guest_accelerators: cdktf.listMapper(computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToTerraform)(struct!.guestAccelerators),
    local_ssds: cdktf.listMapper(computeReservationSpecificReservationInstancePropertiesLocalSsdsToTerraform)(struct!.localSsds),
  }
}

export class ComputeReservationSpecificReservationInstancePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeReservationSpecificReservationInstanceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._guestAccelerators !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerators = this._guestAccelerators;
    }
    if (this._localSsds !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsds = this._localSsds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationSpecificReservationInstanceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
      this._minCpuPlatform = undefined;
      this._guestAccelerators = undefined;
      this._localSsds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._guestAccelerators = value.guestAccelerators;
      this._localSsds = value.localSsds;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
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

  // guest_accelerators - computed: false, optional: true, required: false
  private _guestAccelerators?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[]; 
  public get guestAccelerators() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('guest_accelerators') as any;
  }
  public set guestAccelerators(value: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[]) {
    this._guestAccelerators = value;
  }
  public resetGuestAccelerators() {
    this._guestAccelerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorsInput() {
    return this._guestAccelerators;
  }

  // local_ssds - computed: false, optional: true, required: false
  private _localSsds?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds[]; 
  public get localSsds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('local_ssds') as any;
  }
  public set localSsds(value: ComputeReservationSpecificReservationInstancePropertiesLocalSsds[]) {
    this._localSsds = value;
  }
  public resetLocalSsds() {
    this._localSsds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdsInput() {
    return this._localSsds;
  }
}
export interface ComputeReservationSpecificReservation {
  /**
  * The number of resources that are allocated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#count ComputeReservation#count}
  */
  readonly count: number;
  /**
  * instance_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#instance_properties ComputeReservation#instance_properties}
  */
  readonly instanceProperties: ComputeReservationSpecificReservationInstanceProperties;
}

export function computeReservationSpecificReservationToTerraform(struct?: ComputeReservationSpecificReservationOutputReference | ComputeReservationSpecificReservation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    instance_properties: computeReservationSpecificReservationInstancePropertiesToTerraform(struct!.instanceProperties),
  }
}

export class ComputeReservationSpecificReservationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeReservationSpecificReservation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._instanceProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProperties = this._instanceProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeReservationSpecificReservation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._instanceProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._instanceProperties.internalValue = value.instanceProperties;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // instance_properties - computed: false, optional: false, required: true
  private _instanceProperties = new ComputeReservationSpecificReservationInstancePropertiesOutputReference(this as any, "instance_properties", true);
  public get instanceProperties() {
    return this._instanceProperties;
  }
  public putInstanceProperties(value: ComputeReservationSpecificReservationInstanceProperties) {
    this._instanceProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePropertiesInput() {
    return this._instanceProperties.internalValue;
  }
}
export interface ComputeReservationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#create ComputeReservation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#delete ComputeReservation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_reservation#update ComputeReservation#update}
  */
  readonly update?: string;
}

export function computeReservationTimeoutsToTerraform(struct?: ComputeReservationTimeoutsOutputReference | ComputeReservationTimeouts): any {
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

export class ComputeReservationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeReservationTimeouts | undefined {
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

  public set internalValue(value: ComputeReservationTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_reservation google_compute_reservation}
*/
export class ComputeReservation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_reservation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_reservation google_compute_reservation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeReservationConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeReservationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_reservation',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._specificReservationRequired = config.specificReservationRequired;
    this._zone = config.zone;
    this._specificReservation.internalValue = config.specificReservation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commitment - computed: true, optional: false, required: false
  public get commitment() {
    return this.getStringAttribute('commitment');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // specific_reservation_required - computed: false, optional: true, required: false
  private _specificReservationRequired?: boolean | cdktf.IResolvable; 
  public get specificReservationRequired() {
    return this.getBooleanAttribute('specific_reservation_required') as any;
  }
  public set specificReservationRequired(value: boolean | cdktf.IResolvable) {
    this._specificReservationRequired = value;
  }
  public resetSpecificReservationRequired() {
    this._specificReservationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationRequiredInput() {
    return this._specificReservationRequired;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // specific_reservation - computed: false, optional: false, required: true
  private _specificReservation = new ComputeReservationSpecificReservationOutputReference(this as any, "specific_reservation", true);
  public get specificReservation() {
    return this._specificReservation;
  }
  public putSpecificReservation(value: ComputeReservationSpecificReservation) {
    this._specificReservation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationInput() {
    return this._specificReservation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeReservationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeReservationTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      specific_reservation_required: cdktf.booleanToTerraform(this._specificReservationRequired),
      zone: cdktf.stringToTerraform(this._zone),
      specific_reservation: computeReservationSpecificReservationToTerraform(this._specificReservation.internalValue),
      timeouts: computeReservationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

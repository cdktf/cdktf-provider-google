// https://www.terraform.io/docs/providers/google/r/compute_reservation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeReservationConfig extends cdktf.TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** When set to true, only VMs that target this reservation by name can
consume this reservation. Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false. */
  readonly specificReservationRequired?: boolean;
  /** The zone where the reservation is made. */
  readonly zone: string;
  /** specific_reservation block */
  readonly specificReservation: ComputeReservationSpecificReservation[];
  /** timeouts block */
  readonly timeouts?: ComputeReservationTimeouts;
}
export interface ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators {
  /** The number of the guest accelerator cards exposed to
this instance. */
  readonly acceleratorCount: number;
  /** The full or partial URL of the accelerator type to
attach to this instance. For example:
'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'

If you are creating an instance template, specify only the accelerator name. */
  readonly acceleratorType: string;
}

function computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface ComputeReservationSpecificReservationInstancePropertiesLocalSsds {
  /** The size of the disk in base-2 GB. */
  readonly diskSizeGb: number;
  /** The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"] */
  readonly interface?: string;
}

function computeReservationSpecificReservationInstancePropertiesLocalSsdsToTerraform(struct?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}

export interface ComputeReservationSpecificReservationInstanceProperties {
  /** The name of the machine type to reserve. */
  readonly machineType: string;
  /** The minimum CPU platform for the reservation. For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms. */
  readonly minCpuPlatform?: string;
  /** guest_accelerators block */
  readonly guestAccelerators?: ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators[];
  /** local_ssds block */
  readonly localSsds?: ComputeReservationSpecificReservationInstancePropertiesLocalSsds[];
}

function computeReservationSpecificReservationInstancePropertiesToTerraform(struct?: ComputeReservationSpecificReservationInstanceProperties): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    guest_accelerators: cdktf.listMapper(computeReservationSpecificReservationInstancePropertiesGuestAcceleratorsToTerraform)(struct!.guestAccelerators),
    local_ssds: cdktf.listMapper(computeReservationSpecificReservationInstancePropertiesLocalSsdsToTerraform)(struct!.localSsds),
  }
}

export interface ComputeReservationSpecificReservation {
  /** The number of resources that are allocated. */
  readonly count: number;
  /** instance_properties block */
  readonly instanceProperties: ComputeReservationSpecificReservationInstanceProperties[];
}

function computeReservationSpecificReservationToTerraform(struct?: ComputeReservationSpecificReservation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    instance_properties: cdktf.listMapper(computeReservationSpecificReservationInstancePropertiesToTerraform)(struct!.instanceProperties),
  }
}

export interface ComputeReservationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeReservationTimeoutsToTerraform(struct?: ComputeReservationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeReservation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._specificReservation = config.specificReservation;
    this._timeouts = config.timeouts;
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
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._project
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // specific_reservation_required - computed: false, optional: true, required: false
  private _specificReservationRequired?: boolean;
  public get specificReservationRequired() {
    return this.getBooleanAttribute('specific_reservation_required');
  }
  public set specificReservationRequired(value: boolean ) {
    this._specificReservationRequired = value;
  }
  public resetSpecificReservationRequired() {
    this._specificReservationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationRequiredInput() {
    return this._specificReservationRequired
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // specific_reservation - computed: false, optional: false, required: true
  private _specificReservation: ComputeReservationSpecificReservation[];
  public get specificReservation() {
    return this.interpolationForAttribute('specific_reservation') as any;
  }
  public set specificReservation(value: ComputeReservationSpecificReservation[]) {
    this._specificReservation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificReservationInput() {
    return this._specificReservation
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeReservationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeReservationTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
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
      specific_reservation: cdktf.listMapper(computeReservationSpecificReservationToTerraform)(this._specificReservation),
      timeouts: computeReservationTimeoutsToTerraform(this._timeouts),
    };
  }
}

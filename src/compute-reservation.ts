// https://www.terraform.io/docs/providers/google/r/compute_reservation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeReservationConfig extends TerraformMetaArguments {
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
export interface ComputeReservationSpecificReservationInstancePropertiesLocalSsds {
  /** The size of the disk in base-2 GB. */
  readonly diskSizeGb: number;
  /** The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"] */
  readonly interface?: string;
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
export interface ComputeReservationSpecificReservation {
  /** The number of resources that are allocated. */
  readonly count: number;
  /** instance_properties block */
  readonly instanceProperties: ComputeReservationSpecificReservationInstanceProperties[];
}
export interface ComputeReservationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeReservation extends TerraformResource {

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

  // commitment - computed: true, optional: false, required: true
  public get commitment() {
    return this.getStringAttribute('commitment');
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // specific_reservation_required - computed: false, optional: true, required: false
  private _specificReservationRequired?: boolean;
  public get specificReservationRequired() {
    return this._specificReservationRequired;
  }
  public set specificReservationRequired(value: boolean | undefined) {
    this._specificReservationRequired = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string) {
    this._zone = value;
  }

  // specific_reservation - computed: false, optional: false, required: true
  private _specificReservation: ComputeReservationSpecificReservation[];
  public get specificReservation() {
    return this._specificReservation;
  }
  public set specificReservation(value: ComputeReservationSpecificReservation[]) {
    this._specificReservation = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeReservationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeReservationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      project: this._project,
      specific_reservation_required: this._specificReservationRequired,
      zone: this._zone,
      specific_reservation: this._specificReservation,
      timeouts: this._timeouts,
    };
  }
}

// https://www.terraform.io/docs/providers/google/r/compute_instance_group_manager.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeInstanceGroupManagerConfig extends TerraformMetaArguments {
  /** The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name. */
  readonly baseInstanceName: string;
  /** An optional textual description of the instance group manager. */
  readonly description?: string;
  /** The full URL to an instance template from which all new instances of this version will be created. */
  readonly instanceTemplate?: string;
  /** The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does not affect existing instances. */
  readonly targetPools?: string[];
  /** The target number of running instances for this managed instance group. This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0. */
  readonly targetSize?: number;
  /** Whether to wait for all instances to be created/updated before returning. Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out. */
  readonly waitForInstances?: boolean;
  /** The zone that instances in this group should be created in. */
  readonly zone?: string;
  /** auto_healing_policies block */
  readonly autoHealingPolicies?: ComputeInstanceGroupManagerAutoHealingPolicies[];
  /** named_port block */
  readonly namedPort?: ComputeInstanceGroupManagerNamedPort[];
  /** timeouts block */
  readonly timeouts?: ComputeInstanceGroupManagerTimeouts;
  /** update_policy block */
  readonly updatePolicy?: ComputeInstanceGroupManagerUpdatePolicy[];
  /** version block */
  readonly version: ComputeInstanceGroupManagerVersion[];
}
export interface ComputeInstanceGroupManagerAutoHealingPolicies {
  /** The health check resource that signals autohealing. */
  readonly healthCheck: string;
  /** The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600. */
  readonly initialDelaySec: number;
}
export interface ComputeInstanceGroupManagerNamedPort {
  /** The name of the port. */
  readonly name: string;
  /** The port number. */
  readonly port: number;
}
export interface ComputeInstanceGroupManagerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface ComputeInstanceGroupManagerUpdatePolicy {
  /** The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with max_surge_percent. If neither is set, defaults to 1 */
  readonly maxSurgeFixed?: number;
  /** The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with max_surge_fixed. */
  readonly maxSurgePercent?: number;
  /** The maximum number of instances that can be unavailable during the update process. Conflicts with max_unavailable_percent. If neither is set, defaults to 1. */
  readonly maxUnavailableFixed?: number;
  /** The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed. */
  readonly maxUnavailablePercent?: number;
  /** Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600]. */
  readonly minReadySec?: number;
  /** Minimal action to be taken on an instance. You can specify either RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a RESTART, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action. */
  readonly minimalAction: string;
  /** The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls). */
  readonly type: string;
}
export interface ComputeInstanceGroupManagerVersionTargetSize {
  /** The number of instances which are managed for this version. Conflicts with percent. */
  readonly fixed?: number;
  /** The number of instances (calculated as percentage) which are managed for this version. Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version. */
  readonly percent?: number;
}
export interface ComputeInstanceGroupManagerVersion {
  /** The full URL to an instance template from which all new instances of this version will be created. */
  readonly instanceTemplate: string;
  /** Version name. */
  readonly name?: string;
  /** target_size block */
  readonly targetSize?: ComputeInstanceGroupManagerVersionTargetSize[];
}

// Resource

export class ComputeInstanceGroupManager extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeInstanceGroupManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_group_manager',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baseInstanceName = config.baseInstanceName;
    this._description = config.description;
    this._instanceTemplate = config.instanceTemplate;
    this._name = config.name;
    this._project = config.project;
    this._targetPools = config.targetPools;
    this._targetSize = config.targetSize;
    this._waitForInstances = config.waitForInstances;
    this._zone = config.zone;
    this._autoHealingPolicies = config.autoHealingPolicies;
    this._namedPort = config.namedPort;
    this._timeouts = config.timeouts;
    this._updatePolicy = config.updatePolicy;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_instance_name - computed: false, optional: false, required: true
  private _baseInstanceName: string;
  public get baseInstanceName() {
    return this._baseInstanceName;
  }
  public set baseInstanceName(value: string) {
    this._baseInstanceName = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_group - computed: true, optional: false, required: true
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }

  // instance_template - computed: true, optional: true, required: false
  private _instanceTemplate?: string;
  public get instanceTemplate() {
    return this._instanceTemplate ?? this.getStringAttribute('instance_template');
  }
  public set instanceTemplate(value: string | undefined) {
    this._instanceTemplate = value;
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

  // target_pools - computed: false, optional: true, required: false
  private _targetPools?: string[];
  public get targetPools() {
    return this._targetPools;
  }
  public set targetPools(value: string[] | undefined) {
    this._targetPools = value;
  }

  // target_size - computed: true, optional: true, required: false
  private _targetSize?: number;
  public get targetSize() {
    return this._targetSize ?? this.getNumberAttribute('target_size');
  }
  public set targetSize(value: number | undefined) {
    this._targetSize = value;
  }

  // update_strategy - computed: true, optional: false, required: true
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }

  // wait_for_instances - computed: false, optional: true, required: false
  private _waitForInstances?: boolean;
  public get waitForInstances() {
    return this._waitForInstances;
  }
  public set waitForInstances(value: boolean | undefined) {
    this._waitForInstances = value;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // auto_healing_policies - computed: false, optional: true, required: false
  private _autoHealingPolicies?: ComputeInstanceGroupManagerAutoHealingPolicies[];
  public get autoHealingPolicies() {
    return this._autoHealingPolicies;
  }
  public set autoHealingPolicies(value: ComputeInstanceGroupManagerAutoHealingPolicies[] | undefined) {
    this._autoHealingPolicies = value;
  }

  // named_port - computed: false, optional: true, required: false
  private _namedPort?: ComputeInstanceGroupManagerNamedPort[];
  public get namedPort() {
    return this._namedPort;
  }
  public set namedPort(value: ComputeInstanceGroupManagerNamedPort[] | undefined) {
    this._namedPort = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInstanceGroupManagerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeInstanceGroupManagerTimeouts | undefined) {
    this._timeouts = value;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy?: ComputeInstanceGroupManagerUpdatePolicy[];
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public set updatePolicy(value: ComputeInstanceGroupManagerUpdatePolicy[] | undefined) {
    this._updatePolicy = value;
  }

  // version - computed: false, optional: false, required: true
  private _version: ComputeInstanceGroupManagerVersion[];
  public get version() {
    return this._version;
  }
  public set version(value: ComputeInstanceGroupManagerVersion[]) {
    this._version = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      base_instance_name: this._baseInstanceName,
      description: this._description,
      instance_template: this._instanceTemplate,
      name: this._name,
      project: this._project,
      target_pools: this._targetPools,
      target_size: this._targetSize,
      wait_for_instances: this._waitForInstances,
      zone: this._zone,
      auto_healing_policies: this._autoHealingPolicies,
      named_port: this._namedPort,
      timeouts: this._timeouts,
      update_policy: this._updatePolicy,
      version: this._version,
    };
  }
}

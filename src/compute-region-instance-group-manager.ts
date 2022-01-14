// https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionInstanceGroupManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#base_instance_name ComputeRegionInstanceGroupManager#base_instance_name}
  */
  readonly baseInstanceName: string;
  /**
  * An optional textual description of the instance group manager.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#description ComputeRegionInstanceGroupManager#description}
  */
  readonly description?: string;
  /**
  * The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#distribution_policy_target_shape ComputeRegionInstanceGroupManager#distribution_policy_target_shape}
  */
  readonly distributionPolicyTargetShape?: string;
  /**
  * The distribution policy for this managed instance group. You can specify one or more values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#distribution_policy_zones ComputeRegionInstanceGroupManager#distribution_policy_zones}
  */
  readonly distributionPolicyZones?: string[];
  /**
  * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#project ComputeRegionInstanceGroupManager#project}
  */
  readonly project?: string;
  /**
  * The region where the managed instance group resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#region ComputeRegionInstanceGroupManager#region}
  */
  readonly region?: string;
  /**
  * The full URL of all target pools to which new instances in the group are added. Updating the target pools attribute does not affect existing instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#target_pools ComputeRegionInstanceGroupManager#target_pools}
  */
  readonly targetPools?: string[];
  /**
  * The target number of running instances for this managed instance group. This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#target_size ComputeRegionInstanceGroupManager#target_size}
  */
  readonly targetSize?: number;
  /**
  * Whether to wait for all instances to be created/updated before returning. Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#wait_for_instances ComputeRegionInstanceGroupManager#wait_for_instances}
  */
  readonly waitForInstances?: boolean | cdktf.IResolvable;
  /**
  * When used with wait_for_instances specifies the status to wait for. When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective as well as all instances to be stable before returning.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#wait_for_instances_status ComputeRegionInstanceGroupManager#wait_for_instances_status}
  */
  readonly waitForInstancesStatus?: string;
  /**
  * auto_healing_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#auto_healing_policies ComputeRegionInstanceGroupManager#auto_healing_policies}
  */
  readonly autoHealingPolicies?: ComputeRegionInstanceGroupManagerAutoHealingPolicies;
  /**
  * named_port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#named_port ComputeRegionInstanceGroupManager#named_port}
  */
  readonly namedPort?: ComputeRegionInstanceGroupManagerNamedPort[];
  /**
  * stateful_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#stateful_disk ComputeRegionInstanceGroupManager#stateful_disk}
  */
  readonly statefulDisk?: ComputeRegionInstanceGroupManagerStatefulDisk[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#timeouts ComputeRegionInstanceGroupManager#timeouts}
  */
  readonly timeouts?: ComputeRegionInstanceGroupManagerTimeouts;
  /**
  * update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#update_policy ComputeRegionInstanceGroupManager#update_policy}
  */
  readonly updatePolicy?: ComputeRegionInstanceGroupManagerUpdatePolicy;
  /**
  * version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#version ComputeRegionInstanceGroupManager#version}
  */
  readonly version: ComputeRegionInstanceGroupManagerVersion[];
}
export class ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs extends cdktf.ComplexComputedList {

  // all_effective - computed: true, optional: false, required: false
  public get allEffective() {
    return this.getBooleanAttribute('all_effective') as any;
  }
}
export class ComputeRegionInstanceGroupManagerStatusStateful extends cdktf.ComplexComputedList {

  // has_stateful_config - computed: true, optional: false, required: false
  public get hasStatefulConfig() {
    return this.getBooleanAttribute('has_stateful_config') as any;
  }

  // per_instance_configs - computed: true, optional: false, required: false
  public get perInstanceConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('per_instance_configs') as any;
  }
}
export class ComputeRegionInstanceGroupManagerStatusVersionTarget extends cdktf.ComplexComputedList {

  // is_reached - computed: true, optional: false, required: false
  public get isReached() {
    return this.getBooleanAttribute('is_reached') as any;
  }
}
export class ComputeRegionInstanceGroupManagerStatus extends cdktf.ComplexComputedList {

  // is_stable - computed: true, optional: false, required: false
  public get isStable() {
    return this.getBooleanAttribute('is_stable') as any;
  }

  // stateful - computed: true, optional: false, required: false
  public get stateful() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stateful') as any;
  }

  // version_target - computed: true, optional: false, required: false
  public get versionTarget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('version_target') as any;
  }
}
export interface ComputeRegionInstanceGroupManagerAutoHealingPolicies {
  /**
  * The health check resource that signals autohealing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#health_check ComputeRegionInstanceGroupManager#health_check}
  */
  readonly healthCheck: string;
  /**
  * The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. Between 0 and 3600.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#initial_delay_sec ComputeRegionInstanceGroupManager#initial_delay_sec}
  */
  readonly initialDelaySec: number;
}

export function computeRegionInstanceGroupManagerAutoHealingPoliciesToTerraform(struct?: ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference | ComputeRegionInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    initial_delay_sec: cdktf.numberToTerraform(struct!.initialDelaySec),
  }
}

export class ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionInstanceGroupManagerAutoHealingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._initialDelaySec !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySec = this._initialDelaySec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceGroupManagerAutoHealingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheck = undefined;
      this._initialDelaySec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheck = value.healthCheck;
      this._initialDelaySec = value.initialDelaySec;
    }
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // initial_delay_sec - computed: false, optional: false, required: true
  private _initialDelaySec?: number; 
  public get initialDelaySec() {
    return this.getNumberAttribute('initial_delay_sec');
  }
  public set initialDelaySec(value: number) {
    this._initialDelaySec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecInput() {
    return this._initialDelaySec;
  }
}
export interface ComputeRegionInstanceGroupManagerNamedPort {
  /**
  * The name of the port.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}
  */
  readonly name: string;
  /**
  * The port number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#port ComputeRegionInstanceGroupManager#port}
  */
  readonly port: number;
}

export function computeRegionInstanceGroupManagerNamedPortToTerraform(struct?: ComputeRegionInstanceGroupManagerNamedPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface ComputeRegionInstanceGroupManagerStatefulDisk {
  /**
  * A value that prescribes what should happen to the stateful disk when the VM instance is deleted. The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#delete_rule ComputeRegionInstanceGroupManager#delete_rule}
  */
  readonly deleteRule?: string;
  /**
  * The device name of the disk to be attached.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#device_name ComputeRegionInstanceGroupManager#device_name}
  */
  readonly deviceName: string;
}

export function computeRegionInstanceGroupManagerStatefulDiskToTerraform(struct?: ComputeRegionInstanceGroupManagerStatefulDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_rule: cdktf.stringToTerraform(struct!.deleteRule),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
  }
}

export interface ComputeRegionInstanceGroupManagerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#create ComputeRegionInstanceGroupManager#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#delete ComputeRegionInstanceGroupManager#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#update ComputeRegionInstanceGroupManager#update}
  */
  readonly update?: string;
}

export function computeRegionInstanceGroupManagerTimeoutsToTerraform(struct?: ComputeRegionInstanceGroupManagerTimeoutsOutputReference | ComputeRegionInstanceGroupManagerTimeouts): any {
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

export class ComputeRegionInstanceGroupManagerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionInstanceGroupManagerTimeouts | undefined {
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

  public set internalValue(value: ComputeRegionInstanceGroupManagerTimeouts | undefined) {
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
export interface ComputeRegionInstanceGroupManagerUpdatePolicy {
  /**
  * The instance redistribution policy for regional managed instance groups. Valid values are: "PROACTIVE", "NONE". If PROACTIVE (default), the group attempts to maintain an even distribution of VM instances across zones in the region. If NONE, proactive redistribution is disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#instance_redistribution_type ComputeRegionInstanceGroupManager#instance_redistribution_type}
  */
  readonly instanceRedistributionType?: string;
  /**
  * The maximum number of instances that can be created above the specified targetSize during the update process. Conflicts with max_surge_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_surge_fixed ComputeRegionInstanceGroupManager#max_surge_fixed}
  */
  readonly maxSurgeFixed?: number;
  /**
  * The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. Conflicts with max_surge_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_surge_percent ComputeRegionInstanceGroupManager#max_surge_percent}
  */
  readonly maxSurgePercent?: number;
  /**
  * The maximum number of instances that can be unavailable during the update process. Conflicts with max_unavailable_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_unavailable_fixed ComputeRegionInstanceGroupManager#max_unavailable_fixed}
  */
  readonly maxUnavailableFixed?: number;
  /**
  * The maximum number of instances(calculated as percentage) that can be unavailable during the update process. Conflicts with max_unavailable_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_unavailable_percent ComputeRegionInstanceGroupManager#max_unavailable_percent}
  */
  readonly maxUnavailablePercent?: number;
  /**
  * Minimum number of seconds to wait for after a newly created instance becomes available. This value must be from range [0, 3600].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#min_ready_sec ComputeRegionInstanceGroupManager#min_ready_sec}
  */
  readonly minReadySec?: number;
  /**
  * Minimal action to be taken on an instance. You can specify either RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a RESTART, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#minimal_action ComputeRegionInstanceGroupManager#minimal_action}
  */
  readonly minimalAction: string;
  /**
  * The instance replacement method for regional managed instance groups. Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#replacement_method ComputeRegionInstanceGroupManager#replacement_method}
  */
  readonly replacementMethod?: string;
  /**
  * The type of update process. You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#type ComputeRegionInstanceGroupManager#type}
  */
  readonly type: string;
}

export function computeRegionInstanceGroupManagerUpdatePolicyToTerraform(struct?: ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference | ComputeRegionInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_redistribution_type: cdktf.stringToTerraform(struct!.instanceRedistributionType),
    max_surge_fixed: cdktf.numberToTerraform(struct!.maxSurgeFixed),
    max_surge_percent: cdktf.numberToTerraform(struct!.maxSurgePercent),
    max_unavailable_fixed: cdktf.numberToTerraform(struct!.maxUnavailableFixed),
    max_unavailable_percent: cdktf.numberToTerraform(struct!.maxUnavailablePercent),
    min_ready_sec: cdktf.numberToTerraform(struct!.minReadySec),
    minimal_action: cdktf.stringToTerraform(struct!.minimalAction),
    replacement_method: cdktf.stringToTerraform(struct!.replacementMethod),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionInstanceGroupManagerUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceRedistributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRedistributionType = this._instanceRedistributionType;
    }
    if (this._maxSurgeFixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurgeFixed = this._maxSurgeFixed;
    }
    if (this._maxSurgePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurgePercent = this._maxSurgePercent;
    }
    if (this._maxUnavailableFixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableFixed = this._maxUnavailableFixed;
    }
    if (this._maxUnavailablePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercent = this._maxUnavailablePercent;
    }
    if (this._minReadySec !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySec = this._minReadySec;
    }
    if (this._minimalAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalAction = this._minimalAction;
    }
    if (this._replacementMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementMethod = this._replacementMethod;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceGroupManagerUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceRedistributionType = undefined;
      this._maxSurgeFixed = undefined;
      this._maxSurgePercent = undefined;
      this._maxUnavailableFixed = undefined;
      this._maxUnavailablePercent = undefined;
      this._minReadySec = undefined;
      this._minimalAction = undefined;
      this._replacementMethod = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceRedistributionType = value.instanceRedistributionType;
      this._maxSurgeFixed = value.maxSurgeFixed;
      this._maxSurgePercent = value.maxSurgePercent;
      this._maxUnavailableFixed = value.maxUnavailableFixed;
      this._maxUnavailablePercent = value.maxUnavailablePercent;
      this._minReadySec = value.minReadySec;
      this._minimalAction = value.minimalAction;
      this._replacementMethod = value.replacementMethod;
      this._type = value.type;
    }
  }

  // instance_redistribution_type - computed: false, optional: true, required: false
  private _instanceRedistributionType?: string; 
  public get instanceRedistributionType() {
    return this.getStringAttribute('instance_redistribution_type');
  }
  public set instanceRedistributionType(value: string) {
    this._instanceRedistributionType = value;
  }
  public resetInstanceRedistributionType() {
    this._instanceRedistributionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRedistributionTypeInput() {
    return this._instanceRedistributionType;
  }

  // max_surge_fixed - computed: true, optional: true, required: false
  private _maxSurgeFixed?: number; 
  public get maxSurgeFixed() {
    return this.getNumberAttribute('max_surge_fixed');
  }
  public set maxSurgeFixed(value: number) {
    this._maxSurgeFixed = value;
  }
  public resetMaxSurgeFixed() {
    this._maxSurgeFixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeFixedInput() {
    return this._maxSurgeFixed;
  }

  // max_surge_percent - computed: false, optional: true, required: false
  private _maxSurgePercent?: number; 
  public get maxSurgePercent() {
    return this.getNumberAttribute('max_surge_percent');
  }
  public set maxSurgePercent(value: number) {
    this._maxSurgePercent = value;
  }
  public resetMaxSurgePercent() {
    this._maxSurgePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgePercentInput() {
    return this._maxSurgePercent;
  }

  // max_unavailable_fixed - computed: true, optional: true, required: false
  private _maxUnavailableFixed?: number; 
  public get maxUnavailableFixed() {
    return this.getNumberAttribute('max_unavailable_fixed');
  }
  public set maxUnavailableFixed(value: number) {
    this._maxUnavailableFixed = value;
  }
  public resetMaxUnavailableFixed() {
    this._maxUnavailableFixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableFixedInput() {
    return this._maxUnavailableFixed;
  }

  // max_unavailable_percent - computed: false, optional: true, required: false
  private _maxUnavailablePercent?: number; 
  public get maxUnavailablePercent() {
    return this.getNumberAttribute('max_unavailable_percent');
  }
  public set maxUnavailablePercent(value: number) {
    this._maxUnavailablePercent = value;
  }
  public resetMaxUnavailablePercent() {
    this._maxUnavailablePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailablePercentInput() {
    return this._maxUnavailablePercent;
  }

  // min_ready_sec - computed: false, optional: true, required: false
  private _minReadySec?: number; 
  public get minReadySec() {
    return this.getNumberAttribute('min_ready_sec');
  }
  public set minReadySec(value: number) {
    this._minReadySec = value;
  }
  public resetMinReadySec() {
    this._minReadySec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecInput() {
    return this._minReadySec;
  }

  // minimal_action - computed: false, optional: false, required: true
  private _minimalAction?: string; 
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }
  public set minimalAction(value: string) {
    this._minimalAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalActionInput() {
    return this._minimalAction;
  }

  // replacement_method - computed: false, optional: true, required: false
  private _replacementMethod?: string; 
  public get replacementMethod() {
    return this.getStringAttribute('replacement_method');
  }
  public set replacementMethod(value: string) {
    this._replacementMethod = value;
  }
  public resetReplacementMethod() {
    this._replacementMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementMethodInput() {
    return this._replacementMethod;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ComputeRegionInstanceGroupManagerVersionTargetSize {
  /**
  * The number of instances which are managed for this version. Conflicts with percent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#fixed ComputeRegionInstanceGroupManager#fixed}
  */
  readonly fixed?: number;
  /**
  * The number of instances (calculated as percentage) which are managed for this version. Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#percent ComputeRegionInstanceGroupManager#percent}
  */
  readonly percent?: number;
}

export function computeRegionInstanceGroupManagerVersionTargetSizeToTerraform(struct?: ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference | ComputeRegionInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ComputeRegionInstanceGroupManagerVersionTargetSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRegionInstanceGroupManagerVersionTargetSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percent = value.percent;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface ComputeRegionInstanceGroupManagerVersion {
  /**
  * The full URL to an instance template from which all new instances of this version will be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#instance_template ComputeRegionInstanceGroupManager#instance_template}
  */
  readonly instanceTemplate: string;
  /**
  * Version name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}
  */
  readonly name?: string;
  /**
  * target_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#target_size ComputeRegionInstanceGroupManager#target_size}
  */
  readonly targetSize?: ComputeRegionInstanceGroupManagerVersionTargetSize;
}

export function computeRegionInstanceGroupManagerVersionToTerraform(struct?: ComputeRegionInstanceGroupManagerVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_template: cdktf.stringToTerraform(struct!.instanceTemplate),
    name: cdktf.stringToTerraform(struct!.name),
    target_size: computeRegionInstanceGroupManagerVersionTargetSizeToTerraform(struct!.targetSize),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager google_compute_region_instance_group_manager}
*/
export class ComputeRegionInstanceGroupManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_region_instance_group_manager";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager google_compute_region_instance_group_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionInstanceGroupManagerConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionInstanceGroupManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_instance_group_manager',
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
    this._distributionPolicyTargetShape = config.distributionPolicyTargetShape;
    this._distributionPolicyZones = config.distributionPolicyZones;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._targetPools = config.targetPools;
    this._targetSize = config.targetSize;
    this._waitForInstances = config.waitForInstances;
    this._waitForInstancesStatus = config.waitForInstancesStatus;
    this._autoHealingPolicies.internalValue = config.autoHealingPolicies;
    this._namedPort = config.namedPort;
    this._statefulDisk = config.statefulDisk;
    this._timeouts.internalValue = config.timeouts;
    this._updatePolicy.internalValue = config.updatePolicy;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_instance_name - computed: false, optional: false, required: true
  private _baseInstanceName?: string; 
  public get baseInstanceName() {
    return this.getStringAttribute('base_instance_name');
  }
  public set baseInstanceName(value: string) {
    this._baseInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInstanceNameInput() {
    return this._baseInstanceName;
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

  // distribution_policy_target_shape - computed: true, optional: true, required: false
  private _distributionPolicyTargetShape?: string; 
  public get distributionPolicyTargetShape() {
    return this.getStringAttribute('distribution_policy_target_shape');
  }
  public set distributionPolicyTargetShape(value: string) {
    this._distributionPolicyTargetShape = value;
  }
  public resetDistributionPolicyTargetShape() {
    this._distributionPolicyTargetShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionPolicyTargetShapeInput() {
    return this._distributionPolicyTargetShape;
  }

  // distribution_policy_zones - computed: true, optional: true, required: false
  private _distributionPolicyZones?: string[]; 
  public get distributionPolicyZones() {
    return this.getListAttribute('distribution_policy_zones');
  }
  public set distributionPolicyZones(value: string[]) {
    this._distributionPolicyZones = value;
  }
  public resetDistributionPolicyZones() {
    this._distributionPolicyZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionPolicyZonesInput() {
    return this._distributionPolicyZones;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
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

  // region - computed: true, optional: true, required: false
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new ComputeRegionInstanceGroupManagerStatus(this, 'status', index);
  }

  // target_pools - computed: false, optional: true, required: false
  private _targetPools?: string[]; 
  public get targetPools() {
    return this.getListAttribute('target_pools');
  }
  public set targetPools(value: string[]) {
    this._targetPools = value;
  }
  public resetTargetPools() {
    this._targetPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoolsInput() {
    return this._targetPools;
  }

  // target_size - computed: true, optional: true, required: false
  private _targetSize?: number; 
  public get targetSize() {
    return this.getNumberAttribute('target_size');
  }
  public set targetSize(value: number) {
    this._targetSize = value;
  }
  public resetTargetSize() {
    this._targetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSizeInput() {
    return this._targetSize;
  }

  // wait_for_instances - computed: false, optional: true, required: false
  private _waitForInstances?: boolean | cdktf.IResolvable; 
  public get waitForInstances() {
    return this.getBooleanAttribute('wait_for_instances') as any;
  }
  public set waitForInstances(value: boolean | cdktf.IResolvable) {
    this._waitForInstances = value;
  }
  public resetWaitForInstances() {
    this._waitForInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInstancesInput() {
    return this._waitForInstances;
  }

  // wait_for_instances_status - computed: false, optional: true, required: false
  private _waitForInstancesStatus?: string; 
  public get waitForInstancesStatus() {
    return this.getStringAttribute('wait_for_instances_status');
  }
  public set waitForInstancesStatus(value: string) {
    this._waitForInstancesStatus = value;
  }
  public resetWaitForInstancesStatus() {
    this._waitForInstancesStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInstancesStatusInput() {
    return this._waitForInstancesStatus;
  }

  // auto_healing_policies - computed: false, optional: true, required: false
  private _autoHealingPolicies = new ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(this as any, "auto_healing_policies", true);
  public get autoHealingPolicies() {
    return this._autoHealingPolicies;
  }
  public putAutoHealingPolicies(value: ComputeRegionInstanceGroupManagerAutoHealingPolicies) {
    this._autoHealingPolicies.internalValue = value;
  }
  public resetAutoHealingPolicies() {
    this._autoHealingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingPoliciesInput() {
    return this._autoHealingPolicies.internalValue;
  }

  // named_port - computed: false, optional: true, required: false
  private _namedPort?: ComputeRegionInstanceGroupManagerNamedPort[]; 
  public get namedPort() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('named_port') as any;
  }
  public set namedPort(value: ComputeRegionInstanceGroupManagerNamedPort[]) {
    this._namedPort = value;
  }
  public resetNamedPort() {
    this._namedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedPortInput() {
    return this._namedPort;
  }

  // stateful_disk - computed: false, optional: true, required: false
  private _statefulDisk?: ComputeRegionInstanceGroupManagerStatefulDisk[]; 
  public get statefulDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stateful_disk') as any;
  }
  public set statefulDisk(value: ComputeRegionInstanceGroupManagerStatefulDisk[]) {
    this._statefulDisk = value;
  }
  public resetStatefulDisk() {
    this._statefulDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulDiskInput() {
    return this._statefulDisk;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRegionInstanceGroupManagerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionInstanceGroupManagerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // update_policy - computed: false, optional: true, required: false
  private _updatePolicy = new ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(this as any, "update_policy", true);
  public get updatePolicy() {
    return this._updatePolicy;
  }
  public putUpdatePolicy(value: ComputeRegionInstanceGroupManagerUpdatePolicy) {
    this._updatePolicy.internalValue = value;
  }
  public resetUpdatePolicy() {
    this._updatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePolicyInput() {
    return this._updatePolicy.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: ComputeRegionInstanceGroupManagerVersion[]; 
  public get version() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('version') as any;
  }
  public set version(value: ComputeRegionInstanceGroupManagerVersion[]) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_instance_name: cdktf.stringToTerraform(this._baseInstanceName),
      description: cdktf.stringToTerraform(this._description),
      distribution_policy_target_shape: cdktf.stringToTerraform(this._distributionPolicyTargetShape),
      distribution_policy_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._distributionPolicyZones),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      target_pools: cdktf.listMapper(cdktf.stringToTerraform)(this._targetPools),
      target_size: cdktf.numberToTerraform(this._targetSize),
      wait_for_instances: cdktf.booleanToTerraform(this._waitForInstances),
      wait_for_instances_status: cdktf.stringToTerraform(this._waitForInstancesStatus),
      auto_healing_policies: computeRegionInstanceGroupManagerAutoHealingPoliciesToTerraform(this._autoHealingPolicies.internalValue),
      named_port: cdktf.listMapper(computeRegionInstanceGroupManagerNamedPortToTerraform)(this._namedPort),
      stateful_disk: cdktf.listMapper(computeRegionInstanceGroupManagerStatefulDiskToTerraform)(this._statefulDisk),
      timeouts: computeRegionInstanceGroupManagerTimeoutsToTerraform(this._timeouts.internalValue),
      update_policy: computeRegionInstanceGroupManagerUpdatePolicyToTerraform(this._updatePolicy.internalValue),
      version: cdktf.listMapper(computeRegionInstanceGroupManagerVersionToTerraform)(this._version),
    };
  }
}

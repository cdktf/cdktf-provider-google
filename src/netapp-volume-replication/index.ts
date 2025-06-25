/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappVolumeReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A destination volume is created as part of replication creation. The destination volume will not became
  * under Terraform management unless you import it manually. If you delete the replication, this volume
  * will remain.
  * Setting this parameter to true will delete the *current* destination volume when destroying the
  * replication. If you reversed the replication direction, this will be your former source volume!
  * For production use, it is recommended to keep this parameter false to avoid accidental volume
  * deletion. Handle with care. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#delete_destination_volume NetappVolumeReplication#delete_destination_volume}
  */
  readonly deleteDestinationVolume?: boolean | cdktf.IResolvable;
  /**
  * An description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}
  */
  readonly description?: string;
  /**
  * Only replications with mirror_state=MIRRORED can be stopped. A replication in mirror_state=TRANSFERRING
  * currently receives an update and stopping the update might be undesirable. Set this parameter to true
  * to stop anyway. All data transferred to the destination will be discarded and content of destination
  * volume will remain at the state of the last successful update. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#force_stopping NetappVolumeReplication#force_stopping}
  */
  readonly forceStopping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#id NetappVolumeReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#labels NetappVolumeReplication#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of region for this resource. The resource needs to be created in the region of the destination volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#location NetappVolumeReplication#location}
  */
  readonly location: string;
  /**
  * The name of the replication. Needs to be unique per location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#name NetappVolumeReplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#project NetappVolumeReplication#project}
  */
  readonly project?: string;
  /**
  * Set to false to stop/break the mirror. Stopping the mirror makes the destination volume read-write
  * and act independently from the source volume.
  * Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
  * done to the destination volume with the content of the source volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#replication_enabled NetappVolumeReplication#replication_enabled}
  */
  readonly replicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#replication_schedule NetappVolumeReplication#replication_schedule}
  */
  readonly replicationSchedule: string;
  /**
  * The name of the existing source volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#volume_name NetappVolumeReplication#volume_name}
  */
  readonly volumeName: string;
  /**
  * Replication resource state is independent of mirror_state. With enough data, it can take many hours
  * for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
  * create/stop/resume operations, set this parameter to true. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#wait_for_mirror NetappVolumeReplication#wait_for_mirror}
  */
  readonly waitForMirror?: boolean | cdktf.IResolvable;
  /**
  * destination_volume_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#destination_volume_parameters NetappVolumeReplication#destination_volume_parameters}
  */
  readonly destinationVolumeParameters?: NetappVolumeReplicationDestinationVolumeParameters;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#timeouts NetappVolumeReplication#timeouts}
  */
  readonly timeouts?: NetappVolumeReplicationTimeouts;
}
export interface NetappVolumeReplicationHybridPeeringDetails {
}

export function netappVolumeReplicationHybridPeeringDetailsToTerraform(struct?: NetappVolumeReplicationHybridPeeringDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function netappVolumeReplicationHybridPeeringDetailsToHclTerraform(struct?: NetappVolumeReplicationHybridPeeringDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetappVolumeReplicationHybridPeeringDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetappVolumeReplicationHybridPeeringDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeReplicationHybridPeeringDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // command_expiry_time - computed: true, optional: false, required: false
  public get commandExpiryTime() {
    return this.getStringAttribute('command_expiry_time');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // peer_cluster_name - computed: true, optional: false, required: false
  public get peerClusterName() {
    return this.getStringAttribute('peer_cluster_name');
  }

  // peer_svm_name - computed: true, optional: false, required: false
  public get peerSvmName() {
    return this.getStringAttribute('peer_svm_name');
  }

  // peer_volume_name - computed: true, optional: false, required: false
  public get peerVolumeName() {
    return this.getStringAttribute('peer_volume_name');
  }

  // subnet_ip - computed: true, optional: false, required: false
  public get subnetIp() {
    return this.getStringAttribute('subnet_ip');
  }
}

export class NetappVolumeReplicationHybridPeeringDetailsList extends cdktf.ComplexList {

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
  public get(index: number): NetappVolumeReplicationHybridPeeringDetailsOutputReference {
    return new NetappVolumeReplicationHybridPeeringDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetappVolumeReplicationTransferStats {
}

export function netappVolumeReplicationTransferStatsToTerraform(struct?: NetappVolumeReplicationTransferStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function netappVolumeReplicationTransferStatsToHclTerraform(struct?: NetappVolumeReplicationTransferStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetappVolumeReplicationTransferStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetappVolumeReplicationTransferStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeReplicationTransferStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lag_duration - computed: true, optional: false, required: false
  public get lagDuration() {
    return this.getStringAttribute('lag_duration');
  }

  // last_transfer_bytes - computed: true, optional: false, required: false
  public get lastTransferBytes() {
    return this.getStringAttribute('last_transfer_bytes');
  }

  // last_transfer_duration - computed: true, optional: false, required: false
  public get lastTransferDuration() {
    return this.getStringAttribute('last_transfer_duration');
  }

  // last_transfer_end_time - computed: true, optional: false, required: false
  public get lastTransferEndTime() {
    return this.getStringAttribute('last_transfer_end_time');
  }

  // last_transfer_error - computed: true, optional: false, required: false
  public get lastTransferError() {
    return this.getStringAttribute('last_transfer_error');
  }

  // total_transfer_duration - computed: true, optional: false, required: false
  public get totalTransferDuration() {
    return this.getStringAttribute('total_transfer_duration');
  }

  // transfer_bytes - computed: true, optional: false, required: false
  public get transferBytes() {
    return this.getStringAttribute('transfer_bytes');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class NetappVolumeReplicationTransferStatsList extends cdktf.ComplexList {

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
  public get(index: number): NetappVolumeReplicationTransferStatsOutputReference {
    return new NetappVolumeReplicationTransferStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetappVolumeReplicationDestinationVolumeParametersTieringPolicy {
  /**
  * Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
  * Default is 31.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#cooling_threshold_days NetappVolumeReplication#cooling_threshold_days}
  */
  readonly coolingThresholdDays?: number;
  /**
  * Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#tier_action NetappVolumeReplication#tier_action}
  */
  readonly tierAction?: string;
}

export function netappVolumeReplicationDestinationVolumeParametersTieringPolicyToTerraform(struct?: NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference | NetappVolumeReplicationDestinationVolumeParametersTieringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooling_threshold_days: cdktf.numberToTerraform(struct!.coolingThresholdDays),
    tier_action: cdktf.stringToTerraform(struct!.tierAction),
  }
}


export function netappVolumeReplicationDestinationVolumeParametersTieringPolicyToHclTerraform(struct?: NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference | NetappVolumeReplicationDestinationVolumeParametersTieringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooling_threshold_days: {
      value: cdktf.numberToHclTerraform(struct!.coolingThresholdDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tier_action: {
      value: cdktf.stringToHclTerraform(struct!.tierAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeReplicationDestinationVolumeParametersTieringPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolingThresholdDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolingThresholdDays = this._coolingThresholdDays;
    }
    if (this._tierAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tierAction = this._tierAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolingThresholdDays = undefined;
      this._tierAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolingThresholdDays = value.coolingThresholdDays;
      this._tierAction = value.tierAction;
    }
  }

  // cooling_threshold_days - computed: false, optional: true, required: false
  private _coolingThresholdDays?: number; 
  public get coolingThresholdDays() {
    return this.getNumberAttribute('cooling_threshold_days');
  }
  public set coolingThresholdDays(value: number) {
    this._coolingThresholdDays = value;
  }
  public resetCoolingThresholdDays() {
    this._coolingThresholdDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolingThresholdDaysInput() {
    return this._coolingThresholdDays;
  }

  // tier_action - computed: false, optional: true, required: false
  private _tierAction?: string; 
  public get tierAction() {
    return this.getStringAttribute('tier_action');
  }
  public set tierAction(value: string) {
    this._tierAction = value;
  }
  public resetTierAction() {
    this._tierAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierActionInput() {
    return this._tierAction;
  }
}
export interface NetappVolumeReplicationDestinationVolumeParameters {
  /**
  * Description for the destination volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#description NetappVolumeReplication#description}
  */
  readonly description?: string;
  /**
  * Share name for destination volume. If not specified, name of source volume's share name will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#share_name NetappVolumeReplication#share_name}
  */
  readonly shareName?: string;
  /**
  * Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#storage_pool NetappVolumeReplication#storage_pool}
  */
  readonly storagePool: string;
  /**
  * Name for the destination volume to be created. If not specified, the name of the source volume will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#volume_id NetappVolumeReplication#volume_id}
  */
  readonly volumeId?: string;
  /**
  * tiering_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#tiering_policy NetappVolumeReplication#tiering_policy}
  */
  readonly tieringPolicy?: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy;
}

export function netappVolumeReplicationDestinationVolumeParametersToTerraform(struct?: NetappVolumeReplicationDestinationVolumeParametersOutputReference | NetappVolumeReplicationDestinationVolumeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    tiering_policy: netappVolumeReplicationDestinationVolumeParametersTieringPolicyToTerraform(struct!.tieringPolicy),
  }
}


export function netappVolumeReplicationDestinationVolumeParametersToHclTerraform(struct?: NetappVolumeReplicationDestinationVolumeParametersOutputReference | NetappVolumeReplicationDestinationVolumeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tiering_policy: {
      value: netappVolumeReplicationDestinationVolumeParametersTieringPolicyToHclTerraform(struct!.tieringPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetappVolumeReplicationDestinationVolumeParametersTieringPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappVolumeReplicationDestinationVolumeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappVolumeReplicationDestinationVolumeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._tieringPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieringPolicy = this._tieringPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappVolumeReplicationDestinationVolumeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._shareName = undefined;
      this._storagePool = undefined;
      this._volumeId = undefined;
      this._tieringPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._shareName = value.shareName;
      this._storagePool = value.storagePool;
      this._volumeId = value.volumeId;
      this._tieringPolicy.internalValue = value.tieringPolicy;
    }
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

  // share_name - computed: true, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // storage_pool - computed: false, optional: false, required: true
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy = new NetappVolumeReplicationDestinationVolumeParametersTieringPolicyOutputReference(this, "tiering_policy");
  public get tieringPolicy() {
    return this._tieringPolicy;
  }
  public putTieringPolicy(value: NetappVolumeReplicationDestinationVolumeParametersTieringPolicy) {
    this._tieringPolicy.internalValue = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy.internalValue;
  }
}
export interface NetappVolumeReplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#create NetappVolumeReplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#delete NetappVolumeReplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#update NetappVolumeReplication#update}
  */
  readonly update?: string;
}

export function netappVolumeReplicationTimeoutsToTerraform(struct?: NetappVolumeReplicationTimeouts | cdktf.IResolvable): any {
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


export function netappVolumeReplicationTimeoutsToHclTerraform(struct?: NetappVolumeReplicationTimeouts | cdktf.IResolvable): any {
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

export class NetappVolumeReplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappVolumeReplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetappVolumeReplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication google_netapp_volume_replication}
*/
export class NetappVolumeReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_netapp_volume_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappVolumeReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappVolumeReplication to import
  * @param importFromId The id of the existing NetappVolumeReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappVolumeReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_netapp_volume_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/resources/netapp_volume_replication google_netapp_volume_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappVolumeReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: NetappVolumeReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_netapp_volume_replication',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.41.0',
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
    this._deleteDestinationVolume = config.deleteDestinationVolume;
    this._description = config.description;
    this._forceStopping = config.forceStopping;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._replicationEnabled = config.replicationEnabled;
    this._replicationSchedule = config.replicationSchedule;
    this._volumeName = config.volumeName;
    this._waitForMirror = config.waitForMirror;
    this._destinationVolumeParameters.internalValue = config.destinationVolumeParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_destination_volume - computed: false, optional: true, required: false
  private _deleteDestinationVolume?: boolean | cdktf.IResolvable; 
  public get deleteDestinationVolume() {
    return this.getBooleanAttribute('delete_destination_volume');
  }
  public set deleteDestinationVolume(value: boolean | cdktf.IResolvable) {
    this._deleteDestinationVolume = value;
  }
  public resetDeleteDestinationVolume() {
    this._deleteDestinationVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDestinationVolumeInput() {
    return this._deleteDestinationVolume;
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

  // destination_volume - computed: true, optional: false, required: false
  public get destinationVolume() {
    return this.getStringAttribute('destination_volume');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // force_stopping - computed: false, optional: true, required: false
  private _forceStopping?: boolean | cdktf.IResolvable; 
  public get forceStopping() {
    return this.getBooleanAttribute('force_stopping');
  }
  public set forceStopping(value: boolean | cdktf.IResolvable) {
    this._forceStopping = value;
  }
  public resetForceStopping() {
    this._forceStopping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStoppingInput() {
    return this._forceStopping;
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }

  // hybrid_peering_details - computed: true, optional: false, required: false
  private _hybridPeeringDetails = new NetappVolumeReplicationHybridPeeringDetailsList(this, "hybrid_peering_details", false);
  public get hybridPeeringDetails() {
    return this._hybridPeeringDetails;
  }

  // hybrid_replication_type - computed: true, optional: false, required: false
  public get hybridReplicationType() {
    return this.getStringAttribute('hybrid_replication_type');
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

  // mirror_state - computed: true, optional: false, required: false
  public get mirrorState() {
    return this.getStringAttribute('mirror_state');
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

  // replication_enabled - computed: false, optional: true, required: false
  private _replicationEnabled?: boolean | cdktf.IResolvable; 
  public get replicationEnabled() {
    return this.getBooleanAttribute('replication_enabled');
  }
  public set replicationEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationEnabled = value;
  }
  public resetReplicationEnabled() {
    this._replicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationEnabledInput() {
    return this._replicationEnabled;
  }

  // replication_schedule - computed: false, optional: false, required: true
  private _replicationSchedule?: string; 
  public get replicationSchedule() {
    return this.getStringAttribute('replication_schedule');
  }
  public set replicationSchedule(value: string) {
    this._replicationSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationScheduleInput() {
    return this._replicationSchedule;
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // transfer_stats - computed: true, optional: false, required: false
  private _transferStats = new NetappVolumeReplicationTransferStatsList(this, "transfer_stats", false);
  public get transferStats() {
    return this._transferStats;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // wait_for_mirror - computed: false, optional: true, required: false
  private _waitForMirror?: boolean | cdktf.IResolvable; 
  public get waitForMirror() {
    return this.getBooleanAttribute('wait_for_mirror');
  }
  public set waitForMirror(value: boolean | cdktf.IResolvable) {
    this._waitForMirror = value;
  }
  public resetWaitForMirror() {
    this._waitForMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForMirrorInput() {
    return this._waitForMirror;
  }

  // destination_volume_parameters - computed: false, optional: true, required: false
  private _destinationVolumeParameters = new NetappVolumeReplicationDestinationVolumeParametersOutputReference(this, "destination_volume_parameters");
  public get destinationVolumeParameters() {
    return this._destinationVolumeParameters;
  }
  public putDestinationVolumeParameters(value: NetappVolumeReplicationDestinationVolumeParameters) {
    this._destinationVolumeParameters.internalValue = value;
  }
  public resetDestinationVolumeParameters() {
    this._destinationVolumeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVolumeParametersInput() {
    return this._destinationVolumeParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappVolumeReplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappVolumeReplicationTimeouts) {
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
      delete_destination_volume: cdktf.booleanToTerraform(this._deleteDestinationVolume),
      description: cdktf.stringToTerraform(this._description),
      force_stopping: cdktf.booleanToTerraform(this._forceStopping),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      replication_enabled: cdktf.booleanToTerraform(this._replicationEnabled),
      replication_schedule: cdktf.stringToTerraform(this._replicationSchedule),
      volume_name: cdktf.stringToTerraform(this._volumeName),
      wait_for_mirror: cdktf.booleanToTerraform(this._waitForMirror),
      destination_volume_parameters: netappVolumeReplicationDestinationVolumeParametersToTerraform(this._destinationVolumeParameters.internalValue),
      timeouts: netappVolumeReplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_destination_volume: {
        value: cdktf.booleanToHclTerraform(this._deleteDestinationVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_stopping: {
        value: cdktf.booleanToHclTerraform(this._forceStopping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      replication_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_schedule: {
        value: cdktf.stringToHclTerraform(this._replicationSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_name: {
        value: cdktf.stringToHclTerraform(this._volumeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_mirror: {
        value: cdktf.booleanToHclTerraform(this._waitForMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destination_volume_parameters: {
        value: netappVolumeReplicationDestinationVolumeParametersToHclTerraform(this._destinationVolumeParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappVolumeReplicationDestinationVolumeParametersList",
      },
      timeouts: {
        value: netappVolumeReplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappVolumeReplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

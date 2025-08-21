/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionDiscoveryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display Name (max 1000 Chars)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#display_name DataLossPreventionDiscoveryConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#id DataLossPreventionDiscoveryConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Detection logic for profile generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#inspect_templates DataLossPreventionDiscoveryConfig#inspect_templates}
  */
  readonly inspectTemplates?: string[];
  /**
  * Location to create the discovery config in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#location DataLossPreventionDiscoveryConfig#location}
  */
  readonly location: string;
  /**
  * The parent of the discovery config in any of the following formats:
  * 
  * * 'projects/{{project}}/locations/{{location}}'
  * * 'organizations/{{organization_id}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#parent DataLossPreventionDiscoveryConfig#parent}
  */
  readonly parent: string;
  /**
  * Required. A status for this configuration Possible values: ["RUNNING", "PAUSED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#status DataLossPreventionDiscoveryConfig#status}
  */
  readonly status?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#actions DataLossPreventionDiscoveryConfig#actions}
  */
  readonly actions?: DataLossPreventionDiscoveryConfigActions[] | cdktf.IResolvable;
  /**
  * org_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#org_config DataLossPreventionDiscoveryConfig#org_config}
  */
  readonly orgConfig?: DataLossPreventionDiscoveryConfigOrgConfig;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#targets DataLossPreventionDiscoveryConfig#targets}
  */
  readonly targets?: DataLossPreventionDiscoveryConfigTargets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#timeouts DataLossPreventionDiscoveryConfig#timeouts}
  */
  readonly timeouts?: DataLossPreventionDiscoveryConfigTimeouts;
}
export interface DataLossPreventionDiscoveryConfigErrorsDetails {
}

export function dataLossPreventionDiscoveryConfigErrorsDetailsToTerraform(struct?: DataLossPreventionDiscoveryConfigErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigErrorsDetailsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigErrorsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigErrorsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataLossPreventionDiscoveryConfigErrorsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference {
    return new DataLossPreventionDiscoveryConfigErrorsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigErrors {
}

export function dataLossPreventionDiscoveryConfigErrorsToTerraform(struct?: DataLossPreventionDiscoveryConfigErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigErrorsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataLossPreventionDiscoveryConfigErrorsDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataLossPreventionDiscoveryConfigErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataLossPreventionDiscoveryConfigErrorsOutputReference {
    return new DataLossPreventionDiscoveryConfigErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigActionsExportDataProfileTable {
  /**
  * Dataset Id of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#dataset_id DataLossPreventionDiscoveryConfig#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table. If omitted, the project ID is inferred from the API call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#project_id DataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#table_id DataLossPreventionDiscoveryConfig#table_id}
  */
  readonly tableId?: string;
}

export function dataLossPreventionDiscoveryConfigActionsExportDataProfileTableToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference | DataLossPreventionDiscoveryConfigActionsExportDataProfileTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function dataLossPreventionDiscoveryConfigActionsExportDataProfileTableToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference | DataLossPreventionDiscoveryConfigActionsExportDataProfileTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsExportDataProfileTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsExportDataProfileTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface DataLossPreventionDiscoveryConfigActionsExportData {
  /**
  * profile_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#profile_table DataLossPreventionDiscoveryConfig#profile_table}
  */
  readonly profileTable?: DataLossPreventionDiscoveryConfigActionsExportDataProfileTable;
}

export function dataLossPreventionDiscoveryConfigActionsExportDataToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsExportDataOutputReference | DataLossPreventionDiscoveryConfigActionsExportData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_table: dataLossPreventionDiscoveryConfigActionsExportDataProfileTableToTerraform(struct!.profileTable),
  }
}


export function dataLossPreventionDiscoveryConfigActionsExportDataToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsExportDataOutputReference | DataLossPreventionDiscoveryConfigActionsExportData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_table: {
      value: dataLossPreventionDiscoveryConfigActionsExportDataProfileTableToHclTerraform(struct!.profileTable),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsExportDataProfileTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsExportDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsExportData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileTable = this._profileTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsExportData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._profileTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._profileTable.internalValue = value.profileTable;
    }
  }

  // profile_table - computed: false, optional: true, required: false
  private _profileTable = new DataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference(this, "profile_table");
  public get profileTable() {
    return this._profileTable;
  }
  public putProfileTable(value: DataLossPreventionDiscoveryConfigActionsExportDataProfileTable) {
    this._profileTable.internalValue = value;
  }
  public resetProfileTable() {
    this._profileTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTableInput() {
    return this._profileTable.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions {
  /**
  * The minimum data risk score that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#minimum_risk_score DataLossPreventionDiscoveryConfig#minimum_risk_score}
  */
  readonly minimumRiskScore?: string;
  /**
  * The minimum sensitivity level that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#minimum_sensitivity_score DataLossPreventionDiscoveryConfig#minimum_sensitivity_score}
  */
  readonly minimumSensitivityScore?: string;
}

export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_risk_score: cdktf.stringToTerraform(struct!.minimumRiskScore),
    minimum_sensitivity_score: cdktf.stringToTerraform(struct!.minimumSensitivityScore),
  }
}


export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_risk_score: {
      value: cdktf.stringToHclTerraform(struct!.minimumRiskScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_sensitivity_score: {
      value: cdktf.stringToHclTerraform(struct!.minimumSensitivityScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumRiskScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRiskScore = this._minimumRiskScore;
    }
    if (this._minimumSensitivityScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSensitivityScore = this._minimumSensitivityScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumRiskScore = undefined;
      this._minimumSensitivityScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumRiskScore = value.minimumRiskScore;
      this._minimumSensitivityScore = value.minimumSensitivityScore;
    }
  }

  // minimum_risk_score - computed: false, optional: true, required: false
  private _minimumRiskScore?: string; 
  public get minimumRiskScore() {
    return this.getStringAttribute('minimum_risk_score');
  }
  public set minimumRiskScore(value: string) {
    this._minimumRiskScore = value;
  }
  public resetMinimumRiskScore() {
    this._minimumRiskScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRiskScoreInput() {
    return this._minimumRiskScore;
  }

  // minimum_sensitivity_score - computed: false, optional: true, required: false
  private _minimumSensitivityScore?: string; 
  public get minimumSensitivityScore() {
    return this.getStringAttribute('minimum_sensitivity_score');
  }
  public set minimumSensitivityScore(value: string) {
    this._minimumSensitivityScore = value;
  }
  public resetMinimumSensitivityScore() {
    this._minimumSensitivityScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSensitivityScoreInput() {
    return this._minimumSensitivityScore;
  }
}

export class DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference {
    return new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions {
  /**
  * The operator to apply to the collection of conditions Possible values: ["OR", "AND"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#logical_operator DataLossPreventionDiscoveryConfig#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#conditions DataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[] | cdktf.IResolvable;
}

export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference | DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
    conditions: cdktf.listMapper(dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference | DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_operator: {
      value: cdktf.stringToHclTerraform(struct!.logicalOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalOperator = this._logicalOperator;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logicalOperator = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logicalOperator = value.logicalOperator;
      this._conditions.internalValue = value.conditions;
    }
  }

  // logical_operator - computed: false, optional: true, required: false
  private _logicalOperator?: string; 
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
  public set logicalOperator(value: string) {
    this._logicalOperator = value;
  }
  public resetLogicalOperator() {
    this._logicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOperatorInput() {
    return this._logicalOperator;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition {
  /**
  * expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#expressions DataLossPreventionDiscoveryConfig#expressions}
  */
  readonly expressions?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions;
}

export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference | DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToTerraform(struct!.expressions),
  }
}


export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference | DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToHclTerraform(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions = new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference(this, "expressions");
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions) {
    this._expressions.internalValue = value;
  }
  public resetExpressions() {
    this._expressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigActionsPubSubNotification {
  /**
  * How much data to include in the pub/sub message. Possible values: ["TABLE_PROFILE", "RESOURCE_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#detail_of_message DataLossPreventionDiscoveryConfig#detail_of_message}
  */
  readonly detailOfMessage?: string;
  /**
  * The type of event that triggers a Pub/Sub. At most one PubSubNotification per EventType is permitted. Possible values: ["NEW_PROFILE", "CHANGED_PROFILE", "SCORE_INCREASED", "ERROR_CHANGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#event DataLossPreventionDiscoveryConfig#event}
  */
  readonly event?: string;
  /**
  * Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#topic DataLossPreventionDiscoveryConfig#topic}
  */
  readonly topic?: string;
  /**
  * pubsub_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#pubsub_condition DataLossPreventionDiscoveryConfig#pubsub_condition}
  */
  readonly pubsubCondition?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition;
}

export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference | DataLossPreventionDiscoveryConfigActionsPubSubNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_of_message: cdktf.stringToTerraform(struct!.detailOfMessage),
    event: cdktf.stringToTerraform(struct!.event),
    topic: cdktf.stringToTerraform(struct!.topic),
    pubsub_condition: dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToTerraform(struct!.pubsubCondition),
  }
}


export function dataLossPreventionDiscoveryConfigActionsPubSubNotificationToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference | DataLossPreventionDiscoveryConfigActionsPubSubNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detail_of_message: {
      value: cdktf.stringToHclTerraform(struct!.detailOfMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pubsub_condition: {
      value: dataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToHclTerraform(struct!.pubsubCondition),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsPubSubNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailOfMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailOfMessage = this._detailOfMessage;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._pubsubCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubCondition = this._pubsubCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsPubSubNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detailOfMessage = undefined;
      this._event = undefined;
      this._topic = undefined;
      this._pubsubCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detailOfMessage = value.detailOfMessage;
      this._event = value.event;
      this._topic = value.topic;
      this._pubsubCondition.internalValue = value.pubsubCondition;
    }
  }

  // detail_of_message - computed: false, optional: true, required: false
  private _detailOfMessage?: string; 
  public get detailOfMessage() {
    return this.getStringAttribute('detail_of_message');
  }
  public set detailOfMessage(value: string) {
    this._detailOfMessage = value;
  }
  public resetDetailOfMessage() {
    this._detailOfMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailOfMessageInput() {
    return this._detailOfMessage;
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // pubsub_condition - computed: false, optional: true, required: false
  private _pubsubCondition = new DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference(this, "pubsub_condition");
  public get pubsubCondition() {
    return this._pubsubCondition;
  }
  public putPubsubCondition(value: DataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition) {
    this._pubsubCondition.internalValue = value;
  }
  public resetPubsubCondition() {
    this._pubsubCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubConditionInput() {
    return this._pubsubCondition.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#score DataLossPreventionDiscoveryConfig#score}
  */
  readonly score: string;
}

export function dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference | DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference | DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag {
  /**
  * The namespaced name for the tag value to attach to resources. Must be in the format '{parent_id}/{tag_key_short_name}/{short_name}', for example, "123456/environment/prod".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#namespaced_value DataLossPreventionDiscoveryConfig#namespaced_value}
  */
  readonly namespacedValue?: string;
}

export function dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference | DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaced_value: cdktf.stringToTerraform(struct!.namespacedValue),
  }
}


export function dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference | DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaced_value: {
      value: cdktf.stringToHclTerraform(struct!.namespacedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespacedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedValue = this._namespacedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespacedValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespacedValue = value.namespacedValue;
    }
  }

  // namespaced_value - computed: false, optional: true, required: false
  private _namespacedValue?: string; 
  public get namespacedValue() {
    return this.getStringAttribute('namespaced_value');
  }
  public set namespacedValue(value: string) {
    this._namespacedValue = value;
  }
  public resetNamespacedValue() {
    this._namespacedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedValueInput() {
    return this._namespacedValue;
  }
}
export interface DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions {
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#sensitivity_score DataLossPreventionDiscoveryConfig#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#tag DataLossPreventionDiscoveryConfig#tag}
  */
  readonly tag?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag;
}

export function dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity_score: dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToTerraform(struct!.sensitivityScore),
    tag: dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToTerraform(struct!.tag),
  }
}


export function dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitivity_score: {
      value: dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreList",
    },
    tag: {
      value: dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitivityScore.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitivityScore.internalValue = value.sensitivityScore;
      this._tag.internalValue = value.tag;
    }
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsOutputReference {
    return new DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigActionsTagResources {
  /**
  * Whether applying a tag to a resource should lower the risk of the profile for that resource. For example, in conjunction with an [IAM deny policy](https://cloud.google.com/iam/docs/deny-overview), you can deny all principals a permission if a tag value is present, mitigating the risk of the resource. This also lowers the data risk of resources at the lower levels of the resource hierarchy. For example, reducing the data risk of a table data profile also reduces the data risk of the constituent column data profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#lower_data_risk_to_low DataLossPreventionDiscoveryConfig#lower_data_risk_to_low}
  */
  readonly lowerDataRiskToLow?: boolean | cdktf.IResolvable;
  /**
  * The profile generations for which the tag should be attached to resources. If you attach a tag to only new profiles, then if the sensitivity score of a profile subsequently changes, its tag doesn't change. By default, this field includes only new profiles. To include both new and updated profiles for tagging, this field should explicitly include both 'PROFILE_GENERATION_NEW' and 'PROFILE_GENERATION_UPDATE'. Possible values: ["PROFILE_GENERATION_NEW", "PROFILE_GENERATION_UPDATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#profile_generations_to_tag DataLossPreventionDiscoveryConfig#profile_generations_to_tag}
  */
  readonly profileGenerationsToTag?: string[];
  /**
  * tag_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#tag_conditions DataLossPreventionDiscoveryConfig#tag_conditions}
  */
  readonly tagConditions?: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions[] | cdktf.IResolvable;
}

export function dataLossPreventionDiscoveryConfigActionsTagResourcesToTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference | DataLossPreventionDiscoveryConfigActionsTagResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower_data_risk_to_low: cdktf.booleanToTerraform(struct!.lowerDataRiskToLow),
    profile_generations_to_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileGenerationsToTag),
    tag_conditions: cdktf.listMapper(dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToTerraform, true)(struct!.tagConditions),
  }
}


export function dataLossPreventionDiscoveryConfigActionsTagResourcesToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference | DataLossPreventionDiscoveryConfigActionsTagResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower_data_risk_to_low: {
      value: cdktf.booleanToHclTerraform(struct!.lowerDataRiskToLow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_generations_to_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profileGenerationsToTag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_conditions: {
      value: cdktf.listMapperHcl(dataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToHclTerraform, true)(struct!.tagConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigActionsTagResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerDataRiskToLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerDataRiskToLow = this._lowerDataRiskToLow;
    }
    if (this._profileGenerationsToTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileGenerationsToTag = this._profileGenerationsToTag;
    }
    if (this._tagConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagConditions = this._tagConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActionsTagResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowerDataRiskToLow = undefined;
      this._profileGenerationsToTag = undefined;
      this._tagConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lowerDataRiskToLow = value.lowerDataRiskToLow;
      this._profileGenerationsToTag = value.profileGenerationsToTag;
      this._tagConditions.internalValue = value.tagConditions;
    }
  }

  // lower_data_risk_to_low - computed: false, optional: true, required: false
  private _lowerDataRiskToLow?: boolean | cdktf.IResolvable; 
  public get lowerDataRiskToLow() {
    return this.getBooleanAttribute('lower_data_risk_to_low');
  }
  public set lowerDataRiskToLow(value: boolean | cdktf.IResolvable) {
    this._lowerDataRiskToLow = value;
  }
  public resetLowerDataRiskToLow() {
    this._lowerDataRiskToLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerDataRiskToLowInput() {
    return this._lowerDataRiskToLow;
  }

  // profile_generations_to_tag - computed: false, optional: true, required: false
  private _profileGenerationsToTag?: string[]; 
  public get profileGenerationsToTag() {
    return this.getListAttribute('profile_generations_to_tag');
  }
  public set profileGenerationsToTag(value: string[]) {
    this._profileGenerationsToTag = value;
  }
  public resetProfileGenerationsToTag() {
    this._profileGenerationsToTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGenerationsToTagInput() {
    return this._profileGenerationsToTag;
  }

  // tag_conditions - computed: false, optional: true, required: false
  private _tagConditions = new DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsList(this, "tag_conditions", false);
  public get tagConditions() {
    return this._tagConditions;
  }
  public putTagConditions(value: DataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions[] | cdktf.IResolvable) {
    this._tagConditions.internalValue = value;
  }
  public resetTagConditions() {
    this._tagConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionsInput() {
    return this._tagConditions.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigActions {
  /**
  * export_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#export_data DataLossPreventionDiscoveryConfig#export_data}
  */
  readonly exportData?: DataLossPreventionDiscoveryConfigActionsExportData;
  /**
  * pub_sub_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#pub_sub_notification DataLossPreventionDiscoveryConfig#pub_sub_notification}
  */
  readonly pubSubNotification?: DataLossPreventionDiscoveryConfigActionsPubSubNotification;
  /**
  * tag_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#tag_resources DataLossPreventionDiscoveryConfig#tag_resources}
  */
  readonly tagResources?: DataLossPreventionDiscoveryConfigActionsTagResources;
}

export function dataLossPreventionDiscoveryConfigActionsToTerraform(struct?: DataLossPreventionDiscoveryConfigActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_data: dataLossPreventionDiscoveryConfigActionsExportDataToTerraform(struct!.exportData),
    pub_sub_notification: dataLossPreventionDiscoveryConfigActionsPubSubNotificationToTerraform(struct!.pubSubNotification),
    tag_resources: dataLossPreventionDiscoveryConfigActionsTagResourcesToTerraform(struct!.tagResources),
  }
}


export function dataLossPreventionDiscoveryConfigActionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_data: {
      value: dataLossPreventionDiscoveryConfigActionsExportDataToHclTerraform(struct!.exportData),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsExportDataList",
    },
    pub_sub_notification: {
      value: dataLossPreventionDiscoveryConfigActionsPubSubNotificationToHclTerraform(struct!.pubSubNotification),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsPubSubNotificationList",
    },
    tag_resources: {
      value: dataLossPreventionDiscoveryConfigActionsTagResourcesToHclTerraform(struct!.tagResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigActionsTagResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportData = this._exportData?.internalValue;
    }
    if (this._pubSubNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubSubNotification = this._pubSubNotification?.internalValue;
    }
    if (this._tagResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagResources = this._tagResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportData.internalValue = undefined;
      this._pubSubNotification.internalValue = undefined;
      this._tagResources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportData.internalValue = value.exportData;
      this._pubSubNotification.internalValue = value.pubSubNotification;
      this._tagResources.internalValue = value.tagResources;
    }
  }

  // export_data - computed: false, optional: true, required: false
  private _exportData = new DataLossPreventionDiscoveryConfigActionsExportDataOutputReference(this, "export_data");
  public get exportData() {
    return this._exportData;
  }
  public putExportData(value: DataLossPreventionDiscoveryConfigActionsExportData) {
    this._exportData.internalValue = value;
  }
  public resetExportData() {
    this._exportData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataInput() {
    return this._exportData.internalValue;
  }

  // pub_sub_notification - computed: false, optional: true, required: false
  private _pubSubNotification = new DataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference(this, "pub_sub_notification");
  public get pubSubNotification() {
    return this._pubSubNotification;
  }
  public putPubSubNotification(value: DataLossPreventionDiscoveryConfigActionsPubSubNotification) {
    this._pubSubNotification.internalValue = value;
  }
  public resetPubSubNotification() {
    this._pubSubNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSubNotificationInput() {
    return this._pubSubNotification.internalValue;
  }

  // tag_resources - computed: false, optional: true, required: false
  private _tagResources = new DataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference(this, "tag_resources");
  public get tagResources() {
    return this._tagResources;
  }
  public putTagResources(value: DataLossPreventionDiscoveryConfigActionsTagResources) {
    this._tagResources.internalValue = value;
  }
  public resetTagResources() {
    this._tagResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagResourcesInput() {
    return this._tagResources.internalValue;
  }
}

export class DataLossPreventionDiscoveryConfigActionsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionDiscoveryConfigActions[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionDiscoveryConfigActionsOutputReference {
    return new DataLossPreventionDiscoveryConfigActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigOrgConfigLocation {
  /**
  * The ID for the folder within an organization to scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#folder_id DataLossPreventionDiscoveryConfig#folder_id}
  */
  readonly folderId?: string;
  /**
  * The ID of an organization to scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#organization_id DataLossPreventionDiscoveryConfig#organization_id}
  */
  readonly organizationId?: string;
}

export function dataLossPreventionDiscoveryConfigOrgConfigLocationToTerraform(struct?: DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference | DataLossPreventionDiscoveryConfigOrgConfigLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
  }
}


export function dataLossPreventionDiscoveryConfigOrgConfigLocationToHclTerraform(struct?: DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference | DataLossPreventionDiscoveryConfigOrgConfigLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigOrgConfigLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigOrgConfigLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._folderId = undefined;
      this._organizationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._folderId = value.folderId;
      this._organizationId = value.organizationId;
    }
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }
}
export interface DataLossPreventionDiscoveryConfigOrgConfig {
  /**
  * The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the cloud DLP API must be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#project_id DataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#location DataLossPreventionDiscoveryConfig#location}
  */
  readonly location?: DataLossPreventionDiscoveryConfigOrgConfigLocation;
}

export function dataLossPreventionDiscoveryConfigOrgConfigToTerraform(struct?: DataLossPreventionDiscoveryConfigOrgConfigOutputReference | DataLossPreventionDiscoveryConfigOrgConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    location: dataLossPreventionDiscoveryConfigOrgConfigLocationToTerraform(struct!.location),
  }
}


export function dataLossPreventionDiscoveryConfigOrgConfigToHclTerraform(struct?: DataLossPreventionDiscoveryConfigOrgConfigOutputReference | DataLossPreventionDiscoveryConfigOrgConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: dataLossPreventionDiscoveryConfigOrgConfigLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigOrgConfigLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigOrgConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigOrgConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigOrgConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._location.internalValue = value.location;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // location - computed: false, optional: true, required: false
  private _location = new DataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataLossPreventionDiscoveryConfigOrgConfigLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence {
  /**
  * How frequently data profiles can be updated when the template is modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence {
  /**
  * How frequently profiles may be updated when schemas are modified. Default to monthly Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The type of events to consider when deciding if the table's schema has been modified and should have the profile updated. Defaults to NEW_COLUMN. Possible values: ["SCHEMA_NEW_COLUMNS", "SCHEMA_REMOVED_COLUMNS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._types = value.types;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence {
  /**
  * How frequently data profiles can be updated when tables are modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The type of events to consider when deciding if the table has been modified and should have the profile updated. Defaults to MODIFIED_TIMESTAMP Possible values: ["TABLE_MODIFIED_TIMESTAMP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._types = value.types;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence {
  /**
  * inspect_template_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#inspect_template_modified_cadence DataLossPreventionDiscoveryConfig#inspect_template_modified_cadence}
  */
  readonly inspectTemplateModifiedCadence?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence;
  /**
  * schema_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#schema_modified_cadence DataLossPreventionDiscoveryConfig#schema_modified_cadence}
  */
  readonly schemaModifiedCadence?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence;
  /**
  * table_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#table_modified_cadence DataLossPreventionDiscoveryConfig#table_modified_cadence}
  */
  readonly tableModifiedCadence?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_template_modified_cadence: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToTerraform(struct!.inspectTemplateModifiedCadence),
    schema_modified_cadence: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToTerraform(struct!.schemaModifiedCadence),
    table_modified_cadence: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToTerraform(struct!.tableModifiedCadence),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_template_modified_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToHclTerraform(struct!.inspectTemplateModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceList",
    },
    schema_modified_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToHclTerraform(struct!.schemaModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceList",
    },
    table_modified_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToHclTerraform(struct!.tableModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectTemplateModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplateModifiedCadence = this._inspectTemplateModifiedCadence?.internalValue;
    }
    if (this._schemaModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaModifiedCadence = this._schemaModifiedCadence?.internalValue;
    }
    if (this._tableModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableModifiedCadence = this._tableModifiedCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectTemplateModifiedCadence.internalValue = undefined;
      this._schemaModifiedCadence.internalValue = undefined;
      this._tableModifiedCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectTemplateModifiedCadence.internalValue = value.inspectTemplateModifiedCadence;
      this._schemaModifiedCadence.internalValue = value.schemaModifiedCadence;
      this._tableModifiedCadence.internalValue = value.tableModifiedCadence;
    }
  }

  // inspect_template_modified_cadence - computed: false, optional: true, required: false
  private _inspectTemplateModifiedCadence = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference(this, "inspect_template_modified_cadence");
  public get inspectTemplateModifiedCadence() {
    return this._inspectTemplateModifiedCadence;
  }
  public putInspectTemplateModifiedCadence(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence) {
    this._inspectTemplateModifiedCadence.internalValue = value;
  }
  public resetInspectTemplateModifiedCadence() {
    this._inspectTemplateModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateModifiedCadenceInput() {
    return this._inspectTemplateModifiedCadence.internalValue;
  }

  // schema_modified_cadence - computed: false, optional: true, required: false
  private _schemaModifiedCadence = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference(this, "schema_modified_cadence");
  public get schemaModifiedCadence() {
    return this._schemaModifiedCadence;
  }
  public putSchemaModifiedCadence(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence) {
    this._schemaModifiedCadence.internalValue = value;
  }
  public resetSchemaModifiedCadence() {
    this._schemaModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaModifiedCadenceInput() {
    return this._schemaModifiedCadence.internalValue;
  }

  // table_modified_cadence - computed: false, optional: true, required: false
  private _tableModifiedCadence = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference(this, "table_modified_cadence");
  public get tableModifiedCadence() {
    return this._tableModifiedCadence;
  }
  public putTableModifiedCadence(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence) {
    this._tableModifiedCadence.internalValue = value;
  }
  public resetTableModifiedCadence() {
    this._tableModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableModifiedCadenceInput() {
    return this._tableModifiedCadence.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions {
  /**
  * Duration format. The minimum age a table must have before Cloud DLP can profile it. Value greater than 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#min_age DataLossPreventionDiscoveryConfig#min_age}
  */
  readonly minAge?: string;
  /**
  * Minimum number of rows that should be present before Cloud DLP profiles as a table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#min_row_count DataLossPreventionDiscoveryConfig#min_row_count}
  */
  readonly minRowCount?: number;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_age: cdktf.stringToTerraform(struct!.minAge),
    min_row_count: cdktf.numberToTerraform(struct!.minRowCount),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_row_count: {
      value: cdktf.numberToHclTerraform(struct!.minRowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._minRowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRowCount = this._minRowCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minAge = undefined;
      this._minRowCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minAge = value.minAge;
      this._minRowCount = value.minRowCount;
    }
  }

  // min_age - computed: false, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // min_row_count - computed: false, optional: true, required: false
  private _minRowCount?: number; 
  public get minRowCount() {
    return this.getNumberAttribute('min_row_count');
  }
  public set minRowCount(value: number) {
    this._minRowCount = value;
  }
  public resetMinRowCount() {
    this._minRowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRowCountInput() {
    return this._minRowCount;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes {
  /**
  * A set of BiqQuery table types Possible values: ["BIG_QUERY_TABLE_TYPE_TABLE", "BIG_QUERY_TABLE_TYPE_EXTERNAL_BIG_LAKE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._types = value.types;
    }
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions {
  /**
  * A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#created_after DataLossPreventionDiscoveryConfig#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Restrict discovery to categories of table types. Currently view, materialized view, snapshot and non-biglake external tables are supported. Possible values: ["BIG_QUERY_COLLECTION_ALL_TYPES", "BIG_QUERY_COLLECTION_ONLY_SUPPORTED_TYPES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#type_collection DataLossPreventionDiscoveryConfig#type_collection}
  */
  readonly typeCollection?: string;
  /**
  * or_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#or_conditions DataLossPreventionDiscoveryConfig#or_conditions}
  */
  readonly orConditions?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions;
  /**
  * types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_after: cdktf.stringToTerraform(struct!.createdAfter),
    type_collection: cdktf.stringToTerraform(struct!.typeCollection),
    or_conditions: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToTerraform(struct!.orConditions),
    types: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToTerraform(struct!.types),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_after: {
      value: cdktf.stringToHclTerraform(struct!.createdAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_collection: {
      value: cdktf.stringToHclTerraform(struct!.typeCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    or_conditions: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToHclTerraform(struct!.orConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsList",
    },
    types: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToHclTerraform(struct!.types),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAfter = this._createdAfter;
    }
    if (this._typeCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCollection = this._typeCollection;
    }
    if (this._orConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orConditions = this._orConditions?.internalValue;
    }
    if (this._types?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createdAfter = undefined;
      this._typeCollection = undefined;
      this._orConditions.internalValue = undefined;
      this._types.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createdAfter = value.createdAfter;
      this._typeCollection = value.typeCollection;
      this._orConditions.internalValue = value.orConditions;
      this._types.internalValue = value.types;
    }
  }

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // type_collection - computed: false, optional: true, required: false
  private _typeCollection?: string; 
  public get typeCollection() {
    return this.getStringAttribute('type_collection');
  }
  public set typeCollection(value: string) {
    this._typeCollection = value;
  }
  public resetTypeCollection() {
    this._typeCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCollectionInput() {
    return this._typeCollection;
  }

  // or_conditions - computed: false, optional: true, required: false
  private _orConditions = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference(this, "or_conditions");
  public get orConditions() {
    return this._orConditions;
  }
  public putOrConditions(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions) {
    this._orConditions.internalValue = value;
  }
  public resetOrConditions() {
    this._orConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionsInput() {
    return this._orConditions.internalValue;
  }

  // types - computed: false, optional: true, required: false
  private _types = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference(this, "types");
  public get types() {
    return this._types;
  }
  public putTypes(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes) {
    this._types.internalValue = value;
  }
  public resetTypes() {
    this._types.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled {
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables {
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference {
  /**
  * Dataset ID of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#dataset_id DataLossPreventionDiscoveryConfig#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#table_id DataLossPreventionDiscoveryConfig#table_id}
  */
  readonly tableId: string;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns {
  /**
  * if unset, this property matches all datasets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#dataset_id_regex DataLossPreventionDiscoveryConfig#dataset_id_regex}
  */
  readonly datasetIdRegex?: string;
  /**
  * For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#project_id_regex DataLossPreventionDiscoveryConfig#project_id_regex}
  */
  readonly projectIdRegex?: string;
  /**
  * if unset, this property matches all tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#table_id_regex DataLossPreventionDiscoveryConfig#table_id_regex}
  */
  readonly tableIdRegex?: string;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id_regex: cdktf.stringToTerraform(struct!.datasetIdRegex),
    project_id_regex: cdktf.stringToTerraform(struct!.projectIdRegex),
    table_id_regex: cdktf.stringToTerraform(struct!.tableIdRegex),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.datasetIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.projectIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.tableIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdRegex = this._datasetIdRegex;
    }
    if (this._projectIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdRegex = this._projectIdRegex;
    }
    if (this._tableIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableIdRegex = this._tableIdRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetIdRegex = undefined;
      this._projectIdRegex = undefined;
      this._tableIdRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetIdRegex = value.datasetIdRegex;
      this._projectIdRegex = value.projectIdRegex;
      this._tableIdRegex = value.tableIdRegex;
    }
  }

  // dataset_id_regex - computed: false, optional: true, required: false
  private _datasetIdRegex?: string; 
  public get datasetIdRegex() {
    return this.getStringAttribute('dataset_id_regex');
  }
  public set datasetIdRegex(value: string) {
    this._datasetIdRegex = value;
  }
  public resetDatasetIdRegex() {
    this._datasetIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdRegexInput() {
    return this._datasetIdRegex;
  }

  // project_id_regex - computed: false, optional: true, required: false
  private _projectIdRegex?: string; 
  public get projectIdRegex() {
    return this.getStringAttribute('project_id_regex');
  }
  public set projectIdRegex(value: string) {
    this._projectIdRegex = value;
  }
  public resetProjectIdRegex() {
    this._projectIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdRegexInput() {
    return this._projectIdRegex;
  }

  // table_id_regex - computed: false, optional: true, required: false
  private _tableIdRegex?: string; 
  public get tableIdRegex() {
    return this.getStringAttribute('table_id_regex');
  }
  public set tableIdRegex(value: string) {
    this._tableIdRegex = value;
  }
  public resetTableIdRegex() {
    this._tableIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdRegexInput() {
    return this._tableIdRegex;
  }
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference {
    return new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#patterns DataLossPreventionDiscoveryConfig#patterns}
  */
  readonly patterns?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[] | cdktf.IResolvable;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToTerraform, true)(struct!.patterns),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables {
  /**
  * include_regexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#include_regexes DataLossPreventionDiscoveryConfig#include_regexes}
  */
  readonly includeRegexes?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_regexes: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToTerraform(struct!.includeRegexes),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_regexes: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToHclTerraform(struct!.includeRegexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeRegexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRegexes = this._includeRegexes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeRegexes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeRegexes.internalValue = value.includeRegexes;
    }
  }

  // include_regexes - computed: false, optional: true, required: false
  private _includeRegexes = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference(this, "include_regexes");
  public get includeRegexes() {
    return this._includeRegexes;
  }
  public putIncludeRegexes(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes) {
    this._includeRegexes.internalValue = value;
  }
  public resetIncludeRegexes() {
    this._includeRegexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRegexesInput() {
    return this._includeRegexes.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter {
  /**
  * other_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#other_tables DataLossPreventionDiscoveryConfig#other_tables}
  */
  readonly otherTables?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables;
  /**
  * table_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#table_reference DataLossPreventionDiscoveryConfig#table_reference}
  */
  readonly tableReference?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#tables DataLossPreventionDiscoveryConfig#tables}
  */
  readonly tables?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_tables: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToTerraform(struct!.otherTables),
    table_reference: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToTerraform(struct!.tableReference),
    tables: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToTerraform(struct!.tables),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other_tables: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToHclTerraform(struct!.otherTables),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesList",
    },
    table_reference: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToHclTerraform(struct!.tableReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceList",
    },
    tables: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._otherTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTables = this._otherTables?.internalValue;
    }
    if (this._tableReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReference = this._tableReference?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._otherTables.internalValue = undefined;
      this._tableReference.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._otherTables.internalValue = value.otherTables;
      this._tableReference.internalValue = value.tableReference;
      this._tables.internalValue = value.tables;
    }
  }

  // other_tables - computed: false, optional: true, required: false
  private _otherTables = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference(this, "other_tables");
  public get otherTables() {
    return this._otherTables;
  }
  public putOtherTables(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables) {
    this._otherTables.internalValue = value;
  }
  public resetOtherTables() {
    this._otherTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTablesInput() {
    return this._otherTables.internalValue;
  }

  // table_reference - computed: false, optional: true, required: false
  private _tableReference = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference(this, "table_reference");
  public get tableReference() {
    return this._tableReference;
  }
  public putTableReference(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference) {
    this._tableReference.internalValue = value;
  }
  public resetTableReference() {
    this._tableReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReferenceInput() {
    return this._tableReference.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsBigQueryTarget {
  /**
  * cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#cadence DataLossPreventionDiscoveryConfig#cadence}
  */
  readonly cadence?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#conditions DataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#disabled DataLossPreventionDiscoveryConfig#disabled}
  */
  readonly disabled?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#filter DataLossPreventionDiscoveryConfig#filter}
  */
  readonly filter?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter;
}

export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cadence: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToTerraform(struct!.cadence),
    conditions: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToTerraform(struct!.conditions),
    disabled: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToTerraform(struct!.disabled),
    filter: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToTerraform(struct!.filter),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsBigQueryTargetToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsBigQueryTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToHclTerraform(struct!.cadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceList",
    },
    conditions: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsList",
    },
    disabled: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledList",
    },
    filter: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsBigQueryTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cadence = this._cadence?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cadence.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cadence.internalValue = value.cadence;
      this._conditions.internalValue = value.conditions;
      this._disabled.internalValue = value.disabled;
      this._filter.internalValue = value.filter;
    }
  }

  // cadence - computed: false, optional: true, required: false
  private _cadence = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference(this, "cadence");
  public get cadence() {
    return this._cadence;
  }
  public putCadence(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence) {
    this._cadence.internalValue = value;
  }
  public resetCadence() {
    this._cadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceInput() {
    return this._cadence.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions {
  /**
  * Database engines that should be profiled. Optional. Defaults to ALL_SUPPORTED_DATABASE_ENGINES if unspecified. Possible values: ["ALL_SUPPORTED_DATABASE_ENGINES", "MYSQL", "POSTGRES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#database_engines DataLossPreventionDiscoveryConfig#database_engines}
  */
  readonly databaseEngines?: string[];
  /**
  * Data profiles will only be generated for the database resource types specified in this field. If not specified, defaults to [DATABASE_RESOURCE_TYPE_ALL_SUPPORTED_TYPES]. Possible values: ["DATABASE_RESOURCE_TYPE_ALL_SUPPORTED_TYPES", "DATABASE_RESOURCE_TYPE_TABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_engines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseEngines),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_engines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseEngines),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseEngines = this._databaseEngines;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseEngines = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseEngines = value.databaseEngines;
      this._types = value.types;
    }
  }

  // database_engines - computed: false, optional: true, required: false
  private _databaseEngines?: string[]; 
  public get databaseEngines() {
    return this.getListAttribute('database_engines');
  }
  public set databaseEngines(value: string[]) {
    this._databaseEngines = value;
  }
  public resetDatabaseEngines() {
    this._databaseEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEnginesInput() {
    return this._databaseEngines;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled {
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns {
  /**
  * Regex to test the database name against. If empty, all databases match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#database_regex DataLossPreventionDiscoveryConfig#database_regex}
  */
  readonly databaseRegex?: string;
  /**
  * Regex to test the database resource's name against. An example of a database resource name is a table's name. Other database resource names like view names could be included in the future. If empty, all database resources match.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#database_resource_name_regex DataLossPreventionDiscoveryConfig#database_resource_name_regex}
  */
  readonly databaseResourceNameRegex?: string;
  /**
  * Regex to test the instance name against. If empty, all instances match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#instance_regex DataLossPreventionDiscoveryConfig#instance_regex}
  */
  readonly instanceRegex?: string;
  /**
  * For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#project_id_regex DataLossPreventionDiscoveryConfig#project_id_regex}
  */
  readonly projectIdRegex?: string;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_regex: cdktf.stringToTerraform(struct!.databaseRegex),
    database_resource_name_regex: cdktf.stringToTerraform(struct!.databaseResourceNameRegex),
    instance_regex: cdktf.stringToTerraform(struct!.instanceRegex),
    project_id_regex: cdktf.stringToTerraform(struct!.projectIdRegex),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_regex: {
      value: cdktf.stringToHclTerraform(struct!.databaseRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_resource_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.databaseResourceNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_regex: {
      value: cdktf.stringToHclTerraform(struct!.instanceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.projectIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRegex = this._databaseRegex;
    }
    if (this._databaseResourceNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResourceNameRegex = this._databaseResourceNameRegex;
    }
    if (this._instanceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRegex = this._instanceRegex;
    }
    if (this._projectIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdRegex = this._projectIdRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseRegex = undefined;
      this._databaseResourceNameRegex = undefined;
      this._instanceRegex = undefined;
      this._projectIdRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseRegex = value.databaseRegex;
      this._databaseResourceNameRegex = value.databaseResourceNameRegex;
      this._instanceRegex = value.instanceRegex;
      this._projectIdRegex = value.projectIdRegex;
    }
  }

  // database_regex - computed: false, optional: true, required: false
  private _databaseRegex?: string; 
  public get databaseRegex() {
    return this.getStringAttribute('database_regex');
  }
  public set databaseRegex(value: string) {
    this._databaseRegex = value;
  }
  public resetDatabaseRegex() {
    this._databaseRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRegexInput() {
    return this._databaseRegex;
  }

  // database_resource_name_regex - computed: false, optional: true, required: false
  private _databaseResourceNameRegex?: string; 
  public get databaseResourceNameRegex() {
    return this.getStringAttribute('database_resource_name_regex');
  }
  public set databaseResourceNameRegex(value: string) {
    this._databaseResourceNameRegex = value;
  }
  public resetDatabaseResourceNameRegex() {
    this._databaseResourceNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceNameRegexInput() {
    return this._databaseResourceNameRegex;
  }

  // instance_regex - computed: false, optional: true, required: false
  private _instanceRegex?: string; 
  public get instanceRegex() {
    return this.getStringAttribute('instance_regex');
  }
  public set instanceRegex(value: string) {
    this._instanceRegex = value;
  }
  public resetInstanceRegex() {
    this._instanceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRegexInput() {
    return this._instanceRegex;
  }

  // project_id_regex - computed: false, optional: true, required: false
  private _projectIdRegex?: string; 
  public get projectIdRegex() {
    return this.getStringAttribute('project_id_regex');
  }
  public set projectIdRegex(value: string) {
    this._projectIdRegex = value;
  }
  public resetProjectIdRegex() {
    this._projectIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdRegexInput() {
    return this._projectIdRegex;
  }
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsOutputReference {
    return new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#patterns DataLossPreventionDiscoveryConfig#patterns}
  */
  readonly patterns?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToTerraform, true)(struct!.patterns),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection {
  /**
  * include_regexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#include_regexes DataLossPreventionDiscoveryConfig#include_regexes}
  */
  readonly includeRegexes?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_regexes: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToTerraform(struct!.includeRegexes),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_regexes: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToHclTerraform(struct!.includeRegexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeRegexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRegexes = this._includeRegexes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeRegexes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeRegexes.internalValue = value.includeRegexes;
    }
  }

  // include_regexes - computed: false, optional: true, required: false
  private _includeRegexes = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference(this, "include_regexes");
  public get includeRegexes() {
    return this._includeRegexes;
  }
  public putIncludeRegexes(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes) {
    this._includeRegexes.internalValue = value;
  }
  public resetIncludeRegexes() {
    this._includeRegexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRegexesInput() {
    return this._includeRegexes.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference {
  /**
  * Required. Name of a database within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#database DataLossPreventionDiscoveryConfig#database}
  */
  readonly database: string;
  /**
  * Required. Name of a database resource, for example, a table within the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#database_resource DataLossPreventionDiscoveryConfig#database_resource}
  */
  readonly databaseResource: string;
  /**
  * Required. The instance where this resource is located. For example: Cloud SQL instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#instance DataLossPreventionDiscoveryConfig#instance}
  */
  readonly instance: string;
  /**
  * Required. If within a project-level config, then this must match the config's project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#project_id DataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId: string;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    database_resource: cdktf.stringToTerraform(struct!.databaseResource),
    instance: cdktf.stringToTerraform(struct!.instance),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_resource: {
      value: cdktf.stringToHclTerraform(struct!.databaseResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResource = this._databaseResource;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._databaseResource = undefined;
      this._instance = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._databaseResource = value.databaseResource;
      this._instance = value.instance;
      this._projectId = value.projectId;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_resource - computed: false, optional: false, required: true
  private _databaseResource?: string; 
  public get databaseResource() {
    return this.getStringAttribute('database_resource');
  }
  public set databaseResource(value: string) {
    this._databaseResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceInput() {
    return this._databaseResource;
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers {
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter {
  /**
  * collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#collection DataLossPreventionDiscoveryConfig#collection}
  */
  readonly collection?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection;
  /**
  * database_resource_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#database_resource_reference DataLossPreventionDiscoveryConfig#database_resource_reference}
  */
  readonly databaseResourceReference?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference;
  /**
  * others block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#others DataLossPreventionDiscoveryConfig#others}
  */
  readonly others?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToTerraform(struct!.collection),
    database_resource_reference: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToTerraform(struct!.databaseResourceReference),
    others: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToTerraform(struct!.others),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToHclTerraform(struct!.collection),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionList",
    },
    database_resource_reference: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToHclTerraform(struct!.databaseResourceReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceList",
    },
    others: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToHclTerraform(struct!.others),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection?.internalValue;
    }
    if (this._databaseResourceReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResourceReference = this._databaseResourceReference?.internalValue;
    }
    if (this._others?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection.internalValue = undefined;
      this._databaseResourceReference.internalValue = undefined;
      this._others.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection.internalValue = value.collection;
      this._databaseResourceReference.internalValue = value.databaseResourceReference;
      this._others.internalValue = value.others;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference(this, "collection");
  public get collection() {
    return this._collection;
  }
  public putCollection(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection) {
    this._collection.internalValue = value;
  }
  public resetCollection() {
    this._collection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection.internalValue;
  }

  // database_resource_reference - computed: false, optional: true, required: false
  private _databaseResourceReference = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference(this, "database_resource_reference");
  public get databaseResourceReference() {
    return this._databaseResourceReference;
  }
  public putDatabaseResourceReference(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference) {
    this._databaseResourceReference.internalValue = value;
  }
  public resetDatabaseResourceReference() {
    this._databaseResourceReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceReferenceInput() {
    return this._databaseResourceReference.internalValue;
  }

  // others - computed: false, optional: true, required: false
  private _others = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference(this, "others");
  public get others() {
    return this._others;
  }
  public putOthers(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers) {
    this._others.internalValue = value;
  }
  public resetOthers() {
    this._others.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence {
  /**
  * How frequently data profiles can be updated when the template is modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency: string;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence {
  /**
  * Frequency to regenerate data profiles when the schema is modified. Defaults to monthly. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The types of schema modifications to consider. Defaults to NEW_COLUMNS. Possible values: ["NEW_COLUMNS", "REMOVED_COLUMNS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#types DataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._types = value.types;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence {
  /**
  * Data changes (non-schema changes) in Cloud SQL tables can't trigger reprofiling. If you set this field, profiles are refreshed at this frequency regardless of whether the underlying tables have changes. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#refresh_frequency DataLossPreventionDiscoveryConfig#refresh_frequency}
  */
  readonly refreshFrequency?: string;
  /**
  * inspect_template_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#inspect_template_modified_cadence DataLossPreventionDiscoveryConfig#inspect_template_modified_cadence}
  */
  readonly inspectTemplateModifiedCadence?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence;
  /**
  * schema_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#schema_modified_cadence DataLossPreventionDiscoveryConfig#schema_modified_cadence}
  */
  readonly schemaModifiedCadence?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_frequency: cdktf.stringToTerraform(struct!.refreshFrequency),
    inspect_template_modified_cadence: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct!.inspectTemplateModifiedCadence),
    schema_modified_cadence: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToTerraform(struct!.schemaModifiedCadence),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_frequency: {
      value: cdktf.stringToHclTerraform(struct!.refreshFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_template_modified_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct!.inspectTemplateModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceList",
    },
    schema_modified_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToHclTerraform(struct!.schemaModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshFrequency = this._refreshFrequency;
    }
    if (this._inspectTemplateModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplateModifiedCadence = this._inspectTemplateModifiedCadence?.internalValue;
    }
    if (this._schemaModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaModifiedCadence = this._schemaModifiedCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshFrequency = undefined;
      this._inspectTemplateModifiedCadence.internalValue = undefined;
      this._schemaModifiedCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshFrequency = value.refreshFrequency;
      this._inspectTemplateModifiedCadence.internalValue = value.inspectTemplateModifiedCadence;
      this._schemaModifiedCadence.internalValue = value.schemaModifiedCadence;
    }
  }

  // refresh_frequency - computed: false, optional: true, required: false
  private _refreshFrequency?: string; 
  public get refreshFrequency() {
    return this.getStringAttribute('refresh_frequency');
  }
  public set refreshFrequency(value: string) {
    this._refreshFrequency = value;
  }
  public resetRefreshFrequency() {
    this._refreshFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshFrequencyInput() {
    return this._refreshFrequency;
  }

  // inspect_template_modified_cadence - computed: false, optional: true, required: false
  private _inspectTemplateModifiedCadence = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference(this, "inspect_template_modified_cadence");
  public get inspectTemplateModifiedCadence() {
    return this._inspectTemplateModifiedCadence;
  }
  public putInspectTemplateModifiedCadence(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence) {
    this._inspectTemplateModifiedCadence.internalValue = value;
  }
  public resetInspectTemplateModifiedCadence() {
    this._inspectTemplateModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateModifiedCadenceInput() {
    return this._inspectTemplateModifiedCadence.internalValue;
  }

  // schema_modified_cadence - computed: false, optional: true, required: false
  private _schemaModifiedCadence = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference(this, "schema_modified_cadence");
  public get schemaModifiedCadence() {
    return this._schemaModifiedCadence;
  }
  public putSchemaModifiedCadence(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence) {
    this._schemaModifiedCadence.internalValue = value;
  }
  public resetSchemaModifiedCadence() {
    this._schemaModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaModifiedCadenceInput() {
    return this._schemaModifiedCadence.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudSqlTarget {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#conditions DataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#disabled DataLossPreventionDiscoveryConfig#disabled}
  */
  readonly disabled?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#filter DataLossPreventionDiscoveryConfig#filter}
  */
  readonly filter: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter;
  /**
  * generation_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#generation_cadence DataLossPreventionDiscoveryConfig#generation_cadence}
  */
  readonly generationCadence?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToTerraform(struct!.conditions),
    disabled: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToTerraform(struct!.disabled),
    filter: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToTerraform(struct!.filter),
    generation_cadence: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToTerraform(struct!.generationCadence),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudSqlTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsList",
    },
    disabled: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledList",
    },
    filter: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterList",
    },
    generation_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToHclTerraform(struct!.generationCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudSqlTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._generationCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationCadence = this._generationCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditions.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._generationCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditions.internalValue = value.conditions;
      this._disabled.internalValue = value.disabled;
      this._filter.internalValue = value.filter;
      this._generationCadence.internalValue = value.generationCadence;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // generation_cadence - computed: false, optional: true, required: false
  private _generationCadence = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference(this, "generation_cadence");
  public get generationCadence() {
    return this._generationCadence;
  }
  public putGenerationCadence(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence) {
    this._generationCadence.internalValue = value;
  }
  public resetGenerationCadence() {
    this._generationCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationCadenceInput() {
    return this._generationCadence.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions {
  /**
  * Only objects with the specified attributes will be scanned. Defaults to [ALL_SUPPORTED_BUCKETS] if unset. Possible values: ["ALL_SUPPORTED_BUCKETS", "AUTOCLASS_DISABLED", "AUTOCLASS_ENABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#included_bucket_attributes DataLossPreventionDiscoveryConfig#included_bucket_attributes}
  */
  readonly includedBucketAttributes?: string[];
  /**
  * Only objects with the specified attributes will be scanned. If an object has one of the specified attributes but is inside an excluded bucket, it will not be scanned. Defaults to [ALL_SUPPORTED_OBJECTS]. A profile will be created even if no objects match the included_object_attributes. Possible values: ["ALL_SUPPORTED_OBJECTS", "STANDARD", "NEARLINE", "COLDLINE", "ARCHIVE", "REGIONAL", "MULTI_REGIONAL", "DURABLE_REDUCED_AVAILABILITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#included_object_attributes DataLossPreventionDiscoveryConfig#included_object_attributes}
  */
  readonly includedObjectAttributes?: string[];
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_bucket_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedBucketAttributes),
    included_object_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedObjectAttributes),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    included_bucket_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedBucketAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_object_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedObjectAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedBucketAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedBucketAttributes = this._includedBucketAttributes;
    }
    if (this._includedObjectAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedObjectAttributes = this._includedObjectAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedBucketAttributes = undefined;
      this._includedObjectAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedBucketAttributes = value.includedBucketAttributes;
      this._includedObjectAttributes = value.includedObjectAttributes;
    }
  }

  // included_bucket_attributes - computed: false, optional: true, required: false
  private _includedBucketAttributes?: string[]; 
  public get includedBucketAttributes() {
    return this.getListAttribute('included_bucket_attributes');
  }
  public set includedBucketAttributes(value: string[]) {
    this._includedBucketAttributes = value;
  }
  public resetIncludedBucketAttributes() {
    this._includedBucketAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedBucketAttributesInput() {
    return this._includedBucketAttributes;
  }

  // included_object_attributes - computed: false, optional: true, required: false
  private _includedObjectAttributes?: string[]; 
  public get includedObjectAttributes() {
    return this.getListAttribute('included_object_attributes');
  }
  public set includedObjectAttributes(value: string[]) {
    this._includedObjectAttributes = value;
  }
  public resetIncludedObjectAttributes() {
    this._includedObjectAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectAttributesInput() {
    return this._includedObjectAttributes;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions {
  /**
  * File store must have been created after this date. Used to avoid backfilling. A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#created_after DataLossPreventionDiscoveryConfig#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Duration format. Minimum age a file store must have. If set, the value must be 1 hour or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#min_age DataLossPreventionDiscoveryConfig#min_age}
  */
  readonly minAge?: string;
  /**
  * cloud_storage_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#cloud_storage_conditions DataLossPreventionDiscoveryConfig#cloud_storage_conditions}
  */
  readonly cloudStorageConditions?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_after: cdktf.stringToTerraform(struct!.createdAfter),
    min_age: cdktf.stringToTerraform(struct!.minAge),
    cloud_storage_conditions: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToTerraform(struct!.cloudStorageConditions),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_after: {
      value: cdktf.stringToHclTerraform(struct!.createdAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_storage_conditions: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToHclTerraform(struct!.cloudStorageConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAfter = this._createdAfter;
    }
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._cloudStorageConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageConditions = this._cloudStorageConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createdAfter = undefined;
      this._minAge = undefined;
      this._cloudStorageConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createdAfter = value.createdAfter;
      this._minAge = value.minAge;
      this._cloudStorageConditions.internalValue = value.cloudStorageConditions;
    }
  }

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // min_age - computed: false, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // cloud_storage_conditions - computed: false, optional: true, required: false
  private _cloudStorageConditions = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference(this, "cloud_storage_conditions");
  public get cloudStorageConditions() {
    return this._cloudStorageConditions;
  }
  public putCloudStorageConditions(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions) {
    this._cloudStorageConditions.internalValue = value;
  }
  public resetCloudStorageConditions() {
    this._cloudStorageConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageConditionsInput() {
    return this._cloudStorageConditions.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled {
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference {
  /**
  * The bucket to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#bucket_name DataLossPreventionDiscoveryConfig#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * If within a project-level config, then this must match the config's project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#project_id DataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._projectId = value.projectId;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex {
  /**
  * Regex to test the bucket name against. If empty, all buckets match. Example: "marketing2021" or "(marketing)\d{4}" will both match the bucket gs://marketing2021
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#bucket_name_regex DataLossPreventionDiscoveryConfig#bucket_name_regex}
  */
  readonly bucketNameRegex?: string;
  /**
  * For organizations, if unset, will match all projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#project_id_regex DataLossPreventionDiscoveryConfig#project_id_regex}
  */
  readonly projectIdRegex?: string;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name_regex: cdktf.stringToTerraform(struct!.bucketNameRegex),
    project_id_regex: cdktf.stringToTerraform(struct!.projectIdRegex),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.bucketNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.projectIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketNameRegex = this._bucketNameRegex;
    }
    if (this._projectIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdRegex = this._projectIdRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketNameRegex = undefined;
      this._projectIdRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketNameRegex = value.bucketNameRegex;
      this._projectIdRegex = value.projectIdRegex;
    }
  }

  // bucket_name_regex - computed: false, optional: true, required: false
  private _bucketNameRegex?: string; 
  public get bucketNameRegex() {
    return this.getStringAttribute('bucket_name_regex');
  }
  public set bucketNameRegex(value: string) {
    this._bucketNameRegex = value;
  }
  public resetBucketNameRegex() {
    this._bucketNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameRegexInput() {
    return this._bucketNameRegex;
  }

  // project_id_regex - computed: false, optional: true, required: false
  private _projectIdRegex?: string; 
  public get projectIdRegex() {
    return this.getStringAttribute('project_id_regex');
  }
  public set projectIdRegex(value: string) {
    this._projectIdRegex = value;
  }
  public resetProjectIdRegex() {
    this._projectIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdRegexInput() {
    return this._projectIdRegex;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns {
  /**
  * cloud_storage_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#cloud_storage_regex DataLossPreventionDiscoveryConfig#cloud_storage_regex}
  */
  readonly cloudStorageRegex?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_regex: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToTerraform(struct!.cloudStorageRegex),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_regex: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToHclTerraform(struct!.cloudStorageRegex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStorageRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageRegex = this._cloudStorageRegex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudStorageRegex.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudStorageRegex.internalValue = value.cloudStorageRegex;
    }
  }

  // cloud_storage_regex - computed: false, optional: true, required: false
  private _cloudStorageRegex = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference(this, "cloud_storage_regex");
  public get cloudStorageRegex() {
    return this._cloudStorageRegex;
  }
  public putCloudStorageRegex(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex) {
    this._cloudStorageRegex.internalValue = value;
  }
  public resetCloudStorageRegex() {
    this._cloudStorageRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageRegexInput() {
    return this._cloudStorageRegex.internalValue;
  }
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsOutputReference {
    return new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#patterns DataLossPreventionDiscoveryConfig#patterns}
  */
  readonly patterns?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToTerraform, true)(struct!.patterns),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection {
  /**
  * include_regexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#include_regexes DataLossPreventionDiscoveryConfig#include_regexes}
  */
  readonly includeRegexes?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_regexes: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToTerraform(struct!.includeRegexes),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_regexes: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToHclTerraform(struct!.includeRegexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeRegexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRegexes = this._includeRegexes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeRegexes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeRegexes.internalValue = value.includeRegexes;
    }
  }

  // include_regexes - computed: false, optional: true, required: false
  private _includeRegexes = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference(this, "include_regexes");
  public get includeRegexes() {
    return this._includeRegexes;
  }
  public putIncludeRegexes(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes) {
    this._includeRegexes.internalValue = value;
  }
  public resetIncludeRegexes() {
    this._includeRegexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRegexesInput() {
    return this._includeRegexes.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers {
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter {
  /**
  * cloud_storage_resource_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#cloud_storage_resource_reference DataLossPreventionDiscoveryConfig#cloud_storage_resource_reference}
  */
  readonly cloudStorageResourceReference?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference;
  /**
  * collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#collection DataLossPreventionDiscoveryConfig#collection}
  */
  readonly collection?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection;
  /**
  * others block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#others DataLossPreventionDiscoveryConfig#others}
  */
  readonly others?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_resource_reference: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToTerraform(struct!.cloudStorageResourceReference),
    collection: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToTerraform(struct!.collection),
    others: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToTerraform(struct!.others),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_resource_reference: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToHclTerraform(struct!.cloudStorageResourceReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceList",
    },
    collection: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToHclTerraform(struct!.collection),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionList",
    },
    others: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToHclTerraform(struct!.others),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStorageResourceReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageResourceReference = this._cloudStorageResourceReference?.internalValue;
    }
    if (this._collection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection?.internalValue;
    }
    if (this._others?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageResourceReference.internalValue = undefined;
      this._collection.internalValue = undefined;
      this._others.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageResourceReference.internalValue = value.cloudStorageResourceReference;
      this._collection.internalValue = value.collection;
      this._others.internalValue = value.others;
    }
  }

  // cloud_storage_resource_reference - computed: false, optional: true, required: false
  private _cloudStorageResourceReference = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference(this, "cloud_storage_resource_reference");
  public get cloudStorageResourceReference() {
    return this._cloudStorageResourceReference;
  }
  public putCloudStorageResourceReference(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference) {
    this._cloudStorageResourceReference.internalValue = value;
  }
  public resetCloudStorageResourceReference() {
    this._cloudStorageResourceReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageResourceReferenceInput() {
    return this._cloudStorageResourceReference.internalValue;
  }

  // collection - computed: false, optional: true, required: false
  private _collection = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference(this, "collection");
  public get collection() {
    return this._collection;
  }
  public putCollection(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection) {
    this._collection.internalValue = value;
  }
  public resetCollection() {
    this._collection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection.internalValue;
  }

  // others - computed: false, optional: true, required: false
  private _others = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference(this, "others");
  public get others() {
    return this._others;
  }
  public putOthers(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers) {
    this._others.internalValue = value;
  }
  public resetOthers() {
    this._others.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence {
  /**
  * How frequently data profiles can be updated when the template is modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#frequency DataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence {
  /**
  * Data changes in Cloud Storage can't trigger reprofiling. If you set this field, profiles are refreshed at this frequency regardless of whether the underlying buckets have changes. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#refresh_frequency DataLossPreventionDiscoveryConfig#refresh_frequency}
  */
  readonly refreshFrequency?: string;
  /**
  * inspect_template_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#inspect_template_modified_cadence DataLossPreventionDiscoveryConfig#inspect_template_modified_cadence}
  */
  readonly inspectTemplateModifiedCadence?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_frequency: cdktf.stringToTerraform(struct!.refreshFrequency),
    inspect_template_modified_cadence: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct!.inspectTemplateModifiedCadence),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_frequency: {
      value: cdktf.stringToHclTerraform(struct!.refreshFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_template_modified_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct!.inspectTemplateModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshFrequency = this._refreshFrequency;
    }
    if (this._inspectTemplateModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplateModifiedCadence = this._inspectTemplateModifiedCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshFrequency = undefined;
      this._inspectTemplateModifiedCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshFrequency = value.refreshFrequency;
      this._inspectTemplateModifiedCadence.internalValue = value.inspectTemplateModifiedCadence;
    }
  }

  // refresh_frequency - computed: false, optional: true, required: false
  private _refreshFrequency?: string; 
  public get refreshFrequency() {
    return this.getStringAttribute('refresh_frequency');
  }
  public set refreshFrequency(value: string) {
    this._refreshFrequency = value;
  }
  public resetRefreshFrequency() {
    this._refreshFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshFrequencyInput() {
    return this._refreshFrequency;
  }

  // inspect_template_modified_cadence - computed: false, optional: true, required: false
  private _inspectTemplateModifiedCadence = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference(this, "inspect_template_modified_cadence");
  public get inspectTemplateModifiedCadence() {
    return this._inspectTemplateModifiedCadence;
  }
  public putInspectTemplateModifiedCadence(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence) {
    this._inspectTemplateModifiedCadence.internalValue = value;
  }
  public resetInspectTemplateModifiedCadence() {
    this._inspectTemplateModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateModifiedCadenceInput() {
    return this._inspectTemplateModifiedCadence.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsCloudStorageTarget {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#conditions DataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#disabled DataLossPreventionDiscoveryConfig#disabled}
  */
  readonly disabled?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#filter DataLossPreventionDiscoveryConfig#filter}
  */
  readonly filter: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter;
  /**
  * generation_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#generation_cadence DataLossPreventionDiscoveryConfig#generation_cadence}
  */
  readonly generationCadence?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence;
}

export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToTerraform(struct!.conditions),
    disabled: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToTerraform(struct!.disabled),
    filter: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToTerraform(struct!.filter),
    generation_cadence: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToTerraform(struct!.generationCadence),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsCloudStorageTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsList",
    },
    disabled: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledList",
    },
    filter: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterList",
    },
    generation_cadence: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToHclTerraform(struct!.generationCadence),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsCloudStorageTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._generationCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationCadence = this._generationCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditions.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._generationCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditions.internalValue = value.conditions;
      this._disabled.internalValue = value.disabled;
      this._filter.internalValue = value.filter;
      this._generationCadence.internalValue = value.generationCadence;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // generation_cadence - computed: false, optional: true, required: false
  private _generationCadence = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference(this, "generation_cadence");
  public get generationCadence() {
    return this._generationCadence;
  }
  public putGenerationCadence(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence) {
    this._generationCadence.internalValue = value;
  }
  public resetGenerationCadence() {
    this._generationCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationCadenceInput() {
    return this._generationCadence.internalValue;
  }
}
export interface DataLossPreventionDiscoveryConfigTargetsSecretsTarget {
}

export function dataLossPreventionDiscoveryConfigTargetsSecretsTargetToTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsSecretsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionDiscoveryConfigTargetsSecretsTargetToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference | DataLossPreventionDiscoveryConfigTargetsSecretsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTargetsSecretsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargetsSecretsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionDiscoveryConfigTargets {
  /**
  * big_query_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#big_query_target DataLossPreventionDiscoveryConfig#big_query_target}
  */
  readonly bigQueryTarget?: DataLossPreventionDiscoveryConfigTargetsBigQueryTarget;
  /**
  * cloud_sql_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#cloud_sql_target DataLossPreventionDiscoveryConfig#cloud_sql_target}
  */
  readonly cloudSqlTarget?: DataLossPreventionDiscoveryConfigTargetsCloudSqlTarget;
  /**
  * cloud_storage_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#cloud_storage_target DataLossPreventionDiscoveryConfig#cloud_storage_target}
  */
  readonly cloudStorageTarget?: DataLossPreventionDiscoveryConfigTargetsCloudStorageTarget;
  /**
  * secrets_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#secrets_target DataLossPreventionDiscoveryConfig#secrets_target}
  */
  readonly secretsTarget?: DataLossPreventionDiscoveryConfigTargetsSecretsTarget;
}

export function dataLossPreventionDiscoveryConfigTargetsToTerraform(struct?: DataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_query_target: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetToTerraform(struct!.bigQueryTarget),
    cloud_sql_target: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToTerraform(struct!.cloudSqlTarget),
    cloud_storage_target: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToTerraform(struct!.cloudStorageTarget),
    secrets_target: dataLossPreventionDiscoveryConfigTargetsSecretsTargetToTerraform(struct!.secretsTarget),
  }
}


export function dataLossPreventionDiscoveryConfigTargetsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    big_query_target: {
      value: dataLossPreventionDiscoveryConfigTargetsBigQueryTargetToHclTerraform(struct!.bigQueryTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsBigQueryTargetList",
    },
    cloud_sql_target: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToHclTerraform(struct!.cloudSqlTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetList",
    },
    cloud_storage_target: {
      value: dataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToHclTerraform(struct!.cloudStorageTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetList",
    },
    secrets_target: {
      value: dataLossPreventionDiscoveryConfigTargetsSecretsTargetToHclTerraform(struct!.secretsTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionDiscoveryConfigTargetsSecretsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionDiscoveryConfigTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryTarget = this._bigQueryTarget?.internalValue;
    }
    if (this._cloudSqlTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlTarget = this._cloudSqlTarget?.internalValue;
    }
    if (this._cloudStorageTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageTarget = this._cloudStorageTarget?.internalValue;
    }
    if (this._secretsTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsTarget = this._secretsTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bigQueryTarget.internalValue = undefined;
      this._cloudSqlTarget.internalValue = undefined;
      this._cloudStorageTarget.internalValue = undefined;
      this._secretsTarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bigQueryTarget.internalValue = value.bigQueryTarget;
      this._cloudSqlTarget.internalValue = value.cloudSqlTarget;
      this._cloudStorageTarget.internalValue = value.cloudStorageTarget;
      this._secretsTarget.internalValue = value.secretsTarget;
    }
  }

  // big_query_target - computed: false, optional: true, required: false
  private _bigQueryTarget = new DataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference(this, "big_query_target");
  public get bigQueryTarget() {
    return this._bigQueryTarget;
  }
  public putBigQueryTarget(value: DataLossPreventionDiscoveryConfigTargetsBigQueryTarget) {
    this._bigQueryTarget.internalValue = value;
  }
  public resetBigQueryTarget() {
    this._bigQueryTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryTargetInput() {
    return this._bigQueryTarget.internalValue;
  }

  // cloud_sql_target - computed: false, optional: true, required: false
  private _cloudSqlTarget = new DataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference(this, "cloud_sql_target");
  public get cloudSqlTarget() {
    return this._cloudSqlTarget;
  }
  public putCloudSqlTarget(value: DataLossPreventionDiscoveryConfigTargetsCloudSqlTarget) {
    this._cloudSqlTarget.internalValue = value;
  }
  public resetCloudSqlTarget() {
    this._cloudSqlTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlTargetInput() {
    return this._cloudSqlTarget.internalValue;
  }

  // cloud_storage_target - computed: false, optional: true, required: false
  private _cloudStorageTarget = new DataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference(this, "cloud_storage_target");
  public get cloudStorageTarget() {
    return this._cloudStorageTarget;
  }
  public putCloudStorageTarget(value: DataLossPreventionDiscoveryConfigTargetsCloudStorageTarget) {
    this._cloudStorageTarget.internalValue = value;
  }
  public resetCloudStorageTarget() {
    this._cloudStorageTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageTargetInput() {
    return this._cloudStorageTarget.internalValue;
  }

  // secrets_target - computed: false, optional: true, required: false
  private _secretsTarget = new DataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference(this, "secrets_target");
  public get secretsTarget() {
    return this._secretsTarget;
  }
  public putSecretsTarget(value: DataLossPreventionDiscoveryConfigTargetsSecretsTarget) {
    this._secretsTarget.internalValue = value;
  }
  public resetSecretsTarget() {
    this._secretsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsTargetInput() {
    return this._secretsTarget.internalValue;
  }
}

export class DataLossPreventionDiscoveryConfigTargetsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionDiscoveryConfigTargets[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionDiscoveryConfigTargetsOutputReference {
    return new DataLossPreventionDiscoveryConfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionDiscoveryConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#create DataLossPreventionDiscoveryConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#delete DataLossPreventionDiscoveryConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#update DataLossPreventionDiscoveryConfig#update}
  */
  readonly update?: string;
}

export function dataLossPreventionDiscoveryConfigTimeoutsToTerraform(struct?: DataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable): any {
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


export function dataLossPreventionDiscoveryConfigTimeoutsToHclTerraform(struct?: DataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable): any {
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

export class DataLossPreventionDiscoveryConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config}
*/
export class DataLossPreventionDiscoveryConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_discovery_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLossPreventionDiscoveryConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLossPreventionDiscoveryConfig to import
  * @param importFromId The id of the existing DataLossPreventionDiscoveryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLossPreventionDiscoveryConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_discovery_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionDiscoveryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionDiscoveryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_discovery_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.1',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._inspectTemplates = config.inspectTemplates;
    this._location = config.location;
    this._parent = config.parent;
    this._status = config.status;
    this._actions.internalValue = config.actions;
    this._orgConfig.internalValue = config.orgConfig;
    this._targets.internalValue = config.targets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: true, required: false
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

  // errors - computed: true, optional: false, required: false
  private _errors = new DataLossPreventionDiscoveryConfigErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // inspect_templates - computed: false, optional: true, required: false
  private _inspectTemplates?: string[]; 
  public get inspectTemplates() {
    return this.getListAttribute('inspect_templates');
  }
  public set inspectTemplates(value: string[]) {
    this._inspectTemplates = value;
  }
  public resetInspectTemplates() {
    this._inspectTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplatesInput() {
    return this._inspectTemplates;
  }

  // last_run_time - computed: true, optional: false, required: false
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new DataLossPreventionDiscoveryConfigActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataLossPreventionDiscoveryConfigActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // org_config - computed: false, optional: true, required: false
  private _orgConfig = new DataLossPreventionDiscoveryConfigOrgConfigOutputReference(this, "org_config");
  public get orgConfig() {
    return this._orgConfig;
  }
  public putOrgConfig(value: DataLossPreventionDiscoveryConfigOrgConfig) {
    this._orgConfig.internalValue = value;
  }
  public resetOrgConfig() {
    this._orgConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgConfigInput() {
    return this._orgConfig.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new DataLossPreventionDiscoveryConfigTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DataLossPreventionDiscoveryConfigTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLossPreventionDiscoveryConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLossPreventionDiscoveryConfigTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      inspect_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inspectTemplates),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      status: cdktf.stringToTerraform(this._status),
      actions: cdktf.listMapper(dataLossPreventionDiscoveryConfigActionsToTerraform, true)(this._actions.internalValue),
      org_config: dataLossPreventionDiscoveryConfigOrgConfigToTerraform(this._orgConfig.internalValue),
      targets: cdktf.listMapper(dataLossPreventionDiscoveryConfigTargetsToTerraform, true)(this._targets.internalValue),
      timeouts: dataLossPreventionDiscoveryConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      inspect_templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inspectTemplates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(dataLossPreventionDiscoveryConfigActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionDiscoveryConfigActionsList",
      },
      org_config: {
        value: dataLossPreventionDiscoveryConfigOrgConfigToHclTerraform(this._orgConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionDiscoveryConfigOrgConfigList",
      },
      targets: {
        value: cdktf.listMapperHcl(dataLossPreventionDiscoveryConfigTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionDiscoveryConfigTargetsList",
      },
      timeouts: {
        value: dataLossPreventionDiscoveryConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataLossPreventionDiscoveryConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

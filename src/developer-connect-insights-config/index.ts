/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeveloperConnectInsightsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * User specified annotations. See https://google.aip.dev/148#annotations
  * for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#annotations DeveloperConnectInsightsConfig#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The name of the App Hub Application.
  * Format:
  * projects/{project}/locations/{location}/applications/{application}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#app_hub_application DeveloperConnectInsightsConfig#app_hub_application}
  */
  readonly appHubApplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#id DeveloperConnectInsightsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the requesting InsightsConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#insights_config_id DeveloperConnectInsightsConfig#insights_config_id}
  */
  readonly insightsConfigId: string;
  /**
  * Set of labels associated with an InsightsConfig.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#labels DeveloperConnectInsightsConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#location DeveloperConnectInsightsConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#project DeveloperConnectInsightsConfig#project}
  */
  readonly project?: string;
  /**
  * artifact_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#artifact_configs DeveloperConnectInsightsConfig#artifact_configs}
  */
  readonly artifactConfigs?: DeveloperConnectInsightsConfigArtifactConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#timeouts DeveloperConnectInsightsConfig#timeouts}
  */
  readonly timeouts?: DeveloperConnectInsightsConfigTimeouts;
}
export interface DeveloperConnectInsightsConfigErrorsDetails {
}

export function developerConnectInsightsConfigErrorsDetailsToTerraform(struct?: DeveloperConnectInsightsConfigErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function developerConnectInsightsConfigErrorsDetailsToHclTerraform(struct?: DeveloperConnectInsightsConfigErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeveloperConnectInsightsConfigErrorsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeveloperConnectInsightsConfigErrorsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigErrorsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detail_message - computed: true, optional: false, required: false
  public get detailMessage() {
    return this.getStringAttribute('detail_message');
  }
}

export class DeveloperConnectInsightsConfigErrorsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DeveloperConnectInsightsConfigErrorsDetailsOutputReference {
    return new DeveloperConnectInsightsConfigErrorsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeveloperConnectInsightsConfigErrors {
}

export function developerConnectInsightsConfigErrorsToTerraform(struct?: DeveloperConnectInsightsConfigErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function developerConnectInsightsConfigErrorsToHclTerraform(struct?: DeveloperConnectInsightsConfigErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeveloperConnectInsightsConfigErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeveloperConnectInsightsConfigErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigErrors | undefined) {
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
  private _details = new DeveloperConnectInsightsConfigErrorsDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DeveloperConnectInsightsConfigErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DeveloperConnectInsightsConfigErrorsOutputReference {
    return new DeveloperConnectInsightsConfigErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload {
}

export function developerConnectInsightsConfigRuntimeConfigsAppHubWorkloadToTerraform(struct?: DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function developerConnectInsightsConfigRuntimeConfigsAppHubWorkloadToHclTerraform(struct?: DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // criticality - computed: true, optional: false, required: false
  public get criticality() {
    return this.getStringAttribute('criticality');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // workload - computed: true, optional: false, required: false
  public get workload() {
    return this.getStringAttribute('workload');
  }
}

export class DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList extends cdktf.ComplexList {

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
  public get(index: number): DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference {
    return new DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload {
}

export function developerConnectInsightsConfigRuntimeConfigsGkeWorkloadToTerraform(struct?: DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function developerConnectInsightsConfigRuntimeConfigsGkeWorkloadToHclTerraform(struct?: DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // deployment - computed: true, optional: false, required: false
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
}

export class DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList extends cdktf.ComplexList {

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
  public get(index: number): DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference {
    return new DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeveloperConnectInsightsConfigRuntimeConfigs {
}

export function developerConnectInsightsConfigRuntimeConfigsToTerraform(struct?: DeveloperConnectInsightsConfigRuntimeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function developerConnectInsightsConfigRuntimeConfigsToHclTerraform(struct?: DeveloperConnectInsightsConfigRuntimeConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeveloperConnectInsightsConfigRuntimeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeveloperConnectInsightsConfigRuntimeConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigRuntimeConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_hub_workload - computed: true, optional: false, required: false
  private _appHubWorkload = new DeveloperConnectInsightsConfigRuntimeConfigsAppHubWorkloadList(this, "app_hub_workload", false);
  public get appHubWorkload() {
    return this._appHubWorkload;
  }

  // gke_workload - computed: true, optional: false, required: false
  private _gkeWorkload = new DeveloperConnectInsightsConfigRuntimeConfigsGkeWorkloadList(this, "gke_workload", false);
  public get gkeWorkload() {
    return this._gkeWorkload;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DeveloperConnectInsightsConfigRuntimeConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DeveloperConnectInsightsConfigRuntimeConfigsOutputReference {
    return new DeveloperConnectInsightsConfigRuntimeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis {
  /**
  * The project id of the project where the provenance is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#project_id DeveloperConnectInsightsConfig#project_id}
  */
  readonly projectId: string;
}

export function developerConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisToTerraform(struct?: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference | DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function developerConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisToHclTerraform(struct?: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference | DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
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
export interface DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry {
  /**
  * The name of the artifact registry package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#artifact_registry_package DeveloperConnectInsightsConfig#artifact_registry_package}
  */
  readonly artifactRegistryPackage: string;
  /**
  * The host project of Artifact Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#project_id DeveloperConnectInsightsConfig#project_id}
  */
  readonly projectId: string;
}

export function developerConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryToTerraform(struct?: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference | DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_registry_package: cdktf.stringToTerraform(struct!.artifactRegistryPackage),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function developerConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryToHclTerraform(struct?: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference | DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_registry_package: {
      value: cdktf.stringToHclTerraform(struct!.artifactRegistryPackage),
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

export class DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactRegistryPackage !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactRegistryPackage = this._artifactRegistryPackage;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactRegistryPackage = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactRegistryPackage = value.artifactRegistryPackage;
      this._projectId = value.projectId;
    }
  }

  // artifact_registry_package - computed: false, optional: false, required: true
  private _artifactRegistryPackage?: string; 
  public get artifactRegistryPackage() {
    return this.getStringAttribute('artifact_registry_package');
  }
  public set artifactRegistryPackage(value: string) {
    this._artifactRegistryPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactRegistryPackageInput() {
    return this._artifactRegistryPackage;
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
export interface DeveloperConnectInsightsConfigArtifactConfigs {
  /**
  * The URI of the artifact that is deployed.
  * e.g. 'us-docker.pkg.dev/my-project/my-repo/image'.
  * The URI does not include the tag / digest because it captures a lineage of
  * artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#uri DeveloperConnectInsightsConfig#uri}
  */
  readonly uri?: string;
  /**
  * google_artifact_analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#google_artifact_analysis DeveloperConnectInsightsConfig#google_artifact_analysis}
  */
  readonly googleArtifactAnalysis?: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis;
  /**
  * google_artifact_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#google_artifact_registry DeveloperConnectInsightsConfig#google_artifact_registry}
  */
  readonly googleArtifactRegistry?: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry;
}

export function developerConnectInsightsConfigArtifactConfigsToTerraform(struct?: DeveloperConnectInsightsConfigArtifactConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
    google_artifact_analysis: developerConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisToTerraform(struct!.googleArtifactAnalysis),
    google_artifact_registry: developerConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryToTerraform(struct!.googleArtifactRegistry),
  }
}


export function developerConnectInsightsConfigArtifactConfigsToHclTerraform(struct?: DeveloperConnectInsightsConfigArtifactConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_artifact_analysis: {
      value: developerConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisToHclTerraform(struct!.googleArtifactAnalysis),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisList",
    },
    google_artifact_registry: {
      value: developerConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryToHclTerraform(struct!.googleArtifactRegistry),
      isBlock: true,
      type: "list",
      storageClassType: "DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeveloperConnectInsightsConfigArtifactConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeveloperConnectInsightsConfigArtifactConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._googleArtifactAnalysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleArtifactAnalysis = this._googleArtifactAnalysis?.internalValue;
    }
    if (this._googleArtifactRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleArtifactRegistry = this._googleArtifactRegistry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeveloperConnectInsightsConfigArtifactConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
      this._googleArtifactAnalysis.internalValue = undefined;
      this._googleArtifactRegistry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
      this._googleArtifactAnalysis.internalValue = value.googleArtifactAnalysis;
      this._googleArtifactRegistry.internalValue = value.googleArtifactRegistry;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // google_artifact_analysis - computed: false, optional: true, required: false
  private _googleArtifactAnalysis = new DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysisOutputReference(this, "google_artifact_analysis");
  public get googleArtifactAnalysis() {
    return this._googleArtifactAnalysis;
  }
  public putGoogleArtifactAnalysis(value: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactAnalysis) {
    this._googleArtifactAnalysis.internalValue = value;
  }
  public resetGoogleArtifactAnalysis() {
    this._googleArtifactAnalysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleArtifactAnalysisInput() {
    return this._googleArtifactAnalysis.internalValue;
  }

  // google_artifact_registry - computed: false, optional: true, required: false
  private _googleArtifactRegistry = new DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistryOutputReference(this, "google_artifact_registry");
  public get googleArtifactRegistry() {
    return this._googleArtifactRegistry;
  }
  public putGoogleArtifactRegistry(value: DeveloperConnectInsightsConfigArtifactConfigsGoogleArtifactRegistry) {
    this._googleArtifactRegistry.internalValue = value;
  }
  public resetGoogleArtifactRegistry() {
    this._googleArtifactRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleArtifactRegistryInput() {
    return this._googleArtifactRegistry.internalValue;
  }
}

export class DeveloperConnectInsightsConfigArtifactConfigsList extends cdktf.ComplexList {
  public internalValue? : DeveloperConnectInsightsConfigArtifactConfigs[] | cdktf.IResolvable

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
  public get(index: number): DeveloperConnectInsightsConfigArtifactConfigsOutputReference {
    return new DeveloperConnectInsightsConfigArtifactConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeveloperConnectInsightsConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#create DeveloperConnectInsightsConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#delete DeveloperConnectInsightsConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#update DeveloperConnectInsightsConfig#update}
  */
  readonly update?: string;
}

export function developerConnectInsightsConfigTimeoutsToTerraform(struct?: DeveloperConnectInsightsConfigTimeouts | cdktf.IResolvable): any {
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


export function developerConnectInsightsConfigTimeoutsToHclTerraform(struct?: DeveloperConnectInsightsConfigTimeouts | cdktf.IResolvable): any {
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

export class DeveloperConnectInsightsConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeveloperConnectInsightsConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DeveloperConnectInsightsConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config google_developer_connect_insights_config}
*/
export class DeveloperConnectInsightsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_developer_connect_insights_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeveloperConnectInsightsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeveloperConnectInsightsConfig to import
  * @param importFromId The id of the existing DeveloperConnectInsightsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeveloperConnectInsightsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_developer_connect_insights_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/developer_connect_insights_config google_developer_connect_insights_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeveloperConnectInsightsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DeveloperConnectInsightsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_developer_connect_insights_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.47.0',
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
    this._annotations = config.annotations;
    this._appHubApplication = config.appHubApplication;
    this._id = config.id;
    this._insightsConfigId = config.insightsConfigId;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._artifactConfigs.internalValue = config.artifactConfigs;
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

  // app_hub_application - computed: false, optional: false, required: true
  private _appHubApplication?: string; 
  public get appHubApplication() {
    return this.getStringAttribute('app_hub_application');
  }
  public set appHubApplication(value: string) {
    this._appHubApplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appHubApplicationInput() {
    return this._appHubApplication;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DeveloperConnectInsightsConfigErrorsList(this, "errors", false);
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

  // insights_config_id - computed: false, optional: false, required: true
  private _insightsConfigId?: string; 
  public get insightsConfigId() {
    return this.getStringAttribute('insights_config_id');
  }
  public set insightsConfigId(value: string) {
    this._insightsConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsConfigIdInput() {
    return this._insightsConfigId;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // runtime_configs - computed: true, optional: false, required: false
  private _runtimeConfigs = new DeveloperConnectInsightsConfigRuntimeConfigsList(this, "runtime_configs", false);
  public get runtimeConfigs() {
    return this._runtimeConfigs;
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

  // artifact_configs - computed: false, optional: true, required: false
  private _artifactConfigs = new DeveloperConnectInsightsConfigArtifactConfigsList(this, "artifact_configs", false);
  public get artifactConfigs() {
    return this._artifactConfigs;
  }
  public putArtifactConfigs(value: DeveloperConnectInsightsConfigArtifactConfigs[] | cdktf.IResolvable) {
    this._artifactConfigs.internalValue = value;
  }
  public resetArtifactConfigs() {
    this._artifactConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactConfigsInput() {
    return this._artifactConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DeveloperConnectInsightsConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DeveloperConnectInsightsConfigTimeouts) {
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
      app_hub_application: cdktf.stringToTerraform(this._appHubApplication),
      id: cdktf.stringToTerraform(this._id),
      insights_config_id: cdktf.stringToTerraform(this._insightsConfigId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      artifact_configs: cdktf.listMapper(developerConnectInsightsConfigArtifactConfigsToTerraform, true)(this._artifactConfigs.internalValue),
      timeouts: developerConnectInsightsConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      app_hub_application: {
        value: cdktf.stringToHclTerraform(this._appHubApplication),
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
      insights_config_id: {
        value: cdktf.stringToHclTerraform(this._insightsConfigId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_configs: {
        value: cdktf.listMapperHcl(developerConnectInsightsConfigArtifactConfigsToHclTerraform, true)(this._artifactConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeveloperConnectInsightsConfigArtifactConfigsList",
      },
      timeouts: {
        value: developerConnectInsightsConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeveloperConnectInsightsConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIamWorkloadIdentityPoolProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}
  */
  readonly project?: string;
  /**
  * The ID used for the pool, which is the final component of the pool resource name. This
  * value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
  /**
  * The ID for the provider, which becomes the final component of the resource name. This
  * value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}
  */
  readonly workloadIdentityPoolProviderId: string;
}
export interface DataGoogleIamWorkloadIdentityPoolProviderAws {
}

export function dataGoogleIamWorkloadIdentityPoolProviderAwsToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolProviderAwsToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolProviderAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolProviderAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
}

export class DataGoogleIamWorkloadIdentityPoolProviderAwsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference {
    return new DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamWorkloadIdentityPoolProviderOidc {
}

export function dataGoogleIamWorkloadIdentityPoolProviderOidcToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolProviderOidcToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolProviderOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolProviderOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_audiences - computed: true, optional: false, required: false
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }

  // issuer_uri - computed: true, optional: false, required: false
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }

  // jwks_json - computed: true, optional: false, required: false
  public get jwksJson() {
    return this.getStringAttribute('jwks_json');
  }
}

export class DataGoogleIamWorkloadIdentityPoolProviderOidcList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference {
    return new DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamWorkloadIdentityPoolProviderSaml {
}

export function dataGoogleIamWorkloadIdentityPoolProviderSamlToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolProviderSamlToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolProviderSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolProviderSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idp_metadata_xml - computed: true, optional: false, required: false
  public get idpMetadataXml() {
    return this.getStringAttribute('idp_metadata_xml');
  }
}

export class DataGoogleIamWorkloadIdentityPoolProviderSamlList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference {
    return new DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas {
}

export function dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pem_certificate - computed: true, optional: false, required: false
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference {
    return new DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors {
}

export function dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pem_certificate - computed: true, optional: false, required: false
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference {
    return new DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore {
}

export function dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intermediate_cas - computed: true, optional: false, required: false
  private _intermediateCas = new DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList(this, "intermediate_cas", false);
  public get intermediateCas() {
    return this._intermediateCas;
  }

  // trust_anchors - computed: true, optional: false, required: false
  private _trustAnchors = new DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList(this, "trust_anchors", false);
  public get trustAnchors() {
    return this._trustAnchors;
  }
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference {
    return new DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleIamWorkloadIdentityPoolProviderX509 {
}

export function dataGoogleIamWorkloadIdentityPoolProviderX509ToTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleIamWorkloadIdentityPoolProviderX509ToHclTerraform(struct?: DataGoogleIamWorkloadIdentityPoolProviderX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleIamWorkloadIdentityPoolProviderX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleIamWorkloadIdentityPoolProviderX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trust_store - computed: true, optional: false, required: false
  private _trustStore = new DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList(this, "trust_store", false);
  public get trustStore() {
    return this._trustStore;
  }
}

export class DataGoogleIamWorkloadIdentityPoolProviderX509List extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference {
    return new DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}
*/
export class DataGoogleIamWorkloadIdentityPoolProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolProvider to import
  * @param importFromId The id of the existing DataGoogleIamWorkloadIdentityPoolProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIamWorkloadIdentityPoolProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool_provider',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.46.0',
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
    this._id = config.id;
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
    this._workloadIdentityPoolProviderId = config.workloadIdentityPoolProviderId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_condition - computed: true, optional: false, required: false
  public get attributeCondition() {
    return this.getStringAttribute('attribute_condition');
  }

  // attribute_mapping - computed: true, optional: false, required: false
  private _attributeMapping = new cdktf.StringMap(this, "attribute_mapping");
  public get attributeMapping() {
    return this._attributeMapping;
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new DataGoogleIamWorkloadIdentityPoolProviderAwsList(this, "aws", false);
  public get aws() {
    return this._aws;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc - computed: true, optional: false, required: false
  private _oidc = new DataGoogleIamWorkloadIdentityPoolProviderOidcList(this, "oidc", false);
  public get oidc() {
    return this._oidc;
  }

  // project - computed: false, optional: true, required: false
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

  // saml - computed: true, optional: false, required: false
  private _saml = new DataGoogleIamWorkloadIdentityPoolProviderSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workload_identity_pool_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolId?: string; 
  public get workloadIdentityPoolId() {
    return this.getStringAttribute('workload_identity_pool_id');
  }
  public set workloadIdentityPoolId(value: string) {
    this._workloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolIdInput() {
    return this._workloadIdentityPoolId;
  }

  // workload_identity_pool_provider_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolProviderId?: string; 
  public get workloadIdentityPoolProviderId() {
    return this.getStringAttribute('workload_identity_pool_provider_id');
  }
  public set workloadIdentityPoolProviderId(value: string) {
    this._workloadIdentityPoolProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolProviderIdInput() {
    return this._workloadIdentityPoolProviderId;
  }

  // x509 - computed: true, optional: false, required: false
  private _x509 = new DataGoogleIamWorkloadIdentityPoolProviderX509List(this, "x509", false);
  public get x509() {
    return this._x509;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      workload_identity_pool_id: cdktf.stringToTerraform(this._workloadIdentityPoolId),
      workload_identity_pool_provider_id: cdktf.stringToTerraform(this._workloadIdentityPoolProviderId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      workload_identity_pool_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_provider_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

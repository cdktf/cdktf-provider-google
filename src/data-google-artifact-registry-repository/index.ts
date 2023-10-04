// https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/artifact_registry_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleArtifactRegistryRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/artifact_registry_repository#id DataGoogleArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this repository is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/artifact_registry_repository#location DataGoogleArtifactRegistryRepository#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/artifact_registry_repository#project DataGoogleArtifactRegistryRepository#project}
  */
  readonly project?: string;
  /**
  * The last part of the repository name, for example:
"repo1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/artifact_registry_repository#repository_id DataGoogleArtifactRegistryRepository#repository_id}
  */
  readonly repositoryId: string;
}
export interface DataGoogleArtifactRegistryRepositoryDockerConfig {
}

export function dataGoogleArtifactRegistryRepositoryDockerConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryDockerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryDockerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryDockerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // immutable_tags - computed: true, optional: false, required: false
  public get immutableTags() {
    return this.getBooleanAttribute('immutable_tags');
  }
}

export class DataGoogleArtifactRegistryRepositoryDockerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryDockerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryMavenConfig {
}

export function dataGoogleArtifactRegistryRepositoryMavenConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryMavenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryMavenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryMavenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_snapshot_overwrites - computed: true, optional: false, required: false
  public get allowSnapshotOverwrites() {
    return this.getBooleanAttribute('allow_snapshot_overwrites');
  }

  // version_policy - computed: true, optional: false, required: false
  public get versionPolicy() {
    return this.getStringAttribute('version_policy');
  }
}

export class DataGoogleArtifactRegistryRepositoryMavenConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryMavenConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_base - computed: true, optional: false, required: false
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }

  // repository_path - computed: true, optional: false, required: false
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  private _publicRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList(this, "public_repository", false);
  public get publicRepository() {
    return this._publicRepository;
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repository_base - computed: true, optional: false, required: false
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }

  // repository_path - computed: true, optional: false, required: false
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_repository - computed: true, optional: false, required: false
  private _publicRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList(this, "public_repository", false);
  public get publicRepository() {
    return this._publicRepository;
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig {
}

export function dataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apt_repository - computed: true, optional: false, required: false
  private _aptRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList(this, "apt_repository", false);
  public get aptRepository() {
    return this._aptRepository;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // docker_repository - computed: true, optional: false, required: false
  private _dockerRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList(this, "docker_repository", false);
  public get dockerRepository() {
    return this._dockerRepository;
  }

  // maven_repository - computed: true, optional: false, required: false
  private _mavenRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList(this, "maven_repository", false);
  public get mavenRepository() {
    return this._mavenRepository;
  }

  // npm_repository - computed: true, optional: false, required: false
  private _npmRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList(this, "npm_repository", false);
  public get npmRepository() {
    return this._npmRepository;
  }

  // python_repository - computed: true, optional: false, required: false
  private _pythonRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList(this, "python_repository", false);
  public get pythonRepository() {
    return this._pythonRepository;
  }

  // yum_repository - computed: true, optional: false, required: false
  private _yumRepository = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList(this, "yum_repository", false);
  public get yumRepository() {
    return this._yumRepository;
  }
}

export class DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies {
}

export function dataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToTerraform(struct?: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference {
    return new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig {
}

export function dataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigToTerraform(struct?: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // upstream_policies - computed: true, optional: false, required: false
  private _upstreamPolicies = new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(this, "upstream_policies", false);
  public get upstreamPolicies() {
    return this._upstreamPolicies;
  }
}

export class DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference {
    return new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/artifact_registry_repository google_artifact_registry_repository}
*/
export class DataGoogleArtifactRegistryRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/data-sources/artifact_registry_repository google_artifact_registry_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleArtifactRegistryRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleArtifactRegistryRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_repository',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.0.0',
        providerVersionConstraint: '~> 5.0'
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
    this._location = config.location;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // docker_config - computed: true, optional: false, required: false
  private _dockerConfig = new DataGoogleArtifactRegistryRepositoryDockerConfigList(this, "docker_config", false);
  public get dockerConfig() {
    return this._dockerConfig;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
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

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
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

  // maven_config - computed: true, optional: false, required: false
  private _mavenConfig = new DataGoogleArtifactRegistryRepositoryMavenConfigList(this, "maven_config", false);
  public get mavenConfig() {
    return this._mavenConfig;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // remote_repository_config - computed: true, optional: false, required: false
  private _remoteRepositoryConfig = new DataGoogleArtifactRegistryRepositoryRemoteRepositoryConfigList(this, "remote_repository_config", false);
  public get remoteRepositoryConfig() {
    return this._remoteRepositoryConfig;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
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

  // virtual_repository_config - computed: true, optional: false, required: false
  private _virtualRepositoryConfig = new DataGoogleArtifactRegistryRepositoryVirtualRepositoryConfigList(this, "virtual_repository_config", false);
  public get virtualRepositoryConfig() {
    return this._virtualRepositoryConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
    };
  }
}

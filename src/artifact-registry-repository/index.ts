/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArtifactRegistryRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the cleanup pipeline is prevented from deleting versions in this
  * repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#cleanup_policy_dry_run ArtifactRegistryRepository#cleanup_policy_dry_run}
  */
  readonly cleanupPolicyDryRun?: boolean | cdktf.IResolvable;
  /**
  * The user-provided description of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}
  */
  readonly description?: string;
  /**
  * The format of packages that are stored in the repository. Supported formats
  * can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
  * You can only create alpha formats if you are a member of the
  * [alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#format ArtifactRegistryRepository#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Cloud KMS resource name of the customer managed encryption key that’s
  * used to encrypt the contents of the Repository. Has the form:
  * 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
  * This value may not be changed after the Repository has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#kms_key_name ArtifactRegistryRepository#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Labels with user-defined metadata.
  * This field may contain up to 64 entries. Label keys and values may be no
  * longer than 63 characters. Label keys must begin with a lowercase letter
  * and may only contain lowercase letters, numeric characters, underscores,
  * and dashes.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#labels ArtifactRegistryRepository#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this repository is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#location ArtifactRegistryRepository#location}
  */
  readonly location?: string;
  /**
  * The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#mode ArtifactRegistryRepository#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#project ArtifactRegistryRepository#project}
  */
  readonly project?: string;
  /**
  * The last part of the repository name, for example:
  * "repo1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#repository_id ArtifactRegistryRepository#repository_id}
  */
  readonly repositoryId: string;
  /**
  * cleanup_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#cleanup_policies ArtifactRegistryRepository#cleanup_policies}
  */
  readonly cleanupPolicies?: ArtifactRegistryRepositoryCleanupPolicies[] | cdktf.IResolvable;
  /**
  * docker_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#docker_config ArtifactRegistryRepository#docker_config}
  */
  readonly dockerConfig?: ArtifactRegistryRepositoryDockerConfig;
  /**
  * maven_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#maven_config ArtifactRegistryRepository#maven_config}
  */
  readonly mavenConfig?: ArtifactRegistryRepositoryMavenConfig;
  /**
  * remote_repository_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#remote_repository_config ArtifactRegistryRepository#remote_repository_config}
  */
  readonly remoteRepositoryConfig?: ArtifactRegistryRepositoryRemoteRepositoryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#timeouts ArtifactRegistryRepository#timeouts}
  */
  readonly timeouts?: ArtifactRegistryRepositoryTimeouts;
  /**
  * virtual_repository_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#virtual_repository_config ArtifactRegistryRepository#virtual_repository_config}
  */
  readonly virtualRepositoryConfig?: ArtifactRegistryRepositoryVirtualRepositoryConfig;
}
export interface ArtifactRegistryRepositoryCleanupPoliciesCondition {
  /**
  * Match versions newer than a duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#newer_than ArtifactRegistryRepository#newer_than}
  */
  readonly newerThan?: string;
  /**
  * Match versions older than a duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#older_than ArtifactRegistryRepository#older_than}
  */
  readonly olderThan?: string;
  /**
  * Match versions by package prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}
  */
  readonly packageNamePrefixes?: string[];
  /**
  * Match versions by tag prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#tag_prefixes ArtifactRegistryRepository#tag_prefixes}
  */
  readonly tagPrefixes?: string[];
  /**
  * Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#tag_state ArtifactRegistryRepository#tag_state}
  */
  readonly tagState?: string;
  /**
  * Match versions by version name prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#version_name_prefixes ArtifactRegistryRepository#version_name_prefixes}
  */
  readonly versionNamePrefixes?: string[];
}

export function artifactRegistryRepositoryCleanupPoliciesConditionToTerraform(struct?: ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference | ArtifactRegistryRepositoryCleanupPoliciesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_than: cdktf.stringToTerraform(struct!.newerThan),
    older_than: cdktf.stringToTerraform(struct!.olderThan),
    package_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageNamePrefixes),
    tag_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagPrefixes),
    tag_state: cdktf.stringToTerraform(struct!.tagState),
    version_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versionNamePrefixes),
  }
}


export function artifactRegistryRepositoryCleanupPoliciesConditionToHclTerraform(struct?: ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference | ArtifactRegistryRepositoryCleanupPoliciesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    newer_than: {
      value: cdktf.stringToHclTerraform(struct!.newerThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    older_than: {
      value: cdktf.stringToHclTerraform(struct!.olderThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_name_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageNamePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_state: {
      value: cdktf.stringToHclTerraform(struct!.tagState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_name_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versionNamePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryCleanupPoliciesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerThan = this._newerThan;
    }
    if (this._olderThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.olderThan = this._olderThan;
    }
    if (this._packageNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNamePrefixes = this._packageNamePrefixes;
    }
    if (this._tagPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPrefixes = this._tagPrefixes;
    }
    if (this._tagState !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagState = this._tagState;
    }
    if (this._versionNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNamePrefixes = this._versionNamePrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryCleanupPoliciesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newerThan = undefined;
      this._olderThan = undefined;
      this._packageNamePrefixes = undefined;
      this._tagPrefixes = undefined;
      this._tagState = undefined;
      this._versionNamePrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newerThan = value.newerThan;
      this._olderThan = value.olderThan;
      this._packageNamePrefixes = value.packageNamePrefixes;
      this._tagPrefixes = value.tagPrefixes;
      this._tagState = value.tagState;
      this._versionNamePrefixes = value.versionNamePrefixes;
    }
  }

  // newer_than - computed: false, optional: true, required: false
  private _newerThan?: string; 
  public get newerThan() {
    return this.getStringAttribute('newer_than');
  }
  public set newerThan(value: string) {
    this._newerThan = value;
  }
  public resetNewerThan() {
    this._newerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerThanInput() {
    return this._newerThan;
  }

  // older_than - computed: false, optional: true, required: false
  private _olderThan?: string; 
  public get olderThan() {
    return this.getStringAttribute('older_than');
  }
  public set olderThan(value: string) {
    this._olderThan = value;
  }
  public resetOlderThan() {
    this._olderThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get olderThanInput() {
    return this._olderThan;
  }

  // package_name_prefixes - computed: false, optional: true, required: false
  private _packageNamePrefixes?: string[]; 
  public get packageNamePrefixes() {
    return this.getListAttribute('package_name_prefixes');
  }
  public set packageNamePrefixes(value: string[]) {
    this._packageNamePrefixes = value;
  }
  public resetPackageNamePrefixes() {
    this._packageNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamePrefixesInput() {
    return this._packageNamePrefixes;
  }

  // tag_prefixes - computed: false, optional: true, required: false
  private _tagPrefixes?: string[]; 
  public get tagPrefixes() {
    return this.getListAttribute('tag_prefixes');
  }
  public set tagPrefixes(value: string[]) {
    this._tagPrefixes = value;
  }
  public resetTagPrefixes() {
    this._tagPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPrefixesInput() {
    return this._tagPrefixes;
  }

  // tag_state - computed: false, optional: true, required: false
  private _tagState?: string; 
  public get tagState() {
    return this.getStringAttribute('tag_state');
  }
  public set tagState(value: string) {
    this._tagState = value;
  }
  public resetTagState() {
    this._tagState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStateInput() {
    return this._tagState;
  }

  // version_name_prefixes - computed: false, optional: true, required: false
  private _versionNamePrefixes?: string[]; 
  public get versionNamePrefixes() {
    return this.getListAttribute('version_name_prefixes');
  }
  public set versionNamePrefixes(value: string[]) {
    this._versionNamePrefixes = value;
  }
  public resetVersionNamePrefixes() {
    this._versionNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNamePrefixesInput() {
    return this._versionNamePrefixes;
  }
}
export interface ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions {
  /**
  * Minimum number of versions to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#keep_count ArtifactRegistryRepository#keep_count}
  */
  readonly keepCount?: number;
  /**
  * Match versions by package prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#package_name_prefixes ArtifactRegistryRepository#package_name_prefixes}
  */
  readonly packageNamePrefixes?: string[];
}

export function artifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToTerraform(struct?: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference | ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_count: cdktf.numberToTerraform(struct!.keepCount),
    package_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageNamePrefixes),
  }
}


export function artifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToHclTerraform(struct?: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference | ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_count: {
      value: cdktf.numberToHclTerraform(struct!.keepCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    package_name_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packageNamePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepCount = this._keepCount;
    }
    if (this._packageNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNamePrefixes = this._packageNamePrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepCount = undefined;
      this._packageNamePrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepCount = value.keepCount;
      this._packageNamePrefixes = value.packageNamePrefixes;
    }
  }

  // keep_count - computed: false, optional: true, required: false
  private _keepCount?: number; 
  public get keepCount() {
    return this.getNumberAttribute('keep_count');
  }
  public set keepCount(value: number) {
    this._keepCount = value;
  }
  public resetKeepCount() {
    this._keepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepCountInput() {
    return this._keepCount;
  }

  // package_name_prefixes - computed: false, optional: true, required: false
  private _packageNamePrefixes?: string[]; 
  public get packageNamePrefixes() {
    return this.getListAttribute('package_name_prefixes');
  }
  public set packageNamePrefixes(value: string[]) {
    this._packageNamePrefixes = value;
  }
  public resetPackageNamePrefixes() {
    this._packageNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamePrefixesInput() {
    return this._packageNamePrefixes;
  }
}
export interface ArtifactRegistryRepositoryCleanupPolicies {
  /**
  * Policy action. Possible values: ["DELETE", "KEEP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#action ArtifactRegistryRepository#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#condition ArtifactRegistryRepository#condition}
  */
  readonly condition?: ArtifactRegistryRepositoryCleanupPoliciesCondition;
  /**
  * most_recent_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#most_recent_versions ArtifactRegistryRepository#most_recent_versions}
  */
  readonly mostRecentVersions?: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions;
}

export function artifactRegistryRepositoryCleanupPoliciesToTerraform(struct?: ArtifactRegistryRepositoryCleanupPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.stringToTerraform(struct!.id),
    condition: artifactRegistryRepositoryCleanupPoliciesConditionToTerraform(struct!.condition),
    most_recent_versions: artifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToTerraform(struct!.mostRecentVersions),
  }
}


export function artifactRegistryRepositoryCleanupPoliciesToHclTerraform(struct?: ArtifactRegistryRepositoryCleanupPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: artifactRegistryRepositoryCleanupPoliciesConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryCleanupPoliciesConditionList",
    },
    most_recent_versions: {
      value: artifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToHclTerraform(struct!.mostRecentVersions),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryCleanupPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArtifactRegistryRepositoryCleanupPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._mostRecentVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostRecentVersions = this._mostRecentVersions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryCleanupPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._condition.internalValue = undefined;
      this._mostRecentVersions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._condition.internalValue = value.condition;
      this._mostRecentVersions.internalValue = value.mostRecentVersions;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ArtifactRegistryRepositoryCleanupPoliciesCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // most_recent_versions - computed: false, optional: true, required: false
  private _mostRecentVersions = new ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(this, "most_recent_versions");
  public get mostRecentVersions() {
    return this._mostRecentVersions;
  }
  public putMostRecentVersions(value: ArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions) {
    this._mostRecentVersions.internalValue = value;
  }
  public resetMostRecentVersions() {
    this._mostRecentVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentVersionsInput() {
    return this._mostRecentVersions.internalValue;
  }
}

export class ArtifactRegistryRepositoryCleanupPoliciesList extends cdktf.ComplexList {
  public internalValue? : ArtifactRegistryRepositoryCleanupPolicies[] | cdktf.IResolvable

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
  public get(index: number): ArtifactRegistryRepositoryCleanupPoliciesOutputReference {
    return new ArtifactRegistryRepositoryCleanupPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArtifactRegistryRepositoryDockerConfig {
  /**
  * The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#immutable_tags ArtifactRegistryRepository#immutable_tags}
  */
  readonly immutableTags?: boolean | cdktf.IResolvable;
}

export function artifactRegistryRepositoryDockerConfigToTerraform(struct?: ArtifactRegistryRepositoryDockerConfigOutputReference | ArtifactRegistryRepositoryDockerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immutable_tags: cdktf.booleanToTerraform(struct!.immutableTags),
  }
}


export function artifactRegistryRepositoryDockerConfigToHclTerraform(struct?: ArtifactRegistryRepositoryDockerConfigOutputReference | ArtifactRegistryRepositoryDockerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immutable_tags: {
      value: cdktf.booleanToHclTerraform(struct!.immutableTags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryDockerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryDockerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immutableTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutableTags = this._immutableTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryDockerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immutableTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immutableTags = value.immutableTags;
    }
  }

  // immutable_tags - computed: false, optional: true, required: false
  private _immutableTags?: boolean | cdktf.IResolvable; 
  public get immutableTags() {
    return this.getBooleanAttribute('immutable_tags');
  }
  public set immutableTags(value: boolean | cdktf.IResolvable) {
    this._immutableTags = value;
  }
  public resetImmutableTags() {
    this._immutableTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableTagsInput() {
    return this._immutableTags;
  }
}
export interface ArtifactRegistryRepositoryMavenConfig {
  /**
  * The repository with this flag will allow publishing the same
  * snapshot versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#allow_snapshot_overwrites ArtifactRegistryRepository#allow_snapshot_overwrites}
  */
  readonly allowSnapshotOverwrites?: boolean | cdktf.IResolvable;
  /**
  * Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#version_policy ArtifactRegistryRepository#version_policy}
  */
  readonly versionPolicy?: string;
}

export function artifactRegistryRepositoryMavenConfigToTerraform(struct?: ArtifactRegistryRepositoryMavenConfigOutputReference | ArtifactRegistryRepositoryMavenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_snapshot_overwrites: cdktf.booleanToTerraform(struct!.allowSnapshotOverwrites),
    version_policy: cdktf.stringToTerraform(struct!.versionPolicy),
  }
}


export function artifactRegistryRepositoryMavenConfigToHclTerraform(struct?: ArtifactRegistryRepositoryMavenConfigOutputReference | ArtifactRegistryRepositoryMavenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_snapshot_overwrites: {
      value: cdktf.booleanToHclTerraform(struct!.allowSnapshotOverwrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version_policy: {
      value: cdktf.stringToHclTerraform(struct!.versionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryMavenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryMavenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSnapshotOverwrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSnapshotOverwrites = this._allowSnapshotOverwrites;
    }
    if (this._versionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionPolicy = this._versionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryMavenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSnapshotOverwrites = undefined;
      this._versionPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSnapshotOverwrites = value.allowSnapshotOverwrites;
      this._versionPolicy = value.versionPolicy;
    }
  }

  // allow_snapshot_overwrites - computed: false, optional: true, required: false
  private _allowSnapshotOverwrites?: boolean | cdktf.IResolvable; 
  public get allowSnapshotOverwrites() {
    return this.getBooleanAttribute('allow_snapshot_overwrites');
  }
  public set allowSnapshotOverwrites(value: boolean | cdktf.IResolvable) {
    this._allowSnapshotOverwrites = value;
  }
  public resetAllowSnapshotOverwrites() {
    this._allowSnapshotOverwrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnapshotOverwritesInput() {
    return this._allowSnapshotOverwrites;
  }

  // version_policy - computed: false, optional: true, required: false
  private _versionPolicy?: string; 
  public get versionPolicy() {
    return this.getStringAttribute('version_policy');
  }
  public set versionPolicy(value: string) {
    this._versionPolicy = value;
  }
  public resetVersionPolicy() {
    this._versionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPolicyInput() {
    return this._versionPolicy;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
  /**
  * A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}
  */
  readonly repositoryBase: string;
  /**
  * Specific repository from the base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}
  */
  readonly repositoryPath: string;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_base: cdktf.stringToTerraform(struct!.repositoryBase),
    repository_path: cdktf.stringToTerraform(struct!.repositoryPath),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_base: {
      value: cdktf.stringToHclTerraform(struct!.repositoryBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_path: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryBase = this._repositoryBase;
    }
    if (this._repositoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPath = this._repositoryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryBase = undefined;
      this._repositoryPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryBase = value.repositoryBase;
      this._repositoryPath = value.repositoryPath;
    }
  }

  // repository_base - computed: false, optional: false, required: true
  private _repositoryBase?: string; 
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }
  public set repositoryBase(value: string) {
    this._repositoryBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryBaseInput() {
    return this._repositoryBase;
  }

  // repository_path - computed: false, optional: false, required: true
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository {
  /**
  * public_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToTerraform(struct!.publicRepository),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToHclTerraform(struct!.publicRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository.internalValue = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(this, "public_repository");
  public get publicRepository() {
    return this._publicRepository;
  }
  public putPublicRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository) {
    this._publicRepository.internalValue = value;
  }
  public resetPublicRepository() {
    this._publicRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository.internalValue;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository {
  /**
  * Specific uri to the registry, e.g. '"https://registry-1.docker.io"'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}
  */
  readonly uri?: string;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
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
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository {
  /**
  * Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
  /**
  * custom_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}
  */
  readonly customRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
    custom_repository: artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryToTerraform(struct!.customRepository),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_repository: {
      value: cdktf.stringToHclTerraform(struct!.publicRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryToHclTerraform(struct!.customRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    if (this._customRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRepository = this._customRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
      this._customRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
      this._customRepository.internalValue = value.customRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }

  // custom_repository - computed: false, optional: true, required: false
  private _customRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference(this, "custom_repository");
  public get customRepository() {
    return this._customRepository;
  }
  public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository) {
    this._customRepository.internalValue = value;
  }
  public resetCustomRepository() {
    this._customRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepositoryInput() {
    return this._customRepository.internalValue;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository {
  /**
  * Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}
  */
  readonly uri?: string;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
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
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository {
  /**
  * Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
  /**
  * custom_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}
  */
  readonly customRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
    custom_repository: artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryToTerraform(struct!.customRepository),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_repository: {
      value: cdktf.stringToHclTerraform(struct!.publicRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryToHclTerraform(struct!.customRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    if (this._customRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRepository = this._customRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
      this._customRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
      this._customRepository.internalValue = value.customRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }

  // custom_repository - computed: false, optional: true, required: false
  private _customRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference(this, "custom_repository");
  public get customRepository() {
    return this._customRepository;
  }
  public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository) {
    this._customRepository.internalValue = value;
  }
  public resetCustomRepository() {
    this._customRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepositoryInput() {
    return this._customRepository.internalValue;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository {
  /**
  * Specific uri to the registry, e.g. '"https://registry.npmjs.org"'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}
  */
  readonly uri?: string;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
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
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository {
  /**
  * Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
  /**
  * custom_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}
  */
  readonly customRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
    custom_repository: artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryToTerraform(struct!.customRepository),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_repository: {
      value: cdktf.stringToHclTerraform(struct!.publicRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryToHclTerraform(struct!.customRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    if (this._customRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRepository = this._customRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
      this._customRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
      this._customRepository.internalValue = value.customRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }

  // custom_repository - computed: false, optional: true, required: false
  private _customRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference(this, "custom_repository");
  public get customRepository() {
    return this._customRepository;
  }
  public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository) {
    this._customRepository.internalValue = value;
  }
  public resetCustomRepository() {
    this._customRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepositoryInput() {
    return this._customRepository.internalValue;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository {
  /**
  * Specific uri to the registry, e.g. '"https://pypi.io"'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#uri ArtifactRegistryRepository#uri}
  */
  readonly uri?: string;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
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
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository {
  /**
  * Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
  /**
  * custom_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#custom_repository ArtifactRegistryRepository#custom_repository}
  */
  readonly customRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
    custom_repository: artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryToTerraform(struct!.customRepository),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_repository: {
      value: cdktf.stringToHclTerraform(struct!.publicRepository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryToHclTerraform(struct!.customRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    if (this._customRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRepository = this._customRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
      this._customRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
      this._customRepository.internalValue = value.customRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }

  // custom_repository - computed: false, optional: true, required: false
  private _customRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference(this, "custom_repository");
  public get customRepository() {
    return this._customRepository;
  }
  public putCustomRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository) {
    this._customRepository.internalValue = value;
  }
  public resetCustomRepository() {
    this._customRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRepositoryInput() {
    return this._customRepository.internalValue;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials {
  /**
  * The Secret Manager key version that holds the password to access the
  * remote repository. Must be in the format of
  * 'projects/{project}/secrets/{secret}/versions/{version}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#password_secret_version ArtifactRegistryRepository#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The username to access the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#username ArtifactRegistryRepository#username}
  */
  readonly username?: string;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_secret_version: cdktf.stringToTerraform(struct!.passwordSecretVersion),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_secret_version: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordSecretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretVersion = this._passwordSecretVersion;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordSecretVersion = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordSecretVersion = value.passwordSecretVersion;
      this._username = value.username;
    }
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials {
  /**
  * username_password_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#username_password_credentials ArtifactRegistryRepository#username_password_credentials}
  */
  readonly usernamePasswordCredentials?: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username_password_credentials: artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsToTerraform(struct!.usernamePasswordCredentials),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username_password_credentials: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsToHclTerraform(struct!.usernamePasswordCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usernamePasswordCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePasswordCredentials = this._usernamePasswordCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usernamePasswordCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usernamePasswordCredentials.internalValue = value.usernamePasswordCredentials;
    }
  }

  // username_password_credentials - computed: false, optional: true, required: false
  private _usernamePasswordCredentials = new ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(this, "username_password_credentials");
  public get usernamePasswordCredentials() {
    return this._usernamePasswordCredentials;
  }
  public putUsernamePasswordCredentials(value: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials) {
    this._usernamePasswordCredentials.internalValue = value;
  }
  public resetUsernamePasswordCredentials() {
    this._usernamePasswordCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordCredentialsInput() {
    return this._usernamePasswordCredentials.internalValue;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
  /**
  * A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#repository_base ArtifactRegistryRepository#repository_base}
  */
  readonly repositoryBase: string;
  /**
  * Specific repository from the base, e.g. '"centos/8-stream/BaseOS/x86_64/os"'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#repository_path ArtifactRegistryRepository#repository_path}
  */
  readonly repositoryPath: string;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_base: cdktf.stringToTerraform(struct!.repositoryBase),
    repository_path: cdktf.stringToTerraform(struct!.repositoryPath),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_base: {
      value: cdktf.stringToHclTerraform(struct!.repositoryBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_path: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryBase = this._repositoryBase;
    }
    if (this._repositoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPath = this._repositoryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryBase = undefined;
      this._repositoryPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryBase = value.repositoryBase;
      this._repositoryPath = value.repositoryPath;
    }
  }

  // repository_base - computed: false, optional: false, required: true
  private _repositoryBase?: string; 
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }
  public set repositoryBase(value: string) {
    this._repositoryBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryBaseInput() {
    return this._repositoryBase;
  }

  // repository_path - computed: false, optional: false, required: true
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository {
  /**
  * public_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#public_repository ArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToTerraform(struct!.publicRepository),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToHclTerraform(struct!.publicRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository.internalValue = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(this, "public_repository");
  public get publicRepository() {
    return this._publicRepository;
  }
  public putPublicRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository) {
    this._publicRepository.internalValue = value;
  }
  public resetPublicRepository() {
    this._publicRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository.internalValue;
  }
}
export interface ArtifactRegistryRepositoryRemoteRepositoryConfig {
  /**
  * The description of the remote source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#description ArtifactRegistryRepository#description}
  */
  readonly description?: string;
  /**
  * If true, the remote repository upstream and upstream credentials will
  * not be validated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#disable_upstream_validation ArtifactRegistryRepository#disable_upstream_validation}
  */
  readonly disableUpstreamValidation?: boolean | cdktf.IResolvable;
  /**
  * apt_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#apt_repository ArtifactRegistryRepository#apt_repository}
  */
  readonly aptRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository;
  /**
  * docker_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#docker_repository ArtifactRegistryRepository#docker_repository}
  */
  readonly dockerRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository;
  /**
  * maven_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#maven_repository ArtifactRegistryRepository#maven_repository}
  */
  readonly mavenRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository;
  /**
  * npm_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#npm_repository ArtifactRegistryRepository#npm_repository}
  */
  readonly npmRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository;
  /**
  * python_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#python_repository ArtifactRegistryRepository#python_repository}
  */
  readonly pythonRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository;
  /**
  * upstream_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#upstream_credentials ArtifactRegistryRepository#upstream_credentials}
  */
  readonly upstreamCredentials?: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials;
  /**
  * yum_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#yum_repository ArtifactRegistryRepository#yum_repository}
  */
  readonly yumRepository?: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository;
}

export function artifactRegistryRepositoryRemoteRepositoryConfigToTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_upstream_validation: cdktf.booleanToTerraform(struct!.disableUpstreamValidation),
    apt_repository: artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToTerraform(struct!.aptRepository),
    docker_repository: artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToTerraform(struct!.dockerRepository),
    maven_repository: artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToTerraform(struct!.mavenRepository),
    npm_repository: artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToTerraform(struct!.npmRepository),
    python_repository: artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToTerraform(struct!.pythonRepository),
    upstream_credentials: artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsToTerraform(struct!.upstreamCredentials),
    yum_repository: artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToTerraform(struct!.yumRepository),
  }
}


export function artifactRegistryRepositoryRemoteRepositoryConfigToHclTerraform(struct?: ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference | ArtifactRegistryRepositoryRemoteRepositoryConfig): any {
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
    disable_upstream_validation: {
      value: cdktf.booleanToHclTerraform(struct!.disableUpstreamValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apt_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToHclTerraform(struct!.aptRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryList",
    },
    docker_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToHclTerraform(struct!.dockerRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryList",
    },
    maven_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToHclTerraform(struct!.mavenRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryList",
    },
    npm_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToHclTerraform(struct!.npmRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryList",
    },
    python_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToHclTerraform(struct!.pythonRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryList",
    },
    upstream_credentials: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsToHclTerraform(struct!.upstreamCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsList",
    },
    yum_repository: {
      value: artifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToHclTerraform(struct!.yumRepository),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryRemoteRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableUpstreamValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUpstreamValidation = this._disableUpstreamValidation;
    }
    if (this._aptRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aptRepository = this._aptRepository?.internalValue;
    }
    if (this._dockerRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRepository = this._dockerRepository?.internalValue;
    }
    if (this._mavenRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mavenRepository = this._mavenRepository?.internalValue;
    }
    if (this._npmRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.npmRepository = this._npmRepository?.internalValue;
    }
    if (this._pythonRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonRepository = this._pythonRepository?.internalValue;
    }
    if (this._upstreamCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamCredentials = this._upstreamCredentials?.internalValue;
    }
    if (this._yumRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yumRepository = this._yumRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryRemoteRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disableUpstreamValidation = undefined;
      this._aptRepository.internalValue = undefined;
      this._dockerRepository.internalValue = undefined;
      this._mavenRepository.internalValue = undefined;
      this._npmRepository.internalValue = undefined;
      this._pythonRepository.internalValue = undefined;
      this._upstreamCredentials.internalValue = undefined;
      this._yumRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disableUpstreamValidation = value.disableUpstreamValidation;
      this._aptRepository.internalValue = value.aptRepository;
      this._dockerRepository.internalValue = value.dockerRepository;
      this._mavenRepository.internalValue = value.mavenRepository;
      this._npmRepository.internalValue = value.npmRepository;
      this._pythonRepository.internalValue = value.pythonRepository;
      this._upstreamCredentials.internalValue = value.upstreamCredentials;
      this._yumRepository.internalValue = value.yumRepository;
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

  // disable_upstream_validation - computed: false, optional: true, required: false
  private _disableUpstreamValidation?: boolean | cdktf.IResolvable; 
  public get disableUpstreamValidation() {
    return this.getBooleanAttribute('disable_upstream_validation');
  }
  public set disableUpstreamValidation(value: boolean | cdktf.IResolvable) {
    this._disableUpstreamValidation = value;
  }
  public resetDisableUpstreamValidation() {
    this._disableUpstreamValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpstreamValidationInput() {
    return this._disableUpstreamValidation;
  }

  // apt_repository - computed: false, optional: true, required: false
  private _aptRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(this, "apt_repository");
  public get aptRepository() {
    return this._aptRepository;
  }
  public putAptRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository) {
    this._aptRepository.internalValue = value;
  }
  public resetAptRepository() {
    this._aptRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptRepositoryInput() {
    return this._aptRepository.internalValue;
  }

  // docker_repository - computed: false, optional: true, required: false
  private _dockerRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(this, "docker_repository");
  public get dockerRepository() {
    return this._dockerRepository;
  }
  public putDockerRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository) {
    this._dockerRepository.internalValue = value;
  }
  public resetDockerRepository() {
    this._dockerRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRepositoryInput() {
    return this._dockerRepository.internalValue;
  }

  // maven_repository - computed: false, optional: true, required: false
  private _mavenRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(this, "maven_repository");
  public get mavenRepository() {
    return this._mavenRepository;
  }
  public putMavenRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository) {
    this._mavenRepository.internalValue = value;
  }
  public resetMavenRepository() {
    this._mavenRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenRepositoryInput() {
    return this._mavenRepository.internalValue;
  }

  // npm_repository - computed: false, optional: true, required: false
  private _npmRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(this, "npm_repository");
  public get npmRepository() {
    return this._npmRepository;
  }
  public putNpmRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository) {
    this._npmRepository.internalValue = value;
  }
  public resetNpmRepository() {
    this._npmRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npmRepositoryInput() {
    return this._npmRepository.internalValue;
  }

  // python_repository - computed: false, optional: true, required: false
  private _pythonRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(this, "python_repository");
  public get pythonRepository() {
    return this._pythonRepository;
  }
  public putPythonRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository) {
    this._pythonRepository.internalValue = value;
  }
  public resetPythonRepository() {
    this._pythonRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonRepositoryInput() {
    return this._pythonRepository.internalValue;
  }

  // upstream_credentials - computed: false, optional: true, required: false
  private _upstreamCredentials = new ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(this, "upstream_credentials");
  public get upstreamCredentials() {
    return this._upstreamCredentials;
  }
  public putUpstreamCredentials(value: ArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials) {
    this._upstreamCredentials.internalValue = value;
  }
  public resetUpstreamCredentials() {
    this._upstreamCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamCredentialsInput() {
    return this._upstreamCredentials.internalValue;
  }

  // yum_repository - computed: false, optional: true, required: false
  private _yumRepository = new ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(this, "yum_repository");
  public get yumRepository() {
    return this._yumRepository;
  }
  public putYumRepository(value: ArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository) {
    this._yumRepository.internalValue = value;
  }
  public resetYumRepository() {
    this._yumRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumRepositoryInput() {
    return this._yumRepository.internalValue;
  }
}
export interface ArtifactRegistryRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#create ArtifactRegistryRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#delete ArtifactRegistryRepository#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#update ArtifactRegistryRepository#update}
  */
  readonly update?: string;
}

export function artifactRegistryRepositoryTimeoutsToTerraform(struct?: ArtifactRegistryRepositoryTimeouts | cdktf.IResolvable): any {
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


export function artifactRegistryRepositoryTimeoutsToHclTerraform(struct?: ArtifactRegistryRepositoryTimeouts | cdktf.IResolvable): any {
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

export class ArtifactRegistryRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArtifactRegistryRepositoryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ArtifactRegistryRepositoryTimeouts | cdktf.IResolvable | undefined) {
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
export interface ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies {
  /**
  * The user-provided ID of the upstream policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#id ArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Entries with a greater priority value take precedence in the pull order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#priority ArtifactRegistryRepository#priority}
  */
  readonly priority?: number;
  /**
  * A reference to the repository resource, for example:
  * "projects/p1/locations/us-central1/repository/repo1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#repository ArtifactRegistryRepository#repository}
  */
  readonly repository?: string;
}

export function artifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToTerraform(struct?: ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function artifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToHclTerraform(struct?: ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._priority = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._priority = value.priority;
      this._repository = value.repository;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}

export class ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList extends cdktf.ComplexList {
  public internalValue? : ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[] | cdktf.IResolvable

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
  public get(index: number): ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference {
    return new ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ArtifactRegistryRepositoryVirtualRepositoryConfig {
  /**
  * upstream_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#upstream_policies ArtifactRegistryRepository#upstream_policies}
  */
  readonly upstreamPolicies?: ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[] | cdktf.IResolvable;
}

export function artifactRegistryRepositoryVirtualRepositoryConfigToTerraform(struct?: ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference | ArtifactRegistryRepositoryVirtualRepositoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upstream_policies: cdktf.listMapper(artifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToTerraform, true)(struct!.upstreamPolicies),
  }
}


export function artifactRegistryRepositoryVirtualRepositoryConfigToHclTerraform(struct?: ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference | ArtifactRegistryRepositoryVirtualRepositoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upstream_policies: {
      value: cdktf.listMapperHcl(artifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToHclTerraform, true)(struct!.upstreamPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArtifactRegistryRepositoryVirtualRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upstreamPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamPolicies = this._upstreamPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArtifactRegistryRepositoryVirtualRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upstreamPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upstreamPolicies.internalValue = value.upstreamPolicies;
    }
  }

  // upstream_policies - computed: false, optional: true, required: false
  private _upstreamPolicies = new ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(this, "upstream_policies", false);
  public get upstreamPolicies() {
    return this._upstreamPolicies;
  }
  public putUpstreamPolicies(value: ArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[] | cdktf.IResolvable) {
    this._upstreamPolicies.internalValue = value;
  }
  public resetUpstreamPolicies() {
    this._upstreamPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamPoliciesInput() {
    return this._upstreamPolicies.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository google_artifact_registry_repository}
*/
export class ArtifactRegistryRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArtifactRegistryRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArtifactRegistryRepository to import
  * @param importFromId The id of the existing ArtifactRegistryRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArtifactRegistryRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_artifact_registry_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/artifact_registry_repository google_artifact_registry_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArtifactRegistryRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: ArtifactRegistryRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_repository',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.31.1',
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
    this._cleanupPolicyDryRun = config.cleanupPolicyDryRun;
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._mode = config.mode;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._cleanupPolicies.internalValue = config.cleanupPolicies;
    this._dockerConfig.internalValue = config.dockerConfig;
    this._mavenConfig.internalValue = config.mavenConfig;
    this._remoteRepositoryConfig.internalValue = config.remoteRepositoryConfig;
    this._timeouts.internalValue = config.timeouts;
    this._virtualRepositoryConfig.internalValue = config.virtualRepositoryConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_policy_dry_run - computed: false, optional: true, required: false
  private _cleanupPolicyDryRun?: boolean | cdktf.IResolvable; 
  public get cleanupPolicyDryRun() {
    return this.getBooleanAttribute('cleanup_policy_dry_run');
  }
  public set cleanupPolicyDryRun(value: boolean | cdktf.IResolvable) {
    this._cleanupPolicyDryRun = value;
  }
  public resetCleanupPolicyDryRun() {
    this._cleanupPolicyDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyDryRunInput() {
    return this._cleanupPolicyDryRun;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // cleanup_policies - computed: false, optional: true, required: false
  private _cleanupPolicies = new ArtifactRegistryRepositoryCleanupPoliciesList(this, "cleanup_policies", true);
  public get cleanupPolicies() {
    return this._cleanupPolicies;
  }
  public putCleanupPolicies(value: ArtifactRegistryRepositoryCleanupPolicies[] | cdktf.IResolvable) {
    this._cleanupPolicies.internalValue = value;
  }
  public resetCleanupPolicies() {
    this._cleanupPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPoliciesInput() {
    return this._cleanupPolicies.internalValue;
  }

  // docker_config - computed: false, optional: true, required: false
  private _dockerConfig = new ArtifactRegistryRepositoryDockerConfigOutputReference(this, "docker_config");
  public get dockerConfig() {
    return this._dockerConfig;
  }
  public putDockerConfig(value: ArtifactRegistryRepositoryDockerConfig) {
    this._dockerConfig.internalValue = value;
  }
  public resetDockerConfig() {
    this._dockerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerConfigInput() {
    return this._dockerConfig.internalValue;
  }

  // maven_config - computed: false, optional: true, required: false
  private _mavenConfig = new ArtifactRegistryRepositoryMavenConfigOutputReference(this, "maven_config");
  public get mavenConfig() {
    return this._mavenConfig;
  }
  public putMavenConfig(value: ArtifactRegistryRepositoryMavenConfig) {
    this._mavenConfig.internalValue = value;
  }
  public resetMavenConfig() {
    this._mavenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenConfigInput() {
    return this._mavenConfig.internalValue;
  }

  // remote_repository_config - computed: false, optional: true, required: false
  private _remoteRepositoryConfig = new ArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(this, "remote_repository_config");
  public get remoteRepositoryConfig() {
    return this._remoteRepositoryConfig;
  }
  public putRemoteRepositoryConfig(value: ArtifactRegistryRepositoryRemoteRepositoryConfig) {
    this._remoteRepositoryConfig.internalValue = value;
  }
  public resetRemoteRepositoryConfig() {
    this._remoteRepositoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRepositoryConfigInput() {
    return this._remoteRepositoryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArtifactRegistryRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArtifactRegistryRepositoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_repository_config - computed: false, optional: true, required: false
  private _virtualRepositoryConfig = new ArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(this, "virtual_repository_config");
  public get virtualRepositoryConfig() {
    return this._virtualRepositoryConfig;
  }
  public putVirtualRepositoryConfig(value: ArtifactRegistryRepositoryVirtualRepositoryConfig) {
    this._virtualRepositoryConfig.internalValue = value;
  }
  public resetVirtualRepositoryConfig() {
    this._virtualRepositoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRepositoryConfigInput() {
    return this._virtualRepositoryConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cleanup_policy_dry_run: cdktf.booleanToTerraform(this._cleanupPolicyDryRun),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      mode: cdktf.stringToTerraform(this._mode),
      project: cdktf.stringToTerraform(this._project),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      cleanup_policies: cdktf.listMapper(artifactRegistryRepositoryCleanupPoliciesToTerraform, true)(this._cleanupPolicies.internalValue),
      docker_config: artifactRegistryRepositoryDockerConfigToTerraform(this._dockerConfig.internalValue),
      maven_config: artifactRegistryRepositoryMavenConfigToTerraform(this._mavenConfig.internalValue),
      remote_repository_config: artifactRegistryRepositoryRemoteRepositoryConfigToTerraform(this._remoteRepositoryConfig.internalValue),
      timeouts: artifactRegistryRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_repository_config: artifactRegistryRepositoryVirtualRepositoryConfigToTerraform(this._virtualRepositoryConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cleanup_policy_dry_run: {
        value: cdktf.booleanToHclTerraform(this._cleanupPolicyDryRun),
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
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cleanup_policies: {
        value: cdktf.listMapperHcl(artifactRegistryRepositoryCleanupPoliciesToHclTerraform, true)(this._cleanupPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArtifactRegistryRepositoryCleanupPoliciesList",
      },
      docker_config: {
        value: artifactRegistryRepositoryDockerConfigToHclTerraform(this._dockerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArtifactRegistryRepositoryDockerConfigList",
      },
      maven_config: {
        value: artifactRegistryRepositoryMavenConfigToHclTerraform(this._mavenConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArtifactRegistryRepositoryMavenConfigList",
      },
      remote_repository_config: {
        value: artifactRegistryRepositoryRemoteRepositoryConfigToHclTerraform(this._remoteRepositoryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArtifactRegistryRepositoryRemoteRepositoryConfigList",
      },
      timeouts: {
        value: artifactRegistryRepositoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArtifactRegistryRepositoryTimeouts",
      },
      virtual_repository_config: {
        value: artifactRegistryRepositoryVirtualRepositoryConfigToHclTerraform(this._virtualRepositoryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArtifactRegistryRepositoryVirtualRepositoryConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

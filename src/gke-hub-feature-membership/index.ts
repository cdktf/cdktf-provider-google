/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeHubFeatureMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#feature GkeHubFeatureMembership#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#location GkeHubFeatureMembership#location}
  */
  readonly location: string;
  /**
  * The name of the membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#membership GkeHubFeatureMembership#membership}
  */
  readonly membership: string;
  /**
  * The project of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#project GkeHubFeatureMembership#project}
  */
  readonly project?: string;
  /**
  * configmanagement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#configmanagement GkeHubFeatureMembership#configmanagement}
  */
  readonly configmanagement?: GkeHubFeatureMembershipConfigmanagement;
  /**
  * mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#mesh GkeHubFeatureMembership#mesh}
  */
  readonly mesh?: GkeHubFeatureMembershipMesh;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#timeouts GkeHubFeatureMembership#timeouts}
  */
  readonly timeouts?: GkeHubFeatureMembershipTimeouts;
}
export interface GkeHubFeatureMembershipConfigmanagementBinauthz {
  /**
  * Whether binauthz is enabled in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gkeHubFeatureMembershipConfigmanagementBinauthzToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference | GkeHubFeatureMembershipConfigmanagementBinauthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementBinauthz | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementBinauthz | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSyncGit {
  /**
  * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * URL for the HTTPS proxy to be used when communicating with the Git repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#https_proxy GkeHubFeatureMembership#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}
  */
  readonly secretType?: string;
  /**
  * The branch of the repository to sync from. Default: master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#sync_branch GkeHubFeatureMembership#sync_branch}
  */
  readonly syncBranch?: string;
  /**
  * The URL of the Git repository to use as the source of truth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Git revision (tag or hash) to check out. Default HEAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#sync_rev GkeHubFeatureMembership#sync_rev}
  */
  readonly syncRev?: string;
  /**
  * Period in seconds between consecutive syncs. Default: 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}
  */
  readonly syncWaitSecs?: string;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncGitToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSyncGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    policy_dir: cdktf.stringToTerraform(struct!.policyDir),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
    sync_branch: cdktf.stringToTerraform(struct!.syncBranch),
    sync_repo: cdktf.stringToTerraform(struct!.syncRepo),
    sync_rev: cdktf.stringToTerraform(struct!.syncRev),
    sync_wait_secs: cdktf.stringToTerraform(struct!.syncWaitSecs),
  }
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSyncGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._policyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDir = this._policyDir;
    }
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    if (this._syncBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncBranch = this._syncBranch;
    }
    if (this._syncRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRepo = this._syncRepo;
    }
    if (this._syncRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRev = this._syncRev;
    }
    if (this._syncWaitSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWaitSecs = this._syncWaitSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSyncGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpServiceAccountEmail = undefined;
      this._httpsProxy = undefined;
      this._policyDir = undefined;
      this._secretType = undefined;
      this._syncBranch = undefined;
      this._syncRepo = undefined;
      this._syncRev = undefined;
      this._syncWaitSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
      this._httpsProxy = value.httpsProxy;
      this._policyDir = value.policyDir;
      this._secretType = value.secretType;
      this._syncBranch = value.syncBranch;
      this._syncRepo = value.syncRepo;
      this._syncRev = value.syncRev;
      this._syncWaitSecs = value.syncWaitSecs;
    }
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // policy_dir - computed: false, optional: true, required: false
  private _policyDir?: string; 
  public get policyDir() {
    return this.getStringAttribute('policy_dir');
  }
  public set policyDir(value: string) {
    this._policyDir = value;
  }
  public resetPolicyDir() {
    this._policyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDirInput() {
    return this._policyDir;
  }

  // secret_type - computed: false, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // sync_branch - computed: false, optional: true, required: false
  private _syncBranch?: string; 
  public get syncBranch() {
    return this.getStringAttribute('sync_branch');
  }
  public set syncBranch(value: string) {
    this._syncBranch = value;
  }
  public resetSyncBranch() {
    this._syncBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncBranchInput() {
    return this._syncBranch;
  }

  // sync_repo - computed: false, optional: true, required: false
  private _syncRepo?: string; 
  public get syncRepo() {
    return this.getStringAttribute('sync_repo');
  }
  public set syncRepo(value: string) {
    this._syncRepo = value;
  }
  public resetSyncRepo() {
    this._syncRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRepoInput() {
    return this._syncRepo;
  }

  // sync_rev - computed: false, optional: true, required: false
  private _syncRev?: string; 
  public get syncRev() {
    return this.getStringAttribute('sync_rev');
  }
  public set syncRev(value: string) {
    this._syncRev = value;
  }
  public resetSyncRev() {
    this._syncRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRevInput() {
    return this._syncRev;
  }

  // sync_wait_secs - computed: false, optional: true, required: false
  private _syncWaitSecs?: string; 
  public get syncWaitSecs() {
    return this.getStringAttribute('sync_wait_secs');
  }
  public set syncWaitSecs(value: string) {
    this._syncWaitSecs = value;
  }
  public resetSyncWaitSecs() {
    this._syncWaitSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWaitSecsInput() {
    return this._syncWaitSecs;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSyncOci {
  /**
  * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * The absolute path of the directory that contains the local resources. Default: the root directory of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}
  */
  readonly secretType?: string;
  /**
  * The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Period in seconds(int64 format) between consecutive syncs. Default: 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}
  */
  readonly syncWaitSecs?: string;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncOciToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSyncOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
    policy_dir: cdktf.stringToTerraform(struct!.policyDir),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
    sync_repo: cdktf.stringToTerraform(struct!.syncRepo),
    sync_wait_secs: cdktf.stringToTerraform(struct!.syncWaitSecs),
  }
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSyncOci | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    if (this._policyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDir = this._policyDir;
    }
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    if (this._syncRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRepo = this._syncRepo;
    }
    if (this._syncWaitSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWaitSecs = this._syncWaitSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSyncOci | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpServiceAccountEmail = undefined;
      this._policyDir = undefined;
      this._secretType = undefined;
      this._syncRepo = undefined;
      this._syncWaitSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
      this._policyDir = value.policyDir;
      this._secretType = value.secretType;
      this._syncRepo = value.syncRepo;
      this._syncWaitSecs = value.syncWaitSecs;
    }
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // policy_dir - computed: false, optional: true, required: false
  private _policyDir?: string; 
  public get policyDir() {
    return this.getStringAttribute('policy_dir');
  }
  public set policyDir(value: string) {
    this._policyDir = value;
  }
  public resetPolicyDir() {
    this._policyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDirInput() {
    return this._policyDir;
  }

  // secret_type - computed: false, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // sync_repo - computed: false, optional: true, required: false
  private _syncRepo?: string; 
  public get syncRepo() {
    return this.getStringAttribute('sync_repo');
  }
  public set syncRepo(value: string) {
    this._syncRepo = value;
  }
  public resetSyncRepo() {
    this._syncRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRepoInput() {
    return this._syncRepo;
  }

  // sync_wait_secs - computed: false, optional: true, required: false
  private _syncWaitSecs?: string; 
  public get syncWaitSecs() {
    return this.getStringAttribute('sync_wait_secs');
  }
  public set syncWaitSecs(value: string) {
    this._syncWaitSecs = value;
  }
  public resetSyncWaitSecs() {
    this._syncWaitSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWaitSecsInput() {
    return this._syncWaitSecs;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSync {
  /**
  * Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#prevent_drift GkeHubFeatureMembership#prevent_drift}
  */
  readonly preventDrift?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#source_format GkeHubFeatureMembership#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#git GkeHubFeatureMembership#git}
  */
  readonly git?: GkeHubFeatureMembershipConfigmanagementConfigSyncGit;
  /**
  * oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#oci GkeHubFeatureMembership#oci}
  */
  readonly oci?: GkeHubFeatureMembershipConfigmanagementConfigSyncOci;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prevent_drift: cdktf.booleanToTerraform(struct!.preventDrift),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    git: gkeHubFeatureMembershipConfigmanagementConfigSyncGitToTerraform(struct!.git),
    oci: gkeHubFeatureMembershipConfigmanagementConfigSyncOciToTerraform(struct!.oci),
  }
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preventDrift !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventDrift = this._preventDrift;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._oci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oci = this._oci?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preventDrift = undefined;
      this._sourceFormat = undefined;
      this._git.internalValue = undefined;
      this._oci.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preventDrift = value.preventDrift;
      this._sourceFormat = value.sourceFormat;
      this._git.internalValue = value.git;
      this._oci.internalValue = value.oci;
    }
  }

  // prevent_drift - computed: true, optional: true, required: false
  private _preventDrift?: boolean | cdktf.IResolvable; 
  public get preventDrift() {
    return this.getBooleanAttribute('prevent_drift');
  }
  public set preventDrift(value: boolean | cdktf.IResolvable) {
    this._preventDrift = value;
  }
  public resetPreventDrift() {
    this._preventDrift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDriftInput() {
    return this._preventDrift;
  }

  // source_format - computed: false, optional: true, required: false
  private _sourceFormat?: string; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  public resetSourceFormat() {
    this._sourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // git - computed: false, optional: true, required: false
  private _git = new GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: GkeHubFeatureMembershipConfigmanagementConfigSyncGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // oci - computed: false, optional: true, required: false
  private _oci = new GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference(this, "oci");
  public get oci() {
    return this._oci;
  }
  public putOci(value: GkeHubFeatureMembershipConfigmanagementConfigSyncOci) {
    this._oci.internalValue = value;
  }
  public resetOci() {
    this._oci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociInput() {
    return this._oci.internalValue;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementHierarchyController {
  /**
  * Whether hierarchical resource quota is enabled in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#enable_hierarchical_resource_quota GkeHubFeatureMembership#enable_hierarchical_resource_quota}
  */
  readonly enableHierarchicalResourceQuota?: boolean | cdktf.IResolvable;
  /**
  * Whether pod tree labels are enabled in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#enable_pod_tree_labels GkeHubFeatureMembership#enable_pod_tree_labels}
  */
  readonly enablePodTreeLabels?: boolean | cdktf.IResolvable;
  /**
  * Whether Hierarchy Controller is enabled in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gkeHubFeatureMembershipConfigmanagementHierarchyControllerToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference | GkeHubFeatureMembershipConfigmanagementHierarchyController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_hierarchical_resource_quota: cdktf.booleanToTerraform(struct!.enableHierarchicalResourceQuota),
    enable_pod_tree_labels: cdktf.booleanToTerraform(struct!.enablePodTreeLabels),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementHierarchyController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHierarchicalResourceQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHierarchicalResourceQuota = this._enableHierarchicalResourceQuota;
    }
    if (this._enablePodTreeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePodTreeLabels = this._enablePodTreeLabels;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementHierarchyController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHierarchicalResourceQuota = undefined;
      this._enablePodTreeLabels = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHierarchicalResourceQuota = value.enableHierarchicalResourceQuota;
      this._enablePodTreeLabels = value.enablePodTreeLabels;
      this._enabled = value.enabled;
    }
  }

  // enable_hierarchical_resource_quota - computed: false, optional: true, required: false
  private _enableHierarchicalResourceQuota?: boolean | cdktf.IResolvable; 
  public get enableHierarchicalResourceQuota() {
    return this.getBooleanAttribute('enable_hierarchical_resource_quota');
  }
  public set enableHierarchicalResourceQuota(value: boolean | cdktf.IResolvable) {
    this._enableHierarchicalResourceQuota = value;
  }
  public resetEnableHierarchicalResourceQuota() {
    this._enableHierarchicalResourceQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHierarchicalResourceQuotaInput() {
    return this._enableHierarchicalResourceQuota;
  }

  // enable_pod_tree_labels - computed: false, optional: true, required: false
  private _enablePodTreeLabels?: boolean | cdktf.IResolvable; 
  public get enablePodTreeLabels() {
    return this.getBooleanAttribute('enable_pod_tree_labels');
  }
  public set enablePodTreeLabels(value: boolean | cdktf.IResolvable) {
    this._enablePodTreeLabels = value;
  }
  public resetEnablePodTreeLabels() {
    this._enablePodTreeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodTreeLabelsInput() {
    return this._enablePodTreeLabels;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring {
  /**
  *  Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#backends GkeHubFeatureMembership#backends}
  */
  readonly backends?: string[];
}

export function gkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference | GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backends),
  }
}

export class GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backends = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backends = value.backends;
    }
  }

  // backends - computed: true, optional: true, required: false
  private _backends?: string[]; 
  public get backends() {
    return this.getListAttribute('backends');
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  public resetBackends() {
    this._backends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementPolicyController {
  /**
  * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#audit_interval_seconds GkeHubFeatureMembership#audit_interval_seconds}
  */
  readonly auditIntervalSeconds?: string;
  /**
  * Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#exemptable_namespaces GkeHubFeatureMembership#exemptable_namespaces}
  */
  readonly exemptableNamespaces?: string[];
  /**
  * Logs all denies and dry run failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#log_denies_enabled GkeHubFeatureMembership#log_denies_enabled}
  */
  readonly logDeniesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#mutation_enabled GkeHubFeatureMembership#mutation_enabled}
  */
  readonly mutationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#referential_rules_enabled GkeHubFeatureMembership#referential_rules_enabled}
  */
  readonly referentialRulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Installs the default template library along with Policy Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#template_library_installed GkeHubFeatureMembership#template_library_installed}
  */
  readonly templateLibraryInstalled?: boolean | cdktf.IResolvable;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#monitoring GkeHubFeatureMembership#monitoring}
  */
  readonly monitoring?: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring;
}

export function gkeHubFeatureMembershipConfigmanagementPolicyControllerToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference | GkeHubFeatureMembershipConfigmanagementPolicyController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_interval_seconds: cdktf.stringToTerraform(struct!.auditIntervalSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exemptable_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptableNamespaces),
    log_denies_enabled: cdktf.booleanToTerraform(struct!.logDeniesEnabled),
    mutation_enabled: cdktf.booleanToTerraform(struct!.mutationEnabled),
    referential_rules_enabled: cdktf.booleanToTerraform(struct!.referentialRulesEnabled),
    template_library_installed: cdktf.booleanToTerraform(struct!.templateLibraryInstalled),
    monitoring: gkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringToTerraform(struct!.monitoring),
  }
}

export class GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementPolicyController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditIntervalSeconds = this._auditIntervalSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exemptableNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptableNamespaces = this._exemptableNamespaces;
    }
    if (this._logDeniesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeniesEnabled = this._logDeniesEnabled;
    }
    if (this._mutationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutationEnabled = this._mutationEnabled;
    }
    if (this._referentialRulesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.referentialRulesEnabled = this._referentialRulesEnabled;
    }
    if (this._templateLibraryInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateLibraryInstalled = this._templateLibraryInstalled;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementPolicyController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditIntervalSeconds = undefined;
      this._enabled = undefined;
      this._exemptableNamespaces = undefined;
      this._logDeniesEnabled = undefined;
      this._mutationEnabled = undefined;
      this._referentialRulesEnabled = undefined;
      this._templateLibraryInstalled = undefined;
      this._monitoring.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditIntervalSeconds = value.auditIntervalSeconds;
      this._enabled = value.enabled;
      this._exemptableNamespaces = value.exemptableNamespaces;
      this._logDeniesEnabled = value.logDeniesEnabled;
      this._mutationEnabled = value.mutationEnabled;
      this._referentialRulesEnabled = value.referentialRulesEnabled;
      this._templateLibraryInstalled = value.templateLibraryInstalled;
      this._monitoring.internalValue = value.monitoring;
    }
  }

  // audit_interval_seconds - computed: false, optional: true, required: false
  private _auditIntervalSeconds?: string; 
  public get auditIntervalSeconds() {
    return this.getStringAttribute('audit_interval_seconds');
  }
  public set auditIntervalSeconds(value: string) {
    this._auditIntervalSeconds = value;
  }
  public resetAuditIntervalSeconds() {
    this._auditIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditIntervalSecondsInput() {
    return this._auditIntervalSeconds;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exemptable_namespaces - computed: false, optional: true, required: false
  private _exemptableNamespaces?: string[]; 
  public get exemptableNamespaces() {
    return this.getListAttribute('exemptable_namespaces');
  }
  public set exemptableNamespaces(value: string[]) {
    this._exemptableNamespaces = value;
  }
  public resetExemptableNamespaces() {
    this._exemptableNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptableNamespacesInput() {
    return this._exemptableNamespaces;
  }

  // log_denies_enabled - computed: false, optional: true, required: false
  private _logDeniesEnabled?: boolean | cdktf.IResolvable; 
  public get logDeniesEnabled() {
    return this.getBooleanAttribute('log_denies_enabled');
  }
  public set logDeniesEnabled(value: boolean | cdktf.IResolvable) {
    this._logDeniesEnabled = value;
  }
  public resetLogDeniesEnabled() {
    this._logDeniesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeniesEnabledInput() {
    return this._logDeniesEnabled;
  }

  // mutation_enabled - computed: false, optional: true, required: false
  private _mutationEnabled?: boolean | cdktf.IResolvable; 
  public get mutationEnabled() {
    return this.getBooleanAttribute('mutation_enabled');
  }
  public set mutationEnabled(value: boolean | cdktf.IResolvable) {
    this._mutationEnabled = value;
  }
  public resetMutationEnabled() {
    this._mutationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationEnabledInput() {
    return this._mutationEnabled;
  }

  // referential_rules_enabled - computed: false, optional: true, required: false
  private _referentialRulesEnabled?: boolean | cdktf.IResolvable; 
  public get referentialRulesEnabled() {
    return this.getBooleanAttribute('referential_rules_enabled');
  }
  public set referentialRulesEnabled(value: boolean | cdktf.IResolvable) {
    this._referentialRulesEnabled = value;
  }
  public resetReferentialRulesEnabled() {
    this._referentialRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referentialRulesEnabledInput() {
    return this._referentialRulesEnabled;
  }

  // template_library_installed - computed: false, optional: true, required: false
  private _templateLibraryInstalled?: boolean | cdktf.IResolvable; 
  public get templateLibraryInstalled() {
    return this.getBooleanAttribute('template_library_installed');
  }
  public set templateLibraryInstalled(value: boolean | cdktf.IResolvable) {
    this._templateLibraryInstalled = value;
  }
  public resetTemplateLibraryInstalled() {
    this._templateLibraryInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLibraryInstalledInput() {
    return this._templateLibraryInstalled;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }
}
export interface GkeHubFeatureMembershipConfigmanagement {
  /**
  * Optional. Version of ACM to install. Defaults to the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#version GkeHubFeatureMembership#version}
  */
  readonly version?: string;
  /**
  * binauthz block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#binauthz GkeHubFeatureMembership#binauthz}
  */
  readonly binauthz?: GkeHubFeatureMembershipConfigmanagementBinauthz;
  /**
  * config_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#config_sync GkeHubFeatureMembership#config_sync}
  */
  readonly configSync?: GkeHubFeatureMembershipConfigmanagementConfigSync;
  /**
  * hierarchy_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#hierarchy_controller GkeHubFeatureMembership#hierarchy_controller}
  */
  readonly hierarchyController?: GkeHubFeatureMembershipConfigmanagementHierarchyController;
  /**
  * policy_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#policy_controller GkeHubFeatureMembership#policy_controller}
  */
  readonly policyController?: GkeHubFeatureMembershipConfigmanagementPolicyController;
}

export function gkeHubFeatureMembershipConfigmanagementToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementOutputReference | GkeHubFeatureMembershipConfigmanagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    binauthz: gkeHubFeatureMembershipConfigmanagementBinauthzToTerraform(struct!.binauthz),
    config_sync: gkeHubFeatureMembershipConfigmanagementConfigSyncToTerraform(struct!.configSync),
    hierarchy_controller: gkeHubFeatureMembershipConfigmanagementHierarchyControllerToTerraform(struct!.hierarchyController),
    policy_controller: gkeHubFeatureMembershipConfigmanagementPolicyControllerToTerraform(struct!.policyController),
  }
}

export class GkeHubFeatureMembershipConfigmanagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._binauthz?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binauthz = this._binauthz?.internalValue;
    }
    if (this._configSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSync = this._configSync?.internalValue;
    }
    if (this._hierarchyController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyController = this._hierarchyController?.internalValue;
    }
    if (this._policyController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyController = this._policyController?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
      this._binauthz.internalValue = undefined;
      this._configSync.internalValue = undefined;
      this._hierarchyController.internalValue = undefined;
      this._policyController.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
      this._binauthz.internalValue = value.binauthz;
      this._configSync.internalValue = value.configSync;
      this._hierarchyController.internalValue = value.hierarchyController;
      this._policyController.internalValue = value.policyController;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // binauthz - computed: false, optional: true, required: false
  private _binauthz = new GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference(this, "binauthz");
  public get binauthz() {
    return this._binauthz;
  }
  public putBinauthz(value: GkeHubFeatureMembershipConfigmanagementBinauthz) {
    this._binauthz.internalValue = value;
  }
  public resetBinauthz() {
    this._binauthz.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binauthzInput() {
    return this._binauthz.internalValue;
  }

  // config_sync - computed: false, optional: true, required: false
  private _configSync = new GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference(this, "config_sync");
  public get configSync() {
    return this._configSync;
  }
  public putConfigSync(value: GkeHubFeatureMembershipConfigmanagementConfigSync) {
    this._configSync.internalValue = value;
  }
  public resetConfigSync() {
    this._configSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncInput() {
    return this._configSync.internalValue;
  }

  // hierarchy_controller - computed: false, optional: true, required: false
  private _hierarchyController = new GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference(this, "hierarchy_controller");
  public get hierarchyController() {
    return this._hierarchyController;
  }
  public putHierarchyController(value: GkeHubFeatureMembershipConfigmanagementHierarchyController) {
    this._hierarchyController.internalValue = value;
  }
  public resetHierarchyController() {
    this._hierarchyController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyControllerInput() {
    return this._hierarchyController.internalValue;
  }

  // policy_controller - computed: false, optional: true, required: false
  private _policyController = new GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference(this, "policy_controller");
  public get policyController() {
    return this._policyController;
  }
  public putPolicyController(value: GkeHubFeatureMembershipConfigmanagementPolicyController) {
    this._policyController.internalValue = value;
  }
  public resetPolicyController() {
    this._policyController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyControllerInput() {
    return this._policyController.internalValue;
  }
}
export interface GkeHubFeatureMembershipMesh {
  /**
  * **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#control_plane GkeHubFeatureMembership#control_plane}
  */
  readonly controlPlane?: string;
  /**
  * Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#management GkeHubFeatureMembership#management}
  */
  readonly management?: string;
}

export function gkeHubFeatureMembershipMeshToTerraform(struct?: GkeHubFeatureMembershipMeshOutputReference | GkeHubFeatureMembershipMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: cdktf.stringToTerraform(struct!.controlPlane),
    management: cdktf.stringToTerraform(struct!.management),
  }
}

export class GkeHubFeatureMembershipMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlane = undefined;
      this._management = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlane = value.controlPlane;
      this._management = value.management;
    }
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane?: string; 
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }
  public set controlPlane(value: string) {
    this._controlPlane = value;
  }
  public resetControlPlane() {
    this._controlPlane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane;
  }

  // management - computed: false, optional: true, required: false
  private _management?: string; 
  public get management() {
    return this.getStringAttribute('management');
  }
  public set management(value: string) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }
}
export interface GkeHubFeatureMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}
  */
  readonly update?: string;
}

export function gkeHubFeatureMembershipTimeoutsToTerraform(struct?: GkeHubFeatureMembershipTimeouts | cdktf.IResolvable): any {
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

export class GkeHubFeatureMembershipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeHubFeatureMembershipTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeHubFeatureMembershipTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership google_gke_hub_feature_membership}
*/
export class GkeHubFeatureMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_feature_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeHubFeatureMembership to import
  * @param importFromId The id of the existing GkeHubFeatureMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeHubFeatureMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_feature_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gke_hub_feature_membership google_gke_hub_feature_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubFeatureMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubFeatureMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_feature_membership',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.3.0',
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
    this._feature = config.feature;
    this._id = config.id;
    this._location = config.location;
    this._membership = config.membership;
    this._project = config.project;
    this._configmanagement.internalValue = config.configmanagement;
    this._mesh.internalValue = config.mesh;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
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

  // membership - computed: false, optional: false, required: true
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
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

  // configmanagement - computed: false, optional: true, required: false
  private _configmanagement = new GkeHubFeatureMembershipConfigmanagementOutputReference(this, "configmanagement");
  public get configmanagement() {
    return this._configmanagement;
  }
  public putConfigmanagement(value: GkeHubFeatureMembershipConfigmanagement) {
    this._configmanagement.internalValue = value;
  }
  public resetConfigmanagement() {
    this._configmanagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmanagementInput() {
    return this._configmanagement.internalValue;
  }

  // mesh - computed: false, optional: true, required: false
  private _mesh = new GkeHubFeatureMembershipMeshOutputReference(this, "mesh");
  public get mesh() {
    return this._mesh;
  }
  public putMesh(value: GkeHubFeatureMembershipMesh) {
    this._mesh.internalValue = value;
  }
  public resetMesh() {
    this._mesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeHubFeatureMembershipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeHubFeatureMembershipTimeouts) {
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
      feature: cdktf.stringToTerraform(this._feature),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      membership: cdktf.stringToTerraform(this._membership),
      project: cdktf.stringToTerraform(this._project),
      configmanagement: gkeHubFeatureMembershipConfigmanagementToTerraform(this._configmanagement.internalValue),
      mesh: gkeHubFeatureMembershipMeshToTerraform(this._mesh.internalValue),
      timeouts: gkeHubFeatureMembershipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

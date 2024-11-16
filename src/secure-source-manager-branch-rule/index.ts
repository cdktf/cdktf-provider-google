/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureSourceManagerBranchRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines if allow stale reviews or approvals before merging to the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#allow_stale_reviews SecureSourceManagerBranchRule#allow_stale_reviews}
  */
  readonly allowStaleReviews?: boolean | cdktf.IResolvable;
  /**
  * The ID for the BranchRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#branch_rule_id SecureSourceManagerBranchRule#branch_rule_id}
  */
  readonly branchRuleId: string;
  /**
  * Determines if the branch rule is disabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#disabled SecureSourceManagerBranchRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#include_pattern SecureSourceManagerBranchRule#include_pattern}
  */
  readonly includePattern: string;
  /**
  * The location for the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#location SecureSourceManagerBranchRule#location}
  */
  readonly location: string;
  /**
  * The minimum number of approvals required for the branch rule to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#minimum_approvals_count SecureSourceManagerBranchRule#minimum_approvals_count}
  */
  readonly minimumApprovalsCount?: number;
  /**
  * The minimum number of reviews required for the branch rule to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#minimum_reviews_count SecureSourceManagerBranchRule#minimum_reviews_count}
  */
  readonly minimumReviewsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}
  */
  readonly project?: string;
  /**
  * The ID for the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#repository_id SecureSourceManagerBranchRule#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Determines if require comments resolved before merging to the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#require_comments_resolved SecureSourceManagerBranchRule#require_comments_resolved}
  */
  readonly requireCommentsResolved?: boolean | cdktf.IResolvable;
  /**
  * Determines if require linear history before merging to the branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#require_linear_history SecureSourceManagerBranchRule#require_linear_history}
  */
  readonly requireLinearHistory?: boolean | cdktf.IResolvable;
  /**
  * Determines if the branch rule requires a pull request or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#require_pull_request SecureSourceManagerBranchRule#require_pull_request}
  */
  readonly requirePullRequest?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#timeouts SecureSourceManagerBranchRule#timeouts}
  */
  readonly timeouts?: SecureSourceManagerBranchRuleTimeouts;
}
export interface SecureSourceManagerBranchRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}
  */
  readonly update?: string;
}

export function secureSourceManagerBranchRuleTimeoutsToTerraform(struct?: SecureSourceManagerBranchRuleTimeouts | cdktf.IResolvable): any {
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


export function secureSourceManagerBranchRuleTimeoutsToHclTerraform(struct?: SecureSourceManagerBranchRuleTimeouts | cdktf.IResolvable): any {
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

export class SecureSourceManagerBranchRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureSourceManagerBranchRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecureSourceManagerBranchRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule google_secure_source_manager_branch_rule}
*/
export class SecureSourceManagerBranchRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secure_source_manager_branch_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureSourceManagerBranchRule to import
  * @param importFromId The id of the existing SecureSourceManagerBranchRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureSourceManagerBranchRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_secure_source_manager_branch_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/secure_source_manager_branch_rule google_secure_source_manager_branch_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureSourceManagerBranchRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecureSourceManagerBranchRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secure_source_manager_branch_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.11.2',
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
    this._allowStaleReviews = config.allowStaleReviews;
    this._branchRuleId = config.branchRuleId;
    this._disabled = config.disabled;
    this._id = config.id;
    this._includePattern = config.includePattern;
    this._location = config.location;
    this._minimumApprovalsCount = config.minimumApprovalsCount;
    this._minimumReviewsCount = config.minimumReviewsCount;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._requireCommentsResolved = config.requireCommentsResolved;
    this._requireLinearHistory = config.requireLinearHistory;
    this._requirePullRequest = config.requirePullRequest;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stale_reviews - computed: false, optional: true, required: false
  private _allowStaleReviews?: boolean | cdktf.IResolvable; 
  public get allowStaleReviews() {
    return this.getBooleanAttribute('allow_stale_reviews');
  }
  public set allowStaleReviews(value: boolean | cdktf.IResolvable) {
    this._allowStaleReviews = value;
  }
  public resetAllowStaleReviews() {
    this._allowStaleReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStaleReviewsInput() {
    return this._allowStaleReviews;
  }

  // branch_rule_id - computed: false, optional: false, required: true
  private _branchRuleId?: string; 
  public get branchRuleId() {
    return this.getStringAttribute('branch_rule_id');
  }
  public set branchRuleId(value: string) {
    this._branchRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchRuleIdInput() {
    return this._branchRuleId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // include_pattern - computed: false, optional: false, required: true
  private _includePattern?: string; 
  public get includePattern() {
    return this.getStringAttribute('include_pattern');
  }
  public set includePattern(value: string) {
    this._includePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternInput() {
    return this._includePattern;
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

  // minimum_approvals_count - computed: false, optional: true, required: false
  private _minimumApprovalsCount?: number; 
  public get minimumApprovalsCount() {
    return this.getNumberAttribute('minimum_approvals_count');
  }
  public set minimumApprovalsCount(value: number) {
    this._minimumApprovalsCount = value;
  }
  public resetMinimumApprovalsCount() {
    this._minimumApprovalsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumApprovalsCountInput() {
    return this._minimumApprovalsCount;
  }

  // minimum_reviews_count - computed: false, optional: true, required: false
  private _minimumReviewsCount?: number; 
  public get minimumReviewsCount() {
    return this.getNumberAttribute('minimum_reviews_count');
  }
  public set minimumReviewsCount(value: number) {
    this._minimumReviewsCount = value;
  }
  public resetMinimumReviewsCount() {
    this._minimumReviewsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumReviewsCountInput() {
    return this._minimumReviewsCount;
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

  // require_comments_resolved - computed: false, optional: true, required: false
  private _requireCommentsResolved?: boolean | cdktf.IResolvable; 
  public get requireCommentsResolved() {
    return this.getBooleanAttribute('require_comments_resolved');
  }
  public set requireCommentsResolved(value: boolean | cdktf.IResolvable) {
    this._requireCommentsResolved = value;
  }
  public resetRequireCommentsResolved() {
    this._requireCommentsResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCommentsResolvedInput() {
    return this._requireCommentsResolved;
  }

  // require_linear_history - computed: false, optional: true, required: false
  private _requireLinearHistory?: boolean | cdktf.IResolvable; 
  public get requireLinearHistory() {
    return this.getBooleanAttribute('require_linear_history');
  }
  public set requireLinearHistory(value: boolean | cdktf.IResolvable) {
    this._requireLinearHistory = value;
  }
  public resetRequireLinearHistory() {
    this._requireLinearHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLinearHistoryInput() {
    return this._requireLinearHistory;
  }

  // require_pull_request - computed: false, optional: true, required: false
  private _requirePullRequest?: boolean | cdktf.IResolvable; 
  public get requirePullRequest() {
    return this.getBooleanAttribute('require_pull_request');
  }
  public set requirePullRequest(value: boolean | cdktf.IResolvable) {
    this._requirePullRequest = value;
  }
  public resetRequirePullRequest() {
    this._requirePullRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePullRequestInput() {
    return this._requirePullRequest;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureSourceManagerBranchRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureSourceManagerBranchRuleTimeouts) {
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
      allow_stale_reviews: cdktf.booleanToTerraform(this._allowStaleReviews),
      branch_rule_id: cdktf.stringToTerraform(this._branchRuleId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      include_pattern: cdktf.stringToTerraform(this._includePattern),
      location: cdktf.stringToTerraform(this._location),
      minimum_approvals_count: cdktf.numberToTerraform(this._minimumApprovalsCount),
      minimum_reviews_count: cdktf.numberToTerraform(this._minimumReviewsCount),
      project: cdktf.stringToTerraform(this._project),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      require_comments_resolved: cdktf.booleanToTerraform(this._requireCommentsResolved),
      require_linear_history: cdktf.booleanToTerraform(this._requireLinearHistory),
      require_pull_request: cdktf.booleanToTerraform(this._requirePullRequest),
      timeouts: secureSourceManagerBranchRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_stale_reviews: {
        value: cdktf.booleanToHclTerraform(this._allowStaleReviews),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      branch_rule_id: {
        value: cdktf.stringToHclTerraform(this._branchRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      include_pattern: {
        value: cdktf.stringToHclTerraform(this._includePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_approvals_count: {
        value: cdktf.numberToHclTerraform(this._minimumApprovalsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_reviews_count: {
        value: cdktf.numberToHclTerraform(this._minimumReviewsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      require_comments_resolved: {
        value: cdktf.booleanToHclTerraform(this._requireCommentsResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_linear_history: {
        value: cdktf.booleanToHclTerraform(this._requireLinearHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_pull_request: {
        value: cdktf.booleanToHclTerraform(this._requirePullRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: secureSourceManagerBranchRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureSourceManagerBranchRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
